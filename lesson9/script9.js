function myFunction() {
    let input = document.getElementById('myInput');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('myUl');
    let li = ul.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
       let a=li[i].getElementsByTagName('a')[0];
       if (a.innerHTML.toUpperCase().indexOf(filter)>-1){
           console.log(a.innerHTML.toUpperCase().indexOf(filter));
           li[i].style.display="block";
       } else {
           li[i].style.display="none";
       }
    }
}