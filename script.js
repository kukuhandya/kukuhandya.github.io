/* main locomotive scrolling */

const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  tablet: {
    smooth:true
  }
})

gsap.registerPlugin(ScrollTrigger)


scroller.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(
    '.container', {
        scrollTop(value) {
            return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
            return {
                left: 0, top: 0, 
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }
)


ScrollTrigger.create({
    trigger: '.image-mask',
    scroller: '.container',
    start: 'top+=30% 50%',
    end: 'bottom-=40% 50%',
    animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
    scrub: 2,
    // markers: true
})


ScrollTrigger.addEventListener('refresh', () => scroller.update())


ScrollTrigger.refresh()



/* slider movement */
var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    grabCursor: true,
    speed: 1000,
    parallax: true,
    autoplay: false,
    effect: "slide",
  });





/* about section */
var Expand = (function() {
    var tile = $('.strips__strip');
    var tileLink = $('.strips__strip > .strip__content');
    var tileText = tileLink.find('.strip__inner-text');
    var stripClose = $('.strip__close');
    
    var expanded  = false;
  
    var open = function() {
        
      var tile = $(this).parent();
  
        if (!expanded) {
          tile.addClass('strips__strip--expanded');
          // add delay to inner text
          tileText.css('transition', 'all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)');
          stripClose.addClass('strip__close--show');
          stripClose.css('transition', 'all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)');
          expanded = true;
        } 
      };
    
    var close = function() {
      if (expanded) {
        tile.removeClass('strips__strip--expanded');
        // remove delay from inner text
        tileText.css('transition', 'all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)');
        stripClose.removeClass('strip__close--show');
        stripClose.css('transition', 'all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)')
        expanded = false;
      }
    }
  
      var bindActions = function() {
        tileLink.on('click', open);
        stripClose.on('click', close);
      };
  
      var init = function() {
        bindActions();
      };
  
      return {
        init: init
      };
  
    }());
  
  Expand.init();


/* fadein section home */
const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelectorAll(".copy")[0].classList.add('fadeInLeft');
    }
  })
})

observer1.observe(document.querySelector('.home'));


/* fadein section 2 */
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        document.querySelectorAll(".pinned-quote")[0].classList.add('fadeInLeft');
      }
    })
  })
  
  observer2.observe(document.querySelector('.section-2'));


/* fadein section 2 - Project Slide */
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelectorAll(".slide-content")[0].classList.add('fadeInLeft');
    }
  })
})

observer3.observe(document.querySelector('.flex'));



/* fadein section 3 */
  const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        document.querySelectorAll(".work")[0].classList.add('fadeInLeft');
      }
    })
  })
  
  observer4.observe(document.querySelector('.section-3'));


/* fadein contact */
const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      document.querySelectorAll(".invitation")[0].classList.add('fadeInLeft');
    }
  })
})

observer5.observe(document.querySelector('.contact'));



/* project movement */
( function($) {
  
    $(document).ready(function() {
      
      var s           = $('.slider'),
          sWrapper    = s.find('.slider-wrapper'),
          sItem       = s.find('.slide'),
          btn         = s.find('.slider-link'),
          sWidth      = sItem.width(),
          sCount      = sItem.length,
          slide_title = s.find('.slide-title'),
          slide_image = s.find('.slide-image img'),
          sTotalWidth = sCount * sWidth;
      
      sWrapper.css('width', sTotalWidth);
      sWrapper.css('width', sTotalWidth);
      
      var clickCount  = 0;
      
      btn.on('click', function(e) {
        e.preventDefault();
  
        if( $(this).hasClass('next') ) {
          
          ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        } else if ( $(this).hasClass('prev') ) {
          
          ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
        }
        TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })
  
  
        //CONTENT ANIMATIONS
  
        var fromProperties = {autoAlpha:0, x:'-50', y:'-10'};
        var toProperties = {autoAlpha:0.8, x:'0', y:'0'};
  
        TweenLite.fromTo(slide_image, 1, {autoAlpha:0, y:'40'}, {autoAlpha:1, y:'0'});
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
  
      });
            
    });
  })(jQuery);





