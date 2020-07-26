
let pageContainer = document.getElementsByClassName("container")[0];
let dialogueContainer = document.getElementsByClassName('dialogue-container')[0];
let continueButton = document.getElementById("continue-button");






continueButton.addEventListener('click',()=>{
    OnDialogueClose();
})


window.onload = ()=>{
    // alert("hello!");
    OnDialogueShow();
}



function OnDialogueShow(){
    

    setTimeout(()=>{
        pageContainer.className = pageContainer.className += " is-blurred";
        pageContainer.classList.add('is-blurred');

        dialogueContainer.classList.remove('closed')
    }, 300);
    
}


function OnDialogueClose(){

    setTimeout(()=>{
        dialogueContainer.classList.add("closed")
        pageContainer.classList.remove('is-blurred')
        
    }, 300)


    setTimeout(()=>{
        dialogueContainer.classList.add("hidden")
    }, 1000)

}