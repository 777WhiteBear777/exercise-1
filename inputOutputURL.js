let UrlText;
document.getElementById('inputUrlText').addEventListener
(
    'change',
    function getRefreshTimeNumber() {
        UrlText = document.getElementById('inputUrlText').value;
    }
)
document.getElementsByClassName('btn')[0].addEventListener(
    'click', function getInputText() {
        document.getElementById('boxOutUrlText').innerText = UrlText;
    }

)