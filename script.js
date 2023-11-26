document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var feedback = document.getElementById("feedback").value;

    console.log("Feedback submitted: " + feedback);
    alert("Thank you for your feedback!");
    document.getElementById("feedbackForm").reset();
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    console.log("Contact form submitted:", { name, email, message });
    alert("Your message has been sent!");
    document.getElementById("contactForm").reset();
});

function recommendWorkout() {
    var bodyPart = document.getElementById("bodyPart").value;
    var experience = document.getElementById("experience").value;

    document.getElementById("video-container").innerHTML = "";

    displayRecommendedVideos(bodyPart);
}

// Display Recommended Videos
function displayRecommendedVideos(bodyPart) {
    var recommendationsContainer = document.getElementById("video-container");

    var videoData = getVideoDataByBodyPart(bodyPart);

    videoData.forEach(function (video) {
        var videoCard = document.createElement("div");
        videoCard.classList.add("video-card");

        var videoLink = document.createElement("a");
        videoLink.href = video.url;
        videoLink.target = "_blank";
        videoLink.textContent = video.title;

        videoCard.appendChild(videoLink);
        recommendationsContainer.appendChild(videoCard);
    });
}


function getVideoDataByBodyPart(bodyPart) {
    // Example: Mapping body parts to video data
    var videoDataMap = {
        chest: [
            { title: "Chest Workout 1", url: "https://www.youtube.com/watch?v=your_chest_video1" },
            { title: "Chest Workout 2", url: "https://www.youtube.com/watch?v=your_chest_video2" },
        ],
        back: [
            { title: "Back Workout 1", url: "https://www.youtube.com/watch?v=your_back_video1" },
            { title: "Back Workout 2", url: "https://www.youtube.com/watch?v=your_back_video2" },
        ],
        legs: [
            { title: "Leg Workout 1", url: "https://www.youtube.com/watch?v=your_legs_video1" },
            { title: "Leg Workout 2", url: "https://www.youtube.com/watch?v=your_legs_video2" },
        ],
    };

    return videoDataMap[bodyPart] || [];
}
