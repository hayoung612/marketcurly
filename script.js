const marketBtn = document.getElementById("marketMenu");
const beautyBtn = document.getElementById("beautyMenu");

// 메뉴 hover 효과
function setHoverEffect(mainBtn, otherBtn) {
  mainBtn.addEventListener("mouseover", () => {
    mainBtn.style.color = "#7b48d3";
    otherBtn.style.color = "#ccc";
  });

  mainBtn.addEventListener("mouseout", () => {
    mainBtn.style.color = "#7b48d3";
    otherBtn.style.color = "#7b48d3";
  });
}

setHoverEffect(marketBtn, beautyBtn);
setHoverEffect(beautyBtn, marketBtn);




// 슬라이더

const slides = document.querySelector('.slides');
let isTransitioning = false;

function moveSlide() {
  if (isTransitioning) return;
  isTransitioning = true;

  slides.style.transition = 'transform 1s ease-in-out';
  slides.style.transform = 'translateX(-100%)';

  slides.addEventListener('transitionend', function handler() {
    slides.appendChild(slides.firstElementChild);
    slides.style.transition = 'none';
    slides.style.transform = 'translateX(0)';
    setTimeout(() => {
      slides.style.transition = 'transform 1s ease-in-out';
      isTransitioning = false;
    }, 50);

    slides.removeEventListener('transitionend', handler);
  });
}

// 3초 뒤 자동 슬라이드 시작
setTimeout(() => {
  setInterval(moveSlide, 2000);
}, 2000);




// 만약 카드 클릭 시 추가 이벤트를 주고 싶다면 JS 활용 가능
const cards = document.querySelectorAll('.item-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`${card.querySelector('h3').textContent} 클릭됨!`);
  });
});


// 예시: 고객센터 버튼 클릭 시 안내 알림
document.addEventListener("DOMContentLoaded", () => {
  const csButton = document.querySelector(".cs-button");
  if (csButton) {
    csButton.addEventListener("click", () => {
      alert("1:1 문의 페이지로 이동합니다. (준비 중)");
    });
  }
});
