const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は、とても暑かった。そのため、:insertx:は散歩に出かけた。彼らが:inserty:にたどり着いたとき、彼らは少しの間目を見張り、そして :insertz:。 Bob は全貌を見たが, 驚きはしなかった。 — 体重150kgの:insertx:は驚かなかった。:inserty:ではよくあることだった。';
const insertX = ['ゴブリン', 'ビッグ・ダディ', 'ファーザー・クリスマス'];
const insertY = ['スープキッチン', 'ディズニーランド', 'ホワイトハウス'];
const insertZ = ['自然に発火した', '歩道の水溜りに溶けていった', 'なめくじに変身して這っていった'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('150kg', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
