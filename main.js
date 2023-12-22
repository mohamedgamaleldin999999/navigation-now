const lessons = [
  {
    title: 'Lesson One',
    sections: [
      {
        title: 'Introduction',
        slides: [
          {
            title: 'Introduction',
            firstBox: 'First Box',
            secondBox: 'Second Box',
            thirdBox: 'Third Box'
          }
        ]
      },
      {
        title: 'Story',
        slides: [
          {
            title: '1',
            firstBox: 'First Box img',
            secondBox: 'Second Box convo',
            thirdBox: 'Third Box vocab'
          },
          {
            title: '2',
            firstBox: 'First Box img',
            secondBox: 'Second Box convo',
            thirdBox: 'Third Box vocab'
          },
          {
            title: '3',
            firstBox: 'First Box img',
            secondBox: 'Second Box convo',
            thirdBox: 'Third Box vocab'
          },
        ]
      },
    ]
  },
  {
    title: 'Lesson Two',
    sections: [
      {
        title: 'Introduction',
        slides: [
          {
            title: 'Introduction',
            firstBox: 'First Box',
            secondBox: 'Second Box',
            thirdBox: 'Third Box'
          }
        ]
      },
      {
        title: 'Story',
        slides: [
          {
            title: '1',
            firstBox: 'First Box img',
            secondBox: 'Second Box convo',
            thirdBox: 'Third Box vocab'
          },
          {
            title: '2',
            firstBox: 'First Box img',
            secondBox: 'Second Box convo',
            thirdBox: 'Third Box vocab'
          },
          {
            title: '3',
            firstBox: 'First Box img',
            secondBox: 'Second Box convo',
            thirdBox: 'Third Box vocab'
          },
        ]
      },
    ]
  },
];

const container = document.querySelector('.container');
const links = document.querySelector('.dropdown-content')


lessons.forEach(lesson => {
  lesson.sections.forEach(section => {
    section.slides.forEach(slide => {
      const slideElement = document.createElement('div');
      container.appendChild(slideElement);
      slideElement.setAttribute('id', `${lessons.indexOf(lesson)}${lesson.sections.indexOf(section)}${section.slides.indexOf(slide)}`)
      slideElement.classList.add('slide');
      slideElement.classList.add('box');
      const title =  document.createElement('h5');
      title.textContent = slide.title;
      slideElement.appendChild(title);
      const first = document.createElement('h3')
      slideElement.appendChild(first)
      first.textContent = slide.firstBox
      const sec = document.createElement('h4')
      slideElement.appendChild(sec)
      sec.textContent = slide.secondBox
    })
  })
});

lessons.forEach(lesson => {
  lesson.sections.forEach(section => {
    const link = document.createElement('a');
    links.appendChild(link);
    link.classList.add('link')
    link.innerHTML = `${lesson.title} - ${section.title}`;
    link.setAttribute('data-target', `${lessons.indexOf(lesson)}${lesson.sections.indexOf(section)}0`)
  })
});



    // Get all anchor tags with the class 'toggle-btn'
    const toggleButtons = document.querySelectorAll('.link');

    // Add click event listeners to each anchor tag
    toggleButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target div id from the data-target attribute
        const targetDivId = this.getAttribute('data-target');

        // Remove 'is-selected' class from all div elements
        document.querySelectorAll('.box').forEach(div => {
          div.classList.remove('is-selected');
        });

        // Add 'is-selected' class to the corresponding div
        document.getElementById(targetDivId).classList.add('is-selected');
        const dropbtn = document.querySelector('.dropbtn')
        const isSelected = document.querySelector('.is-selected').children[0];
        dropbtn.innerHTML = isSelected.textContent
      });
    });





// Variables
let nextBtn = document.querySelector(".next-btn");
let prevBtn = document.querySelector(".prev-btn");
let tile = document.querySelectorAll(".box");
let listLength = tile.length - 1;

/* Set interface at page load */
prevBtn.setAttribute("disabled", "");


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
  } else {
    nextBtn.removeAttribute("disabled");
  }
}


// Event Listeners
nextBtn.addEventListener("click", selectNext);
prevBtn.addEventListener("click", selectPrev);

