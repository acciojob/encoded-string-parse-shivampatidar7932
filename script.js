const parseCode = (str) => {
    // Split the input string using '000' as the separator
    const [firstName, lastName, id] = str.split('000');

    // Return an object with properties firstName, lastName, and id
    return {
        firstName: firstName,
        lastName: lastName,
        id: id
    };
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
