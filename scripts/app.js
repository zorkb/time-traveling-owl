//time and place object
const timePlace = {
    location: null,
    year: null,
    day: null,
    time: null,
}

//owl object
const owlStats = {
    owlName: null,
    hunger: 0,
    boredom: 0,
    fatigue: 0,
}

//DOM
let $startButton = $('#start');
let $introScreen = $('.intro-screen');
let $gameScreen = $('.game-screen');
let $topStuff = $('.action, .time-travel, .time-place, .owl-stats');
let $warmEgg = $('.warm-egg');
let $egg = $('.egg');
let $hatch = $('.hatch');
let $owl = $('.owl');
let $pageText = $('.page-text');
//li definitions
let $locLi = $('.loc');
let $yearLi = $('.year');
let $dayLi = $('.day');
let $timeLi = $('.time');
let $nameLi = $('.name');
let $hungerLi = $('.hunger');
let $boredomLi = $('.boredom');
let $fatigueLi = $('.fatigue');

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
}

function hideSave() {
    $('.owl-name-input, .save').hide();
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

    //stat appends
    $hungerLi.append(`${owlStats.hunger}`);
    $boredomLi.append(`${owlStats.boredom}`);
    $fatigueLi.append(`${owlStats.fatigue}`);

    //place and time appends
    $locLi.append(`${`Secret Lab`}`);
    $yearLi.append(`${`2021`}`);
    // $dayLi.append(`${}`);
    // $timeLi.append(`${}`);

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
    $pageText.html(`${owlStats.owlName}... that’s great!
    <br /><br />
    click the "feed" and "entertain" buttons to make sure he doesn't get too hungry or bored. and put it to bed at a reasonable hour, please!
    <br /><br />
    you may also travel through time with your new pet...`);
});


//calls
hideGame();
hideTopStuff();
hideEvolution();
hideSave();

