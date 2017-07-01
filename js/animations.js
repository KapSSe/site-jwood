$(document).scroll(function(){
              $('.mail').toggleClass('animated fadeInLeft', $(this).scrollTop() > 2500);
              $('.mail_adress').toggleClass('animated fadeInRight', $(this).scrollTop() > 2500);
              $('.phone').toggleClass('animated fadeInLeft', $(this).scrollTop() > 2500);
              $('.phone_number').toggleClass('animated fadeInRight', $(this).scrollTop() > 2500);
              $('.social').toggleClass('animated fadeInLeft', $(this).scrollTop() > 2500);
              $('.container_social').toggleClass('animated fadeInRight', $(this).scrollTop() > 2500);
 	});