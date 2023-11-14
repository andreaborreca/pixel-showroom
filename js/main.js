//piano

var playNote = function() {
    var sound = this.getAttribute("data-sound");
    var note = new Audio(sound);
    note.play();
};

var keys = document.getElementsByClassName("key");

for (var i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', playNote);
}

//gioconda

const gioconda = document.getElementById("gioconda");
const sunglasses = document.getElementById("sunglasses");
const frame = document.getElementById("frame");

function elementsOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();
  
    return !(
      domRect1.top > domRect2.bottom ||
      domRect1.right < domRect2.left ||
      domRect1.bottom < domRect2.top ||
      domRect1.left > domRect2.right
    );
  }

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        if(!(elementsOverlap(gioconda, sunglasses))){
            elmnt.style = "";
        }

        if(elementsOverlap(frame, sunglasses)){
            elmnt.style.top = "41%";
            elmnt.style.left = "50%";
            elmnt.style.cursor = "auto";
            elmnt.style.pointerEvents = "none";
            y = 0;
            myIntervalTimer = setInterval(function(){
                if(y === 3 || y === 6){
                    elmnt.style.top = "42%";
                }
                if ((y === 6 || y === 9) ) {
                    elmnt.style.top = "43%";
                }
                if(y === 10){
                    elmnt.style.top = "44%";
                }
                y++;
            }, 400);
        }
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

dragElement(sunglasses);