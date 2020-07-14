let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = 'block';

}

span.onclick = function () {
    modal.style.display = 'none';
}

window.onclick=function (event) {
if (event.target===modal){
    modal.style.display='none';
}
}



// document.onclick=function (event) {
// let target=event.target;
//     if (target.className==='modal'&&modal.style.display ==='block'){
//             modal.style.display='none';
//     }
// }