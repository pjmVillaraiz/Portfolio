document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Profile Picture Upload ---
    const uploadPicInput = document.getElementById('upload-pic');
    const profileImg = document.getElementById('profile-img');
    const profileFrame = document.querySelector('.profile-frame');

    profileFrame.addEventListener('click', () => {
        uploadPicInput.click();
    });

    uploadPicInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImg.src = e.target.result;
            };
            reader.readAsDataURL(file);
            console.log('Profile picture loaded locally.');
        }
    });

    // --- 2. File Uploads (PDF/Certificates) ---
    const uploadPdfInput = document.getElementById('upload-pdf');
    const uploadResumeInput = document.getElementById('upload-resume');
    const certificatesList = document.getElementById('certificates-list');

    function handleFileUpload(inputElement, sectionName) {
        inputElement.addEventListener('change', function (event) {
            const file = event.target.files[0];
            if (file) {
                if (sectionName === 'Achievement') {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<span class="skull-icon">😈</span> Uploaded: ${file.name}`;
                    certificatesList.prepend(listItem);
                }
                alert(`SUCCESS! ${sectionName} File Uploaded: ${file.name}.`);
                event.target.value = null; // Clear input after upload
            }
        });
    }

    handleFileUpload(uploadPdfInput, 'Achievement');
    handleFileUpload(uploadResumeInput, 'Resume');

    // --- 3. Handle Project Submission (Title, Description, Link) ---
    const addProjectForm = document.getElementById('add-project-form');
    const projectsList = document.getElementById('projects-list');

    addProjectForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('project-title').value;
        const description = document.getElementById('project-description').value;
        const link = document.getElementById('project-link').value;

        const newProjectItem = document.createElement('div');
        newProjectItem.classList.add('project-item');
        newProjectItem.innerHTML = `
            <p><strong>• ${title}:</strong> ${description}</p>
            <a href="${link}" target="_blank">View Project Link</a>
        `;

        projectsList.prepend(newProjectItem);

        addProjectForm.reset();
        console.log(`New Project Added: "${title}"`);
    });

    // --- 4. Handle Theme Toggle ---
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const body = document.body;

    function updateThemeButton(isDarkMode) {
        if (isDarkMode) {
            themeToggleButton.innerHTML = '<span class="icon">☀️</span> SWITCH TO LIGHT MODE';
        } else {
            themeToggleButton.innerHTML = '<span class="icon">🌙</span> SWITCH TO DARK MODE';
        }
    }

    updateThemeButton(body.classList.contains('dark-mode'));

    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        updateThemeButton(isDarkMode);
    });
});
