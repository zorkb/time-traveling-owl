//time and place object
const timePlace = {
    location: null,
    year: null,
    dayCount: 0,
    increaseDayCount: null,

    increment: () => {
        timePlace.dayCount++;
        // console.log(timePlace.dayCount);
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
    increaseHunger: null,
    boredom: 5,
    increaseBoredom: null,
    fatigue: 3,
    increaseFatigue: null,

    incrementHunger: () => {
        owlStats.hunger++;
        console.log(owlStats.hunger);
        if(owlStats.hunger === 10) {
            clearInterval(timePlace.increaseDayCount);
            clearInterval(owlStats.increaseHunger);
            clearInterval(owlStats.increaseBoredom);
            clearInterval(owlStats.increaseFatigue);
            // alert(`your owl got too hungry and flew away. better luck next time!`);
            $pageText.show();
            $pageText.html(`oh no! ${owlStats.owlName} got too hungry and escaped! better luck next time with a different owl.
            
            your streak was ${timePlace.dayCount} days.`);
            // $hungerLi.hide();
            // $boredomLi.hide();
            // $fatigueLi.hide();
            // $dayLi.hide();
            // $yearLi.hide();
            // $locLi.hide();
            // $nameLi.hide();
            $gameBox.hide();
            $owl.hide();
            $sleepOwl.hide();
            $flower.show();
        }
        $hungerLi.html(`hunger: ${owlStats.hunger}`);
    },

    incrementBoredom: () => {
        owlStats.boredom++;
        console.log(owlStats.boredom);
        if(owlStats.boredom === 10) {
            clearInterval(timePlace.increaseDayCount);
            clearInterval(owlStats.increaseHunger);
            clearInterval(owlStats.increaseBoredom);
            clearInterval(owlStats.increaseFatigue);
            // alert(`your owl got too bored and flew away. better luck next time!`);
            $pageText.show();
            $pageText.html(`oh no! ${owlStats.owlName} got too bored and escaped! better luck next time with a different owl.
            
            your streak was ${timePlace.dayCount} days.`);

            $gameBox.hide();
            $owl.hide();
            $sleepOwl.hide();
            $flower.show();
            }
        $boredomLi.html(`boredom: ${owlStats.boredom}`);
        // if(owlStats.boredom > 6) {
        //     $owl.hide();
        //     $sadOwl.show();
        // } else if($sleepOwl.show() = true) {
        //     $sadOwl.hide();
        // }else{
        //     $sadOwl.hide();
        //     $owl.show();
        // }
    },

    incrementFatigue: () => {
        owlStats.fatigue++;
        console.log(owlStats.fatigue);
        if(owlStats.fatigue === 10) {
            clearInterval(timePlace.increaseDayCount);
            clearInterval(owlStats.increaseHunger);
            clearInterval(owlStats.increaseBoredom);
            clearInterval(owlStats.increaseFatigue);
            // alert(`your owl got too tired and flew away. better luck next time!`);
            $pageText.show();
            $pageText.html(`oh no! ${owlStats.owlName} got too tired and escaped!

            better luck next time with a different owl.
            
            your streak was ${timePlace.dayCount} days.`);
            
            $gameBox.hide();
            $owl.hide();
            $sleepOwl.hide();
            $flower.show();
        }
        $fatigueLi.html(`fatigue ${owlStats.fatigue}`);
        
        // if(owlStats.fatigue > 6) {
        //     $owl.hide();
        //     $sadOwl.show();
        // } 
    },
}

//time-travel location image array
locationImgs = [
    'https://now.tufts.edu/sites/default/files/191105_berlin_wall_scharioth_lg.jpg', 
    'https://i.pinimg.com/originals/96/ff/ef/96ffef70fcd2f69e0d32d1bcbd8f514b.png',
    ''
]

// const timer = setInterval(countHours, 1000);

//DOM
let $startButton = $('#start');
let $introScreen = $('.intro-screen');
let $gameBox = $('.game-box');
let $gameScreen = $('.game-screen');
let $topStuff = $('.action, .time-travel, .time-place, .owl-stats');
let $warmEgg = $('.warm-egg');
let $egg = $('.egg');
let $hatch = $('.hatch');
let $owl = $('.owl');
let $sleepOwl = $('.sleep-owl');
let $sadOwl = $('.sad-owl');
let $flower = $('.flower');
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
let $sleep = $('#sleep-wake');
let $wake = $('#wake');
let $timeTravel = $('.time-travel')

//function to hide elements
function hideGame() {
    $gameScreen.hide();
    $topStuff.hide();
    $hatch.hide();
    $owl.hide();
    $sleepOwl.hide();
    $sadOwl.hide();
    $flower.hide();
    $('.start-game').hide();
    $('.owl-name-input, .save').hide();
}

//functions to increment stats
function handleDayCount() {
    timePlace.increaseDayCount = setInterval(timePlace.increment, 1000 * 15);
}

function handleHungerCount() {
    owlStats.increaseHunger = setInterval(owlStats.incrementHunger, 1000);
}

function handleBoredomCount() {
    owlStats.increaseBoredom = setInterval(owlStats.incrementBoredom, 1000 * 5);
}

function handleFatigueCount() {
    owlStats.increaseFatigue = setInterval(owlStats.incrementFatigue, 1000 * 10);
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
    $('.start-game').show();
    

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

$sleep.on('click', function() {
    if(owlStats.fatigue < 10 && owlStats.fatigue > 0) {
        owlStats.fatigue--;
        $fatigueLi.html(`fatigue: ${owlStats.fatigue}`);
        console.log('fatigue -1');

        $owl.hide();
        $sadOwl.hide();
        $sleepOwl.show();
    }
});

$wake.on('click', function() {
    $sleepOwl.hide();
    $sadOwl.hide();    
    $owl.show();    
    }
);

$timeTravel.on('click', function() {
    $('.body').css
})

$('.start-game').on('click', function(){
    handleDayCount();
    handleHungerCount();
    handleBoredomCount();
    handleFatigueCount();
    $pageText.hide();
    $('.start-game').hide();
});


//lose game
function loseGameBored() {
    if (owlStats.boredom === 10) {
        $pageText.html(`oh no! ${owlStats.owlName} got too bored and escaped!

        better luck next time with a different owl.
        
        your streak was ${timePlace.dayCount} days.`);
        $hungerLi.hide();
        $boredomLi.hide();
        $fatigueLi.hide();
        $dayLi.hide();
        $yearLi.hide();
        $locLi.hide();
    }
}

function loseGameHungry() {
    if (owlStats.hunger === 10) {
        $pageText.html(`oh no! ${owlStats.owlName} got too hungry and escaped!

        better luck next time with a different owl.
        
        your streak was ${timePlace.dayCount} days.`);
        $hungerLi.hide();
        $boredomLi.hide();
        $fatigueLi.hide();
        $dayLi.hide();
        $yearLi.hide();
        $locLi.hide();
    }
}

function loseGameTired() {
    if (owlStats.fatigue === 10) {
        $pageText.html(`oh no! ${owlStats.owlName} got too tired and escaped!

        better luck next time with a different owl.
        
        your streak was ${timePlace.dayCount} days.`);
        $hungerLi.hide();
        $boredomLi.hide();
        $fatigueLi.hide();
        $dayLi.hide();
        $yearLi.hide();
        $locLi.hide();
    }
}

//calls
hideGame();
loseGameBored();
loseGameHungry();
loseGameTired();





