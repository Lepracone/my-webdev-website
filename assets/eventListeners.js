import {dom} from "./dom.js"

//Buttons
function addEventListeners(){
    dom.devButton.addEventListener("click", function(){
        console.log("clicked");
    })
}

export {addEventListeners}