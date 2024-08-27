let count = 0;
let interval;

document.getElementById("plus").addEventListener("mousedown", function() {
    interval = setInterval(() => {
        count++;
        document.getElementById("number").innerText = count;
    }, 100);
});

document.getElementById("plus").addEventListener("mouseup", function() {
    clearInterval(interval);
});

document.getElementById("plus").addEventListener("mouseleave", function() {
    clearInterval(interval);
});

document.getElementById("mines").addEventListener("mousedown", function() {
    interval = setInterval(() => {
        count--;
        document.getElementById("number").innerText = count;
    }, 100);
});

document.getElementById("mines").addEventListener("mouseup", function() {
    clearInterval(interval);
});

document.getElementById("mines").addEventListener("mouseleave", function() {
    clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    document.getElementById("number").innerText = count;
});
