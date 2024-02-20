let form = document.getElementById("form");

function submitForm(event) {
    event.preventDefault();
    addWork(form);
}

form.addEventListener('submit', submitForm);

function addWork(form) {
    const title = form.querySelector('#title').value;
    const priority = form.querySelector('#priority').value;
    const date = form.querySelector('#date').value;

    if (title == "") {
        alert("Titulek nesmi byt prazdny.");
    } else if (isNaN(date) || date > 12 || date < 1) {
        alert("Invalid date. Please enter a valid month (1-12).");
    } else {
        const newDiv = document.createElement('div');
        newDiv.classList.add('new-div');

        const newTitle = document.createTextNode("Title: " + title);
        const newPriority = document.createTextNode("Priority: " + priority);

        const dateCreate = new Date();
        const month = dateCreate.getMonth() + 1;
        let monthsRemaining;

        if (month >= date) {
            monthsRemaining = "You are " + (month - date) + " months late.";
            newDiv.style.backgroundColor = "red";
        } else {
            monthsRemaining = date - month + " months remaining.";
        }

        const newDate = document.createTextNode("Deadline: " + monthsRemaining);

        newDiv.appendChild(newTitle);
        newDiv.appendChild(document.createElement('br'));
        newDiv.appendChild(newPriority);
        newDiv.appendChild(document.createElement('br'));
        newDiv.appendChild(newDate);

        document.body.appendChild(newDiv);
        console.log("New div created");
    }
}