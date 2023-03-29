const images = () => {
    const imgPopup = document.createElement('div'),
          parentArea = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    parentArea.appendChild(imgPopup);

    imgPopup.appendChild(bigImg);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    parentArea.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            bigImg.style.width = '50%';
        }

        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none'
            document.body.style.overflow = '';
        }
    });
}

export default images;