var sliders = document.querySelectorAll('#slider img');
var slider = document.querySelector('#slider .image');

var width  = sliders[0].offsetWidth;
var position = 0 ;
console.log(sliders[0].offsetWidth)
var slide = function(){
    position += width ;
    if ( position >= ( width * ( slider.length - 1))  ) {
        position  = 0 ;
    }
    slider.style.transform  = 'translate(-'+ position + 'px)' ;
};

setInterval( function(){
    slide();
}, 4000)