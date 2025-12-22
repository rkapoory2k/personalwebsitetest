/**
 * Personal Website - Main JavaScript
 * Handles smooth scrolling and form validation
 */

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initFormValidation();
});

/**
 * Smooth Scroll Navigation
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Form Validation
 */
function initFormValidation() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    if (!form) return;
    
    const fields = {
        name: {
            element: document.getElementById('name'),
            validate: (value) => {
                if (!value.trim()) return 'Please enter your name.';
                if (value.trim().length < 2) return 'Name must be at least 2 characters.';
                return '';
            }
        },
        email: {
            element: document.getElementById('email'),
            validate: (value) => {
                if (!value.trim()) return 'Please enter your email.';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'Please enter a valid email.';
                return '';
            }
        },
        message: {
            element: document.getElementById('message'),
            validate: (value) => {
                if (!value.trim()) return 'Please enter a message.';
                if (value.trim().length < 10) return 'Message must be at least 10 characters.';
                return '';
            }
        }
    };

    // Real-time validation on blur
    Object.keys(fields).forEach(fieldName => {
        const field = fields[fieldName];
        field.element.addEventListener('blur', () => {
            validateField(field);
        });
        
        // Clear error on input
        field.element.addEventListener('input', () => {
            clearFieldError(field);
        });
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        
        // Validate all fields
        Object.keys(fields).forEach(fieldName => {
            const field = fields[fieldName];
            const error = validateField(field);
            if (error) isValid = false;
        });
        
        if (isValid) {
            // Hide form and show success message
            form.classList.add('hidden');
            successMessage.classList.add('show');
            
            // Reset form
            form.reset();
        }
    });
}

/**
 * Validate a single field
 */
function validateField(field) {
    const value = field.element.value;
    const error = field.validate(value);
    const formGroup = field.element.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    if (error) {
        formGroup.classList.add('error');
        errorElement.textContent = error;
    } else {
        formGroup.classList.remove('error');
        errorElement.textContent = '';
    }
    
    return error;
}

/**
 * Clear error from a field
 */
function clearFieldError(field) {
    const formGroup = field.element.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('error');
    errorElement.textContent = '';
}

