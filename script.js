//comment
// Empty array for tracker
//Added some shows to work with
let myMediaTracker = [
    {
        title: 'Bachlor in Paradise',
        length: '8 Seasons Total',
        watched: 'on Season 8, Episode 1',
        score: '8.5/10',
    },
    {
        title: 'Supernatural',
        length: '15 Seasons Total',
        watched: '15 Seasons Watched',
        score: '9/10',
    },
    {
        title: 'Food Wars', 
        length: '5 Seasons Total',
        watched: 'Finished Season 3',
        score: '8.5/10',
    },
    {
        title: 'Attack on Titan', 
        length: '4 Seasons Total',
        watched: 'Finished Season 4 Part 1',
        score: '9/10',
    },
    {
        title: 'Fullmetal Alchemist: Brotherhood', 
        length: '64 Episodes Total',
        watched: '64 Episodes Watched', 
        score: '10/10',
    },
    {
        title: 'Tokyo Ghoul', 
        length: '4 Seasons Total',
        watched:'3 Seasons Watched',
        score: '9/10',
    },
    {
        title: 'Locke and Key', 
        length: '3 Seasons Total', 
        watched: '3 Seasons Watched', 
        score: '8.5/10',
    },
];

//Creates remove button
const removeBtn = document.createElement('button');

/*
let bachInP = new addMediaToTracker('Bachlor in Paradise', '8 Seasons Total', ' on Season 8, Episode 1', '8.5/10');
let supernatural = new addMediaToTracker('Supernatural', '15 Seasons Total', '15 Seasons Watched', '9/10');
let foodWars = new addMediaToTracker('Food Wars', '5 Seasons Total', 'Finished Season 3', '8.5/10');
let attackOnTitan = new addMediaToTracker('Attack on Titan', '4 Seasons Total', 'Finished Season 4 Part 1', '9/10');
let fmaB = new addMediaToTracker('Fullmetal Alchemist: Brotherhood', '64 Episodes Total', '64 Episodes Watched', '10/10');
let tokyoGhoul = new addMediaToTracker('Tokyo Ghoul', '4 Seasons Total', '3 Seasons Watched', '9/10');
let lockeAndKey = new addMediaToTracker('Locke and Key', '3 Seasons Total', '3 Seasons Watched', '8.5/10');
*/
//Object Constructor
function Media(title, length, watched, score) {
    this.title = title;
    this.length = length;
    this.watched = watched;
    this.score = score;
}
/*
//Sends media object to array
function addMediaToTracker(title, length, watched, score) {
    let media = new Media(title, length, watched, score);
    myMediaTracker.push(media);
}
*/
function addMediaToTracker() {
    let a = document.getElementById('form-title').value;
    let b = document.getElementById('form-length').value;
    let c = document.getElementById('form-watched').value;
    let d = document.getElementById('form-score').value;

    if (a !== '' && b !== '' & c !== '') {
        myMediaTracker.push(new Media(a, b, c, d));
        displayMedia();
    } else {
        alert('Form not filled out')
    }
}
//Using DOM to display list of media
const mediaList = document.getElementById('media-list');

//Function that loops through array and displays it on webpage
function displayMedia() {
    mediaList.innerHTML = '';

    for (let i = 0; i < myMediaTracker.length; i++) {
        removeBtn.innerHTML = 
        `<button class="remove-btn" onclick="removeMedia(${i})">Delete</button>`;
//Creates tiles to list the media
    const mediaTile = document.createElement('div');
    mediaTile.classList.add('media-row');
    mediaTile.innerHTML = 
        `<div>${myMediaTracker[i].title}</div>
        <div>${myMediaTracker[i].length}</div>
        <div>${myMediaTracker[i].watched}</div>
        <div>${myMediaTracker[i].score}</div>`;
    mediaTile.append(removeBtn.cloneNode(true));
    mediaList.append(mediaTile);
    }
}

//Displays entry list on webpage
displayMedia();

//Remove button on each tile
function removeMedia(i) {
	myMediaTracker.splice(i, 1);
	displayMedia();
}