// Assuming you have the 'lessons' array defined somewhere in your code

const container = document.querySelector('.container');
const dropdownContent = document.querySelector('.dropdown-content');

lessons.forEach(lesson => {
  const dropdownLesson = document.createElement('div');
  dropdownContent.appendChild(dropdownLesson);
  dropdownLesson.classList.add('dropdown-lesson');

  const lessonLink = document.createElement('a');
  dropdownLesson.appendChild(lessonLink);
  lessonLink.classList.add('lesson-link');
  lessonLink.innerHTML = lesson.title;

  const links = document.createElement('div');
  dropdownLesson.appendChild(links);
  links.classList.add('section-links');

  lesson.sections.forEach(section => {
    const link = document.createElement('a');
    links.appendChild(link);
    link.classList.add('link');
    link.innerHTML = section.title;
    link.setAttribute('data-target', `${lessons.indexOf(lesson)}${lesson.sections.indexOf(section)}0`);
  });

  lessonLink.addEventListener('click', function (event) {
    event.preventDefault();
    dropdownLesson.classList.toggle('active-lesson');
  });
});

// Rest of your code remains unchanged
