let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById ("nextBtn");

// console.log( "scrollContainer" , scrollContainer);
// console.log( "backBtn" , backBtn);
// console.log( "nextBtn" , nextBtn);

scrollContainer.addEventListener ( "wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

});
nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = "smooth";
});

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
    scrollContainer.style.scrollBehavior = "smooth";
});
