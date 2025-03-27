document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const avatar = document.getElementById("avatar");
  const full = document.getElementById("full");
  const email = document.getElementById("email");
  const git = document.getElementById("github");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (avatar.value.trim() === "") {
      alert("Please, upload avatar!");
      return;
    }

    if (full.value.trim() === "") {
      alert("Please, fill in your name!");
      return;
    }

    if (email.value.trim() === "") {
      alert("Please, fill in your email!");
      return;
    }

    if (git.value.trim() === "") {
      alert("Please, fill in your GitHub username!");
      return;
    }
    
    window.open("Ticket.html", "_blank");
     
  });
});
