const successStoriesFn = () => {
    const imagesContainer = document.querySelector('.cmp-success-stories-banner-wrapper__images');
    
    if (!imagesContainer) {
        return;
    }

    const images = imagesContainer.querySelectorAll('img');
    if (images.length === 0) {
        return;
    }

    const delays = [3000, 2000, 700];

    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(images).indexOf(entry.target);
                if (index !== -1) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delays[index]);
                }
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
    });

    images.forEach(image => {
        observer.observe(image);
    });
};
export default successStoriesFn;
