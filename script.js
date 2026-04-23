document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');
            } else {
                img.classList.remove('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex == 0) {
            currentIndex = images.length - 1;
        } else {
            currentIndex = currentIndex - 1;
        }
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex == images.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex = currentIndex + 1;
        }
        showImage(currentIndex);
    });
});
