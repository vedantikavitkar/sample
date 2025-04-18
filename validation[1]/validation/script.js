// Form and input elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Helper function to show error message
function showError(input, errorElement, message) {
    errorElement.innerText = message;
    errorElement.style.display = 'block';
    input.style.borderColor = 'red';
}

// Helper function to clear error message
function clearError(input, errorElement) {
    errorElement.innerText = '';
    errorElement.style.display = 'none';
    input.style.borderColor = 'green';
}

// Name validation (min 3 characters)
nameInput.addEventListener('input', () => {
    const nameValue = nameInput.value.trim();
    if (nameValue.length < 3) {
        showError(nameInput, nameError, 'Name must be at least 3 characters');
    } else {
        clearError(nameInput, nameError);
    }
});

// Email validation (basic pattern check)
emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
    } else {
        clearError(emailInput, emailError);
    }
});

// Message validation (min 10 characters)
messageInput.addEventListener('input', () => {
    const messageValue = messageInput.value.trim();
    if (messageValue.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
    } else {
        clearError(messageInput, messageError);
    }
});

// Final form submission validation
form.addEventListener('submit', (e) => {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue.length < 3) {
        showError(nameInput, nameError, 'Name must be at least 3 characters');
        e.preventDefault();
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        e.preventDefault();
    }

    if (messageValue.length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        e.preventDefault();
    }
});
