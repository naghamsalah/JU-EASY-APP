document.addEventListener('DOMContentLoaded', () => {
    setupAuth();
    setupCategories();
});

function setupAuth() {
    const authPage = document.getElementById('auth-page');
    const appContent = document.getElementById('app-content');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const toRegister = document.getElementById('to-register');
    const toLogin = document.getElementById('to-login');
    const loginFormElement = document.getElementById('login-form-element');
    const registerFormElement = document.getElementById('register-form-element');

    // Show registration form
    toRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    // Show login form
    toLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });

    // Handle form submission (simple example)
    loginFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle login logic here
        authPage.style.display = 'none';
        appContent.style.display = 'block';
    });

    registerFormElement.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle registration logic here
        authPage.style.display = 'none';
        appContent.style.display = 'block';
    });
}

function setupCategories() {
    const categories = document.querySelectorAll('.category');
    const facultiesDetails = document.getElementById('faculties-details');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            if (category.id === 'faculties') {
                facultiesDetails.classList.remove('hidden');
            } else {
                facultiesDetails.classList.add('hidden');
            }
            // Implement category filtering logic
            console.log(`Category selected: ${category.id}`);
        });
    });
}