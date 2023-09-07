// script.js
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelector(".items");
    const slides = document.querySelectorAll(".item");
    const prevButton = document.querySelector(".button.prev");
    const nextButton = document.querySelector(".button.next");
    let currentSlide = 0;

    // 다음 슬라이드로 이동
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    };

    // 이전 슬라이드로 이동
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    };

    // 슬라이드 업데이트
    const updateSlide = () => {
        items.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    // 다음 버튼 클릭 이벤트
    nextButton.addEventListener("click", nextSlide);

    // 이전 버튼 클릭 이벤트
    prevButton.addEventListener("click", prevSlide);

    // 자동 회전 (5초마다 다음 슬라이드로 이동)
    setInterval(nextSlide, 5000);
});