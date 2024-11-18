(function ($) {
  "use strict";

  // Scroll To Explore Div
  if ($('.scroll-to-explore').length) {
    $(".scroll-to-explore").on('click', function () {
      var target = $(this).attr('data-target');
      // animate
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1500);

    });
  }

  function BannerSwiperOneInit() {
    if ($(".banner-slider-one")) {
      $(".banner-slider-one").each(function () {
        var $this = $(this);
        var $pagination = $this.find('.swiper-pagination')[0];
        var $next = $this.find('.swiper-button-next')[0];
        var $prev = $this.find('.swiper-button-prev')[0];
        new Swiper( $this[0], {
          slidesPerView: 1,
          loop: true,
          effect: "fade",
          spaceBetween: 24,
          slideToClickedSlide: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          speed: 800,
          pagination: {
            el: $pagination,
            clickable: true,
            type: 'bullets',
          },
          navigation: {
            nextEl: $next,
            prevEl: $prev,
          },
        });
      });
    }
  }

  function ServiceSwiperOneInit() {
    if ($(".service-carousel-one")) {
      $(".service-carousel-one").each(function() {
        var $this = $(this);
        new Swiper( $this[0], {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 0,
          autoplay: {
            delay: 9000,
            disableOnInteraction: false,
          },
          speed: 2000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            375: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            575: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 1
            },
            992: {
              spaceBetween: 30,
              slidesPerView: 2
            },
            1200: {
              spaceBetween: 30,
              slidesPerView: 2.62222222
            }
          },
        });
      });
    }
  }

  function ServiceSwiperTwoInit() {
    if ($(".service-carousel-two")) {
      $(".service-carousel-two").each(function() {
        var $this = $(this);
        new Swiper( $this[0], {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 0,
          autoplay: {
            delay: 9000,
            disableOnInteraction: false,
          },
          speed: 2000,
          pagination: {
            el: ".swiper-dot-style",
            clickable: true,
            type: 'bullets',
          },
          breakpoints: {
            0: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            375: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            575: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 2
            },
            992: {
              spaceBetween: 30,
              slidesPerView: 3
            },
            1200: {
              spaceBetween: 30,
              slidesPerView: 3.93
            }
          },
        });
      });
    }
  }

  function PortfolioSwiperOneInit() {
    if ($(".portfolio-carousel-one")) {
      $(".portfolio-carousel-one").each(function() {
        var $this = $(this);
        new Swiper( $this[0], {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 0,
          autoplay: {
            delay: 9000,
            disableOnInteraction: false,
          },
          speed: 2000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            375: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            575: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 1
            },
            992: {
              spaceBetween: 30,
              slidesPerView: 3
            },
            1200: {
              spaceBetween: 30,
              slidesPerView: 3.93
            }
          },
        });
      });
    }
  }

  function TestimonialSwiperOneInit() {
    if ($(".testimonial-carousel-one")) {
      $(".testimonial-carousel-one").each(function() {
        var $this = $(this);
        new Swiper( $this[0], {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 0,
          autoplay: {
            delay: 9000,
            disableOnInteraction: false,
          },
          speed: 2000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            375: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            575: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 1
            },
            992: {
              spaceBetween: 30,
              slidesPerView: 2
            },
            1200: {
              spaceBetween: 30,
              slidesPerView: 1.657777777
            }
          },
        });
      });
    }
  }

  function TestimonialSwiperTwoInit() {
    if ($(".testimonial-carousel-two")) {
      $(".testimonial-carousel-two").each(function() {
        var $this = $(this);
        new Swiper( $this[0], {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 0,
          autoplay: {
            delay: 9000,
            disableOnInteraction: false,
          },
          speed: 2000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            375: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            575: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 1
            },
            992: {
              spaceBetween: 30,
              slidesPerView: 2
            },
            1200: {
              spaceBetween: 30,
              slidesPerView: 2.7777777
            }
          },
        });
      });
    }
  }

  function TestimonialSwiperThreeInit() {
    if ($(".testimonial-carousel-three")) {
      $(".testimonial-carousel-three").each(function() {
        var $this = $(this);
        new Swiper( $this[0], {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 0,
          autoplay: {
            delay: 9000,
            disableOnInteraction: false,
          },
          speed: 2000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            375: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            575: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 1
            },
            992: {
              spaceBetween: 30,
              slidesPerView: 1
            },
            1200: {
              spaceBetween: 30,
              slidesPerView: 1
            }
          },
        });
      });
    }
  }

  function TeamCarouselSwiperInit() {
    if ($(".team-carousel-slider")) {
      $(".team-carousel-slider").each(function() {
        var $this = $(this);
        new Swiper( $this[0], {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 0,
          autoplay: {
            delay: 9000,
            disableOnInteraction: false,
          },
          speed: 2000,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            375: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            575: {
              spaceBetween: 0,
              slidesPerView: 1
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 2
            },
            992: {
              spaceBetween: 30,
              slidesPerView: 3
            },
            1200: {
              spaceBetween: 30,
              slidesPerView: 3
            }
          },
        });
      });
    }
  }

  function BrandSwiperOneInit() {
    if ($(".brand-carousel-one")) {
      $(".brand-carousel-one").each(function() {
        var $this = $(this);
        new Swiper( $this[0], {
          slidesPerView: 5,
          loop: true,
          spaceBetween: 100,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: {
              spaceBetween: 30,
              slidesPerView: 1
            },
            375: {
              spaceBetween: 30,
              slidesPerView: 2
            },
            575: {
              spaceBetween: 30,
              slidesPerView: 3
            },
            768: {
              spaceBetween: 50,
              slidesPerView: 3
            },
            992: {
              spaceBetween: 40,
              slidesPerView: 4
            },
            1200: {
              spaceBetween: 100,
              slidesPerView: 5
            }
          },
        });
      });
    }
  }

  function thmSwiperInit() {
    // swiper slider
    if ($(".thm-swiper__slider").length) {
      $(".thm-swiper__slider").each(function () {
        let elm = $(this);
        let options = elm.data('swiper-options');
        let thmSwiperSlider = new Swiper(elm, options);
      });
    }
  }

  // Price Filter
  function priceFilter() {
    if ($(".price-ranger").length) {
      $(".price-ranger #slider-range").slider({
        range: true,
        min: 0,
        max: 80,
        values: [5, 80],
        slide: function (event, ui) {
          $(".price-ranger .ranger-min-max-block .min").val(
            "$" + ui.values[0]
          );
          $(".price-ranger .ranger-min-max-block .max").val(
            "$" + ui.values[1]
          );
        },
      });
      $(".price-ranger .ranger-min-max-block .min").val(
        "$" + $(".price-ranger #slider-range").slider("values", 0)
      );
      $(".price-ranger .ranger-min-max-block .max").val(
        "$" + $(".price-ranger #slider-range").slider("values", 1)
      );
    }
  }

  // Popular Causes Progress Bar
  if ($(".count-bar").length) {
    $(".count-bar").appear(
      function () {
        var el = $(this);
        var percent = el.data("percent");
        $(el).css("width", percent).addClass("counted");
      }, {
        accY: -50
      }
    );
  }

  //Fact Counter + Text Count
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            }
          });
        }
      }, {
        accY: 0
      }
    );
  }

  // Accrodion
  if ($(".accrodion-grp").length) {
    var accrodionGrp = $(".accrodion-grp");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion");
      Self.addClass(accrodionName);
      Self.find(".accrodion .accrodion-content").hide();
      Self.find(".accrodion.active").find(".accrodion-content").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .removeClass("active");
              $(".accrodion-grp." + accrodionName)
                .find(".accrodion")
                .find(".accrodion-content")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content").slideDown();
            }
          });
      });
    });
  }

  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate({
          scrollTop: $(target).offset().top
        },
        1000
      );

      return false;
    });
  }

  if ($(".contact-form-validated").length) {
    $(".contact-form-validated").each(function () {
      let self = $(this);
      self.validate({
        // initialize the plugin
        rules: {
          name: {
            required: true
          },
          email: {
            required: true,
            email: true
          },
          message: {
            required: true
          },
          subject: {
            required: true
          }
        },
        submitHandler: function (form) {
          // sending value with ajax request
          $.post(
            $(form).attr("action"),
            $(form).serialize(),
            function (response) {
              $(form).parent().find(".result").append(response);
              $(form).find('input[type="text"]').val("");
              $(form).find('input[type="email"]').val("");
              $(form).find("textarea").val("");
            }
          );
          return false;
        }
      });
    });
  }

  // mailchimp form
  if ($(".mc-form").length) {
    $(".mc-form").each(function () {
      var Self = $(this);
      var mcURL = Self.data("url");
      var mcResp = Self.parent().find(".mc-form__response");

      Self.ajaxChimp({
        url: mcURL,
        callback: function (resp) {
          // appending response
          mcResp.append(function () {
            return '<p class="mc-message">' + resp.msg + "</p>";
          });
          // making things based on response
          if (resp.result === "success") {
            // Do stuff
            Self.removeClass("errored").addClass("successed");
            mcResp.removeClass("errored").addClass("successed");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
          if (resp.result === "error") {
            Self.removeClass("successed").addClass("errored");
            mcResp.removeClass("successed").addClass("errored");
            Self.find("input").val("");

            mcResp.find("p").fadeOut(10000);
          }
        }
      });
    });
  }

  if ($(".video-popup").length) {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: true,

      fixedContentPos: false
    });
  }

  if ($(".img-popup").length) {
    var groups = {};
    $(".img-popup").each(function () {
      var id = parseInt($(this).attr("data-group"), 10);

      if (!groups[id]) {
        groups[id] = [];
      }

      groups[id].push(this);
    });

    $.each(groups, function () {
      $(this).magnificPopup({
        type: "image",
        closeOnContentClick: true,
        closeBtnInside: false,
        gallery: {
          enabled: true
        }
      });
    });
  }

  //=== CountDownTimer===
  if ($('.time-countdown').length) {
    $('.time-countdown').each(function () {
      var Self = $(this);
      var countDate = Self.data('countdown-time'); // getting date

      Self.countdown(countDate, function (event) {
        $(this).html('<li> <div class="box"> <span class="days">' + event.strftime('%D') + '</span> <span class="timeRef">days</span> </div> </li> <li> <div class="box"> <span class="hours">' + event.strftime('%H') + '</span> <span class="timeRef clr-1">hrs</span> </div> </li> <li> <div class="box"> <span class="minutes">' + event.strftime('%M') + '</span> <span class="timeRef clr-2">mins</span> </div> </li> <li> <div class="box"> <span class="seconds">' + event.strftime('%S') + '</span> <span class="timeRef clr-3">secs</span> </div> </li>');
      });
    });
  };

  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }
  }

  if ($(".main-menu__list").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu__list").outerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }

  if ($(".sticky-header__content").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".sticky-header__content");
    mobileNavContainer.innerHTML = navContent;
  }

  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }

  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  /*--------------------------------------------
    Search Popup
  ---------------------------------------------*/
  var bodyOvrelay = $('#body-overlay');
  var searchPopup = $('#td-search-popup');
  var sidebarMenu = $('#sidebar-menu');

  $(document).on('click', '#body-overlay', function (e) {
    e.preventDefault();
    bodyOvrelay.removeClass('active');
    searchPopup.removeClass('active');
    sidebarMenu.removeClass('active');
  });
  $(document).on('click', '.search-bar-btn', function (e) {
    e.preventDefault();
    searchPopup.addClass('active');
    bodyOvrelay.addClass('active');
  });

  if ($(".odometer").length) {
    var odo = $(".odometer");
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }

  if ($(".dynamic-year").length) {
    let date = new Date();
    $(".dynamic-year").html(date.getFullYear());
  }

  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  $(".add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });

  $(".sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
  });

  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }

  /* === Checkout Payment === */
  if ($(".checkout__payment__title-box").length) {

    $(".checkout__payment__item").find('.checkout__payment__content').hide();
    $(".checkout__payment__item--active").find('.checkout__payment__content').show();

    $(".checkout__payment__title-box").on("click", function (e) {
      e.preventDefault();

      $(this).parents('.checkout__payment').find('.checkout__payment__item').removeClass("checkout__payment__item--active");
      $(this).parents(".checkout__payment").find(".checkout__payment__content").slideUp();

      $(this).parent().addClass("checkout__payment__item--active");
      $(this).parent().find(".checkout__payment__content").slideDown();

    })
  }

  if ($(".circle-progress").length) {
    $(".circle-progress").appear(function () {
      let circleProgress = $(".circle-progress");
      circleProgress.each(function () {
        let progress = $(this);
        let progressOptions = progress.data("options");
        progress.circleProgress(progressOptions);
      });
    });
  }

  /* === window load event === */
  $(window).on("load", function () {

    $('#preloader').delay(350).fadeOut('slow');

    BannerSwiperOneInit();
    ServiceSwiperOneInit();
    ServiceSwiperTwoInit();
    PortfolioSwiperOneInit();
    TestimonialSwiperOneInit();
    TestimonialSwiperTwoInit();
    TestimonialSwiperThreeInit();
    TeamCarouselSwiperInit();
    BrandSwiperOneInit();
    thmSwiperInit();
    priceFilter();

    if ($('.curved-circle').length) {
      $('.curved-circle').circleType({
        position: 'absolute',
        dir: 1,
        radius: 70,
        forceHeight: true,
        forceWidth: true
      });
    }

    if ($('.curved-circle-2').length) {
      $('.curved-circle-2').circleType({
        position: 'absolute',
        dir: 1,
        radius: 70,
        forceHeight: true,
        forceWidth: true
      });
    }

  });

  // window scroll event
  $(window).on("scroll", function () {

    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }

    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }

  });

  /*----------------------------------
  	Create an account toggle function
  ------------------------------------*/

  $('#cbox').on('click', function () {
    $('#cbox_info').slideToggle(900);
  });

  /*----------------------------------
  	Create an account toggle function
  ------------------------------------*/
  $('#ship-box').on('click', function () {
    $('#ship-box-info').slideToggle(1000);
  });

  if ($(".before-after-twentytwenty").length) {
    $(".before-after-twentytwenty").each(function () {
      var Self = $(this);
      var objName = Self.attr("id");
      $("#" + objName).twentytwenty();

      // hack for bs tab
      $(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function (e) {
        var paneTarget = $(e.target).attr("data-target");
        var $thePane = $(".tab-pane" + paneTarget);
        var twentyTwentyContainer = "#" + objName;
        var twentyTwentyHeight = $thePane.find(twentyTwentyContainer).height();
        if (0 === twentyTwentyHeight) {
          $thePane.find(twentyTwentyContainer).trigger("resize");
        }
      });
    });
  }

  if ($('#datepicker').length) {
    $('#datepicker').datepicker();
  };

  $('select:not(.ignore)').niceSelect();

})(jQuery);