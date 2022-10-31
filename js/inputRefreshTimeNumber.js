let refreshTimeNumber,
    lastInterval,
    childInterval = null;

getElement('inputRefreshTimeNumber').addEventListener
(
    'change', function getRefreshTimeNumber() {
        refreshTimeNumber = getElement('inputRefreshTimeNumber').value;
        lastInterval = childInterval;
        childInterval = setInterval(refreshImages, refreshTimeNumber * 1000);
        if (refreshTimeNumber < 1) {
            clearInterval(childInterval);
        }
        if (closeTimer > 0) {
            clearInterval(lastInterval);
            closeTimer = 0;
        }
    }
)
