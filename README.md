# time-traveling-owl

### context:<br />
this is a tomagatchi-style game created as means to practice basic coding concepts.

### concept: <br />
you adopt an owl who loves food, entertainment, and travelling through the fabric of space-time. 

### user steps:<br />
* the game begins when your owl is just an egg. keep the egg warm and your owl will hatch!
* give your owl a name - it will be displayed on screen and used in prompts.
* feed your owl  and make sure to give it academic philosophy to read so it stays entertained. you will have options of different owl food and books to give your owl. if your owl doesn’t eat or read for a certain amount of time, he will leave from hunger/boredom. 
* your owl also needs rest - be sure to let it sleep, but it's all about number of sleep sessions, so be sure to wake it after.
* if any category = 10, owl leaves
* if you reach 25 days of owl care, you win.
* at any time, the user can change to a new time and place. that’s the benefit of having a time-traveling pet.
* new time/places are randomly generated from an image array when the time-travel button is clicked.

### code: <br />
the code makes use of objects for the day counter and the owl's stats. setInterval was used to count up, while button presses decrement the stats when pressed. jquery's .show and .hide are used throughout to create a more interactive walkthrough experience.

### design:<br />
the design began with a character concept. not all graphics were used, but could be in the future.
![character concept](https://i.ibb.co/3h0mpV4/Concept-Owl.png)

### wireframes: <br />
as a designer, wireframing is something I'm extremely familiar with. these were just quick mocks so I could get coding. certain elements changed due to further thought or constraints of my coding abilities. this was actually an extremely good exercise, as I now have more direct empathy for what it takes to execute functionality based on design documents.
<br />

![intro screen](https://i.ibb.co/C71jkv9/Welcome-Owl.png)
![egg screen](https://i.ibb.co/7ryPsrk/Egg-Screen-Owl.png)
![name screen](https://i.ibb.co/By4cDzB/Name-Screen-Owl.png)
![timetravel screen](https://i.ibb.co/LrPs06S/timetravel-Ex-Page.png)
![end screen](https://i.ibb.co/5Wvc4CH/End-Screen-Owl.png)

### future features:<br/>
* in order to feed or entertain the owl, the user needs to get at least 2 quiz questions correct in a series of 5 questions have to do with the time/place you are in
hunger/boredom/fatigue numbers highlight when changed
* add graphics for feeding, entertaining, time travel - sleep has him sleeping already
* more time/place options
* owl graphics in historical “costume”
* historically appropriate battles to get better stats
* evil parallel universe owl shows up at random times and makes your stats worse
* have buttons change responsively on hover and click.
* make owl care about variety of entertainment/food.
