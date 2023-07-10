document.addEventListener("DOMContentLoaded", function(){
    console.log("ddd");
    const slider = document.querySelector("items");
        const slides = document.querySelectorAll(".item");
        const button = document.querySelectorAll(".button");

        let current = 0; //current를 0으로 초기화하는 것 //가운데
        let prev = 2; //왼쪽
        let next = 1; //오른쪽

        for(let i = 0; i<button.length; i++) {
            button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
            //button이 i번일때, 클릭하면 i가 0일 때_true=gotoPrev()실행 : false일 때_gotoNext()실행
            //i==0(leftBtn) -> gotoPrev = 슬라이드가 왼쪽으로 한 칸씩 이동
            //i==1(rightBtn) -> gotoNext = 슬라이드가 오른쪽으로 한 칸씩 이동
        }
                                                    //gotoNum(number)
        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);
        // current가 0보다 클 때(1,2 => true일 때 gotoNum(current-1) : false일 때 gotoNum(2-1 = 1);)
        const gotoNext = () => current < 2 ? gotoNum(current + 1) : gotoNum(0);
        // current가 2보다 작을 때(0,1 => true일 때 gotoNum(current+1) : false일 때 gotoNum(0);)

        const gotoNum = number => {
            //구버전 function gotoNum(number) {}
            current = number; //current에 number 대입
            //위의 let current=0;과 별개의 값이다
            prev = current - 1; //prev에 current-1한 값 대입
            next = current + 1; //next에 current+1한 값 대입

            for (let i = 0; i < slides.length; i++) {
                //slides.length = 3
                slides[i].classList.remove("active");
                slides[i].classList.remove("prev");
                slides[i].classList.remove("next");
                //slides가 0번~2번일 때, active,prev,next가 지워지게 해라 = 뒤에 안 보이는 item이 되어라
            }

            if (next == 3) {
                next = 0;
            }

            if (prev == -1) {
                prev = 2;
            }

            slides[current].classList.add("active");
            slides[prev].classList.add("prev");
            slides[next].classList.add("next");
        }
})