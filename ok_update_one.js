javascript:function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function makeShot() {
  const separator = ' !!! ';
  const tags = shuffle(JSON.parse(localStorage.getItem('tags')));
  const nameInput = document.getElementById('movie-title');
  const tagsInput = document.querySelector('input[name="st.ve.tags"]');
  const submitButton = document.querySelector('input[type="submit"].button-pro.js-submit-annotations-form');
  const curMovieName = nameInput.value.split(separator)[0];
  const nameValue = `${curMovieName}${separator}${tags.slice(1,5).join(' ')}`.slice(0, 150);
  const tagsValue = shuffle(tags).slice(0,7).join(',');
  
  nameInput.value = nameValue
  tagsInput.value = tagsValue;
  submitButton.click();
}
makeShot();
