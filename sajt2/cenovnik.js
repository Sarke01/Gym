const slika=document.getElementById('cenovnik-picture');
const slika2=document.getElementById('cenovnik-picture1');
const table1=document.getElementById('table-1');
const dugme=document.getElementById('prices');
const dugme1=document.getElementById('prices1');

dugme.addEventListener('click',function(){
    slika.style.opacity=0;
    dugme.style.opacity=0;
    
})

dugme1.addEventListener('click',function(){
    slika2.style.opacity=0;
    dugme1.style.opacity=0;
    
})
