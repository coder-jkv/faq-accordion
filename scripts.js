console.log('---accordionHandler---');

const accordionHandler = () => {
    const accordionItems = document.querySelectorAll('.accordion-wrapper .accordion-item');

    accordionItems.forEach (item => {
        const accButton = item.querySelector('span');
        accButton.addEventListener('click', () => {
            if (accButton && accButton.dataset.isOpen === "false") {
                item.querySelector('img').src = './images/icon-minus.svg';
                item.querySelector('img').alt = 'minus';
                item.querySelector('.answer').classList.toggle('open');
                accButton.dataset.isOpen = "true";

            } else {
                item.querySelector('img').src = './images/icon-plus.svg';
                item.querySelector('img').alt = 'plus';
                item.querySelector('.answer').classList.toggle('open');
                accButton.dataset.isOpen = "false";
            }
        })
    })

}

document.addEventListener('DOMContentLoaded', accordionHandler);