// Function to play animal sound
function playSound(animal) {
    let sound = new Audio(`assets/sounds/${animal}.mp3`);
    sound.play();
}

// GSAP Animations on Scroll
document.addEventListener("DOMContentLoaded", function () {
    gsap.from("header", { duration: 1.5, opacity: 0, y: -50 });

    document.querySelectorAll(".big-cat").forEach((section, index) => {
        gsap.from(section, {
            duration: 1.5,
            opacity: 0,
            y: 50,
            scrollTrigger: section
        });
    });
});
