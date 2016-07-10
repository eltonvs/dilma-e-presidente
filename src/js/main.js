// Twitter
!(function(d, s, id) {
    var js,
    fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, 'script', 'twitter-wjs'));

// Facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.6";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Google Analytics
(function(i, s, o, g, r, a, m) {
    i.GoogleAnalyticsObject = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments);
    },
    i[r].l = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})
(window, document, 'script','https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-76619975-1', 'auto');
ga('send', 'pageview');

// Choose a random image to be shown
var n_images = 8;
var rdm_number = Math.floor((Math.random() * 100)) % n_images + 1;
var image_src = "dist/img/dilma_" + rdm_number.toString() + ".jpg";
document.getElementById("dilma_image").src = image_src;
