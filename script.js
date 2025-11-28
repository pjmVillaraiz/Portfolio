const toggleButton = document.getElementById('theme-toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Change button text/icon based on mode
    if (body.classList.contains('dark')) {
        toggleButton.innerHTML = '<span class="icon">🌞</span> SWITCH TO LIGHT MODE';
    } else {
        toggleButton.innerHTML = '<span class="icon">🌙</span> SWITCH TO DARK MODE';
    }
});
