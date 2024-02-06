document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('galleryContainer');
    const imagePopup = document.createElement('div');
    imagePopup.classList.add('image-popup');
    document.body.appendChild(imagePopup);

    galleryContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('gallery-item')) {
            const imageUrl = event.target.querySelector('img').src;
            const imageTitle = event.target.getAttribute('data-title');
            const imageDescription = event.target.getAttribute('data-description');

            showImagePopup(imageUrl, imageTitle, imageDescription);
        }
    });

    imagePopup.addEventListener('click', function () {
        hideImagePopup();
    });
});

function showImagePopup(url, title, description) {
    const imagePopup = document.querySelector('.image-popup');
    imagePopup.innerHTML = `
        <div class="popup-content">
            <img src="${url}" alt="${title}" class="popup-image">
            <div class="popup-details">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </div>
    `;
    imagePopup.style.display = 'flex';
}

function hideImagePopup() {
    const imagePopup = document.querySelector('.image-popup');
    imagePopup.style.display = 'none';
}


