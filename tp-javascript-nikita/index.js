document.addEventListener('DOMContentLoaded', () => {
    const previousBtnElement = document.querySelector('#previous-btn')
    const nextBtnElement = document.querySelector('#next-btn')

    previousBtnElement.disabled = true 
    const questionSelectRadioBtnElements = document.querySelectorAll(
        'input[type=radio][name="question"]'
    )

    questionSelectRadioBtnElements.forEach(questionSelectRadioBtnElements => {
        questionSelectRadioBtnElements.addEventListener('click', (event) => {
            
           
        })
    })





    const updateProgressBar = (value) => {
        const progressElement = document.querySelector('#progress')
        const progressBarElement = progressElement.querySelector('.progress-bar')

        progressElement.setAttribute('aria-valuenow', value)
        progressBarElement.style.width = `${value}%`
        progressBarElement.innerHTML = `${value}%`
    }

})