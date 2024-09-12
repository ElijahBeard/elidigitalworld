grabbed = false;

function mousemove(event){
    window.onbeforeunload = window.scrollTo(0, 0);
    let tab = document.getElementById("pull_tab");
    let tab_base = document.getElementById("tab_base");

    const x = event.clientX;
    const y = event.clientY;
    scroll_position = y/document.body.scrollHeight * 100;

    if(grabbed && scroll_position < 199 && is_in_bounding_box(x,y)){
        tab.style.top = `${y}px`;
        tab_base.style.cursor = "grabbing";
    } else {tab_base.style.cursor = "grab"}
}

function is_in_bounding_box(x,y){
    let tab = document.getElementById("pull_tab");

    x_p = x/document.body.scrollWidth * 100;
    tab_top = tab.getBoundingClientRect().top.toFixed(0);
    tab_bottom = tab.getBoundingClientRect().bottom.toFixed(0);
    scroll_position = y/document.body.scrollHeight * 100;

    if(y > 40 && scroll_position < 88 && x_p > 40 && x_p < 60 && (y > tab_top - 25 && y < tab_bottom + 10) ){
        return true;
    }
}

function grab(event){
    if(event.type == 'mousedown'){
         grabbed = true;
    } else {grabbed = false;}
}

document.getElementById("name").onload = type(0);
function type(i){

    var txt = ' Elijah Beard';
    var phone = ' 614-896-0265';
    var addy = ' Athens, Ohio';
    var email = ' elijahbeard24@gmail.com';

    let doc_name = document.getElementById("name");
    let doc_location = document.getElementById("location");
    let doc_phone = document.getElementById("phone");
    let doc_email = document.getElementById("email");
    if(i < left_main.childElementCount){
       document.getElementById("left_main").children[i].style = "opacity:1;";
        document.getElementById("right_main").children[i].style = "opacity:1;";
    }
    
    if(i <= txt.length){
        doc_name.innerHTML += txt.charAt(i);
    } 
    if(i <= phone.length){
        doc_phone.innerHTML += phone.charAt(i);
    } 
    if(i <= addy.length){
        doc_location.innerHTML += addy.charAt(i);
    } 
    if(i <= email.length){
        doc_email.innerHTML += email.charAt(i);
    } else {return}


    setTimeout(() => {
        type(i+1);
    }, 90);
}

document.addEventListener('mousemove',mousemove);
document.addEventListener('mousedown',grab);
document.addEventListener('mouseup',grab);