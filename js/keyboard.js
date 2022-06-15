// this generates a keyboard for the user to use
// the keyboard is a grid of buttons

function gen_keyboard() {
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var keyboard = document.getElementById("keyboard");
    // create a row for each letter
    for (var i = 0; i < letters.length; i++) {
        var row = document.createElement("div");
        row.className = "row";
        keyboard.appendChild(row);
        // create a button for each letter
        for (var j = 0; j < letters.length; j++) {
            var button = document.createElement("button");
            button.className = "button";
            button.innerHTML = letters[i] + letters[j];
            row.appendChild(button);
        }
    }
}
