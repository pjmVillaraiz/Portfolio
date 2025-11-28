/* ============================
   DARK MODE TOGGLE (WORKING)
============================ */
const toggleButton = document.getElementById('theme-toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        toggleButton.innerHTML = '<span class="icon">🌞</span> SWITCH TO LIGHT MODE';
    } else {
        toggleButton.innerHTML = '<span class="icon">🌙</span> SWITCH TO DARK MODE';
    }
});

/* ============================
   PROFILE PICTURE UPLOAD
============================ */
const uploadPic = document.getElementById("upload-pic");
const profileImg = document.getElementById("profile-img");

uploadPic.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
        profileImg.src = e.target.result;
    };

    reader.readAsDataURL(file);
});

/* ============================
   ACHIEVEMENT PDF/IMAGE UPLOAD
============================ */
const uploadPdf = document.getElementById("upload-pdf");
const certList = document.getElementById("certificates-list");

uploadPdf.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const li = document.createElement("li");
    li.textContent = "📄 " + file.name;
    certList.appendChild(li);
});

/* ============================
   ADD PROJECT FUNCTIONALITY
============================ */
const projectForm = document.getElementById("add-project-form");
const projectList = document.getElementById("projects-list");

projectForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("project-title").value;
    const desc = document.getElementById("project-description").value;
    const link = document.getElementById("project-link").value;

    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.innerHTML = `
        <h3>${title}</h3>
        <p>${desc}</p>
        <a href="${link}" target="_blank">View Project 🔗</a>
    `;

    projectList.appendChild(projectItem);
    projectForm.reset();
});
