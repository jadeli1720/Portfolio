$(document).ready(function() {


/** 1. Smooth Scrolling
 **************************************************************** **/	
let scroll = new SmoothScroll('a[href*="#"]', {offset: 30,speed:800});



/** 2. Active Link -- not working -- skips experience??
 **************************************************************** **/	
$(window).scroll(function() {
    
    let scrollLink = $('.scroll-link')

    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      
      let sectionOffset = $(this.hash).offset().top - 325;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active') ;
        $(this).parent().siblings().removeClass('active') ;
      }
    })
    
  })

  /** 3. Modal -- Trying to reposition modal. On click moves to top then back down to portfolio. FIX!!!!
 **************************************************************** **/	
// Not a great solution. Look for something else
  
  $("body").on("click",".modalClick",function(){
    
    $("#sfmModal").modal("show");
    $("#portfolio").addClass("after_modal_appended");
  
  
    //remove the padding right and modal-open class from the body tag which bootstrap adds when a modal is shown
    $('body').removeClass("modal-open")
      $('body').css("padding-right","");     
});

// Stops video from playing once modal is closed
$('#sfmModal').on('hidden.bs.modal', function() {
  $('#sfmModal .modal-body').html('');
});

})

//Below will allow me to keep modal open and design it. Just change the modal id
// $('#sfmModal').modal('toggle')