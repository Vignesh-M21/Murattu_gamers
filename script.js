var data1 = window.location.search;
// console.log(data1);
var loading_div = document.getElementById('load_hog');
if (data1 == '?hog'){
    window.onload = ajax_function(hog,loading_div);
}
if(data1 == '?WalkingDeath'){
    window.onload = ajax_function(wd_e1,loading_div);
}
if(data1 == '?DarknessRises'){
    window.onload = ajax_function(dr_ba_1,loading_div);
}
function ajax_function(url,div1){
    
    var xs = window.matchMedia("(max-width: 700px)");
    var link = url;
    // console.log(link);
    var node = div1;
    // console.log(node);
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function(){
      
        var data = xhttp.responseText;
        node.innerHTML = data;
        if(xs.matches){
            char.style.display="none";
            }
        
    };
    xhttp.open('GET',link,true);
    xhttp.send();
    
    let ele = document.querySelector(".auto_ul").querySelectorAll('.custom_video_link');
    ele.forEach(element => {
        element.addEventListener("click",function(){
            ele.forEach(nav => nav.classList.remove('video_active_link'));
            this.classList.add('video_active_link');
        });
    });
}
// function togal

var char = document.getElementById('List_play');
var navplaybar = document.getElementById('navplaybar');
navplaybar.addEventListener('click',function(){
    char.style.display="block";
})
var navclosebar = document.getElementById('navclosebar');
navclosebar.addEventListener('click',function(){
    char.style.display="none";
})
