// Sticky Header

var _header = document.getElementById("header");
var sticky = _header.offsetTop;

window.onscroll = function() {stickyHeader()};

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        _header.classList.add("sticky-header");
    } else {
        _header.classList.remove("sticky-header");
    }
}

// Slide Up Content

(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);

var allMods = $(".sidebar-info");

allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible"); 
    } 
});

win.scroll(function(event) {
    
    allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in"); 
        } 
    });
    
});

// Nav Buttons

$("#am-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#am").offset().top - 100
    }, 1250);
});

$("#sq-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#sq").offset().top - 100
    }, 1500);
});

$("#ec-btn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#ec").offset().top - 100
    }, 1750);
});