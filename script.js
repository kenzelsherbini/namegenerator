// get prefix
function genPrefix(firstName) {
    if (firstName.length > 5) {
        return 'The Great';
    } else {
        return 'Master';
    }
}

//get first name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    switch (firstLetter) {
        case 'a':
            return 'Jeff';
        case 'b':
            return 'Pablo';
        default:
            return 'Julian';
    }
}

// get middle name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'road') {
        return `${favoriteColor}ridge`; // Example: blueridge
    } else if (roadType === 'street') {
        return `${favoriteColor}son`; // Example: blueson
    } else {
        return `${favoriteColor}stone`;
    }
}

// get last name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1).toLowerCase();
    switch (lastLetter) {
        case 'a':
            return 'Shadow';
        case 'e':
            return 'Blaze';
        case 'n':
            return 'Thorn';
        case 'u':
            return 'Frost';
        default:
            return 'Moon';
    }
}

// get suffix
function genSuffix(favoriteAnimal) {
    return `of ${favoriteAnimal} clan`;
}

// build name
function genFullName(event) {
    event.preventDefault(); 

    // get user input
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const roadType = document.getElementById('roadType').value;
    const favoriteColor = document.getElementById('favoriteColor').value.trim();
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

    // Input validation
    if (!firstName || !lastName || !roadType || !favoriteColor || !favoriteAnimal) {
        alert('Please fill out all fields!');
        return;
    }

    // name generator functions
    const prefix = genPrefix(firstName);
    const newFirstName = genFirstName(firstName);
    const middleName = genMiddleName(roadType, favoriteColor);
    const newLastName = genLastName(lastName);
    const suffix = genSuffix(favoriteAnimal);

    // capitalization
    const capitalizedPrefix = capitalize(prefix);
    const capitalizedFirstName = capitalize(newFirstName);
    const capitalizedMiddleName = capitalize(middleName);
    const capitalizedNewLastName = capitalize(newLastName);

    // full name
    const fullName = `${capitalizedPrefix} ${capitalizedFirstName} ${capitalizedMiddleName} ${capitalizedNewLastName} ${suffix}`;

    // html display
    document.getElementById('result').innerText = fullName;
}

// full capitalztio
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
