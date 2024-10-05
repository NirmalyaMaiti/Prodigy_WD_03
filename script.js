// JavaScript to handle form submission (optional)
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    alert(`Thank you, ${name}. Your message has been sent!`);

    // Here you can add more functionality to handle form data, like sending it to an email or database.
    e.target.reset();
});
