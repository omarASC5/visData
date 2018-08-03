function addUsers() {
    for (let i = 0; i < userData.length; i++) {
        const userDiv = document.createElement('div');
        const state_paragraph = document.createElement('p');
        const add_image = document.createElement('img');
        const name_paragraph = document.createElement('p');
        const email_paragraph = document.createElement('p');
        const city_paragraph = document.createElement('p');
        

        document.body.appendChild(userDiv);
        userDiv.appendChild(state_paragraph);
        userDiv.appendChild(add_image);
        userDiv.appendChild(name_paragraph);
        userDiv.appendChild(email_paragraph);
        userDiv.appendChild(city_paragraph);

        state_paragraph.classList.add("person_state");
        add_image.classList.add("person_image");
        name_paragraph.classList.add("person_name");
        email_paragraph.classList.add("person_email");
        city_paragraph.classList.add("person_city");
        


        //Add Classes to each Div
        userDiv.classList.add("person");
        // userDiv.classList.add("person_name");
        // userDiv.classList.add("person_email");
        // userDiv.classList.add("person_city");

    const person_state = document.getElementsByClassName('person_state');
    const person_image = document.getElementsByClassName('person_image');
    const person_name = document.getElementsByClassName('person_name');
    const person_email = document.getElementsByClassName('person_email');
    const person_city = document.getElementsByClassName('person_city');

    const person_state_uppercase = titleCase(userData[i].location.state);
    person_state[i].innerHTML = "State: " + person_state_uppercase;

    person_image[i].src = userData[i].picture.large;

    person_name_uppercase = titleCase((userData[i].name.title + ". " + userData[i].name.first + " " + userData[i].name.last));

    person_name[i].innerHTML = "Name: " + person_name_uppercase;

    person_email[i].innerHTML = "Email: " + userData[i].email;

    const person_city_uppercase = titleCase(userData[i].location.city)
    person_city[i].innerHTML = "City: " + person_city_uppercase;
    }
    

  

    
}

addUsers();