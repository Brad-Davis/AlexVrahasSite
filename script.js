
const linkArray = ['musicvideos.html', 'productvideos.html', 'narrative.html'];

function setVideoLinks(content, num) {
    content.children[1].src = "images/gifs/explosion.gif"
    setTimeout(function () {
        window.location.href = linkArray[num];
    }, 1000);
}

function setHomeLinks(content, link, gif) {
    if (gif) {
        content.children[0].src = gif
    } else {
        content.children[0].src = "images/gifs/explosion.gif"
    }

    setTimeout(function () {
        window.location.href = link;
    }, 1000);
}

function dontTouchMe() {
    console.log("working")
    const alex = document.getElementById('angryAlex');
    alex.style.opacity = "1"
    alex.style.zIndex = "6"
    $('#angryAlex').show();

    $('#angryAlex').fadeOut(2000, function () {
        alex.zIndex = "-3"
        console.log("poo");
    })

}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}