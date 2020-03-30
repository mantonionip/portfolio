$(document).ready(function () {
    // Scrolling throught the page when user clicks on a menu item
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
            'scrollTop':$target.offset().top
        }, 1000, 'swing');
    });

    // When user clicks on the menu items, close the navigation
    const navLinks = document.querySelectorAll('.navigation__item');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.navigation__checkbox').checked = false;
        });
    });

    // Scrolling to the top of the page when user clicks and fadeout
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#top').fadeIn();
        }
        else {
            $('#top').fadeOut();
        }
    });

    $('#top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '500');
    });
}); 
