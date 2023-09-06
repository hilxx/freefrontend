document.addEventListener("DOMContentLoaded", function(){
    const chat = document.querySelector(".chat-bot");
    const chatCont = document.querySelector(".chat-bot-cont");

    chat.addEventListener("click",() => {
        console.log('ss');
        const isChatContOn = chatCont.classList.contains("chat-cont-on");
        
        if(isChatContOn){
            chatCont.classList.remove("chat-cont-on");
        } else{
            chatCont.classList.add("chat-cont-on");
        }
    })    
})