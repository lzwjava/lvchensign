(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  // $('#portfolio').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: '加载中 #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0, 1]
  //   },
  //   image: {
  //     tError: '<a href="%url%"> 图片 #%curr%</a> 加载失败。'
  //   }
  // });

  var basicOptions = {
    type: 'image',
    tLoading: '加载中 #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%"> 图片 #%curr%</a> 加载失败。'
    }
  };

  var clients = [
    {
      name: 'zhoushengsheng',
      picsNum: 7
    },
    {
      name: 'shiye',
      picsNum: 4
    },    
    {
      name: 'chaoshan',
      picsNum: 2,
    },
    {
      name: 'dinglong',
      picsNum: 5
    },
    {
      name: 'gxg.kids',
      picsNum: 2
    },
    {
      name: 'qianwei',
      picsNum: 2
    },
    {
      name: 'salon',
      picsNum: 4
    },
    {
      name: 'taier',
      picsNum: 2
    },
    {
      name: 'taixing',
      picsNum: 4
    },
    {
      name: 'xingyihui',
      picsNum: 2
    },
    {
      name: 'zhuchongyun',
      picsNum: 2
    },
    {
      name: 'gac',
      picsNum: 4
    },
    {
      name: 'rules',
      picsNum: 5
    },
    {
      name: 'shanghai',
      picsNum: 3
    },
    {
      name: 'wangxiang',
      picsNum: 1
    },
    {
      name: 'gongfu',
      picsNum: 1
    },
    {
      name: 'mc.choice',
      picsNum: 1
    },
    {
      name: 'mingjiang',
      picsNum: 1
    }
  ];

  for(var i = 0; i < clients.length; i++) {

    var items = [];

    for (var j = 0; j < clients[i].picsNum; j++) {
      items.push({
        src: 'assets/img/portfolio/' + clients[i].name + '/' + (j+1) + '.jpg'
      });
    }

    // console.log(items);

    $('#portfolio' + (i + 1)).magnificPopup({
      items: items,
      type: 'image',
      tLoading: '加载中 #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%"> 图片 #%curr%</a> 加载失败。'
      }
    });
  }

})(jQuery); // End of use strict
