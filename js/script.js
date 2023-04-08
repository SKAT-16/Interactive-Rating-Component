var selectedRating = "";

var starimage = document.querySelector(".rating-state .star-image");

var mainpage = document.querySelector(".rating-state");
var thankyoupage = document.querySelector(".thank-you-state");

var submitBtn = document.querySelector(".submit-btn");
var selectedStarTexts = document.querySelectorAll(".rating-state .rating-list span");
var ratingText = document.querySelector(".thank-you-state .user-choice-text span");

submitBtn.addEventListener("click", submitChoice);
for (let text of selectedStarTexts)
    text.addEventListener("click", getClickedRating);

function submitChoice() {
    if(selectedRating != ""){
        mainpage.style.display = "none";
        thankyoupage.style.display = "block";
        ratingText.textContent = selectedRating;
    }
}

function getClickedRating(e) {
    selectedRating = e.target.textContent;
}