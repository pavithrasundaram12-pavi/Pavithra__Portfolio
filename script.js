const typingElement = document.getElementById("typing");

const roles = [
    "Python Developer",
    "AI Enthusiast",
    "Software Developer"
];

let roleIndex = 0;

function changeRole() {
    if (!typingElement) return;

    typingElement.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

changeRole();
setInterval(changeRole, 2500);
