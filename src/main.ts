import "./style.css";

import confetti from "canvas-confetti";

function triggerConfetti(): void {
    const count: number = 200;
    const defaults: confetti.Options = {
        origin: { y: 0.7 },
        spread: 360,
        ticks: 100,
        gravity: 0.5,
        decay: 0.94,
        startVelocity: 30,
    };

    function fire(particleRatio: number, opts: confetti.Options): void {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio),
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });

    fire(0.2, {
        spread: 60,
    });

    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });

    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}

const celebrateBtn = document.querySelector("#celebrateBtn");

if (celebrateBtn) {
    celebrateBtn.addEventListener("click", triggerConfetti);
}

const musicBtn = document.querySelector("#musicBtn")!;
const music = document.querySelector<HTMLAudioElement>("#music")!;
musicBtn.addEventListener("click", () => {
    music.paused ? music.play() : music.pause();
    musicBtn.setAttribute("data-playing", String(!music.paused));
});

// Initial celebration
setTimeout(triggerConfetti, 1000);
