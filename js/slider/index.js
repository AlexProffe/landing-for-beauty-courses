const headerSlider = new AlexSlider('#about-slider', {
    slideIndex: 1,
    wrap: '.slider-wrapper',
    items:'.slider-item',
    autoScroll: true,
    timeout: 10000,
    arrowLeft: '.arrow-left',
    arrowRight: '.arrow-right',
});

window.headerSlider = headerSlider;