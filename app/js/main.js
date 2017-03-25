"use strict";

var viewportInfo = {
    get width() {
        return $(window).width();
    },
    get isMobile() {
        return this.width < 1025;
    },
    get isSmallscreen() {
        return this.width > 1024 && this.width < 1441;
    },
    get isWidescreen() {
        return this.width > 1440;
    }
};

$(function () {
    $(window).resize(function () {});
});