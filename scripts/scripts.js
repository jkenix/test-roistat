// Ждем, пока весь контент документа будет загружен
document.addEventListener("DOMContentLoaded", () => {
  // Sliders
  var HeaderItemsList = new Swiper(".header__content", {
    slidesPerView: "auto",
    spaceBetween: 36,
    speed: 3000,
    loop: true,
    keyboard: false,
    allowTouchMove: false,

    centeredSlides: true,
    slidesPerGroup: 1,
    loopAdditionalSlides: 0,
    initialSlide: 4,

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: false,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },

    breakpoints: {
      991.98: {
        slidesPerView: 5.9,
      },
    },
  });

  // Обеспечиваем переход к первому слайду
  HeaderItemsList.slideTo(3, 0);

  // Включаем доступность
  const toolsList = document.querySelector(".header__tools-list");
  if (toolsList) {
    toolsList.setAttribute("aria-live", "polite");
  }
});
