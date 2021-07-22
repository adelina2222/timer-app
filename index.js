const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
// Fill the circle length by using the calculated perimeter
circle.setAttribute("stroke-dasharray", perimeter);
let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log("Timer has started!");
    },
    onTick(timeRemaining) {
        circle.setAttribute("stroke-dashoffset", (perimeter * timeRemaining) / duration - perimeter);
    }, 
    onComplete() {
        console.log("Timer has reached 0!");
    }
});

