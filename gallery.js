
const gallery = document.querySelector('.about__image');

if (gallery) {
    const images = gallery.querySelectorAll('img');
    let currentIndex = 0;

    if (images.length > 1) {
        images[0].classList.add('is-active');

        setInterval(() => {
            images[currentIndex].classList.remove('is-active');

            currentIndex = (currentIndex + 1) % images.length;

            images[currentIndex].classList.add('is-active');
        }, 4000);
    }
}
