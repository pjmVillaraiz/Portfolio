// PROFILE PICTURE
document.getElementById("profileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profilePreview").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// CERTIFICATE UPLOAD
function addCertificates() {
    const files = document.getElementById("certUpload").files;
    const container = document.getElementById("certContainer");

    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            container.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

// PROJECT UPLOAD
function addProjects() {
    const files = document.getElementById("projUpload").files;
    const container = document.getElementById("projContainer");

    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            container.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}
