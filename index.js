function updateSkill(id, value) {
    const skillBar = document.getElementById(id).querySelector('.skill__progress')
    const skillValue = document.getElementById(id).querySelector('.skill__value')

    const numericValue = parseInt(value)
    skillBar.style.width = `${numericValue}%`
    skillValue.textContent = `${numericValue} / 100`
}


const HTML = prompt("Ohodnoť své znalosti HTML škálou 0-100")
updateSkill('skill1', HTML)

const CSS = prompt("Ohodnoť své znalosti CSS škálou 0-100")
updateSkill('skill2', CSS)

const JS = prompt("Ohodnoť své znalosti Javascriptu škálou 0-100")
updateSkill('skill3', JS)

console.log("funguje")
