document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Handle Profile Picture Upload ---
    const uploadPicInput = document.getElementById('upload-pic');
    const profileImg = document.getElementById('profile-img');
    const profileFrame = document.querySelector('.profile-frame'); // The main clickable area

    // Attach click listener to the entire frame
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
            alert('Profile picture uploaded successfully! (Note: This is only a local preview)');
        }
    });

    // --- 2. Handle PDF and Certificate Uploads (Simulated) ---
    const uploadPdfInput = document.getElementById('upload-pdf');
    const uploadCertInput = document.getElementById('upload-cert');
    const certificatesList = document.getElementById('certificates-list');

    uploadPdfInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            alert(`PDF File Uploaded: ${file.name}. You can now process this file via a server-side script!`);
            event.target.value = null; // Clear the input
        }
    });

    uploadCertInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            // Simulate adding the certificate to the list
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="skull-icon">💀</span> Certificate Added: ${file.name}`;
            certificatesList.appendChild(listItem);
            
            alert(`Certificate Picture Uploaded: ${file.name}. Added to achievements list!`);
            event.target.value = null; // Clear the input
        }
    });

    // --- 3. Simple Customization/Dark Mode Toggle ---
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
