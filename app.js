//DOM Elements
const devButton = document.getElementById("development-button");
const designButton = document.getElementById("design-button");
const skillsGrid = document.getElementById("skills-grid-container");
const designSkillsGrid = document.getElementById("design-skills-container");
//Event Listeners
devButton.addEventListener("click", function(){
    if(!devButton.classList.contains("selected-button")){
        toogleSkills();
    }  
});

designButton.addEventListener("click", function(){
    if(!designButton.classList.contains("selected-button")){
        toogleSkills();
    }  
});

function toogleSkills(){
    devButton.classList.toggle("selected-button");
    skillsGrid.classList.toggle("invisible");
    designSkillsGrid.classList.toggle("invisible");
    designButton.classList.toggle("selected-button");
}

