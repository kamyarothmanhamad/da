document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        updateThemeToggle();
        localStorage.setItem('theme', document.body.dataset.theme);
    });

    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;
    updateThemeToggle();

    function updateThemeToggle() {
        themeToggle.innerHTML = document.body.dataset.theme === 'dark' ? '☀️' : '🌙';
    }
});
