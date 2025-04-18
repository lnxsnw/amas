const imageData = [
    // Example structure:
    // { src: "URL_HERE", title: "Example Title 1", production: "Example Production 1" },
    // { src: "URL_HERE", title: "Example Title 2", production: "Example Production 2" },
    // ... more image objects
    { src: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/486320101_1234421598692260_2794196397526659888_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHWIGEp7BNvs8qfsnGWE3oK0tcEvmYN_pnS1wS-Zg3-mQTvMjPfLtWMMlUDpn0ToVTjgPZBcqNi5XpTt2zUUvIA&_nc_ohc=Y2PWzIIe_y8Q7kNvwEsutWM&_nc_oc=Adkp4xOt8fRdB7k1zRnz9MZgrcIp3nxmshXFIfLupLLCLrMP_8j0cl5_cvRPXIHiX6Y&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=7paKDoAPR_NtRAqNbnfv-w&oh=00_AfH9-_hJjXOkodtwwc_DCJoSWWguVFknfaXrlUwsKSyElQ&oe=68085FC5", title: "Balance The Sheets", production: "BSA 1A" },
    { src: "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/486371290_1234421375358949_1048293467299402056_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFjsmhBTekwsOdtxkG4a5C1KPky9x-Q7yko-TL3H5DvKamHC6cuRIoQN-Nc7tS-tSv-j5FSeg7grob85I7p5Hy9&_nc_ohc=hc253_IyEPsQ7kNvwFUxfTK&_nc_oc=AdkIra7RfDbto-isFPkGcZavkb5FMepR691ZBUbCCjLE5A6sobKV5CuDw3-DvFdVcZc&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=hjDpgreUA0lB1pvjBCPfxQ&oh=00_AfHlfvL-eKnV2wUNcn5jN1DI65eYX0Snak0WukXbz-0Xzg&oe=680845D3", title: "Don na CPA", production: "BSA 1B" },
    { src: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/485054801_1234421138692306_6639931448434823160_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFCe6lYdpz2cRv_UEmhx2hb75q96HOki67vmr3oc6SLro7n0nUD5jQSwmezNQpYUvQNLwC6SnIZvJAxAMzANowj&_nc_ohc=DyKJRU_OyiEQ7kNvwHI4J4j&_nc_oc=AdlKOhWVzTrDp3wyu3ChaOlxNQ50AYMj5gkZ_dLR_YwU2dIZXjDkPTCTXZuGlQPkXPA&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=BYBhOJZAnPspMWtBY8xDsQ&oh=00_AfHIhw77yWoMiAzfD64vOVYKRuRPUOrC4cyAbeK5m4FmLg&oe=6808676C", title: "Uwing Uwi", production: "BSA 1C" },
    { src: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/485487346_1234421725358914_5287408535342129344_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeES5aKikVowtIKblVWPLrKq7zKImNHI_vLvMoiY0cj-8o7VfNDyuSYqq2d9gQnpT6h1kU_jdr1wwMF-j0frklM2&_nc_ohc=0ehdoxKNQjcQ7kNvwFJtcZC&_nc_oc=AdnIk0TusGzk8it9K0u-7_tuN-_EV3mUgPxl_Ls7AKMITqSdaGLqFb9V0z1HfHu8Uns&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=YmGuc3WdkFceC-aF3XXHMw&oh=00_AfEMZwQSxItJ0e5e-qFlTwroBYGPyKYBHvRapmsTo1HQHw&oe=680849E9", title: "Onto the CPA Dream", production: "BSA 1D" },
    { src: "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/486286616_1234421755358911_1273932249375132323_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFzbqNnzZ7RPALxP3bsWp6Ie6yE3FlrrP97rITcWWus_2JOKhkI7-CtS4JfRXw9nhxOIlt0haWvW3pw5_38IPBN&_nc_ohc=TjHAhp474K4Q7kNvwFyH9fx&_nc_oc=AdletutgTBOcwRKn4bIZUQGlLhYMukLcPNX88XkJAltD7pezyqZREyc12lVxMhzqVNw&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=5ww6VRQwlbkjG_Y2dHzdEA&oh=00_AfF5fnmPyKs3tq5nCOaPem37TXpyyqKMi1CIfPjeg5sZDQ&oe=68085995", title: "Nanginginig", production: "BSA 2A" },
    { src: "https://scontent.fceb6-2.fna.fbcdn.net/v/t39.30808-6/486225538_1234421465358940_7256455216776397313_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFpp0pM4rcSrYwBlWedYvDSxjrXwBwukMbGOtfAHC6Qxkwcr1ZfvgDDpkmFQgXIn5fnDPGOm1ENcSNYzTLqASZk&_nc_ohc=ApuRADZnti0Q7kNvwEKrfno&_nc_oc=Adl9lNbhhbLmWOJVLy1hSkPz7S9iTVcRcJasHKeaLKGQwkCvs4ogM7TAhC4pOS6B2vo&_nc_zt=23&_nc_ht=scontent.fceb6-2.fna&_nc_gid=uO49wWgiQsaKph5juWvLaA&oh=00_AfHx21H0wWEQL8g1lEB4A9UsVhz7w0ooCzI96OBbSoi9sg&oe=68084B9E", title: "BSA KA PA BA?", production: "BSA 2B" },
    { src: "https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/486316678_1234421422025611_4616178796210922106_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGtj_hiTSOE7Apyg825v7kLoTfrwKSx70GhN-vApLHvQa8UEpzjcb-N5d0TNqq9vh4WBbMv88egPcG-dGPiH0ch&_nc_ohc=HkPmAdDTF1IQ7kNvwGP0FlC&_nc_oc=Admno_4buHJvURPQZyT00ncd_Izy04NLpiCyvc4hv7WAYFxmC8A9A-EStK0RbUebOEY&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&_nc_gid=_KliOQ7wrOema7ykvH1TYA&oh=00_AfFPmE3mrbqd04FM9AkE4vcBYEB-ONOoHNNqN9-kPFGbjQ&oe=68087B9B", title: "Panggap-panggapan", production: "BSA 2C" },
    { src: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/486339944_1234421188692301_2915165134221158913_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF0Pg_LHZPyID5sLm9095uGKCiwRm7w8sIoKLBGbvDyws3g7OJmsJW6IMyDdzTX7QslIVr3w5-N6HptmHK6ASt9&_nc_ohc=D_slwGflyCsQ7kNvwE6USEf&_nc_oc=Adkm34slpDR_0E-DNGzlwmHh107ASZ0s4x1dRecmzia62bPd5lVXsX82uNNnEEVjKjY&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=pBhVfUtMtXKnfDySXqFhkw&oh=00_AfHeVhoM2KgwSPi_tCB04aiKiP87Xfn2hzcZjU5idW8pcA&oe=680865E3", title: "Cram na!", production: "BSA 2D" },
    { src: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/485925091_1234421538692266_9218867753685624251_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFNJwakko-fjWR995TKSKood1-QB6D61DJ3X5AHoPrUMvAJ2HCOybD5ZY34tp2BpI6BGngvyLcoDuJCOz0Br4H5&_nc_ohc=HtCdskFWlOEQ7kNvwFFIZkg&_nc_oc=AdkZTsJko5DRSsiQrHHN9CyGeV84y1XXGz418htadE7rN3fDId5nl_7LBwz40blLBtQ&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&_nc_gid=_wZeNy3amZc3GFmEc1RPNA&oh=00_AfHF6s_MxVs697qOuzbOdPaFJxEldY0VIz3Q3sI18r9lJQ&oe=680846C6", title: "Accrual World", production: "BSA 3A" },
    { src: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/486155468_1234421692025584_6703775451591975976_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH56-7OSvm7mk20u5xu8VFsf5HcJHy1Aqd_kdwkfLUCp4Jr4k20DGTSzEf_pJ7ycVgXpkjw0Dz-TTTN1HFaQU48&_nc_ohc=0JaKgqfH3rAQ7kNvwEHJX9Y&_nc_oc=Adm9GU4qeG-9UG9u_1DRDqJhHWW350vyf-14wwViM8NkmnUn-ATsHja3S6MUJtWf4f8&_nc_zt=23&_nc_ht=scontent.fceb2-2.fna&_nc_gid=-s82PlPJ5Kg0vMgYZxqPZA&oh=00_AfFpyyQ_XTL8-Vy-IQkQavBDfkU4-_oOuYNwKQ0SmgaTsg&oe=68084A6E", title: "Push mo pa 'day!", production: "BSA 3B" }
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