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

  // var masthead = $('#masthead');
  // var backgrounds = [
  //   "url('../assets/img/bg-masthead.jpg')", 
  //   "url('../assets/img/gucci.jpg')"];
  // var current = 0;
  // var duration = 5000;

  // function nextBackground() {

  //   masthead.fadeTo('fast', 0.3, function()
  //   {
  //     $(this).css('background-image', backgrounds[current = ++current % backgrounds.length]);
  //   }).fadeTo('slow', 1);

  //   setTimeout(nextBackground, duration);
  // }

  // setTimeout(nextBackground, duration);

  // masthead.css('background-image', backgrounds[current]);  

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
      name: 'shiye',
      picsNum: 4,
      title: '背发光字，严谨匠心工艺，高于小作坊标准。'
    },
    {
      name: 'zhoushengsheng',
      picsNum: 7,
      title: '藏露结合，方圆带势。'
    },
    {
      name: 'chaoshan',
      picsNum: 2,
      title: '丰富LED灯光颜色，提供个性化定制。'
    },
    {
      name: 'dinglong',
      picsNum: 5,
      title: '用料安全，做工精细。'
    },
    {
      name: 'gxg.kids',
      picsNum: 2,
      title: '亮度完美，整体发光均匀。'
    },
    {
      name: 'qianwei',
      picsNum: 2,
      title: '定制发光字，图案字体精致，金属边框，色彩好看。'
    },
    {
      name: 'salon',
      picsNum: 4,
      title: '醒目的广告牌。'
    },
    {
      name: 'taier',
      picsNum: 2,
      title: '图案字体精致，款式高档。'
    },
    {
      name: 'taixing',
      picsNum: 4,
      title: '很炫，光线很亮，字体有个性。'
    },
    {
      name: 'xingyihui',
      picsNum: 2,
      title: '高端大气上档次，做工精细，材料厚实。'
    },
    {
      name: 'zhuchongyun',
      picsNum: 2,
      title: '材质很好，不绣钢，发光亮度刚好合适，做工精美。'
    },
    {
      name: 'gac',
      picsNum: 4,
      title: '字体清晰立体。'
    },
    {
      name: 'rules',
      picsNum: 5,
      title: '字体工整，亮度刚好。'
    },
    {
      name: 'shanghai',
      picsNum: 3,
      title: '装出来效果杠杠滴。'
    },
    {
      name: 'wangxiang',
      picsNum: 1,
      title: '整个背景墙漂亮又大气。'
    },
    {
      name: 'gongfu',
      picsNum: 1,
      title: '高端大气，很漂亮非常好看。'
    },
    {
      name: 'mc.choice',
      picsNum: 1,
      title: '浑然天成，玲珑精致。'
    },
    {
      name: 'mingjiang',
      picsNum: 1,
      title: '低调的冷静。画龙点睛的轻奢质感，让您装修氛围体验更佳。'
    }
  ];

  for(var i = 0; i < clients.length; i++) {

    var items = [];

    for (var j = 0; j < clients[i].picsNum; j++) {
      items.push({
        src: 'assets/img/portfolio/' + clients[i].name + '/' + (j+1) + '.jpg',
        title: clients[i].title
      });
    }

    console.log(items);

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
        tError: '<a href="%url%"> 图片 #%curr%</a> 加载失败。',
        titleSrc: function(item) {
          return item.title;
        }
      }
    });
  }

})(jQuery); // End of use strict
