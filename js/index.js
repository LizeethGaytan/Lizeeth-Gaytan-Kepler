// HTML elements stored in variables
// below method returns a collection, not useful for this specidic instance, so you need to get the index
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

// Message Form
// TODO: Hide Messages Section when empty
const messageForm = document.querySelector('[name="leave_message"]');

messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let userName = event.target.usersName;
    let userEmail = event.target.usersEmail;
    let userMessage = event.target.usersMessage;
    let userNameVal = userName.value;
    let userEmailVal = userEmail.value;
    let userMessageVal = userMessage.value;

    console.log(userNameVal, userEmailVal, userMessageVal);
    const messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    const anchor = document.createElement('a');
    const anchorTxt = document.createTextNode(userNameVal);
    anchor.setAttribute('href', 'mailto:' + userEmailVal);
    anchor.appendChild(anchorTxt);
    const span = document.createElement('span');
    const spanTxt = document.createTextNode(userMessageVal);
    span.appendChild(spanTxt);
    newMessage.append(anchor, span);
    //Remove Btn
    const removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener("click", (event) => {
        const entry = removeButton.parentNode;
        entry.remove();
    })
    // Append removeButton to newMessage element
    newMessage.appendChild(removeButton);
    // Append newMessage to messageList element
    messageList.append(newMessage);
    // clears form field inputs a/f clicking submit button
    leave_message.reset();
})

// Fetch API
fetch('https://api.github.com/users/LizeethGaytan/repos')
    .then(function (response) { return response.json(); })
    .then(function (data) {
        const repositories = data;
        console.log(repositories);
        // TODO: Turn li's into links
        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('ul');
        if (Array.isArray(repositories)) {
            repositories.forEach((repo, i) => {
                const project = document.createElement('li');
                project.textContent = repositories[i].name;
                projectList.appendChild(project);
            });
        } else {
            console.error('Expected an array but got:', repositories);
        }

    })
    .catch(error => console.error('Error: ', error))




