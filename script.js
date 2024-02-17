//form JQuery

$('.form').submit(function (event) {
    var validateName = document.querySelector('#name').value;
    var validateUsername = document.querySelector('#username').value;
    var validateEmail = document.querySelector('#email').value;
    var validateMessage = document.querySelector('#message-box').value;
    var first = document.querySelector('#nameError');
    var second = document.querySelector('#usernameError');
    var third = document.querySelector('#emailError');
    var fourth = document.querySelector('#messageError');
    var nameRegex = /^[A-Za-z\s]+$/;
    var usernameRegex = /^[A-Za-z0-9_]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var messageRegex = /^[A-Za-z0-9\s.,!?]+$/;
    if (validateName === "") {
        $('#nameError').text("Please Enter Your Name!");
        event.preventDefault();
    } else {
        $('#nameError').text("");
    };
    if (!nameRegex.test(validateName)) {
        $('#nameError').text("Please Enter Your Name!");
        event.preventDefault();
    } else if (validateName.length <= 3) {
        $('#nameError').text("Your Name Should Consist Of More Than 3 Letters!");
        event.preventDefault();
    };
    if (validateUsername === "") {
        $('#usernameError').text("Please Enter Yout Username!");
        event.preventDefault();
    } else {
        $('#usernameError').text("");
    };
    if (!usernameRegex.test(validateUserame)) {
        $('#usernameError').text("Only Aphabets Are Allowed!");
        event.preventDefault();
    } else if (validateUsername.length <= 3) {
        $('#usernameError').text("Your Username Should Consist Of More Than 3 Letters!");
        event.preventDefault();
    };
    if (validateEmail === "") {
        $('#emailError').text("Please Enter Your Email Address!");
        event.preventDefault();
    } else {
        $('#emailError').text("");
    };
    if (!emailRegex.test(validateEmail)) {
        $('#emailError').text("Enter In Correct Format!");
        event.preventDefault();
    } else if (validateEmail.length <= 3) {
        $('#emailError').text("Your Email Should Consist Of More Than 3 Characters!");
        event.preventDefault();
    };
    if (validateMessage === "") {
        $('#messageError').text("Please Enter A Message!");
        event.preventDefault();
    } else {
        $('#messageError').text("");
    };
});

// Gallery JQuery

$(document).ready(function () {
    $('.filter').click(function () {
        var filters = $(this).attr('data-filter');

        $('.gall-img, .garment, .home, .kitchen').hide();
        if (filters === 'All') {
            $('.gall-img').show(400);
        } else if (filters === 'Garments') {
            $('.garments').show(400);
        } else if (filters === 'Home_textile') {
            $('.home').show(400);
        } else if (filters === 'Kitchen_textile') {
            $('.kitchen').show(400);
        };

        $('.gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
});


// Accordion JQuery 
$(document).ready(function () {
    $('.item-header').click(function () {
        var accordionItem = $(this).parent();
        accordionItem.toggleClass('active');
        accordionItem.siblings().removeClass('active');
    });
});

// Slider JQuery
$(document).ready(function () {

    $('.sliders').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        // speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
})