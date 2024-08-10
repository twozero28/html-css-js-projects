const identities = ["Web developer", "Full-stack developer", "Frieren fan", "One Piece fan"];

const contentEl = document.getElementById("content");



let identitiesIndex = 0;
let characterIndex = 0;

const updateText = () => {
    characterIndex++;
    contentEl.innerText = `I am a ${identities[identitiesIndex].slice(0, characterIndex)}`;
    
    if (characterIndex === identities[identitiesIndex].length) {
        characterIndex = 0;
        identitiesIndex++;

    }
    if (identitiesIndex === identities.length) {
        identitiesIndex = 0
    }
    setTimeout(updateText, 300);
}

updateText();
