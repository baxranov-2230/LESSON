function myMove() {
let element=document.getElementById('myAnimation');
let pos=0;
let id=setInterval(frame,10);
function frame() {
if (pos===350){
    clearInterval(id);

} else {
    pos++;
    element.style.top=pos+'px';
    element.style.left=pos+'px';
}
}
}
function myMove2() {
    let element=document.getElementById('myAnimation');
    let pos=350;
    let id=setInterval(frame,10);
    function frame() {
        if (pos===0){
            clearInterval(id);
        } else {

            pos--;
            element.style.top=pos+'px';
            element.style.left=pos+'px';
        }
    }
}