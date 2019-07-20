let slideIndex = 0;
const dots = document.querySelector('.slideshow-container .dots');
const bannerContainer = document.querySelector('.banner.container');
const buttonWrapper = document.querySelector('.main-slider.container');
bannerContainer.children[0].style.display = 'flex';
const slideshowContainer = document.querySelector('.slideshow-container');
const carouselWithCloses = document.querySelector('.carousel');
const slides = document.querySelectorAll(".slideshow-container .slide");


let timerForChangingSlides = null;

const showSlides =(n) => {
    let dots = document.querySelector('.slideshow-container .dots').children;

    if (n != undefined) {
        clearInterval(timerForChangingSlides);
        startTimer();
        let i;

        if (n > slides.length+1) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            if (dots[i].classList.contains('active')) dots[i].classList.remove('active');
        }

        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].classList.add('active');
    } else {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            if (dots[i].classList.contains('active')) dots[i].classList.remove('active');
        }

        slideIndex++;

        if (slideIndex >= slides.length+1) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].classList.add('active');
    }
};
const currentSlide = (n) => {
    showSlides(slideIndex = n);
};
const startTimer = () => {
    timerForChangingSlides = window.setInterval(showSlides, 10000);
};

const swipe = (container, handleswipeR, handleswipeL) => {
    let startX,
        startY,
        dist,
        threshold = 50,
        allowedTime = 300,
        elapsedTime,
        startTime;


    container.addEventListener('touchstart', function (e) {
        let touchobj = e.changedTouches[0];
        dist = 0;
        startX = touchobj.pageX;
        startY = touchobj.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    });

    container.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });

    container.addEventListener('touchend', function (e) {
        let touchobj = e.changedTouches[0];
        dist = touchobj.pageX - startX;
        elapsedTime = new Date().getTime() - startTime;
        let swiperightBolR = elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100;
        let swiperightBolL = elapsedTime <= allowedTime && dist <= -50 && Math.abs(touchobj.pageY - startY) <= 100;
        handleswipeR(swiperightBolR);
        handleswipeL(swiperightBolL);
        e.preventDefault();
    });
};

showSlides();
startTimer();

dots.addEventListener('click', e => {
    if(e.target.classList.contains('active')) return;
    let number = e.target.classList[e.target.classList.length - 1];

    switch (number) {
        case 'first-slide':
            number = 1;
            break;

        case 'second-slide':
            number = 2;
            break;

        case 'third-slide':
            number = 3;
            break;

        case 'fourth-slide':
            number = 4;
            break;

        case 'fifth-slide':
            number = 5;
            break;
    }

    currentSlide(number);
});


if (document.documentElement.clientWidth < 1600 && document.documentElement.clientWidth > 767) {

    const rigthMainSlider = (isrightswipe) => {
        if (isrightswipe) {
            showSlides(slideIndex += 1);
        }
    };

    const leftMainSlider = (isrightswipe) => {
        if (isrightswipe) {
            showSlides(slideIndex -= 1);
        }
    };

    swipe(slideshowContainer, rigthMainSlider, leftMainSlider);

    buttonWrapper.addEventListener('click', (e)=>{
        if(e.target.classList.contains('btn-left')) {
            let left = parseInt(window.getComputedStyle(carouselWithCloses, null).getPropertyValue("left"));
            if (left < 592) {
                left += 173;
                carouselWithCloses.style.left = left + 'px';
            }
        }
        else if (e.target.classList.contains('btn-right')) {
            let left = parseInt(window.getComputedStyle(carouselWithCloses, null).getPropertyValue("left"));
            if (left > -273) {
                left -= 173;
                carouselWithCloses.style.left = left + 'px';
            }
        }
    });
}

if (document.documentElement.clientWidth < 768) {

    const instaCarousel = document.querySelector('.wrapper-all__carousel');
    const quemUsaInstaCarousel = document.querySelector('.quem-usa .wrapper-all .wrapper-all__carousel');


    const rightClothes =(isrightswipe) =>{
        if (isrightswipe) {
            let left = parseInt(window.getComputedStyle(carouselWithCloses, null).getPropertyValue("left"));
            if (left < 592) {
                left += 173;
                carouselWithCloses.style.left = left + 'px';
            }
        }
    };
    const leftClothes =(isrightswipe)=> {
        if (isrightswipe) {
            let left = parseInt(window.getComputedStyle(carouselWithCloses, null).getPropertyValue("left"));
            if (left > -273) {
                left -= 173;
                carouselWithCloses.style.left = left + 'px';
            }
        }
    };
    const rightInsta =(isrightswipe) =>{
        if (isrightswipe) {
            let trans = getComputedStyle(instaCarousel, null).getPropertyValue("transform");
            trans=parseInt(trans.split(',')[4])+155;
            if (trans <= 310)
                instaCarousel.style.transform =`matrix(1, 0, 0, 1, ${trans}, 0)`;
        }
    };
    const leftInsta  =(isrightswipe)=> {
        if (isrightswipe) {
            let trans = getComputedStyle(instaCarousel, null).getPropertyValue("transform");
            trans=parseInt(trans.split(',')[4])-155;
            if (trans >= -310)
                instaCarousel.style.transform =`matrix(1, 0, 0, 1, ${trans}, 0)`;
        }
    };
    const rightQuemInsta =(isrightswipe) =>{
        if (isrightswipe) {
            let quemUsaTrans = getComputedStyle(quemUsaInstaCarousel, null).getPropertyValue("transform");
            quemUsaTrans = parseInt(quemUsaTrans.split(',')[4]) + 185;
            if (quemUsaTrans <= 300)
                quemUsaInstaCarousel.style.transform = `matrix(1, 0, 0, 1, ${quemUsaTrans}, 0)`;

        }
    };
    const leftQuemInsta  =(isrightswipe)=> {
        if (isrightswipe) {
            let quemUsaTrans = getComputedStyle(quemUsaInstaCarousel, null).getPropertyValue("transform");
            quemUsaTrans = parseInt(quemUsaTrans.split(',')[4]) - 185;
            if (quemUsaTrans >= -255)
                quemUsaInstaCarousel.style.transform = `matrix(1, 0, 0, 1, ${quemUsaTrans}, 0)`;
        }
    };

    swipe(carouselWithCloses, rightClothes,leftClothes);
    swipe(instaCarousel, rightInsta,leftInsta);
    swipe(quemUsaInstaCarousel, rightQuemInsta,leftQuemInsta);
}

