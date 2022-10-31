let url,
    inputURL = getElement('inputUrlText'),
    outputURL = getElement('boxOutUrlText');


inputURL.addEventListener(
    'change', function getRefreshTimeNumber() {
        url = inputURL.value;
    }
)

getElement('button').addEventListener(
    'click', function getInputText() {
        outputURL.innerText = url;
        if (url === '' || url === undefined) {
            outputURL.hidden = true
        } else if (outputURL.hidden) outputURL.hidden = false;
    }
)

function getElement(id) {
    return document.getElementById(id);
}
