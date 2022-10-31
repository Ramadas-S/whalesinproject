
const mainmenu =document.querySelector('.mainmenu');
const closemenu =document.querySelector('.closemenu');
const openmenu =document.querySelector('.openmenu');


openmenu.addEventListener('click',show);
closemenu.addEventListener('click',close);

function show(){
    mainmenu.style.display='flex';
    mainmenu.style.top='0';

}
function close(){
    
    mainmenu.style.top='-100%';

}


// scroll to top

const scrolltp=document.querySelector('#scrolltp');
scrolltp.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    });
})
window.addEventListener('scroll',function(){
    if(window.scrollY>=700){
        scrolltp.style.opacity=1;
    }else{
        scrolltp.style.opacity=0;
    }
})