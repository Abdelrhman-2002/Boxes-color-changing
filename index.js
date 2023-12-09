let arr=['red', 'green', 'blue','yellow','purple','orange','pink','gold'];
function getColor(){
    return r=arr[Math.floor(Math.random()*arr.length)];
}
var box=document.getElementsByClassName('item');
for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseenter', function () {
        this.style.background = getColor();
    });
    box[i].addEventListener('mouseleave', function () {
        this.style.background = 'rgb(37, 36, 36)';
        this.style.transition = '1s';
    });
}