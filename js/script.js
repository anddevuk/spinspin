jQuery(document).ready(function($){
    //toggle  nac menu on button click
    var $root = $('html, body'),
        menu_toggle = $('.menu-toggle');

    menu_toggle.on('click', function() {
        var $this = $(this);

        $this.toggleClass('close');
        $('.menu, .menu-nav, .menu-nav-item').toggleClass('show');
    });
    //toggle nav menu on menu item click + smooth scrolling
    $('.menu-nav-item a').on('click', function() {
        var $this = $(this),
            href= $this.attr('href');

        //nav menu toggle
        menu_toggle.removeClass('close');
        $this.parents('.menu-nav-item, .menu-nav, .menu').removeClass('show');

        //smooth scroll
        $root.animate({
            scrollTop: $(href).offset().top - 100
        }, 500, function() {
            window.location.hash = href;
        });
        return false;
    });
});
