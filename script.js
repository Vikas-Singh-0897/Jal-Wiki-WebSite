var wc_read_more = document.getElementById('wc_read_more');
var wc_more = document.getElementById('wc_more');
function wc_readMore(){
    if(wc_more.style.display === 'none'){
        wc_more.style.display = 'inline';
        wc_read_more.innerHTML = `Read Less...`;
    } else{
        wc_more.style.display = 'none';
        wc_read_more.innerHTML = `Read More...`;
    }
}

var wm_read_more = document.getElementById('wm_read_more');
var wm_more = document.getElementById('wm_more');
function wm_readMore(){
    if(wm_more.style.display === 'none'){
        wm_more.style.display = 'inline';
        wm_read_more.innerHTML = `Read Less..`;
    } else{
        wm_more.style.display = 'none';
        wm_read_more.innerHTML = `Read More...`;
    }
}

var wwc_read_more = document.getElementById('wwc_read_more');
var wwc_more = document.getElementById('wwc_more');
function wwc_readMore(){
    if(wwc_more.style.display === 'none'){
        wwc_more.style.display = 'inline';
        wwc_read_more.innerHTML = `Read Less...`;
    } else{
        wwc_more.style.display = 'none';
        wwc_read_more.innerHTML = `Read More...`;
    }
}

var bwm_read_more = document.getElementById('bwm_read_more');
var bwm_more = document.getElementById('bwm_more');
function bwm_readMore(){
    if(bwm_more.style.display === 'none'){
        bwm_more.style.display = 'inline';
        bwm_read_more.innerHTML = `Read Less..`;
    } else{
        bwm_more.style.display = 'none';
        bwm_read_more.innerHTML = `Read More...`;
    }
}