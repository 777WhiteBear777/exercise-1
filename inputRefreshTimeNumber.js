let refreshTimeNumber;
let lastInterval;
let childInterval=null;
document.getElementById('inputRefreshTimeNumber').addEventListener
(
    'change',
    function getRefreshTimeNumber() {
        refreshTimeNumber = document.getElementById('inputRefreshTimeNumber').value;
        lastInterval=childInterval;
        childInterval = setInterval(refreshImages,refreshTimeNumber*1000);
        if (closeTimer>0){
            clearInterval(lastInterval);
            closeTimer=0;
        }
    }
)
// *checking for a number*
// document.getElementsByClassName('btn')[0].addEventListener(
//     'click', function getInputText() {
//         console.log(refreshTimeNumber);
//     }
// )