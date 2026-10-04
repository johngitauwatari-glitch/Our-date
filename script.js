
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const continueButton = document.getElementById("continueButton");

const activity = document.getElementById("activity");
const otherContainer = document.getElementById("otherContainer");
const otherInput = document.getElementById("otherInput");

const dateInput = document.getElementById("date");
const dateForm = document.getElementById("dateForm");

const noMessage = document.getElementById("noMessage");
const errorMessage = document.getElementById("errorMessage");
const finalMessage = document.getElementById("finalMessage");


// YES
yesButton.addEventListener("click", function () {

    page1.classList.remove("active");
    page2.classList.add("active");

});


// NO
noButton.addEventListener("click", function () {

    noMessage.textContent =
        "That's completely okay. Thank you for being honest. ❤️";

});


// CONTINUE
continueButton.addEventListener("click", function () {

    page2.classList.remove("active");
    page3.classList.add("active");

});


// OTHER
activity.addEventListener("change", function () {

    if (activity.value === "Other") {

        otherContainer.style.display = "block";
        otherInput.required = true;

    } else {

        otherContainer.style.display = "none";
        otherInput.required = false;
        otherInput.value = "";

    }

});


// SUBMIT
dateForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    errorMessage.textContent = "";

    let selectedActivity = activity.value;
    let selectedDate = dateInput.value;


    if (selectedActivity === "") {

        errorMessage.textContent =
            "Please choose an activity.";

        return;

    }


    if (selectedActivity === "Other") {

        if (otherInput.value.trim() === "") {

            errorMessage.textContent =
                "Please tell us what you would like to do.";

            return;

        }

        selectedActivity = otherInput.value.trim();

    }


    if (selectedDate === "") {

        errorMessage.textContent =
            "Please choose a date.";

        return;

    }


    // Send information to Formspree
    const formData = new FormData(dateForm);

    formData.set("activity", selectedActivity);


    try {

        const response = await fetch(
            dateForm.action,
            {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            const formattedDate =
                new Date(
                    selectedDate + "T00:00:00"
                ).toLocaleDateString(
                    "en-US",
                    {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                );


            finalMessage.innerHTML =
                `Thanks! ❤️<br><br>
                So we have a
                <strong>${selectedActivity}</strong>
                on
                <strong>${formattedDate}</strong>.
                <br><br>
                I'm looking forward to it! 😊`;


            page3.classList.remove("active");
            page4.classList.add("active");

        } else {

            errorMessage.textContent =
                "Something went wrong. Please try again.";

        }

    } catch (error) {

        errorMessage.textContent =
            "Please check your internet connection and try again.";

    }

});
