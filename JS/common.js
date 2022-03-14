$('.slider1').slick({
    dots: true,
    // arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode: true,
    adaptiveHeight: true,
    // centerPadding: '0px',
});

$('.slider2').slick({
    dots: true,
    // arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // centerMode: true,
    adaptiveHeight: true,
    centerPadding: '0px',
    prevArrow: false,
    nextArrow: false,
});

const button = document.querySelector(".card .addtocart");
const done = document.querySelector(".done");
console.log(button);
let added = false;
button.addEventListener('click', () => {
    if (added) {
        done.style.transform = "translate(-110%) skew(-40deg)";
        added = false;
    } else {
        done.style.transform = "translate(0px)";
        added = true;
    }

});

var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
    loader.style.transitionDelay = "4s";
})

// Select Change
$('#filterSelector').change(function() {

    var category = $(this).val();

    if (category === 'all') {
        $('#cardWrap > div').fadeIn(450);
    } else {
        $('#cardWrap > div').fadeIn(450);
        $('#cardWrap > div').not('.' + category).hide();
    }

});