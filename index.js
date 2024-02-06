//footer
document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.getElementById("newsletterForm");
    const emailInput = document.getElementById("emailInput");
    const subscribeStatus = document.getElementById("subscribeStatus");

    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Simulating form submission; replace with your actual server-side script
        // Here, we're just displaying a success message
        subscribeStatus.textContent = "Subscribed successfully! Thank you.";
        emailInput.value = ""; // Clear the input field
    });
});

//about us section
function showVideo() {
    window.location.href = '../video/video.html';
}

function exploreGallery() {
    window.location.href = '../galleryy/galleryy.html';
}

//RESOURCESSSSSSS/.....
document.addEventListener("DOMContentLoaded", function () {
    const resourceContainer = document.getElementById("resourceContainer");

    // Sample data for resource links with buttons
    const resourceData = [
        { title: "Ram Mandir Official Website", url: "https://srjbtkshetra.org/" },
        { title: "Ayodhya Tourism", url: "https://uptourism.gov.in/en/article/ayodhya" },
        { title: "Ramayana - Wikipedia", url: "https://en-m-wikipedia-org.translate.goog/wiki/Ramayana?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc" },
        // Add more resource links as needed
    ];

    // Dynamically generate resource buttons
    resourceData.forEach(resource => {
        const buttonElement = document.createElement("button");
        buttonElement.textContent = resource.title;
        buttonElement.addEventListener("click", () => {
            window.location.href = resource.url;
        });
        buttonElement.classList.add("resource-button");
        resourceContainer.appendChild(buttonElement);
    });
});

//RESOURCESSSSSSS/.....

//slider start
