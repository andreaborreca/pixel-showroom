var playNote = function() {
    var sound = this.getAttribute("data-sound");
    var note = new Audio(sound);
    note.play();
};

var keys = document.getElementsByClassName("key");

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', playNote);
}