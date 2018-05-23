/*FULL PAGE CONFIG */
$(document).ready(function() {
    $('#wrapper').fullpage({
        //Navigation
        menu: false,
        menu: '#MyMenu',
        lockAnchors: true,
        anchors:['Silva', 'Cirkel', 'LaRoche', 'Isbeceren', 'Lastrip'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Silva', 'Cirkel', 'La Roche', 'Isbeceren', 'Lastrip',],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true, /*was true but can not modify speed*/
        scrollingSpeed: 1500,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 100,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: true,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
        
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : false,
        paddingBottom: '120px',
        paddingTop: '120px',
        fixedElements: '.wrapperHeader, .wrapperFooter',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
});

/* Arrow nav slide */
    //adding the action to the button
    $(document).on('click', '#moveUp', function(){
      $.fn.fullpage.moveSectionUp();
    });

    //adding the action to the button
    $(document).on('click', '#moveDown', function(){
      $.fn.fullpage.moveSectionDown();
    });


    /* Img perspective */
var rotate = 8 ;
var pageX = $(document).width();
var pageY = $(document).height();
var mouseY=0;
var mouseX=0;

 $(document).mousemove(function( event ) {
    mouseX = event.pageY;
    mouseY = event.pageX;
    rotateY = -(pageY/2-mouseY)/pageY*rotate;
    rotateX = (pageX/2-mouseX)/pageX*rotate;
    $('img').css({ '-webkit-transform' : 'translateX(-50%) translateY(-50%) scale(1) perspective( 2666px ) rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'});
    //$('.overlay-menu-ul').css({ '-webkit-transform' : 'translateX(-50%) translateY(-50%) scale(1) perspective( 266px ) rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'});
  });

$(function(){
    var windowH = $(window).height();
    var wrapperH = $('#Awrapper').height();
    if(windowH > wrapperH) {                            
        $('#Awrapper').css({'height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = $('#Awrapper').height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        var truecontentH = $('#Atruecontent').height();
        if(windowH > truecontentH) {
            $('#Awrapper').css('height', (newH)+'px');
        }

    })          
});




  // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();



        if (windowsize < 768) {
            $(".section:first-child .img-slide").attr("src", "img/slide1-small.jpg");
            $(".section:nth-child(2) .img-slide").attr("src", "img/slide2-small.jpg");
            $(".section:nth-child(3) .img-slide").attr("src", "img/slide3-small.jpg");
            // $(".section:nth-child(2) .img-slide").attr("src", "img/slide2-2.jpg");
            // $(".section:nth-child(3) .img-slide").attr("src", "img/slide3-2.jpg");
            // $(".section:nth-child(4) .img-slide").attr("src", "img/slide4-2.jpg");
            // $(".section:nth-child(5) .img-slide").attr("src", "img/slide5-2.jpg");
            // $(".section:last-child .img-slide").attr("src", "img/slide5-2.jpg");
        } 


        else {
            $(".section:first-child .img-slide").attr("src", "img/slide1.jpg");
            $(".section:nth-child(2) .img-slide").attr("src", "img/slide2.jpg");
            $(".section:nth-child(3) .img-slide").attr("src", "img/slide3.jpg");
            // $(".section:nth-child(2) .img-slide").attr("src", "img/slide2.jpg");
            // $(".section:nth-child(3) .img-slide").attr("src", "img/slide3.jpg");
            // $(".section:nth-child(4) .img-slide").attr("src", "img/slide4.jpg");
            // $(".section:nth-child(5) .img-slide").attr("src", "img/slide5.jpg");
            // $(".section:last-child .img-slide").attr("src", "img/slide5.jpg");
        }


    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);

});

$(document).ready(function() {
  $('.toggle-block').on('click', function() {
     $('.overlay').toggleClass('open');
     $('.toggle-block').toggleClass('open');
  });

});




/*slideshow */

var main = function() {

    var paused = false

    $('.arrowR').click(function() {
        paused = true;
        $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    });
        
    $('.arrowL').click(function() {
        paused = true;
        $('#slideshow > div:last')
        .fadeIn(1000)
        .prependTo('#slideshow')
        .next()
        .fadeOut(1000)
        .end();
    });


    
    setInterval(function() {
        if (paused === false) { 
            $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
        };
    },  5000);
   
    
};

$(document).ready(main);