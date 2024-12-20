document.addEventListener('DOMContentLoaded', () => {
    // Cours utilises: LesModules, inscription.js, donut.js ou le SortByCovid.js.
    const previousBtnElement = document.querySelector('#previous-btn')
    const nextBtnElement = document.querySelector('#next-btn')
    const questionPage = document.querySelectorAll('.nav-link')
    const selectAllRadioBtn = document.querySelectorAll('input[type=radio]');
    let progressBarValue = 0
    let page = 0
 
        //declaration des buttons comme dissabled pour le debut de formulaire 
    previousBtnElement.disabled = true
    nextBtnElement.disabled = true

        // button radio if checked then true
        selectAllRadioBtn.forEach(radioBtnElement => {
            radioBtnElement.addEventListener('click', () => {
                nextBtnElement.removeAttribute('disabled');
                radioBtnElement.setAttribute('checked', 'true');
            });
        });
        // button radio if checked then true

        // previous btn event happens start
        previousBtnElement.addEventListener('click', () => {
            if (page > 0) {
                page--;
                progressBarValue -= 10;
                updateProgressBar(progressBarValue);
                switchPage(questionPage, page);
    
                nextBtnElement.disabled = false;
                if (page === 0) {
                    previousBtnElement.disabled = true;
                }
            }
        });
        // previous btn event happens end
    
        // next btn event happens start
        nextBtnElement.addEventListener('click', () => {
            if (page < questionPage.length - 1) {
                page++;
                progressBarValue += 10;
                updateProgressBar(progressBarValue);
                switchPage(questionPage, page);
    
                previousBtnElement.disabled = false;
                nextBtnElement.disabled = true;
    
                if (page === questionPage.length - 1) {
                    calculateResults();
                    renderResultsChart();
                    hideBtns();
                }
            }
        });                                                                                                                                                                                                                                                                                  
        // next btn event happens end

       



// !!DECLARE CONSTANTS FOR FURTHER USE!!
    // update the progress bar forEach question start
    const updateProgressBar = (value) => {
        const progressElement = document.querySelector('#progress')
        const progressBarElement = progressElement.querySelector('.progress-bar')

        progressElement.setAttribute('aria-valuenow', value)
        progressBarElement.style.width = `${value}%`
        progressBarElement.innerHTML = `${value}%`
    }
    // updater le progress bar pour chaque question end

    //  navigation in the form start
    const switchPage = (tabs, index) => {
        tabs.forEach((tab, i) => {
            tab.setAttribute('disabled', 'true');
            if (i === index) {
                tab.removeAttribute('disabled');
                tab.click();
            }
        });
    };
    //  navigation in the form end

    // hide buttons start
    const hideBtns = () => {
        previousBtnElement.style.display = 'none';
        nextBtnElement.style.display = 'none';
    };
    // hide buttons end

    // calculate correct answers start
    const calculateResults = () => {
        let correctAnswers = 0;
        const correctRadios = document.querySelectorAll('input[type=radio][value="correct"]');

        correctRadios.forEach(radio => {
            if (radio.checked) {
                correctAnswers++;
            }
        });
    

        return {
            correct: correctAnswers,
            incorrect: questionPage.length - 1 - correctAnswers
        };
    };
    // calculate correct answers end

    // donut start
    const renderResultsChart = () => {
        const results = calculateResults();

        new Chart(document.getElementById('my-chart'), {
            type: 'doughnut',
            data: {
                labels: ['Correct', 'Incorrect'],
                datasets: [{
                    data: [results.correct, results.incorrect],
                    backgroundColor: ['cyan', 'pink'],
                    hoverOffset: 4,
                    borderWidth: 1
                }]
            }
        });
    };
    // donut end

// END
})