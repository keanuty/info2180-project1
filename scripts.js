window.onload = initialize;

function initialize()
{
    console.log("Script loaded successfully.");

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event)
    {
        event.preventDefault();
        const email = document.querySelector("input[name='email']").value;
        const messageDiv = document.querySelector(".message");

        if (!email)
            messageDiv.textContent = "Please enter a valid email address.";
        else
            messageDiv.textContent = `Thank you! Your email address \`${email}\` has been added to our mailing list!`;
    });
}