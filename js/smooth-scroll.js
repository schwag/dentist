/* =============================================================

    Smooth Scroll 2.3
    Animate scrolling to anchor links, by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/
    
 * ============================================================= */
$(document).ready(function () {
    $('a[href^="#navMehome"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50 // - 200px (nav-height)
        }, 900, 'swing', function () {
            window.location.hash = '1' + target;
        });
    });
});

$(document).ready(function () {
    $('a[href^="#aboutus"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50 // - 200px (nav-height)
        }, 900, 'swing', function () {
            window.location.hash = '1' + target;
        });
    });
});

$(document).ready(function () {
    $('a[href^="#campaigns"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50 // - 200px (nav-height)
        }, 900, 'swing', function () {
            window.location.hash = '1' + target;
        });
    });
});

$(document).ready(function () {
    $('a[href^="#capabilities"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50 // - 200px (nav-height)
        }, 900, 'swing', function () {
            window.location.hash = '1' + target;
        });
    });
});

$(document).ready(function () {
    $('a[href^="#process"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50 // - 200px (nav-height)
        }, 900, 'swing', function () {
            window.location.hash = '1' + target;
        });
    });
});

$(document).ready(function () {
    $('a[href^="#casestudy"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50 // - 200px (nav-height)
        }, 900, 'swing', function () {
            window.location.hash = '1' + target;
        });
    });
});

$(document).ready(function () {
    $('a[href^="#contactus"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50 // - 200px (nav-height)
        }, 900, 'swing', function () {
            window.location.hash = '1' + target;
        });
    });
});

