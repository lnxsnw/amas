const imageData = [
    // Example structure:
    // { src: "URL_HERE", title: "Example Title 1", production: "Example Production 1" },
    // { src: "URL_HERE", title: "Example Title 2", production: "Example Production 2" },
    // ... more image objects
    { src: "https://cdn.rst.ovh/1a.jpg", title: "Balance The Sheets", production: "BSA 1A" },
    { src: "https://cdn.rst.ovh/1b.jpg", title: "Don na CPA", production: "BSA 1B" },
    { src: "https://cdn.rst.ovh/1c.jpg", title: "Uwing Uwi", production: "BSA 1C" },
    { src: "https://cdn.rst.ovh/1d.jpg", title: "Onto the CPA Dream", production: "BSA 1D" },
    { src: "https://cdn.rst.ovh/2a.jpg", title: "Nanginginig", production: "BSA 2A" },
    { src: "https://cdn.rst.ovh/2b.jpg", title: "BSA KA PA BA?", production: "BSA 2B" },
    { src: "https://cdn.rst.ovh/2c.jpg", title: "Panggap-panggapan", production: "BSA 2C" },
    { src: "https://cdn.rst.ovh/2d.jpg", title: "Cram na!", production: "BSA 2D" },
    { src: "https://cdn.rst.ovh/3a.jpg", title: "Accrual World", production: "BSA 3A" },
    { src: "https://cdn.rst.ovh/3b.jpg", title: "Push mo pa 'day!", production: "BSA 3B" }
];

const gallery = document.getElementById('gallery');
const particlesContainer = document.getElementById('particles');
const galleryContainer = document.querySelector('.gallery-container');

let currentFlipped = null;
let cardsAreDown = false;

function createParticles() {
    particlesContainer.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const startY = Math.random() * window.innerHeight;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = startY + 'px';
        const duration = (Math.random() * 20 + 15);
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = (Math.random() * duration) + 's';
        particlesContainer.appendChild(particle);
    }
}

function calculatePositions(numPosters) {
    const positions = [];
    const cardWidth = 250;
    const cardHeight = 250;
    const minSpacing = -cardWidth * 0.65;
    const galleryWidth = galleryContainer.offsetWidth;
    
    const totalStackWidth = (numPosters - 1) * (cardWidth * 0.35 + minSpacing) + cardWidth;
    const startX = (galleryWidth - totalStackWidth) / 2 + totalStackWidth - cardWidth;
    const centerY = (galleryContainer.offsetHeight - cardHeight) / 2;

    for (let i = 0; i < numPosters; i++) {
        positions.push({
            left: startX - i * (cardWidth * 0.35 + minSpacing),
            top: centerY,
            zIndex: numPosters - i
        });
    }

    return positions;
}

function makeCardsFall(exceptCard) {
    const cards = document.querySelectorAll('.flip-container:not(.flipped)');
    cards.forEach(card => {
        if (card !== exceptCard) {
            // Store current position before falling
            card.dataset.preFallLeft = card.style.left;
            card.dataset.preFallTop = card.style.top;
            card.dataset.preFallZIndex = card.style.zIndex;
            
            card.classList.add('falling');
            const randomY = galleryContainer.offsetHeight + 500;
            const randomX = parseFloat(card.style.left) + (Math.random() * 200 - 100);
            const randomRotation = Math.random() * 90 - 45;
            
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.left = `${randomX}px`;
            card.style.top = `${randomY}px`;
            card.style.transform = `rotate(${randomRotation}deg)`;
            card.style.opacity = '0';
        }
    });
    cardsAreDown = true;
}

function makeCardsRise() {
    const cards = document.querySelectorAll('.flip-container.falling');
    const delayStep = 150;
    
    cards.forEach((card, i) => {
        card.classList.remove('falling');
        
        // Reset all transforms and transitions
        card.style.transition = `
            left 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${i * delayStep}ms,
            top 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${i * delayStep}ms,
            transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${i * delayStep}ms,
            opacity 0.5s ease ${i * delayStep}ms
        `;

        // Reset to original positions
        card.style.left = card.dataset.originalLeft;
        card.style.top = card.dataset.originalTop;
        card.style.transform = '';
        card.style.opacity = '1';
        card.style.zIndex = card.dataset.originalZIndex;

        // Cleanup after transition
        const onTransitionEnd = () => {
            card.style.transition = '';
            card.style.transform = '';
            card.removeEventListener('transitionend', onTransitionEnd);
        };
        card.addEventListener('transitionend', onTransitionEnd);
    });
    
    cardsAreDown = false;
}

function resetCardStyles(card) {
    // Completely reset all styles to initial state
    card.style.transition = '';
    card.style.transform = '';
    card.style.left = card.dataset.originalLeft;
    card.style.top = card.dataset.originalTop;
    card.style.zIndex = card.dataset.originalZIndex;
    card.style.opacity = '1';
}

function initializeGallery() {
    gallery.innerHTML = '';
    const positions = calculatePositions(imageData.length);

    imageData.forEach((image, index) => {
        const flipContainer = document.createElement('div');
        flipContainer.classList.add('flip-container');
        flipContainer.style.left = positions[index].left + 'px';
        flipContainer.style.top = positions[index].top + 'px';
        flipContainer.style.zIndex = positions[index].zIndex;
        
        flipContainer.dataset.originalLeft = positions[index].left + 'px';
        flipContainer.dataset.originalTop = positions[index].top + 'px';
        flipContainer.dataset.originalZIndex = positions[index].zIndex;

        const flipper = document.createElement('div');
        flipper.classList.add('flipper');

        const poster = document.createElement('div');
        poster.classList.add('poster');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.loading = 'lazy';

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        const titleOverlay = document.createElement('div');
        titleOverlay.classList.add('overlay-title');
        titleOverlay.textContent = image.title;
        overlay.appendChild(titleOverlay);

        poster.appendChild(img);
        poster.appendChild(overlay);

        const flipBack = document.createElement('div');
        flipBack.classList.add('flip-back');

        const backTitle = document.createElement('h2');
        backTitle.classList.add('flip-back-title');
        backTitle.textContent = image.title;

        const backProduction = document.createElement('p');
        backProduction.classList.add('flip-back-production');
        backProduction.textContent = image.production;

        flipBack.appendChild(backTitle);
        flipBack.appendChild(backProduction);

        flipper.appendChild(poster);
        flipper.appendChild(flipBack);
        flipContainer.appendChild(flipper);
        gallery.appendChild(flipContainer);

        flipContainer.addEventListener('click', () => {
if (flipContainer === currentFlipped) {
// Unflip current card
flipContainer.classList.remove('flipped');
document.body.classList.remove('card-is-flipped');

// Reset the card's position to original
flipContainer.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
flipContainer.style.left = flipContainer.dataset.originalLeft;
flipContainer.style.top = flipContainer.dataset.originalTop;
flipContainer.style.zIndex = flipContainer.dataset.originalZIndex;

makeCardsRise();
currentFlipped = null;
} else {
// If another card is flipped, completely reset it first
if (currentFlipped) {
    currentFlipped.classList.remove('flipped');
    resetCardStyles(currentFlipped);
    makeCardsRise();
}

// Make other cards fall
makeCardsFall(flipContainer);

// Flip the clicked card
const galleryRect = galleryContainer.getBoundingClientRect();
const targetX = (window.innerWidth/2 - 125) - galleryRect.left;
const targetY = (window.innerHeight/2 - 125) - galleryRect.top;

flipContainer.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
flipContainer.style.left = `${targetX}px`;
flipContainer.style.top = `${targetY}px`;
flipContainer.style.zIndex = '1000';
flipContainer.classList.add('flipped');
document.body.classList.add('card-is-flipped');

currentFlipped = flipContainer;
}
});

        setTimeout(() => {
            flipContainer.classList.add('visible');
        }, 100 + index * 100);
    });
}

function handleResize() {
    if (currentFlipped) {
        currentFlipped.classList.remove('flipped');
        document.body.classList.remove('card-is-flipped');
        resetCardStyles(currentFlipped);
        currentFlipped = null;
    }

    const positions = calculatePositions(imageData.length);
    const flipContainers = document.querySelectorAll('.flip-container');

    flipContainers.forEach((container, index) => {
        if (positions[index]) {
            container.style.transition = 'none';
            container.style.left = positions[index].left + 'px';
            container.style.top = positions[index].top + 'px';
            container.style.zIndex = positions[index].zIndex;
            
            container.dataset.originalLeft = positions[index].left + 'px';
            container.dataset.originalTop = positions[index].top + 'px';
            container.dataset.originalZIndex = positions[index].zIndex;

            void container.offsetWidth;
        }
    });
    
    if (cardsAreDown) makeCardsRise();
}

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 250);
});

window.addEventListener('load', () => {
    createParticles();
    initializeGallery();
});