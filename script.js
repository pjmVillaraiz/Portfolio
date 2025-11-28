document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Profile Picture Upload (Logic remains the same) ---
    const uploadPicInput = document.getElementById('upload-pic');
    const profileImg = document.getElementById('profile-img');
    const profileFrame = document.querySelector('.profile-frame'); 

    profileFrame.addEventListener('click', () => {
        uploadPicInput.click();
    });

    uploadPicInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImg.src = e.target.result;
            }
            reader.readAsDataURL(file);
            console.log('Profile picture loaded locally.');
        }
    });

    // --- 2. File Uploads (PDF/Certificates) ---
    const uploadPdfInput = document.getElementById('upload-pdf'); // Achievement PDF/Image
    const uploadResumeInput = document.getElementById('upload-resume'); // General Resume PDF
    const uploadCertPicInput = document.getElementById('upload-cert-pic'); // Picture Certs

    const certificatesList = document.getElementById('certificates-list');

    function handleFileUpload(inputElement, sectionName) {
        inputElement.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                if (sectionName === 'Achievement') {
                     // Simulate adding the certificate/achievement to the list
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<span class="skull-icon">😈</span> Uploaded: ${file.name} (Type: ${file.type.split('/')[0]})`;
                    certificatesList.appendChild(listItem);
                }
                alert(`SUCCESS! ${sectionName} File Uploaded: ${file.name}.`);
                event.target.value = null; // Clear the input
            }
        });
    }

    handleFileUpload(uploadPdfInput, 'Achievement');
    handleFileUpload(uploadResumeInput, 'Resume');
    handleFileUpload(uploadCertPicInput, 'Certificate Picture');


    // --- 3. Handle Project Submission (Title, Description, Link) ---
    const addProjectForm = document.getElementById('add-project-form');
    const projectsList = document.getElementById('projects-list');

    addProjectForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;
        const link = document.getElementById('project-link').value;

        // Create the new project HTML element
        const newProjectItem = document.createElement('div');
        newProjectItem.classList.add('project-item');
        newProjectItem.innerHTML = `
            <p><strong>• ${title}:</strong> ${description}</p>
            <a href="${link}" target="_blank">View Project Link</a>
        `;

        // Add the new project to the list at the top
        projectsList.prepend(newProjectItem);

        // Clear the form
        addProjectForm.reset();
        alert(`New Project Added: "${title}"`);
    });

    // --- 4. Simple Customization/Dark Mode Toggle (Optional) ---
    const customizeButton = document.querySelector('.customize-button');

    customizeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            alert('Switched to Kuromi Dark Mode! 🖤');
        } else {
            alert('Switched back to Light Pastel Mode! 💜');
        }
    });
});
