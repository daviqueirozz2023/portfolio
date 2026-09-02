function openOverlayById(overlayId) {
    const overlay = document.getElementById(overlayId);

    if (overlay) {
        lastFocusedElement = document.activeElement;

        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const closeButton = overlay.querySelector('.close-btn');

        if (closeButton) {
            closeButton.focus();
        }
    }
}

function closeOverlayById(overlayId) {
    const overlay = document.getElementById(overlayId);

    if (overlay) {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        const elementToFocus = lastFocusedElement;
        lastFocusedElement = null;

        if (elementToFocus) {
            setTimeout(function() {
                elementToFocus.focus();
            }, 0);
        }
    }
}

document.addEventListener('keydown', function(event) {
    const activeOverlay = document.querySelector('.overlay.active');

    if (!activeOverlay) {
        return;
    }

    if (event.key === 'Escape') {
        closeOverlayById(activeOverlay.id);
        return;
    }

    if (event.key === 'Tab') {
        const focusableElements = activeOverlay.querySelectorAll(
            'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) {
            event.preventDefault();
            return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }
});

document.addEventListener('focusin', function(event) {
    const activeOverlay = document.querySelector('.overlay.active');

    if (!activeOverlay) {
        return;
    }

    if (!activeOverlay.contains(event.target)) {
        const closeButton = activeOverlay.querySelector('.close-btn');

        if (closeButton) {
            closeButton.focus();
        }
    }
});


