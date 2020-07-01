
let pageContainer = document.getElementsByClassName("container")[0];
let dialogueContainer = document.getElementsByClassName('dialogue-container')[0];




window.onload = ()=>{
    // alert("hello!");
    OnDialogueShow();
}



function OnDialogueShow(){
    

    setTimeout(()=>{
        pageContainer.className = pageContainer.className += " is-blurred";
        dialogueContainer.className = 'dialogue-container'
        console.log(pageContainer);
    }, 300);
    
}


function OnDialogueClose(){

    setTimeout(()=>{

        
    }, 300)

}