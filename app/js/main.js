$(function () {

  $(window).on('scroll', function () {
    $('.header').toggleClass('header--scrolled', $(window).scrollTop() > 0);
  });

  $(window).on("load", function () {
    if ($(window).width() < 769) {
      new Swiper(".pastries__swiper", {
        initialSlide: 2,
        pagination: {
          el: ".pastries__pagination",
          clickable: true,
          bulletElement: 'button',
        },
        navigation: {
          prevEl: ".pastries__arrows--prev",
          nextEl: ".pastries__arrows--next",
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        mousewheel: {
          invert: true,
        },
      });
    } else {
      new Swiper(".pastries__swiper", {
        direction: "vertical",
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 2,
        pagination: {
          el: ".pastries__pagination",
          clickable: true,
          bulletElement: 'button',
        },
        navigation: {
          prevEl: ".pastries__arrows--prev",
          nextEl: ".pastries__arrows--next",
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        mousewheel: {
          invert: true,
        },
      });
    }
  });


  let swiper2 = null;
  $(window).on("load resize", function () {
    if ($(window).width() > 1200) {

      swiper2 = new Swiper(".drinks__content", {
        slidesPerView: 5,
        centeredSlides: true,
        initialSlide: 2,
        spaceBetween: 30,
        pagination: {
          el: ".drinks__pagination",
          clickable: true,
          bulletElement: 'button',
        },
        navigation: {
          prevEl: ".drinks__arrows--prev",
          nextEl: ".drinks__arrows--next",
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        mousewheel: {
          invert: true,
        },
      });

      function setSlideWidths() {
        const slides = swiper2.slides;
        const activeIndex = swiper2.activeIndex;

        slides.forEach((slide, index) => {
          if (index === activeIndex) {
            slide.style.width = "320px";
            slide.style.maxWidth = "320px";
          } else if (index === activeIndex - 1 || index === activeIndex + 1) {
            slide.style.width = "100%";
            slide.style.maxWidth = "160px";
          } else {
            slide.style.width = "100%";
            slide.style.maxWidth = "130px";
          }
        });
      }

      setSlideWidths();
      swiper2.on("slideChange", () => {
        setSlideWidths();
      });

    } else {

      swiper2.destroy();
      swiper2 = null;
      $('.drinks__content').removeClass("swiper");
      $('.drinks__list').removeClass("swiper-wrapper");
      $('.drinks__item').removeClass("swiper-slide");
    }
  })
});

const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu__list');
const body = document.querySelector('.body');

burger.addEventListener('click', function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("menu__list--active");
  body.classList.toggle("lock");
});


// var swiper2 = new Swiper('.drinks__content', {
//   slidesPerView: 5,
//   centeredSlides: true,
//   initialSlide: 2,
//   spaceBetween: 30,
//   speed: 1000,

//   pagination: {
//     el: '.drinks__pagination',
//     clickable: true,
//     bulletElement: 'button',
//   },
//   navigation: {
//     prevEl: '.drinks__arrows--prev',
//     nextEl: '.drinks__arrows--next',
//   },
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   mousewheel: {
//     invert: true,
//   },
//   // breakpoints: {
//   //   1200: {

//   //   },
//   //   992: {
//   //     slidesPerView: 5,
//   //     spaceBetween: 15,
//   //   },
//   //   768: {
//   //     slidesPerView: 4,
//   //   },
//   //   576: {
//   //     slidesPerView: 3,
//   //   },
//   //   300: {
//   //     slidesPerView: 2,
//   //     spaceBetween: 5,
//   //     slidesPerGroup: 2,
//   //     loop: false,
//   //   }
//   // }
// });
;

