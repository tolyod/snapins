javascript:const getKeyNames=()=>{let divsNames=document.querySelectorAll('div.video-card');let tarr=[];let i=0;[...divsNames].map(el=>{elVws=el.querySelector('div[class="video-card_info"]').innerText.replace(/\s/g,'');if(parseInt(elVws)>200000){tarr[i]=el.querySelector('div[class="video-card_n-w"]').innerText.replace(/[^a-z\u0400-\u04FF]/gi," ").trim().replace(/[\s]{1,}/g,' ');i++}});localStorage.setItem('oktag_names',JSON.stringify(tarr))};getKeyNames()

javascript: const getKeyNames = () => {
    let divsNames = document.querySelectorAll('div.video-card');
    let tarr = [];
    let i = 0;
    [...divsNames].map(el => {
        elVws = el.querySelector('div[class="video-card_info"]').innerText.replace(/\s/g, '');
        if (parseInt(elVws) > 200000) {
            tarr[i] = el.querySelector('div[class="video-card_n-w"]').innerText.replace(/[^a-z\u0400-\u04FF]/gi, " ").trim().replace(/[\s]{1,}/g, ' ');
            i++
        }
    });
    localStorage.setItem('oktag_names', JSON.stringify(tarr))
};
getKeyNames()
