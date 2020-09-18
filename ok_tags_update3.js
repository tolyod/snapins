function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const updateVideo = async (id, token, name, tags) => {
  const reqBody = `st.ve.title=${encodeURIComponent(name)}&st.ve.tags=${encodeURIComponent(tags)}`;
  console.log(reqBody);
  return await fetch(`https://ok.ru/dk?cmd=VideoEditorBlock&st.cmd=video&st.mId=${id}&st.m=EDITOR&st.ft=editor`, {
      "headers": {
      "accept": "*/*",
      "accept-language": "en-US,en;q=0.9,ru;q=0.8,uk;q=0.7,uz;q=0.6,zh-TW;q=0.5,zh-CN;q=0.4,zh-HK;q=0.3,zh;q=0.2",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded",
      "ok-screen": "video",
      "pragma": "no-cache",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "strd": "false",
      "tkn":`${token}`
    },
    "referrer": "https://ok.ru/",
    "referrerPolicy": "origin",
    "body": reqBody,
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });
}

const curVideosPairs = [...document.querySelectorAll("div > div.video-card_n-w > a")]
  .map(el => [el.href.replace(/\D/g, ''), el.title.replace(/(.*)!!!!!(.*)/g, '$1')]);

var tgs_sep = "!!!!!"
const p = Promise.all(
  curVideosPairs.map(([id, name]) => {
    const name_str_rns = shuffleArray(JSON.parse(localStorage.getItem('oktag_names'))).join(" ");
    const name_str_raw = name + tgs_sep + " " + name_str_rns;
    const name_str = name_str_raw.substr(0, 280);
    const keywords_arr = shuffleArray(localStorage.getItem('oktag_keywords').split(", "));
    const keywords_str = keywords_arr.join(", ").substr(2, 280);
    return updateVideo(id, OK.tkn.get(), name_str, keywords_str);
  })
);

p.then(values => {
  console.log(values);
  location.reload();
})
.catch(error => {
  console.log(error.message)
});
