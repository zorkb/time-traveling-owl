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


//event listeners
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

$startButton.on('click', function() {
    console.log('game started');
    $introScreen.remove();
    $gameScreen.show();
});

$warmEgg.on('click', function() {
    console.log('egg warming!');
    $egg.hide();
    // $hatch.show('slow');
    // $hatch.delay(1000);
    // $hatch.hide('slow');
    $owl.show('slow');
    $warmEgg.hide();
    $topStuff.show();
    $pageText.html(`whoa - it's a mysterious time-traveling owl! what will you name it?
    <br /><br />
    <input type='text' class='owl-name-input' /> <button class='action'>save</button>`)
})

//calls
hideGame();
hideTopStuff();
hideEvolution();

