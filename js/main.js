const userName = document.querySelector(".review-card__username");
const userProffession = document.querySelector(".review-card__proffession");
const reviewDescription = document.querySelector(".review-card__description");
const userImage = document.querySelector(".review-card__image");
const leftChevron = document.querySelector("#left-chevron");
const rightChevron = document.querySelector("#right-chevron");
const supriseButton = document.querySelector(".review-card__btn");

const data = [
  {
    name: "Ivad Yves",
    proffession: "Software developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, inventore voluptas. Tempore, quod? Cum similique quasi illo excepturi nemo, placeat rerum odio, tempora sunt soluta, exercitationem eum voluptatem qui veniam?",
    imageSrc: "https://picsum.photos/200/300",
  },
  {
    name: "Jon snow",
    proffession: "Pharmacist",
    description:
      "quasi illo excepturi nemo, placeat rerum odio, tempora sunt soluta, exercitationem eum voluptatem qui veniam?",
    imageSrc: "https://picsum.photos/300/300",
  },
  {
    name: "Kang To",
    proffession: "Lawyer",
    description:
      "consectetur adipisicing elit. Quos, inventore voluptas. Tempore, quod? Cum similique quasi illo excepturi nemo, placeat rerum odio, tempora sunt soluta, exercitationem eum voluptatem qui veniam?",
    imageSrc: "https://picsum.photos/500/300",
  },
];

let currentIndex = 0;
let lastIndex = data.length - 1;

displayReview(currentIndex);

function displayReview(selectedIndex) {
  let review = data[selectedIndex];
  userName.textContent = review.name;
  userProffession.textContent = review.proffession;
  userImage.src = review.imageSrc;
  reviewDescription.textContent = review.description;
}

function slideLeft() {
  currentIndex = data[currentIndex - 1] ? currentIndex - 1 : lastIndex;
  displayReview(currentIndex);
}

function slideRight() {
  currentIndex = data[currentIndex + 1] ? currentIndex + 1 : 0;
  displayReview(currentIndex);
}

function showRandom() {
  currentIndex = Math.floor(Math.random() * data.length);
  displayReview(currentIndex);
}

leftChevron.addEventListener("click", slideLeft);
rightChevron.addEventListener("click", slideRight);
supriseButton.addEventListener("click", showRandom);
