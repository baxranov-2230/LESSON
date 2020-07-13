document.getElementById('nav').onclick = function (event) {
    let target = event.target;
    if (target.className === 'menu-item') {
        let s = target.getElementsByClassName('sub-menu');
        closeMenu();

        s[0].style.display = 'block';
    }
}

document.onclick = function (event) {
    let target = event.target;
    console.log(target);
    if (target.className !== 'menu-item' && target.className !== 'sub-menu') {
        closeMenu();
    }
}


function closeMenu() {
    let subm = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none';
    }
}