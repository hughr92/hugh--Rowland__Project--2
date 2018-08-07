
console.log('ready');
// ABOUT US SCROLL
const leftArrow = $('.fa-angle-left');
const rightArrow = $('.fa-angle-right');
const galleryContainer = $('.aboutUs__portrait__imageContainer');
const galleryImage = $('.aboutUs__portrait__image');

let scrollItem = 0;

// number = 1;

let galleryText = $(`.aboutUs__textContainer__text`);
let galleryAuthor = $(`.aboutUs__textContainer__author`);


console.log(galleryText);

// galleryText.css('display', 'none');



$(rightArrow).on('click', function () {
    if (scrollItem < 4) {
        scrollItem = scrollItem + 1;

        //text
        galleryText.css('display', 'none');

        $(`.aboutUs__textContainer__text--${scrollItem + 1}`).css('display', 'block');

        //author
        galleryAuthor.css('display', 'none');

        $(`.aboutUs__textContainer__author--${scrollItem + 1}`).css('display', 'block');


        $(galleryImage).css('transform', `translateX(-${scrollItem * 100}%)`);


    } else {
        console.log('end of the line');
    }
    console.log(scrollItem);

    if (scrollItem == 4) {
        rightArrow.css('color', 'grey');
    } else if (scrollItem == 0) {
        leftArrow.css('color', 'grey');
    } else {
        rightArrow.css('color', 'white');
        leftArrow.css('color', 'white');
    }



});

//default
leftArrow.css('color', 'grey');

$(leftArrow).on('click', function () {
    //adjust based on number of elements
    if (scrollItem > 0) {
        scrollItem = scrollItem - 1;

        $(galleryImage).css('transform', `translateX(-${scrollItem * 100}%)`);

        //text
        galleryText.css('display', 'none');

        $(`.aboutUs__textContainer__text--${scrollItem + 1}`).css('display', 'block');

        //author
        galleryAuthor.css('display', 'none');

        $(`.aboutUs__textContainer__author--${scrollItem + 1}`).css('display', 'block');


        $(galleryImage).css('transform', `translateX(-${scrollItem * 100}%)`);


    } else {
        console.log('end of the line');
    }
    console.log(scrollItem);

    if (scrollItem == 4) {
        rightArrow.css('color', 'grey');
    } else if (scrollItem == 0) {
        leftArrow.css('color', 'grey');
    } else {
        rightArrow.css('color', 'white');
        leftArrow.css('color', 'white');
    }

});








//PROJECT BUTTONS
const projectLeft = $('.projects__container__button--left');
const projectRight = $('.projects__container__button--right');
const projectContainer = $('.projects__container');

let projectItem = 0;

let w = window.innerWidth;
console.log(w);

console.log(projectItem);

//default
// projectLeft.css('background-color', 'grey');

projectRight.on('click', function () {
    if (w <= 500 && projectItem < 3) {
        projectItem = projectItem + 1;
        console.log(projectItem);
        projectContainer.css('transform', `translateX(-${projectItem * 25}%)`);
    }
    else if (w <= 700 && projectItem < 2) {
        projectItem = projectItem + 1;
        console.log(projectItem);
        projectContainer.css('transform', `translateX(-${projectItem * 25}%)`);
    }
    else if (w <= 900 && projectItem < 1) {
        projectItem = projectItem + 1;
        console.log(projectItem);
        projectContainer.css('transform', `translateX(-${projectItem * 25}%)`);
    }
    else {
        console.log('end');
    }

});

projectLeft.on('click', function () {
    if (w <= 500 && projectItem > 0) {
        projectItem = projectItem - 1;
        console.log(projectItem);
        projectContainer.css('transform', `translateX(-${projectItem * 25}%)`);
    }
    else if (w <= 700 && projectItem > 0) {
        projectItem = projectItem - 1;
        console.log(projectItem);
        projectContainer.css('transform', `translateX(-${projectItem * 25}%)`);
    }
    else if (w <= 900 && projectItem > 0) {
        projectItem = projectItem - 1;
        console.log(projectItem);
        projectContainer.css('transform', `translateX(-${projectItem * 25}%)`);
    }
    else {
        console.log('end');
        console.log(projectItem);
    }
});

// window.onresize = function () {
//     projectItem = 0;
//     projectContainer.css('transform', `translateX(-${projectItem * 25}%)`);
//     w = window.innerWidth;
// };



$(".serviceCard--4__section--ui").on('click', function () {
    $('.serviceCard__list--ui').addClass("up");
});

$('.serviceCard__list--ui').on('click', function () {
    $(this).removeClass('up');
});



$(".serviceCard--4__section--programming").on('click', function(){
    $('.serviceCard__list--programming').addClass("up");
});

$('.serviceCard__list--programming').on('click', function(){
    $(this).removeClass('up');
});



$(".serviceCard--4__section--analysis").on('click', function () {
    $('.serviceCard__list--analysis').addClass("up");
});

$('.serviceCard__list--analysis').on('click', function () {
    $(this).removeClass('up');
});


// TEAM SCROLLING

const teamArrowLeft = $('.team__arrow--left');
const teamArrowRight = $('.team__arrow--right');
const teamFigure1 = $('.team__figure--1');
const teamFigure2 = $('.team__figure--2');
const teamFigure3 = $('.team__figure--3');

let teamPosition = 1;

teamArrowRight.on('click', function(){
    if (teamPosition < 3) {
        teamPosition = teamPosition + 1;
        teamFigure1.css('display', 'none');
        teamFigure2.css('display', 'none');
        teamFigure3.css('display', 'none');
  
        $(`.team__figure--${teamPosition}`).css('display', 'block');

        console.log(teamPosition)

        if (teamPosition == 3) {
            teamArrowRight.css('background-color', 'grey');
        }

        if (teamPosition > 1) {
            teamArrowLeft.css('background-color', 'black');
        }

    } else {
        console.log('nah');
    }
});

// DEFAULT
teamArrowLeft.css('background-color', 'grey');

teamArrowLeft.on('click', function () {
    if (teamPosition > 1) {
        teamPosition = teamPosition - 1;
        teamFigure1.css('display', 'none');
        teamFigure2.css('display', 'none');
        teamFigure3.css('display', 'none');

        $(`.team__figure--${teamPosition}`).css('display', 'block');

        if (teamPosition < 3) {
            teamArrowRight.css('background-color', 'black');
        }

        if (teamPosition == 1) {
            teamArrowLeft.css('background-color', 'grey');
        }

        

    } else {
        console.log('nah');
    }
});

window.onresize = function () {
    w = window.innerWidth;
    console.log(w);
    if(w > 850) {
        $('.team__figure').css('display', 'block');
    }
    if (w < 850) {
        $('.team__figure').css('display', 'none');
        $('.team__figure--1').css('display', 'block');
    }
    teamPosition = 1;
    teamArrowLeft.css('background-color', 'grey');
    teamArrowRight.css('background-color', 'black');

    projectItem = 0;
    projectContainer.css('transform', `translateX(-${projectItem * 25}%)`);
    
    console.log('commit worked');
};

// SMOOTH SCROLL

$('a').smoothScroll({
    speed: 900
});

$("#welcomeButton").click(function () {
    $('html, body').animate({
        scrollTop: $("#welcome").offset().top
    }, 1000);
});



