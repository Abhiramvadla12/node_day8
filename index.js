document.getElementById("register").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("Confirm").value;

    // Get the selected radio button value
    let flag = null;
    const radios = document.getElementsByName("gridRadios");
    for (const radio of radios) {
        if (radio.checked) {
            flag = radio.value;
            break;
        }
    }

    // Validate fields
    if (!username || !email || !password || !confirmPassword || !flag) {
        alert("Please fill out all fields and select a flag.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create a user object
    const user = {
        username: username,
        email: email,
        password: password,
        flag: flag,
    };

    // Retrieve existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    users.push(user);

    // Save the updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the form fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("Confirm").value = "";
    radios.forEach((radio) => (radio.checked = false));

    alert("User registered successfully!");
});
