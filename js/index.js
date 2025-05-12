// HTML elements stored in variables
// below method seems faulty b/c it returns a collection so you need to get the index
// const body = document.getElementsByTagName('body').item(0);
const body = document.querySelector('body');
const main = document.querySelector('main');
const personalitySection = document.getElementById('personality');
const personalityList = personalitySection.querySelector('ul');
const footer = document.createElement('footer');

// Personality Section Variables
let characteristics = ['Curious', 'Multipotentialite', 'Empathetic', 'Inquisitive', 'Creative', 'Idealistic', 'Altruistic']

// Append list items to the personality list, ul element
for (let i = 0; i < characteristics.length; i++) {
    let skill = document.createElement('li');
    skill.textContent = characteristics[i];
    personalityList.appendChild(skill);
}

//Footer variables 
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
const footerTxt = document.createTextNode('Created by Lizeeth Gaytan \u00a9 ');

// Append footer variables to paragraph element
copyright.append(footerTxt, thisYear);

// Add footer to DOM, the body, below main element
body.appendChild(footer);

// Append copyright element, paragraph, to the footer
footer.appendChild(copyright);

