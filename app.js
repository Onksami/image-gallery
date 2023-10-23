let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById ("nextBtn");

// console.log( "scrollContainer" , scrollContainer);
// console.log( "backBtn" , backBtn);
// console.log( "nextBtn" , nextBtn);

scrollContainer.addEventListener ( "wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;

});
nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
});