const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateButtonText();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.setItem('theme', '');
    }
    
    updateButtonText();
});

function updateButtonText() {
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '라이트 모드';
    } else {
        themeToggle.textContent = '다크 모드';
    }
}
