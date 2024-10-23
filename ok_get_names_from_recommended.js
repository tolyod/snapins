javascript: function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function saveTags() {
  const videos = [
    ...document.querySelectorAll(
      "#listBlockPanelVideoUniversalContentBlock > div > div > div.ugrid_cnt .ugrid_i.js-seen-item-movie",
    ),
  ];
  const names = videos.map(
    (e) => e.querySelector("a.video-card_n.ellip").title,
  );
  const uniqNames = new Set(names);
  const sourceData = [...uniqNames];
  shuffle(sourceData);
  localStorage.setItem("tags", JSON.stringify(sourceData));
}
saveTags();
