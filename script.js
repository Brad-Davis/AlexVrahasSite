
const linkArray = ['/musicvideos.html', '/productvideos.html', 'personalprojects.html'];



console.log('working!');

function setVideoLinks(content, num){
    content.children[1].src = "images/gifs/explosion.gif"
    setTimeout(function(){
        window.location.href = linkArray[num];
    }, 1000);
}
