// difine images

const images = [
    'img/descarga.jpg',
    'img/ferrari-blue.jpg',
    'img/lexus-blue.jpg',
];

// estado

let index = 0;
const max = images.length;

// get the dom elements

const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

// event click arrou

prevSlideButton.addEventListener('click', function () {
    index--;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
  });

  nextSlideButton.addEventListener('click', function () {
    index++;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
  });

// utility function
function setImageIndex(){
    if(index < 0) index = max -1;

    if(index === max) index = 0;
}

function changeBackgroundImage(backgroundImage, element){
    element.style.backgroundImage= `url(${backgroundImage})`;
}
