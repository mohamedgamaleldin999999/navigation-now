const lessons = [
  {
    title: 'Lesson One',
    sections: [
      {
        title: 'Introduction',
        slides: [
          {
            title: '0',
            firstBox: 'intro 1',
            secondBox: 'wow lesson',
            thirdBox: 'please start'
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
        title: '4',
        slides: [
          {
            title: '4 Introduction 2',
            firstBox: 'First Box 2',
            secondBox: 'Second Box 2',
            thirdBox: 'Third Box 2'
          }
        ]
      },
      {
        title: 'Story 2',
        slides: [
          {
            title: '5',
            firstBox: 'First Box img 212',
            secondBox: 'Second Box convo 22',
            thirdBox: 'Third Box vocab'
          },
          {
            title: '6',
            firstBox: 'First Box img 55',
            secondBox: 'Second Box convo',
            thirdBox: 'Third Box vocab'
          },
          {
            title: '7',
            firstBox: 'First Box img99',
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

let currentSection = 0;


    // Get all anchor tags with the class 'toggle-btn'
    const toggleButtons = document.querySelectorAll('.link');

    // Add click event listeners to each anchor tag
    toggleButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the target div id from the data-target attribute
        const targetDivId = this.getAttribute('data-target');

        // Remove 'is-selected' class from all div elements
        document.querySelectorAll('.slide').forEach(div => {
          div.classList.remove('is-selected');
        });

        // Add 'is-selected' class to the corresponding div
        document.getElementById(targetDivId).classList.add('is-selected');
        const dropbtn = document.querySelector('.dropbtn')
        const isSelected = document.querySelector('.is-selected');
        dropbtn.innerHTML = isSelected.textContent
        const nodeList = document.querySelectorAll('.slide');

// Convert NodeList to an array
const allSlides = Array.from(nodeList);

        currentSection = allSlides.indexOf(isSelected)
        console.log(currentSection)
      });
    });


    let sections = document.querySelectorAll(".slide");
    let sectionButtons = document.querySelectorAll(".slide");
    let nextButton = document.querySelector(".next-btn");
    let previousButton = document.querySelector(".prev-btn");
    for (let i = 0; i < sectionButtons.length; i++) {
        sectionButtons[i].addEventListener("click", function() {
            sections[currentSection].classList.remove("is-selected");
            sectionButtons[currentSection].classList.remove("is-selected");
            sections[currentSection = i].classList.add("is-selected");
            sectionButtons[currentSection].classList.add("is-selected");
            if (i === 0) {
                if (previousButton.className.split(" ").indexOf("disable") < 0) {
                    previousButton.classList.add("disable");
                }
            } else {
                if (previousButton.className.split(" ").indexOf("disable") >= 0) {
                    previousButton.classList.remove("disable");
                }
            }
            if (i === sectionButtons.length - 1) {
                if (nextButton.className.split(" ").indexOf("disable") < 0) {
                    nextButton.classList.add("disable");
                }
            } else {
                if (nextButton.className.split(" ").indexOf("disable") >= 0) {
                    nextButton.classList.remove("disable");
                }
            }
        });
    }
    
    nextButton.addEventListener("click", function() {
        if (currentSection < sectionButtons.length - 1) {
          // Remove 'is-selected' class from all div elements
        document.querySelectorAll('.slide').forEach(div => {
          div.classList.remove('is-selected');
        });
            sectionButtons[currentSection + 1].click();
        }
    });
    
    previousButton.addEventListener("click", function() {
        if (currentSection > 0) {
          // Remove 'is-selected' class from all div elements
        document.querySelectorAll('.slide').forEach(div => {
          div.classList.remove('is-selected');
        });
            sectionButtons[currentSection - 1].click();
        }
    });

