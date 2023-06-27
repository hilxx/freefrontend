document.addEventListener("DOMContentLoaded", function(){
    const sup = document.querySelectorAll("p sup");
    const sub = document.querySelectorAll("p sub");

    sup.forEach(sup => sup.addEventListener("click", displayChoice));
    sub.forEach(sub => sub.addEventListener("click", displayChoice));

    function displayChoice(e) {
        let parentSpan = e.target.parentNode;

        parentSpan.innerHTML = `${e.target.textContent}`;
        //~innerHTMl ~ (.textContent)는 span 자식에서 sup/sub를 target했을 때 그 text를 반환하려는 명령어이다
        parentSpan.style.marginLeft = `0px`;
        parentSpan.style.marginRight = `0px`;
    }

    sub.forEach(sub => {
        let subWidth = sub.offsetWidth;
        sub.parentNode.style.marginLeft = `-${subWidth}px`;
        /*parentNode는 sub요소의 부모인 span을 가르킴 => span요소의 왼쪽 여백을
        sub요소의 너비만큼 음수로 설정 */
        sub.parentNode.querySelector("sup").style.left = `${subWidth}px`;
        /* sub의 부모인 span내에서 sup를 선택하여 left값을 바꿔준다*/
    })
})