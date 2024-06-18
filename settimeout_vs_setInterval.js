// alert("This is immediate alert");
document.write("This is immediate alert")
let timeoutId;
let intervalId;

document.getElementById('startTimeout').addEventListener('click', function() {
    timeoutId = setTimeout(function() {
        alert("I am from inside setTimeout after 3 seconds");
    }, 3000);
});

document.getElementById('clearTimeout').addEventListener('click', function() {
    if (timeoutId) {
        clearTimeout(timeoutId);
        alert("Timeout cleared");
    }
});

document.getElementById('startInterval').addEventListener('click', function() {
    intervalId = setInterval(function() {
        alert("From interval block");
    }, 2000);
});

document.getElementById('clearInterval').addEventListener('click', function() {
    if (intervalId) {
        clearInterval(intervalId);
        alert("Interval cleared");
    }
});