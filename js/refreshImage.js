let images = ['img/image_0.png', 'img/image_1.png'],
    index = 0,
    image = getElement('image_id'),
    closeTimer = 0;

image.src = images[0];
index++;

function refreshImages() {
    if (index === images.length) index = 0;
    image.src = images[index++];
    closeTimer++;
}
