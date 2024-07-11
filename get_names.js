var getKeyNames = () => {
    let divsNames = document.querySelectorAll('.ugrid_i.js-seen-item-movie');
    let tarr = [];
    let i = 0;
    [...divsNames].map(el => {
        elVws = el.querySelector('.video-card_info.ellip > .video-card_info_i').innerText.replace(/\D/g, '');
        if (parseInt(elVws) > 200000) {
            let curTitle = el.querySelector('div[class="video-card_n-w"] a')
            .title.replace(/[^a-z\u0400-\u04FF]/gi, " ")
            .trim().replace(/[\s]{1,}/g, ' ');
            
            if (curTitle.length > 1) {
                tarr[i] = curTitle;
                i++;                
            }

        }
    });
    console.log(tarr);
    localStorage.setItem('oktag_names', JSON.stringify(tarr))
};
