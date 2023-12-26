import lessons from "./modules/lessons.js";

console.log(lessons)
const container = document.querySelector('.container');
const links = document.querySelector('.dropdown-content');
let activeLesson = null;
const dropdownBtn = document.querySelector('.dropbtn');
// Get the dropdown element
const dropdown = document.querySelector('.dropdown');

// Add a click event listener to the document
document.addEventListener('click', function (event) {
  const isClickInsideDropdown = dropdown.contains(event.target);

  // Check if the clicked element is inside the dropdown
  if (!isClickInsideDropdown) {
    // Remove the active class from the dropdown
    links.classList.remove('active');
  }
});

// Prevent the dropdown from closing when clicking inside it
dropdown.addEventListener('click', function (event) {
  event.stopPropagation();
});


// Add a click event listener to the dropdown to toggle the 'active' class
dropdownBtn.addEventListener('click', function () {
  // Toggle the 'active' class on the dropdown
  links.classList.add('active');
});


lessons.forEach(lesson => {
  lesson.sections.forEach(section => {
    section.slides.forEach(slide => {
      const slideElement = document.createElement('div');
      container.appendChild(slideElement);
      slideElement.setAttribute('id', `${lessons.indexOf(lesson)}${lesson.sections.indexOf(section)}${section.slides.indexOf(slide)}`)
      slideElement.classList.add('slide');
      const title =  document.createElement('h5');
      slideElement.appendChild(title);
      title.textContent = slide.title;
      title.classList.add('slide-title');
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
  const lessonLink = document.createElement('button');
  links.appendChild(lessonLink);
  lessonLink.classList.add('lesson-link');
  lessonLink.innerHTML = lesson.title;
  const dropdownLesson = document.createElement('div');
  links.appendChild(dropdownLesson);
  dropdownLesson.classList.add('dropdown-lesson');
  lesson.sections.forEach(section => {
    const link = document.createElement('a');
    dropdownLesson.appendChild(link);
    link.classList.add('link')
    link.innerHTML = `${lesson.title} - ${section.title}`;
    link.setAttribute('data-target', `${lessons.indexOf(lesson)}${lesson.sections.indexOf(section)}0`)
  })
  lessonLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (activeLesson !== null && activeLesson !== dropdownLesson) {
      activeLesson.classList.remove('active-lesson');
    }
    dropdownLesson.classList.toggle('active-lesson');
    activeLesson = dropdownLesson.classList.contains('active-lesson') ? dropdownLesson : null;
  });
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
        const isSelected = document.querySelector('.is-selected');
        dropdownBtn.innerHTML = isSelected.querySelector('.slide-title').textContent;
        const nodeList = document.querySelectorAll('.slide');
        // Convert NodeList to an array
        const allSlides = Array.from(nodeList);

        currentSection = allSlides.indexOf(isSelected)
        links.classList.remove('active');
        const dropdownLesson = document.querySelector('.dropdown-lesson');
        if (activeLesson !== null && activeLesson !== dropdownLesson) {
          activeLesson.classList.remove('active-lesson');
        }
        activeLesson = dropdownLesson.classList.contains('active-lesson') ? dropdownLesson : null;
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
        const isSelected = document.querySelector('.is-selected');
        dropdownBtn.innerHTML = isSelected.querySelector('.slide-title').textContent;
    });
    
    previousButton.addEventListener("click", function() {
        if (currentSection > 0) {
          // Remove 'is-selected' class from all div elements
        document.querySelectorAll('.slide').forEach(div => {
          div.classList.remove('is-selected');
        });
            sectionButtons[currentSection - 1].click();
        }
        const isSelected = document.querySelector('.is-selected');
        dropdownBtn.innerHTML = isSelected.querySelector('.slide-title').textContent;
    });

