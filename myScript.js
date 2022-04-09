// Variable to store the users weekly goal
const goal = 25;

// Array to store user inputs
let entries = [];
// Getting the referance of the unordered list from the dom
const entriesWrapper = document.querySelector("#entries");
document.getElementById('target').innerText = goal;

// This is a function to add new entries in the list in the html dom
function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);
    entriesWrapper.appendChild(listItem);

}


// Function to calculate the sum of the array
function reducer (total, currentValue) {
    return total + currentValue;
}

// Function to add the total ran in the total section and the total progress section
function calcTotal(entries) {
    const totalValue = entries.reduce(reducer).toFixed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
}

// Function to calculate the average
function calcAverage() {
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
}

// function to calculate the goal and set the progress bar using css
function calcGoal() {
    const totalValue = entries.reduce(reducer).toFixed(1);
    const completedPercent = totalValue / (goal / 100);
    const progressCircle = document.querySelector('#progressCircle');
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%)`;
}

// Function to calculate the weekly high ran
function weeklyHigh() {
    const high = Math.max(...entries);
    document.getElementById('high').innerText = high;
}

// In this function a passed the event
function handleSubmit(event) {
    // this prevents the default reloading of the website when the user submits something
    event.preventDefault();
    // getting the user input and converting it to a number
    const entry = Number(document.querySelector('#entry').value);
    // Checking  if there is a null entry
    if(!entry) return;
    // resetting the input to null
    document.querySelector('form').reset();
    // pushing the value in the array called entries
    entries.push(entry);
    // calling the function called addNewEntry()
    addNewEntry(entry);
    // calling the function called calcTotal(entries)
    calcTotal(entries);
    // calling the function called calcAverage()
    calcAverage();
    // calling the function called weeklyHigh()
    weeklyHigh();
    // calling the function called calcGoal()
    calcGoal();
}

// Here we are getting the referance of the form using html dom and listening for an event which will occur if the user hits enter or presses the add button then passing a function named handle submit
const form = document.querySelector('form').addEventListener("submit",handleSubmit);