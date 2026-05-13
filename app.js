const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  // Load Saved Theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // Toggle Theme
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}
fetch("https://api.github.com/users/muhammadhafeez")
  .then((response) => response.json())

  .then((data) => {
    document.getElementById("profileData").innerHTML = `

<img src="${data.avatar_url}" width="150">

<h2>${data.name}</h2>

<p>${data.bio}</p>

<p>Followers: ${data.followers}</p>

`;
  });
window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let progress = (scrollTop / height) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    e.preventDefault();
  } else {
    alert("Form submitted successfully");
  }
});
