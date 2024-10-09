function getElementByItsId(elementId) {
    const element = document.getElementById(elementId).innerText;
    
    return element

}

function setElementByItsId(elementId,value) {
    const element = document.getElementById(elementId);

    element.innerText=value
}