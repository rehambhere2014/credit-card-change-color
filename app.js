const colors = document.querySelectorAll('.colors .color');
let shoes= document.querySelectorAll('.shoes');

function changeColor(e){
    let color = this.getAttribute('color');
    colors.forEach(item=>item.classList.remove('active'))
   this.classList.add('active')

   shoes.forEach(item=>item.classList.remove('show'));
   let shoe= document.querySelector(`.shoes[color=${color}]`);
   console.log(shoe);

shoe.classList.add('show');
let gradients= document.querySelectorAll('.gradients .gradient');
gradients.forEach(item=>item.classList.remove('second'));
let gradient= document.querySelector(`.gradient[color=${color}]`);
gradient.classList.add('second')
 document.documentElement.style.setProperty('--primary',e.target.dataset.color)

}
colors.forEach(item=>{
    item.addEventListener('click',changeColor)
})
function changeSize(){
sizes.forEach(item=>item.classList.remove('active'))
this.classList.add('active')
}
const sizes = document.querySelectorAll('.sizes .size');
sizes.forEach(item=>item.addEventListener('click',changeSize))
let x = window.matchMedia("(max-width: 1000px)");

let showBg = document.querySelector('.gridiant-broducts')

function changeHeight(){
if(x.matches){
    let shoesHeight=shoes[0].offsetHeight;

    showBg.style.height=`${shoesHeight*0.9}px`;

}
    showBg.style.height="475px"

}

changeHeight();
window.addEventListener('resize',changeHeight)
