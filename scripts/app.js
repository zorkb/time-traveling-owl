//time and place object
const timePlace = {
    location: null,
    year: null,
    dayCount: 0,
    increaseDayCount: null,

    increment: () => {
        timePlace.dayCount++;
        console.log(timePlace.dayCount);
        if(timePlace.dayCount === 50) {
            clearInterval(timePlace.increaseDayCount);
        }
        $dayLi.html(`day count: ${timePlace.dayCount}`);
    }
}

//owl object
const owlStats = {
    owlName: null,
    hunger: 4,
    boredom: 5,
    fatigue: 3,

    increment: () => {
        timePlace.dayCount++;
        console.log(timePlace.dayCount);
        if(timePlace.dayCount === 50) {
            clearInterval(timePlace.increaseDayCount);
        }
        $dayLi.html(`day count: ${timePlace.dayCount}`);
    }
}

// const timer = setInterval(countHours, 1000);

//DOM
let $startButton = $('#start');
let $introScreen = $('.intro-screen');
let $gameScreen = $('.game-screen');
let $topStuff = $('.action, .time-travel, .time-place, .owl-stats');
let $warmEgg = $('.warm-egg');
let $egg = $('.egg');
let $hatch = $('.hatch');
let $owl = $('.owl');
let $sleepOwl = $('.sleep-owl');
let $pageText = $('.page-text');
//li definitions
let $locLi = $('.loc');
let $yearLi = $('.year');
let $dayLi = $('.day-count');
let $nameLi = $('.name');
let $hungerLi = $('.hunger');
let $boredomLi = $('.boredom');
let $fatigueLi = $('.fatigue');
//buttons
let $feed = $('#feed');
let $book = $('#book');
let $sleepWake = $('#sleep-wake');

//functions
function hideGame() {
    $gameScreen.hide();
}
function hideTopStuff() {
    $topStuff.hide();
}
function hideEvolution() {
    $hatch.hide();
    $owl.hide();
    $sleepOwl.hide();
}

function hideSave() {
    $('.owl-name-input, .save').hide();
}

function handleDayCount() {
    timePlace.increaseDayCount = setInterval(timePlace.increment, 1000 * 20);
}

function handleHungerCount() {

}


//eventListeners
$startButton.on('click', function() {
    console.log('game started');
    $introScreen.remove();
    $gameScreen.show();
});

$warmEgg.on('click', function() {
    console.log('egg warming!');
    $egg.hide();
    // $hatch.show('slow'); <= struggling to get 2 part transition
    // $hatch.delay(1000);
    // $hatch.hide('slow');
    $owl.show('slow');
    $warmEgg.hide();
    $topStuff.show();
    // countDays();

    //stat appends
    $hungerLi.append(`${owlStats.hunger}`);
    $boredomLi.append(`${owlStats.boredom}`);
    $fatigueLi.append(`${owlStats.fatigue}`);

    //place and time appends
    $locLi.append(`${`Secret Lab`}`);
    $yearLi.append(`${`2021`}`);
    $dayLi.append(`${timePlace.dayCount}`);

    $pageText.html(`whoa - it's a mysterious time-traveling owl! what will you name it?`)
    $('.owl-name-input, .save').show();
})

$('.save').on('click', function() {
    console.log('saved');
    owlStats.owlName = $('.owl-name-input').val();
    console.log(owlStats.owlName);

    //show owl name
    $nameLi.append(`${owlStats.owlName}`);
    

    //hide name input
    $('.owl-name-input, .save').hide();

    //message to user
    $pageText.html(`${owlStats.owlName}... that’s a great name!
    <br /><br />
    click the "feed" and "entertain" buttons to make sure it doesn't get too hungry or bored. and put it to bed at a reasonable hour, please!
    <br /><br />
    you may also travel through time with your new pet...`);
});

//button actions
$feed.on('click', function() {
    if(owlStats.hunger < 10 && owlStats.hunger > 0) {
        owlStats.hunger--;
        $hungerLi.html(`hunger: ${owlStats.hunger}`);
        console.log('hunger -1');
    }
});

$book.on('click', function() {
    if(owlStats.boredom < 10 && owlStats.boredom > 0) {
        owlStats.boredom--;
        $boredomLi.html(`boredom: ${owlStats.boredom}`);
        console.log('boredom -1');
    }
});

$sleepWake.on('click', function() {
    if(owlStats.fatigue < 10 && owlStats.fatigue > 0) {
        owlStats.fatigue--;
        $fatigueLi.html(`fatigue: ${owlStats.fatigue}`);
        console.log('fatigue -1');

        $owl.toggle();
        $sleepOwl.toggle();
    } else if(owlStats.fatigue === 0) {
        $owl.toggle();
        $sleepOwl.toggle();
    }
});

//lose game


//calls
hideGame();
hideTopStuff();
hideEvolution();
hideSave();
handleDayCount();


