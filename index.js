// Get the dropdown button
const dropdownBtn = document.querySelector(".dropbtn");

// Add a click event listener to the button
dropdownBtn.addEventListener("click", function() {
  
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
});


// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdownContent = document.querySelector(".dropdown-content");
    if (dropdownContent.classList.contains("show")) {
      dropdownContent.classList.remove("show");
    }
  }
});
