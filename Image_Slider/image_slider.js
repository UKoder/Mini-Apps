const imgs = document.querySelectorAll('img');
let imgIndex = 0;
let id = 0;

initImg();

function initImg(){
    if(imgs.length > 0){
        imgs[imgIndex].classList.add("display-img");
        setBgImage(imgIndex);
        id = setInterval(()=>{
            setBgImage(imgIndex);
            nextImg();
        }, 3000);
    }
}

function showImg(imgIndex){
    imgs.forEach(img=>{
        img.classList.remove("display-img");
    });
    imgs[imgIndex].classList.add("display-img");
    setBgImage(imgIndex);
}

function nextImg() {
    resetInterval();
    imgIndex = (imgIndex + 1) % (imgs.length);
    showImg(imgIndex);
}

function prevImg(){
    resetInterval();
    if(imgIndex > 0){
        imgIndex = (imgIndex - 1) % (imgs.length);
    }
    else{
        imgIndex = imgs.length - 1;
    }
    showImg(imgIndex);
}

function resetInterval(){
    clearInterval(id);
    id = setInterval(nextImg,3000);
}

function setBgImage(imgIndex){
    document.body.style.backgroundImage = `url(imgs/image${imgIndex+1}.png)`;
}