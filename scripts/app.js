//time and place object
const timePlace = {
    location: null,
    year: null,
    dayCount: 0,
    increaseDayCount: null,

    increment: () => {
        timePlace.dayCount++;
        // console.log(timePlace.dayCount);
        if(timePlace.dayCount === 10) {
            //stop all counts at end of game
            clearInterval(timePlace.increaseDayCount);
            clearInterval(owlStats.increaseHunger);
            clearInterval(owlStats.increaseBoredom);
            clearInterval(owlStats.increaseFatigue);
            //win scenario
            $pageText.show();
            $pageText.html(`way to go! you kept ${owlStats.owlName} for the maximium amount of time before ascending to a new plane of existence! try again to see if you can shepherd another owl through our current life sphere!`
            );

            $gameBox.hide();
            $owl.hide();
            $sleepOwl.hide();
            $flower.show();
            $playAgain.show();
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
            //stop all counts at end of game
            clearInterval(timePlace.increaseDayCount);
            clearInterval(owlStats.increaseHunger);
            clearInterval(owlStats.increaseBoredom);
            clearInterval(owlStats.increaseFatigue);
            //lose messages
            $pageText.show();
            $pageText.html(`oh no! ${owlStats.owlName} got too hungry and escaped! better luck next time with a different owl.
            
            your streak was ${timePlace.dayCount} days.`);

            $gameBox.hide();
            $owl.hide();
            $sleepOwl.hide();
            $flower.show();
            $playAgain.show();
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
            $pageText.show();
            $pageText.html(`oh no! ${owlStats.owlName} got too bored and escaped! better luck next time with a different owl.
            
            your streak was ${timePlace.dayCount} days.`);

            $gameBox.hide();
            $owl.hide();
            $sleepOwl.hide();
            $flower.show();
            $playAgain.show();
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
            $pageText.show();
            $pageText.html(`oh no! ${owlStats.owlName} got too tired and escaped! better luck next time with a different owl.
            
            your streak was ${timePlace.dayCount} days.`);
            
            $gameBox.hide();
            $owl.hide();
            $sleepOwl.hide();
            $flower.show();
            $playAgain.show();
        }
        $fatigueLi.html(`fatigue ${owlStats.fatigue}`);
    },
}

//time-travel location image array
const locationImgs = [
    'https://www.google.com/search?q=fall%20of%20berlin%20wall&tbm=isch&tbs=isz:l&hl=en&sa=X&ved=0CAIQpwVqFwoTCPi624elk_MCFQAAAAAdAAAAABAC&biw=1326&bih=758#imgrc=2LxmZmLYSw2WDM', 
    'https://i.pinimg.com/originals/96/ff/ef/96ffef70fcd2f69e0d32d1bcbd8f514b.png',
    'https://www.rollingstone.com/wp-content/uploads/2018/06/beatles-in-india-9c736b8e-0cd0-4c55-9535-35db0341564d.jpg',
    'https://nypost.com/wp-content/uploads/sites/2/2020/02/81376702.jpg?quality=80&strip=all',
    'https://www.guyanapalace.com/wp-content/uploads/2020/06/Nelson-Mandela-750x430-1-2100x1200.jpg',
    'https://i2.wp.com/indieshortfest.com/wp-content/uploads/2020/09/Photo-7-Robot_Apocalypse_Image11_Son_Jake.jpg?ssl=1',
    'https://cdn-japantimes.com/wp-content/uploads/2020/06/np_file_14038.jpeg',
    'https://www.travelingmom.com/wp-content/uploads/2021/07/Bristol-renaissance-faire-queens-court-scaled.jpg',
    'https://digida.co.uk/wp-content/uploads/2019/05/Wild-West-1080x675.jpg',
    'https://lh3.googleusercontent.com/proxy/g8bashYumsnESE7gGpiu5Ua1FBSL71uC_q0cSTBbbkTLQ7qwoplHRMZ91btRTYwFsAmlKrzyPY4HHom6uH2ZMJKkReyR1kr3XlENIQHULxSSAV4xTCi3CuBKJgNHjy4hPio',
    'https://www.chicagotribune.com/resizer/VkrRClBdab1jHdh8XWLm5WCxO_Q=/1200x0/top/www.trbimg.com/img-534da41d/turbine/ct-back-to-the-future-2015-20140415',
];

// const timer = setInterval(countHours, 1000);

//DOM
//start screen
let $startButton = $('#start');
let $introScreen = $('.intro-screen');
//initiate game
let $gameBox = $('.game-box');
let $gameScreen = $('.game-screen');
let $topStuff = $('.action, .time-travel, .time-place, .owl-stats');
//graphics - not all used at this point
let $warmEgg = $('.warm-egg');
let $egg = $('.egg');
let $hatch = $('.hatch');
let $owl = $('.owl');
let $sleepOwl = $('.sleep-owl');
let $sadOwl = $('.sad-owl');
let $flower = $('.flower');
let $pageText = $('.page-text');
//li definitions
// let $locLi = $('.loc'); category removed for now
// let $yearLi = $('.year'); category removed for now
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
let $timeTravel = $('.time-travel');
let $playAgain = $('#play-again');

//function to hide elements
function hideGame() {
    $gameScreen.hide();
    $topStuff.hide();
    $hatch.hide();
    $owl.hide();
    $sleepOwl.hide();
    $sadOwl.hide();
    $flower.hide();
    $playAgain.hide();
    $('.start-game').hide();
    $('.owl-name-input, .save').hide();
}

//functions to increment stats
function handleDayCount() {
    timePlace.increaseDayCount = setInterval(timePlace.increment, 1000 * 10);
}

function handleHungerCount() {
    owlStats.increaseHunger = setInterval(owlStats.incrementHunger, 1000 * 1);
}

function handleBoredomCount() {
    owlStats.increaseBoredom = setInterval(owlStats.incrementBoredom, 1000 * 3);
}

function handleFatigueCount() {
    owlStats.increaseFatigue = setInterval(owlStats.incrementFatigue, 1000 * 2);
}

//eventListeners
//iniitates game from intro screen
$startButton.on('click', function() {
    console.log('game started');
    $introScreen.remove();
    $gameScreen.show();
});

//egg warming to hatch owl
$warmEgg.on('click', function() {
    console.log('egg warming!');
    $egg.hide();
    // $hatch.show('slow'); <= struggling to get 2 part transition
    // $hatch.delay(1000);
    // $hatch.hide('slow');
    $owl.show('slow');
    $warmEgg.hide();
    $topStuff.show();
    $wake.hide();
    // countDays();

    //stat appends
    $hungerLi.append(`${owlStats.hunger}`);
    $boredomLi.append(`${owlStats.boredom}`);
    $fatigueLi.append(`${owlStats.fatigue}`);

    //place and time appends
    // $locLi.append(`${`Secret Lab`}`);
    // $yearLi.append(`${`2021`}`);
    $dayLi.append(`${timePlace.dayCount}`);

    $pageText.html(`whoa - it's a mysterious time-traveling owl! what will you name it?`)
    $('.owl-name-input, .save').show();
})

//saves owl name
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

//improves entertainment score by 1
$book.on('click', function() {
    if(owlStats.boredom < 10 && owlStats.boredom > 0) {
        owlStats.boredom--;
        $boredomLi.html(`boredom: ${owlStats.boredom}`);
        console.log('boredom -1');
    }
});

//puts owl to sleep
$sleep.on('click', function() {
    if(owlStats.fatigue < 10 && owlStats.fatigue > 0) {
        owlStats.fatigue--;
        $fatigueLi.html(`fatigue: ${owlStats.fatigue}`);
        console.log('fatigue -1');

        $owl.hide();
        $sadOwl.hide();
        $sleepOwl.show();
        $sleep.hide();
        $wake.show();
    }
});

//wakes up sleeping owl - no points
$wake.on('click', function() {
    $sleepOwl.hide();
    $sadOwl.hide();    
    $owl.show();
    $sleep.show();    
    }
);

//random background generated from array
$timeTravel.on('click', function() {
    $('body').css("background", `url(${locationImgs[Math.floor(Math.random() * 11)]}) center center fixed`);
    $('body').css('background-size', 'cover');
    // owlStats.fatigue += 2; ------why doesn't this work?
    // console.log('time travel hit');
})

//initiates all stat counters to go up at respective rates
$('.start-game').on('click', function(){
    handleDayCount();
    handleHungerCount();
    handleBoredomCount();
    handleFatigueCount();
    $pageText.hide();
    $('.start-game').hide();
});

//game reloads at end
$playAgain.on('click', function() {
    location.reload();
});

//calls
hideGame();





