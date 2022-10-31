let images	= ['img/image_0.png', 'img/image_1.png'],
    length	= images.length,
    index	= 0;
let closeTimer=0;
    function refreshImages() {
        if(index === length) index = 0;
        document.getElementById('image_id').src = images[index++];
        closeTimer++;
    }