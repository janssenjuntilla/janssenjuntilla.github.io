(function (window, document) {
    'use strict';
    
    document.body.onload = function () {
        document.getElementById('copy-date').innerHTML = (new Date()).getFullYear();
        
        var siteHeader = document.getElementById('site-header');
        var yOffset = window.pageYOffset;
        window.addEventListener('scroll', function (e) {
            var newYOffset = window.pageYOffset;
            
            if (newYOffset > siteHeader.offsetHeight && yOffset > newYOffset) {
                
                // scrolling up
                siteHeader.style.position = 'fixed';
                siteHeader.style.top = 0;
                yOffset = newYOffset;
            }
            else if (newYOffset > siteHeader.offsetHeight || 0 === newYOffset) {
                
                // scrolling down or at top of page
                siteHeader.style.position = 'relative';
                yOffset = newYOffset;
            }
        });
    };
})(window, window.document);