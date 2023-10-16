var words = document.querySelectorAll(".word");

words.forEach(function (word) {
  let letters = word.textContent.split("");
  word.textContent = " ";
  letters.forEach(function (letter) {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

words[currentWordIndex].style.opacity = "1";

let nextText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
    nextWord.style.opacity = "1";
  });
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

nextText();
setInterval(nextText, 3000);

// my skills

let allSkills = document.querySelectorAll(".ts");

// allSkills.forEach( (skill,index)=> {
//   console.log(skill);
//   let dataScore = skill.getAttribute("data-target");
//   // console.log(dataScore);
//   skill.
// );
allSkills.forEach((skill, index) => {
  let dataScore = skill.getAttribute("data-target");
  // console.log(skill, index);
  skill.style.width = dataScore + "%";
  // console.log(dataScore);
});
let all2Skills = document.querySelectorAll(".cr");

// allSkills.forEach( (skill,index)=> {
//   console.log(skill);
//   let dataScore = skill.getAttribute("data-target");
//   // console.log(dataScore);
//   skill.
// );
all2Skills.forEach((skill, index) => {
  let dataScore = skill.getAttribute("data-target");
  // console.log(skill, index);
  skill.style.width = dataScore + "%";
  // console.log(dataScore);
});

let navitems = document.querySelectorAll(".navli");

navitems.forEach((navitem, index) => {
  console.log(navitem, index);
  // navitem.innerHTML = "hii";
  setTimeout(() => {
    // navitem.innerHTML = "hii";
    navitem.style.opacity = "1";
    // navitem.style.transform = "rotate(90deg)";
  }, 80 + 1000 * index);
});
