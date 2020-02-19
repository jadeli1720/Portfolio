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

  /** 3. Navbar toggle icon  --> 
 **************************************************************** **/	
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });



  /** 4. Modal --> Keeps portfolio modals above the portfolio section. Need to finesse a little. Page moves to top and then back down when modal is first open. After that, every other modal has slight page movement
 **************************************************************** **/	
// Not a great solution. Look for something else
  
  $("body").on("click",".modalClick",function(){
    
    // data-target id that corresponds to the matching modal id
    let modalBtn = $(this.id)
    
    modalBtn.modal("show");
    $("#portfolio").addClass("after_modal_appended");
  
    //removes the padding right and modal-open class from the body tag which bootstrap adds when a modal is shown
    // $('body').removeClass("modal-open")
    //   $('body').css("padding-right","");     
});


// Stops video from playing once modal is closed 
$('#sfmModal').on('hidden.bs.modal', function(e) {
  $('#sfmModal iframe').attr("src", $('#sfmModal iframe').attr('src'));
});

//The code below will allows the modal to stay open for design and editing. Just change the modal id. Comment out when finished.
$('#slpMood').modal('toggle')


/** 5. Bootstrap Form Validation --> 
 **************************************************************** **/	

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    let forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


})

