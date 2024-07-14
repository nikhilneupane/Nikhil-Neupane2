document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const galleryModal = document.createElement('div');
    galleryModal.classList.add('gallery-modal');
    document.body.appendChild(galleryModal);
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            galleryModal.innerHTML = `
                <div class="gallery-modal-content">
                    <span class="gallery-modal-close">&times;</span>
                    <img src="${this.src}" alt="${this.alt}">
                </div>
            `;
            galleryModal.style.display = 'block';
            
            const closeModal = galleryModal.querySelector('.gallery-modal-close');
            closeModal.addEventListener('click', function() {
                galleryModal.style.display = 'none';
            });
        });
    });
    
    galleryModal.addEventListener('click', function(event) {
        if (event.target === this) {
            galleryModal.style.display = 'none';
        }
    });
});
