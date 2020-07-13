
function fun2() {

    var sel=document.getElementById('mySelect').selectedIndex;
    var options=document.getElementById('mySelect').options;

    alert('tanlangan '+options[sel].text);
}
