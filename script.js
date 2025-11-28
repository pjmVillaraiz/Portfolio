document.addEventListener('DOMContentLoaded', () => {
    // ... existing code ...

    // --- 2. File Uploads (PDF/Certificates) ---
    const uploadPdfInput = document.getElementById('upload-pdf'); 
    const uploadResumeInput = document.getElementById('upload-resume'); 
    // Removed uploadCertPicInput and handler

    function handleFileUpload(inputElement, sectionName) {
        inputElement.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                if (sectionName === 'Achievement') {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `<span class="skull-icon">😈</span> Uploaded: ${file.name}`;
                    certificatesList.prepend(listItem);
                }
                alert(`SUCCESS! ${sectionName} File Uploaded: ${file.name}.`);
                event.target.value = null; 
            }
        });
    }

    handleFileUpload(uploadPdfInput, 'Achievement');
    handleFileUpload(uploadResumeInput, 'Resume');
    // Removed uploadCertPicInput handler

    // ... rest of existing code for projects and theme toggle ...
});
