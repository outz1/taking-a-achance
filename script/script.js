document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-choice");

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); 
      this.classList.add("clicked");

      const link = this.getAttribute("href"); 
      
      setTimeout(() => {
        window.location.href = link;
      }, 1500);
    });
  });
});
