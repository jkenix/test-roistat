// Ждем, пока весь контент документа будет загружен
document.addEventListener("DOMContentLoaded", () => {
  // Slider Header
  var HeaderItemsList = new Swiper(".header__content", {
    slidesPerView: "auto",
    spaceBetween: 36,
    speed: 5000,
    loop: true,
    keyboard: false,
    allowTouchMove: false,
    navigation: false,

    centeredSlides: true,
    slidesPerGroup: 1,
    loopAdditionalSlides: 0,
    initialSlide: 0,

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: false,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },

    breakpoints: {
      575.98: {
        slidesPerView: 4.9,
        initialSlide: 2,
      },

      991.98: {
        slidesPerView: "auto",
        initialSlide: 1,
      },
    },

    // Добавляем обработчик события slideChange
    on: {
      slideChange: function () {
        // Убираем aria-label со всех слайдов (Чтобы диктор не озвучивал номер слайда)
        const slides = this.slides; // Получаем все слайды
        slides.forEach((slide) => {
          slide.removeAttribute("aria-label"); // Удаляем атрибут aria-label
        });
      },
    },
  });

  HeaderItemsList.init();

  const toolsList = document.querySelector(".header__tools-list");
  if (toolsList) {
    // Включаем доступность
    toolsList.setAttribute("aria-live", "polite");
    // Проверка и установка transition-duration
    const style = toolsList.getAttribute("style");
    if (style && style.includes("transition-duration: 0ms")) {
      HeaderItemsList.update(); // Инициализировать слайдер в случае застоя
    }
  }

  // Slider Services
  var Services = new Swiper(".services__content", {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: false,
    keyboard: true,
    allowTouchMove: true,
    navigation: false,

    centeredSlides: false,
    slidesPerGroup: 1,
    loopAdditionalSlides: 0,
    initialSlide: 0,

    breakpoints: {
      575.98: {
        spaceBetween: 15,
        centeredSlides: true,
      },

      991.98: {
        slidesPerView: 2.2,
        spaceBetween: 31,
        centeredSlides: true,
        grabCursor: true,
      },
    },
  });

  Services.init();

  // Slider Create
  var Create = new Swiper(".create__content", {
    slidesPerView: "auto",
    spaceBetween: 40,
    speed: 5000,
    loop: true,
    keyboard: false,
    allowTouchMove: false,
    navigation: false,

    centeredSlides: true,
    slidesPerGroup: 1,
    loopAdditionalSlides: 0,
    initialSlide: 0,

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: false,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },

    breakpoints: {
      991.98: {
        initialSlide: 1,
      },
    },

    // Добавляем обработчик события slideChange
    on: {
      slideChange: function () {
        // Убираем aria-label со всех слайдов (Чтобы диктор не озвучивал номер слайда)
        const slides = this.slides; // Получаем все слайды
        slides.forEach((slide) => {
          slide.removeAttribute("aria-label"); // Удаляем атрибут aria-label
        });
      },
    },
  });

  Create.init();

  const CreateList = document.querySelector(".create__list");
  if (CreateList) {
    // Проверка и установка transition-duration
    const style = CreateList.getAttribute("style");
    if (style && style.includes("transition-duration: 0ms")) {
      Create.update(); // Инициализировать слайдер в случае застоя
    }
  }
});
