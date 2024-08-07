var getKeyWords = () => {
    let divsKeyWords = document.querySelectorAll('.ugrid_i.js-seen-item-movie');
    let tagsTextRaw = "";
    [...divsKeyWords].map(el => {
        const elVws = el.querySelector('.video-card_info.ellip > .video-card_info_i').innerText.replace(/\D/g,'');
        if (parseInt(elVws) > 200000) {
          tagsTextRaw += " " + el.querySelector('div[class="video-card_n-w"] a')
            .title.replace(/[^a-z\u0400-\u04FF]/gi, " ")
            .trim().replace(/[\s]{1,}/g, ' ');
        }
    });
    let tags_pre = tagsTextRaw.trim().split(" ");
    let unique = [... new Set(tags_pre)].filter(s => s.length > 3);
    let tags_text = unique.join(', ');
    console.log(tags_text);
    localStorage.setItem('oktag_keywords', JSON.stringify(tags_text))
};
getKeyWords();
