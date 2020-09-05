var getKeyNames = () => {
    let divsNames = document.querySelectorAll('div.video-card');
    let tarr = [];
    let i = 0;
    [...divsNames].map(el => {
        elVws = el.querySelector('div[class="video-card_info"] span').innerText.replace(/\D/g, '');
        if (parseInt(elVws) > 200000) {
          tarr[i] = el.querySelector('div[class="video-card_n-w"] a')
            .title.replace(/[^a-z\u0400-\u04FF]/gi, " ")
            .trim().replace(/[\s]{1,}/g, ' ');
            i++
        }
    });
    localStorage.setItem('oktag_names', JSON.stringify(tarr))
};
