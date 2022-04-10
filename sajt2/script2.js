const arrowUpBtn=document.querySelector('#arrow-up-btn');

window.addEventListener('scroll',checkHeight);

function checkHeight(){
    if(window.scrollY > 600){
        arrowUpBtn.style.display="flex";
    }
    else{
        arrowUpBtn.style.display="none";
    }
}

arrowUpBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})
