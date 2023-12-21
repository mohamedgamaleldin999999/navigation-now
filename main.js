const lessons = [
  {
    lesson: 1,
    section: 'introduction',
    title: 'introduction to lesson one',
    imgUrl: '',
    convo: '',
    newVocab: [],

  },
  {
    lesson: 2,
    section: 'introduction',
    title: 'introduction to lesson two',
    imgUrl: '',
    convo: '',
    newVocab: [],

  },
]

const container = document.querySelector('.container');


lessons.forEach(lesson => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  container.appendChild(slide);
  slide.classList.add('box');
  slide.setAttribute('id', lessons.indexOf(lesson) )
  const title =  document.createElement('h2');
  title.textContent = lesson.title;
  slide.appendChild(title);
  const content = document.createElement('div')
  slide.appendChild(content)
});

const lessonOne = document.querySelector('.lesson-one');
const slide1 = document.getElementById('1')
const all = document.querySelectorAll('.box');

function go(){
  all.forEach(slee => {
    slee.classList.remove("is-selected")
  })
  slide1.classList.add("is-selected");
  console.log(455555)
}
lessonOne.addEventListener('click', go)






// Variables
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let tile = document.querySelectorAll(".box");
let listLength = tile.length - 1;

/* Set interface at page load */
prevBtn.setAttribute("disabled", "");
nextBtn.textContent = 'Start';

let currentSlide = document.querySelector('.is-selected')


// Counter from MDN Closures article; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
let count = (function() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    countUp: function() {
      changeBy(1);
    },
    countDown: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();


function selectNext() {
  let currentIndex = count.value();

  currentIndex = currentIndex + 1;

  //console.log(tile.length);

  /* Increment count value */
  count.countUp();

  //console.log(currentIndex);
  //console.log(listLength);

  /* Add highlighting to the next tile */
  if (tile[currentIndex] !== undefined) {
    tile[currentIndex].classList.add("is-selected");
  }

  /* Remove from previous tile */
  if (tile[currentIndex - 1] !== undefined) {
    tile[currentIndex - 1].classList.remove("is-selected");
  }

  /* Set next image button to disabled if we are on the last tile;
   * set previous button to enabled */
  if (currentIndex === listLength) {
    nextBtn.setAttribute("disabled", "");
  } else {
    prevBtn.removeAttribute("disabled");
    nextBtn.textContent = 'Next';
  }
}


function selectPrev() {
  let currentIndex = count.value();

  /* Decrement count value */
  count.countDown();

  /* Add highlighting to previous tile */
  if (currentIndex > 0 && tile[currentIndex - 1] !== undefined) {
    tile[currentIndex - 1].classList.add("is-selected");
  }

  /* Remove from current tile */
  if (tile[currentIndex] !== undefined) {
    tile[currentIndex].classList.remove("is-selected");
  }

  /* Set previous image button to disabled if we are on the first image tile;
   * set next button to enabled
   */
  if (currentIndex - 1 <= 0) {
    prevBtn.setAttribute("disabled", "");
    nextBtn.textContent = 'Start';
  } else {
    nextBtn.removeAttribute("disabled");
  }
}


// Event Listeners
nextBtn.addEventListener("click", selectNext);
prevBtn.addEventListener("click", selectPrev);