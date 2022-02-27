var openbtn = document.querySelector(".btn-grad");
var btnclose = document.querySelector(".btn-close");
var state = false;
openbtn.addEventListener("click", function(){
    if(state === false){
        state = true;
        document.querySelector(".modal").style.display = 'flex';
    }
});
btnclose.addEventListener("click", function(){
    if(state === true){
        state = false;
        document.querySelector(".modal").style.display = 'none';
    }
});
window.onload = function() {
    document.querySelector(".modal").style.display = 'none';
  }