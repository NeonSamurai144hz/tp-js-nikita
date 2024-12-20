document.addEventListener('DOMContentLoaded', () => {
    const previousBtnElement = document.querySelector('#previous-btn')
    const nextBtnElement = document.querySelector('#next-btn')
    const questionPage = document.querySelectorAll('.nav-link')
    let correctResponse = 0
    let page = 0

        //declaration des buttons comme dissabled pour le debut de formulaire 
    previousBtnElement.disabled = true
    nextBtnElement.disabled = true

        // previous btn event happens start
        previousBtnElement.addEventListener('click', () => {
            if (page !== 0) {
                previousPage(questionPage, page)
                page--
            } else {
                previousBtnElement.disabled = true
            }
        })
        // previous btn event happens end
    
        // next btn event happens start
        nextBtnElement.addEventListener('click', () => {
            if (page !== 10) {
                nextPage(questionPage, page)
                page++
            }
            console.log(correctResponse);
        })                                                                                                                                                                                                                                                                                       
        // next btn event happens end

        // Grade numbering function start
        const radioBtnCorrectElement = document.querySelectorAll(
            'input[type=radio][value="correct"][checked]'
        )
        radioBtnCorrectElement.forEach( x => {
            correctResponse++ 
        })
        // Grade numbering function end

        //activate the next button after a radio click
        const questionSelectRadioBtnElements = document.querySelectorAll(
            'input[type=radio]'
        )
        questionSelectRadioBtnElements.forEach(questionSelectRadioBtnElements => {
            questionSelectRadioBtnElements.addEventListener('click', () => {
                nextBtnElement.disabled = false
            })
        })
        //activate the next button after a radio click end









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