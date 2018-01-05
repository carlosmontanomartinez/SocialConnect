window.fbAsyncInit = function () {
    var x = FB.init({
        appId: 772904349527252,
        status: true,
        cookie: true,
        oauth: true,
        xfbml: true,
        version: 'v2.5'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.async = true;
    js.src = '//connect.facebook.net/es_LA/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));