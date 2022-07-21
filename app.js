let ratingContainer = document.querySelector(".rating");
let thankingContainer = document.querySelector(".thanking");
let submit = document.getElementById("submit");
let rating = document.querySelectorAll(".btn");
let resRate = document.getElementById("rate");

rating.forEach(rate => {
    rate.addEventListener("click", () => {
        resRate.innerHTML = rate.innerHTML;
    });
});

submit.addEventListener("click", () =>{
    ratingContainer.style.display = "none";
    thankingContainer.style.display = "block";
});
