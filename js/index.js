$(document).ready(function() {

/** 1#. Scrollspy -- not working 
 **************************************************************** **/	

    // $('body').scrollspy({ target: '#navList', offset: 10 })

/** 2#. Smooth Scrolling
 **************************************************************** **/	
let scroll = new SmoothScroll('a[href*="#"]', {offset: 30,speed:800});



/** 3#. Active Link -- not working
 **************************************************************** **/	
$(window).scroll(function() {
    
    let scrollLink = $('.scroll-link')

    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      
      let sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })

})