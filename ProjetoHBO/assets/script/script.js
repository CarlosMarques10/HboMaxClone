
let totalSlides = document.querySelectorAll('.sliderItem').length;
let currentSlide = 0;

document.querySelector('.sliderWidth').style.width = `calc(1200px * ${totalSlides})`;


function updateMargin(){
    let newMargin = (currentSlide * 1200);
    document.querySelector('.sliderWidth').style.marginLeft = `-${newMargin}px`; 

}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }

    updateMargin();
})


document.querySelector('.prev').addEventListener('click', () => {
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }

    updateMargin();
})


var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {

    // Fecha todos os acordeões abertos
    for (var j = 0; j < accordions.length; j++) {
      if (accordions[j] !== this) {
        accordions[j].classList.remove("active");
        accordions[j].nextElementSibling.classList.remove("active");
      }
    }

    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
    } else {
      panel.classList.add("active");
    }
  });
}


const planosConteudoInfo = document.querySelector('#planosConteudoInfo');

document.querySelector('#planosConteudo p').addEventListener('click',()=>{

  if(planosConteudoInfo.style.display == 'none'){
    planosConteudoInfo.style.display = 'flex'
  }else{
    planosConteudoInfo.style.display = 'none'
  }

})