document.getElementById("login").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("Confirm").value;
    // Validate fields
    if (!username || !email || !password || !confirmPassword) {
        alert("Please fill out all fields ");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    let filter_data = users.filter((element)=>{
        return username === element.username && email===element.email && password===element.password;
        
    });
   if(filter_data){
            if (filter_data[0].flag === "user") {
                alert("Welcome, User!");
                window.location.href = "user_dashboard.html"; 
            } else if (filter_data[0].flag === "admin") {
                alert("Welcome, Admin!");
                window.location.href = "admin_dashboard.html"; 
            }
    }
    else{
        alert("Invalid credentials! Please try again.");
    }
    
});
