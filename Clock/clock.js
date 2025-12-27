function clock(){

    clockDisp = document.querySelector(".clock");

    setInterval(()=>{
        const now = new Date();
        let hr = now.getHours();
        const min = String(now.getMinutes()).padStart(2,"0");
        const sec = String(now.getSeconds()).padStart(2,"0");
        const meridian = hr>=12 ? "PM":"AM";
        hr = String(hr % 12 || 12).padStart(2,"0");
        clockDisp.innerHTML = `${hr}:${min}:${sec} ${meridian}`;
    },1000);
}

clock();