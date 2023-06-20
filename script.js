$(document).ready(function(){

    $('form').submit(function(event) {
        event.preventDefault(); 
        var formData = {
          name: $('input[name="name"]').val(),
          email: $('input[name="email"]').val(),
          subject: $('input[name="subject"]').val(),
          message: $('textarea[name="message"]').val()
        };
        $.ajax({
          type: 'POST',
          url: 'email.php',
          data: formData,
          success: function(response) {
            console.log(response);
            alert('Message sent successfully!');
            $('form')[0].reset();
          },
          error: function(error) {
            console.log(error);
            alert('An error occurred while sending the message.');
          }
        });
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    $('.navbar').addClass("sticky");
    $(window).scroll(function(){
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    
});