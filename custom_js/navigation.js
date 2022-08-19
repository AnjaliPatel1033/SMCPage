var autocollapse = function (menu,maxHeight) {
    var nav = $(menu);
    var navHeight = nav.innerHeight();
    if (navHeight >= maxHeight) {
        $(menu + ' .dropdown').removeClass('d-none');
        $(".navbar-nav").removeClass('w-auto').addClass("w-100");
        while (navHeight > maxHeight) {
            var children = nav.children(menu + ' li:not(:last-child)');
            var count = children.length;
            $(children[count - 1]).prependTo(menu + ' .dropdown-menu');
            navHeight = nav.innerHeight();
        }
        $(".navbar-nav").addClass("w-auto").removeClass('w-100');
    }
    else {
        var collapsed = $(menu + ' .dropdown-menu').children(menu + ' li');
        if (collapsed.length===0) {
          $(menu + ' .dropdown').addClass('d-none');
        }
        while (navHeight < maxHeight && (nav.children(menu + ' li').length > 0) && collapsed.length > 0) {
            collapsed = $(menu + ' .dropdown-menu').children('li');
            $(collapsed[0]).insertBefore(nav.children(menu + ' li:last-child'));
            navHeight = nav.innerHeight();
        }

        if (navHeight > maxHeight) { 
            autocollapse(menu,maxHeight);
        }
    }
}
$(document).ready(function () {
    autocollapse('#nav',50); 
    $(window).on('resize', function () {
        autocollapse('#nav',50); 
    });
});
