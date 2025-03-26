const form = document.getElementById("form");
const avatar = document.getElementById("avatar");
const full = document.getElementById("full");
const email = document.getElementById("email");
const git = document.getElementById("github");

// form.addEventListener("submit" (e) => {
//     e.preventDefault()

// });


form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (avatar.value == "") {
        alert("Please, upload avatar!")
        return;
    }

    if (full.value == "") {
        alert("Please, fill in your name!")
        return;
    }

    if (email.value == "") {
        alert("Please, fill in your email!")
        return;
    }

    if (git.value == "") {
        alert("Please, fill in your GitHub username!")
        return;
    }
});