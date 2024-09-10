grabbed = false;

function mousemove(event){
    let tab = document.getElementById("pull_tab");

    const x = event.clientX;
    const y = event.clientY;
    scroll_position = y/document.body.scrollHeight * 100;

    if(grabbed && scroll_position < 96 && is_in_bounding_box(x,y)){
        tab.style.top = `${y}px`;
        tab.style.cursor = "grabbing";
    } else {tab.style.cursor = "grab"}
}

function is_in_bounding_box(x,y){
    let tab = document.getElementById("pull_tab");

    x_p = x/document.body.scrollWidth * 100;
    tab_top = tab.getBoundingClientRect().top.toFixed(0);
    tab_bottom = tab.getBoundingClientRect().bottom.toFixed(0);
    scroll_position = y/document.body.scrollHeight * 100;
    console.log(scroll_position);
    if(y > 100 && scroll_position < 88 && x_p > 40 && x_p < 60 && (y > tab_top - 25 && y < tab_bottom + 10) ){
        return true;
    }
}

function grab(event){
    if(event.type == 'mousedown'){
         grabbed = true;
    } else {grabbed = false;}
}

document.addEventListener('mousemove',mousemove);
document.addEventListener('mousedown',grab);
document.addEventListener('mouseup',grab);