/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
let size = 2

// 1 - small, 2 - medium, 3-large
function setSize(change) {
    size += change
    if (size < 1) {
        size = 1
    } else if (size > 3) {
        size = 3
    }
    convert()
}

function convert() {
    let amountNum = document.getElementById("amount-number").value
    if (size === 1) {
        let inchConversion = parseFloat((amountNum * 2.54).toFixed(3))
        let centimeterConversion = parseFloat((amountNum * 0.3937).toFixed(3))
        lengthEl.textContent = `${amountNum} centimeters = ${inchConversion} inches | ${amountNum} inches = ${centimeterConversion} centimeters`
        let quartConversion = parseFloat((amountNum / 946.35).toFixed(3))
        let milliliterConversion = parseFloat((amountNum * 946.35).toFixed(3))
        volumeEl.textContent = `${amountNum} milliliters = ${quartConversion} quarts | ${amountNum} quarts = ${milliliterConversion} milliliters`
        let ounceConversion = parseFloat((amountNum / 28.34952).toFixed(3))
        let gramConversion = parseFloat((amountNum * 28.34952).toFixed(3))
        massEl.textContent = `${amountNum} grams = ${ounceConversion} ounces | ${amountNum} ounces = ${gramConversion} grams` 
    } else if (size === 2) {
        let footConversion = parseFloat((amountNum * 3.28084).toFixed(3))
        let meterConversion = parseFloat((amountNum * 0.3048).toFixed(3))
        lengthEl.textContent = `${amountNum} meters = ${footConversion} feet | ${amountNum} feet = ${meterConversion} meters`
        let gallonConversion = parseFloat((amountNum * 0.2641722).toFixed(3))
        let literConversion = parseFloat((amountNum * 3.785).toFixed(3))
        volumeEl.textContent = `${amountNum} liters = ${gallonConversion} gallons | ${amountNum} gallons = ${literConversion} liters`
        let poundConversion = parseFloat((amountNum * 2.205).toFixed(3))
        let kilogramConversion = parseFloat((amountNum * 0.45359237).toFixed(3))
        massEl.textContent = `${amountNum} kilograms = ${poundConversion} pounds | ${amountNum} pounds = ${kilogramConversion} kilograms` 
    } else {
        let mileConversion = parseFloat((amountNum * 0.621371).toFixed(3))
        let kilometerConversion = parseFloat((amountNum / 0.621371).toFixed(3))
        lengthEl.textContent = `${amountNum} kilometers = ${mileConversion} miles | ${amountNum} miles = ${kilometerConversion} kilometers`
        let barrelConversion = parseFloat((amountNum / 6.29).toFixed(3))
        let kiloliterConversion = parseFloat((amountNum * 6.29).toFixed(3))
        volumeEl.textContent = `${amountNum} kiloliters = ${barrelConversion} barrels | ${amountNum} barrels = ${kiloliterConversion} kiloliters`
        let impTonConversion = parseFloat((amountNum * 1.102311).toFixed(3))
        let metTonConversion = parseFloat((amountNum / 1.102311).toFixed(3))
        massEl.textContent = `${amountNum} metric tons = ${impTonConversion} imperial tons | ${amountNum} imperial tons = ${metTonConversion} metric tons`
    }
}

let isLightMode = false
const lightBodyEl = document.getElementById("light-body-el")
const lightMainEl = document.getElementById("light-main-el")
const lightBtnTextEl = document.getElementById("light-btn-text-el")
const lightBtnIconEl = document.getElementById("light-btn-icon-el")
const lightLengthEl = document.getElementById("light-length-el")
const lightVolumeEl = document.getElementById("light-volume-el")
const lightMassEl = document.getElementById("light-mass-el")
const lightTitleLenghthEl = document.getElementById("measurement--title-length-el")
const lightTitleVolumeEl = document.getElementById("measurement--title-volume-el")
const lightTitleMassEl = document.getElementById("measurement--title-mass-el")

function lightMode() {
    isLightMode = !isLightMode
    if (isLightMode) {
        lightBtnTextEl.textContent = "DARK"
        lightBtnIconEl.classList.remove("fa-toggle-on")
        lightBtnIconEl.classList.add("fa-toggle-off")
        lightBodyEl.style.backgroundColor = "#F4F4F4"
        lightMainEl.style.backgroundColor = "#F4F4F4"
        lightLengthEl.style.backgroundColor = "#fff"
        lightVolumeEl.style.backgroundColor = "#fff"
        lightMassEl.style.backgroundColor = "#fff"
        lightTitleLenghthEl.style.color = "#5A537B"
        lightTitleVolumeEl.style.color = "#5A537B"
        lightTitleMassEl.style.color = "#5A537B"
        lengthEl.style.color ="#353535"
        volumeEl.style.color ="#353535"
        massEl.style.color ="#353535"
    } else {
        lightBtnTextEl.textContent = "LIGHT"
        lightBtnIconEl.classList.remove("fa-toggle-off")
        lightBtnIconEl.classList.add("fa-toggle-on")
        lightBodyEl.style.backgroundColor = "#1F2937"
        lightMainEl.style.backgroundColor = "#1F2937"
        lightLengthEl.style.backgroundColor = "#273549"
        lightVolumeEl.style.backgroundColor = "#273549"
        lightMassEl.style.backgroundColor = "#273549"
        lightTitleLenghthEl.style.color = "#CCC1FF"
        lightTitleVolumeEl.style.color = "#CCC1FF"
        lightTitleMassEl.style.color = "#CCC1FF"
        lengthEl.style.color ="#fff"
        volumeEl.style.color ="#fff"
        massEl.style.color ="#fff"
    }
}