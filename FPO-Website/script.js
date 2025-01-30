
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("responseMessage").innerText = "Thank you for reaching out! We'll get back to you soon.";
    }
});


// Display Alert on Button Click
function showMessage() {
    alert("Welcome to the FPO Digital Platform! Explore our features.");
}

// Contact Form Submission
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;

            if (name && email && message) {
                document.getElementById("responseMessage").innerText = 
                    "Thank you for reaching out! We will get back to you soon.";
                
                // Clear form fields
                form.reset();
            }
        });
    }
});

// Profit Calculator (Finance Page)
function calculateProfit() {
    let cost = document.getElementById("cost").value;
    let revenue = document.getElementById("revenue").value;

    if (cost && revenue) {
        let profit = revenue - cost;
        document.getElementById("profitResult").innerText = 
            "Estimated Profit: $" + profit;
    } else {
        document.getElementById("profitResult").innerText = 
            "Please enter valid cost and revenue values.";
    }
}
