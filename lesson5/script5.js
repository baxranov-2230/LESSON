let tab;
let tabContend;

window.onload = function () {
    tabContend = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (let i = a; i < tabContend.length; i++) {
        // tabContend[i].classList.remove('show');
        tabContend[i].classList.add('hide');
        tab[i].classList.remove('whiteBorder')
    }
}

document.getElementById('tab').onclick = function (event) {
    let target = event.target;
    if (target.className === 'tab') {
        for (let i = 0; i < tab.length; i++) {
            if (target === tab[i]) {
                showTabsContend(i);
                break;
            }
        }
    }
}

function showTabsContend(b) {
if (tabContend[b].classList.contains('hide')){
    hideTabsContent(0);
    tab[b].classList.add('whiteBorder');
    tabContend[b].classList.remove('hi-de');
    // tabContend[b].classList.add('whiteBorder');
}
}