// I saw how to do this on w3schools https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
// but i wrote my own code

let oldScrollPos = 200;


document.addEventListener('scroll', function () {
    let newScrollPos = window.pageYOffset;
    if (oldScrollPos > newScrollPos) {
        $('#topNav').show();
    }
    else {
        $('#topNav').hide();
    }
    oldScrollPos = newScrollPos
})
