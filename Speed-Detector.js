let speed = prompt("Enter car speed (in km/h): ");
let points = 0;

if (speed <= 70) {
    console.log("Ok");
} else {
    points = Math.floor((speed - 70) / 5);
    console.log("Points: " + points);
    
    if (points > 12) {
        console.log("License suspended");
    }
}