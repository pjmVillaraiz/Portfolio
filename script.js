// PROFILE PICTURE
document.getElementById("profileInput").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const profileImg = document.getElementById("profilePreview");
            profileImg.src = e.target.result;
            profileImg.classList.remove('placeholder');
        };
        reader.readAsDataURL(file);
    }
});

// CERTIFICATE UPLOAD
function addCertificates() {
    const files = document.getElementById("certUpload").files;
    const container = document.getElementById("certContainer");
    
    if (files.length === 0) {
        alert("Please select files first!");
        return;
    }

    const emptyState = container.querySelector('.empty-state');
    if (emptyState) emptyState.remove();

    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            
            const img = document.createElement("img");
            img.src = e.target.result;
            
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "✕";
            deleteBtn.onclick = function() {
                gridItem.remove();
                if (container.children.length === 0) {
                    container.innerHTML = '<div class="empty-state">No certificates uploaded yet</div>';
                }
            };
            
            gridItem.appendChild(img);
            gridItem.appendChild(deleteBtn);
            container.appendChild(gridItem);
        };
        reader.readAsDataURL(file);
    }

    document.getElementById("certUpload").value = '';
}

// PROJECT UPLOAD
function addProjects() {
    const files = document.getElementById("projUpload").files;
    const container = document.getElementById("projContainer");
    
    if (files.length === 0) {
        alert("Please select files first!");
        return;
    }

    const emptyState = container.querySelector('.empty-state');
    if (emptyState) emptyState.remove();

    for (let file of files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            
            const img = document.createElement("img");
            img.src = e.target.result;
            
            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.textContent = "✕";
            deleteBtn.onclick = function() {
                gridItem.remove();
                if (container.children.length === 0) {
                    container.innerHTML = '<div class="empty-state">No projects uploaded yet</div>';
                }
            };
            
            gridItem.appendChild(img);
            gridItem.appendChild(deleteBtn);
            container.appendChild(gridItem);
        };
        reader.readAsDataURL(file);
    }

    document.getElementById("projUpload").value = '';
}
