let count = 0;
function increment() {
    count++;
    document.getElementById("count-el").innerText = count;
}

let history = [0, 0, 0];
function save() {
    history[0] = history[1];
    history[1] = history[2];
    history[2] = count;

    console.log("Histor: " + history[0] + " - " + history[1] + " - " + history[2]);

    displayHistory();

    count = 0;
    document.getElementById("count-el").innerText = count;
}

function displayHistory() {
    document.getElementById("history-lbl").innerText =
        "Past Entries: " + history[0] + " - " + history[1] + " - " + history[2];
}