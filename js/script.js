
$(document).ready(function(){
    
    new WOW().init();

    // header color

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
  
        if (scroll >= 100) {
            $(".header").addClass("colorful");
        } else {
            $(".header").removeClass("colorful");
        }
      });

    // menu open and close
    let menuBtn = document.querySelector('.button_menu');
    let menu = document.querySelector('.menu');
    let close = document.querySelector('.close');

    menuBtn.addEventListener('click', function(){
        menu.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        menu.style.display = 'none';
        document.body.style.overflow = '';
    });

    let menuLinks = document.querySelectorAll('.menu__link');

    menuLinks.forEach(function(link){
       link.addEventListener('click', function(){
            menu.style.display = 'none';
            document.body.style.overflow = '';
       });
    });

        // slider from flipster

        $('.about-slider').flipster({
            buttons: 'custom',
            loop: true,
            fadeIn: 200,
            buttonPrev: '<i class="fas fa-backward about__fas"></i>',
            buttonNext: '<i class="fas fa-forward about__fas"></i>',
            scrollwheel: false  
        });

        // accordeon-questions

        $('.questions-item__accordion').each(function(i) {
            $(this).on('click', function(e) {
                $('.questions-item__panel').eq(i).toggleClass('answer');
                $('.questions-item__accordion').eq(i).toggleClass('question');
            });
        });
   

    
});

