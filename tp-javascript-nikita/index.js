document.addEventListener('DOMContentLoaded', () => {
    const previousBtnElement = document.querySelector('#previous-btn')
    const nextBtnElement = document.querySelector('#next-btn')
    const questionPage = document.querySelectorAll('.nav-link')
    const selectAllRadioBtn = document.querySelectorAll('input[type=radio]');
    let progressBarValue = 0
    let correctResponse = 0
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
            if (nextBtnElement.hasAttribute('disabled')) {
                nextBtnElement.removeAttribute('disabled');
            }
    
            if (page !== 0) {
                progressBarValue -= 10;
                previousPage(questionPage, page, progressBarValue);
                page--;
            }
    
            if (page === 0) {
                previousBtnElement.setAttribute('disabled', 'true');
            }
        });
        // previous btn event happens end
    
        // next btn event happens start
        nextBtnElement.addEventListener('click', () => {
            if (previousBtnElement.hasAttribute('disabled')) {
                previousBtnElement.removeAttribute('disabled');
            }
    
            if (page < 10) {
                progressBarValue += 10;
                nextPage(questionPage, page, progressBarValue);
                page++;
            }

        });                                                                                                                                                                                                                                                                                    
        // next btn event happens end

        // Grade numbering function start
        const radioBtnCorrectElement = document.querySelectorAll(
            'input[type=radio][value="correct"].checked'
        )
        
        radioBtnCorrectElement.forEach( x => {
            correctResponse++ 
        })
        const radioBtnIncorrectElement = 10 - radioBtnCorrectElement
        // Grade numbering function end

       








        
// DECLARE CONSTANTS FOR FURTHER USE
    // updater le progress bar pour chaque question start
    const updateProgressBar = (value) => {
        const progressElement = document.querySelector('#progress')
        const progressBarElement = progressElement.querySelector('.progress-bar')

        progressElement.setAttribute('aria-valuenow', value)
        progressBarElement.style.width = `${value}%`
        progressBarElement.innerHTML = `${value}%`
    }
    // updater le progress bar pour chaque question end

    // simulate the functionality of the previous button -> previous page start
    const previousPage = (questionPage, page) => {
        const previousTab = questionPage[page - 1]
        previousTab.removeAttribute('disabled')
        previousTab.click()

        questionPage[page].setAttribute('disabled', 'true')
    }
    // simulate the functionality of the previous button -> previous page end

    // simulate the functionality of the next button -> next page start
    const nextPage = (questionPage, page) => {
        const nextTab = questionPage[page + 1]
        nextTab.removeAttribute('disabled')
        nextTab.click()
        nextBtnElement.disabled = true


        questionPage[page].setAttribute('disabled', 'true')
    }
    // simulate the functionality of the next button -> next page end
// END
})