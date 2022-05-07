// ===========================================
//             Nav_bar
// ===========================================
//document.addEventListener("DOMContentLoaded",function(){
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// ===========================================
//             Slider
// ===========================================

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// });

// ===========================================
//             Range
// ===========================================

(function () {

    function addSeparator(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        return x1 + x2;
    }

    function rangeInputChangeEventHandler(e) {
        var rangeGroup = $(this).attr('name'),
            minBtn = $(this).parent().children('.min'),
            maxBtn = $(this).parent().children('.max'),
            range_min = $(this).parent().children('.range_min'),
            range_max = $(this).parent().children('.range_max'),
            minVal = parseInt($(minBtn).val()),
            maxVal = parseInt($(maxBtn).val()),
            origin = $(this).context.className;

        if (origin === 'min' && minVal > maxVal - 5) {
            $(minBtn).val(maxVal - 5);
        }
        var minVal = parseInt($(minBtn).val());
        $(range_min).html(addSeparator(minVal * 1000) + ' €');


        if (origin === 'max' && maxVal - 5 < minVal) {
            $(maxBtn).val(5 + minVal);
        }
        var maxVal = parseInt($(maxBtn).val());
        $(range_max).html(addSeparator(maxVal * 1000) + ' €');
    }

    $('input[type="range"]').on('input', rangeInputChangeEventHandler);
})();


// ===========================================
//             Toggle
// ===========================================


$("#coupon_question").on("change", function () {
    $(".answer").toggle(this.checked);
    if (this.checked) {
        $(".number_col_lg").removeClass("width_toggle");
    } else {
        $(".number_col_lg").addClass("width_toggle");
    }
});

// ===========================================
//             Product_Slider
// ===========================================


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}


function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo_1");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    if(slideIndex == ''){

        console.log(slideIndex)
        
    }else{
        x[slideIndex - 1].style.display='block';
        console.log(slideIndex)
        dots[slideIndex - 1].className += "w3-opacity-off";
    }
}

// ===========================================
//             Incre/Decre
// ===========================================

//$(document).ready(function () {
    const minus = $('.quantity__minus');
    const plus = $('.quantity__plus');
    const input = $('.quantity__input');
    minus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        if (value > 1) {
            value--;
        }
        input.val(value);
    });

    plus.click(function (e) {
        e.preventDefault();
        var value = input.val();
        value++;
        input.val(value);
    })
//});

// ===========================================
//             Inquiry PopUp
// ===========================================

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onClick = function () {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onClick = function () {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onClick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// });







