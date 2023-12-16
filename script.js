const quoteText= document.querySelector(".quote");
const authourname= document.querySelector(".name");
let quoteBtn=document.querySelector("button");
let soundBtn=document.querySelector(".sound");
let copyBtn=document.querySelector(".copy");
let whatsappBtn=document.querySelector(".whatsapp");
 

// random quote genrator function
function randomQuote(){
        quoteBtn.classList.add("Loading");
        quoteBtn.innerText="Loading Quote...";
    //   Fetching random quotes from the API and parsing it into js object
        fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
            quoteText.innerText=result.content;
            authourname.innerText=result.author;
            quoteBtn.innerText="New Quote";
            quoteBtn.classList.remove("Loading");
        });

}

soundBtn.addEventListener("click",()=>{
    // SpeechSynthesisUtterance is a web speech api that represents a speech request
    // alert(quoteText.innerText.length)
    let uttrances=new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authourname.innerText}` )
    speechSynthesis.speak(uttrances) //speack method of speechSynthesis speaks the uttrances
})


copyBtn.addEventListener("click",()=>{
    let space=quoteText.innerText.length;
    let takenspace="";
    for (let i=0; i<=space-20; i++){
        takenspace+=" ";
    }
    navigator.clipboard.writeText(`${quoteText.innerText}\n ${takenspace}-by ${authourname.innerText}` );

})


whatsappBtn.addEventListener("click", () => {
    let whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteText.innerText)}`;
    window.open(whatsappUrl, "_blank");
});


document.getElementById('whatsappimage').addEventListener('click', function() {
    var phoneNumber = '+91-8510844840';
    var message = `${"Hi,"}\nI just saw your Quote Generator.....`;
    var whatsappLink = 'whatsapp://send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    window.location.href = whatsappLink;
  });






quoteBtn.addEventListener("click",randomQuote);