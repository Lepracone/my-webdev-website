function domElements(){

    //buttons
    const devButton = document.getElementById("development-button");
    const designButton = document.getElementById("design-button");
    const skillsGrid = document.getElementById("skills-grid");
    const designSkillsGrid = document.getElementById("design-skills-grid");
    return {devButton, designButton, skillsGrid, designSkillsGrid}
}

let dom = domElements();

export {dom};