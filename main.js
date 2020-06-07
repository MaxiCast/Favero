// BTN BAR //
document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

// FLEXSLIDER //
$(window).load(function() {
    $('.flexslider').flexslider({
        touch: true,
        pauseOnAction: false,
        pauseOnHover: false,
    });
});

window.callbellSettings = {
    token: "DG1CnRmJ9TkGn2AsfvKrLGUC"
};

(function(){var w=window;var ic=w.callbell;if(typeof ic==="function"){ic('reattach_activator');ic('update',callbellSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Callbell=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://dash.callbell.eu/include/'+window.callbellSettings.token+'.js';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()

// SROLL WEBPAGE //
//ScrollReveal().reveal('.flexslider');
//ScrollReveal().reveal('.news-cards', {delay: 500});
//ScrollReveal().reveal('.cards-banner-one', {delay: 500});


