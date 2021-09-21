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
let $warmEgg= $('.warm-egg');



//event listeners
function hideGame() {
    $gameScreen.hide();
}

$startButton.on('click', function() {
    console.log('game started');
    $introScreen.remove();
    $gameScreen.show();
});

function hideTopStuff() {
    $topStuff.hide();
}

$warmEgg.on('click', function() {
    console.log('egg warming!');
})
//calls
hideGame();
hideTopStuff();

