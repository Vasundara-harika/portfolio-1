(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);



const textElement = document.getElementById("typingEffect");
const phrases = [
    "I am a student",
    "I love to code",
    "I love to build",
    "I love to explore"
];
let index = 0;
let charIndex = 0;
let isDeleting = false;
let isTypingConstant = true;
const highlightColor = "#faa914";

function typeEffect() {
    let fullPhrase = phrases[index];
    let staticPart = "";
    let dynamicPart = "";
    
    if (index === 0) {
        staticPart = "I am a ";
        dynamicPart = "Student";
    } else if (index === 1) {
        staticPart = "I love to ";
        dynamicPart = "Code";
    } else if (index === 2) {
        staticPart = "I love to ";
        dynamicPart = "Build";
    } else if (index === 3) {
        staticPart = "I love to ";
        dynamicPart = "Explore";
    }

    let displayText = dynamicPart.substring(0, charIndex);
    let coloredText = displayText.split('').map(char => `<span style="color: ${highlightColor};">${char}</span>`).join('');
    textElement.innerHTML = `<span class="text-white">${staticPart}</span><span>${coloredText}</span>`;

    if (!isDeleting) {
        if (charIndex < dynamicPart.length) {
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            isDeleting = false;
            index = (index + 1) % phrases.length;
            setTimeout(typeEffect, 500);
        }
    }
}

typeEffect();


const textElementNew = document.getElementById("typingEffectNew");
    const phrasesNew = [
        "I know Python", 
        "I know JavaScript", 
        "I know SQL", 
        "I know C++", 
        "I know HTML", 
        "I know CSS"
        
    ];

    let newIndex = 0;
    let newCharIndex = 0;
    let isDeletingNew = false;
    const dynamicColor = "#2622a8";  // Color for the dynamic text (JavaScript, SQL, etc.)
    const staticColor = "black";  // Color for the static part ("I know")

    // Function to handle the typing effect
    function typingEffectNew() {
        let fullPhrase = phrasesNew[newIndex];
        let staticPart = "I know ";
        let dynamicPart = "";

        if (newIndex === 0) {
            dynamicPart = "Python";
        } else if (newIndex === 1) {
            dynamicPart = "JavaScript";
        } else if (newIndex === 2) {
            dynamicPart = "SQL";
        } else if (newIndex === 3) {
            dynamicPart = "C++";
        } else if (newIndex === 4) {
            dynamicPart = "HTML";
        } else if (newIndex === 5) {
            dynamicPart = "CSS";
        }

        // Create the dynamic part with colored text
        let displayText = dynamicPart.substring(0, newCharIndex);
        let coloredText = displayText.split('').map(char => `<span style="color: ${dynamicColor};">${char}</span>`).join('');
        textElementNew.innerHTML = `<span style="color: ${staticColor};">${staticPart}</span><span>${coloredText}</span>`;

        // Typing animation
        if (!isDeletingNew) {
            if (newCharIndex < dynamicPart.length) {
                newCharIndex++;
                setTimeout(typingEffectNew, 100);  // Continue typing
            } else {
                isDeletingNew = true;
                setTimeout(typingEffectNew, 1000);  // Pause before deleting
            }
        } else {
            if (newCharIndex > 0) {
                newCharIndex--;
                setTimeout(typingEffectNew, 50);  // Continue deleting
            } else {
                isDeletingNew = false;
                newIndex = (newIndex + 1) % phrasesNew.length;  // Cycle through phrases
                setTimeout(typingEffectNew, 500);  // Pause before moving to next phrase
            }
        }
    }

    // Start the typing effect
    typingEffectNew();

    