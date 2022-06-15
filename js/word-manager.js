// this manages the word list
// both valid and invalid

var invalid_words = [];
var valid_words = [];

// get the valid words from github
// more specifically, https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt
// if it works, great! get all the words and put them in the valid_words array
// if it fails, use backup words
function get_valid_words() {
    $.ajax({
        url: "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt",
        success: function(data) {
            var words = data.split("\n");
            for (var i = 0; i < words.length; i++) {
                valid_words.push(words[i]);
            }
        }
    });
}

function filter_for_5_letters(word) {
    return word.length == 5;
}

function check_if_word_invalid() {
    var word = document.getElementById("word").value;
    if (invalid_words.indexOf(word) != -1) {
        return true;
    }
    if (valid_words.indexOf(word) != -1) {
        return false;
    }
    return true;
}

function main() {
    get_valid_words();
    var word = document.getElementById("word");
    word.addEventListener("keyup", function(event) {
        if (check_if_word_invalid()) {
            document.getElementById("word").className = "invalid";
        } else {
            document.getElementById("word").className = "valid";
        }
    });
}

main()