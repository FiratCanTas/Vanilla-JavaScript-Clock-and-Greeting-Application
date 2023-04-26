const greetingParagraph = document.querySelector("#greeting")
const datetimeParagraph = document.querySelector("#datetime")
const header = document.querySelector("#header")
const infoText = document.querySelector("#info") 


const getFullDate = ()=>{
    const date = new Date();
    const dayNo = date.getDay();
    let day="";
    switch(dayNo){
        case 1:
            day = "Pazartesi"
            break;
        case 2:
            day = "Sali"
            break;
        case 3:
            day = "Carsamba"
            break;
        case 4:
            day = "Persembe"
            break;
        case 5:
            day = "Cuma"
            break;
        case 6:
            day = "Cumartesi"
            break;
        case 7:
            day = "Pazar"
            break;
    }
    const time = date.toLocaleTimeString()
    const fullDate = `${time}    ${day}`
    document.querySelector("#datetime").innerHTML = fullDate
}

const userName = prompt("Lutfen adinizi giriniz")

if(userName){

    const greetingSpan = document.createElement("span")
    greetingSpan.innerText = userName    
    greetingSpan.classList.add("important","fs-5")
    
    greetingParagraph.innerHTML = "Merhaba, "
    greetingParagraph.appendChild(greetingSpan)
    greetingParagraph.innerHTML += "! Hos geldin!"
    setInterval(getFullDate, 1000)

}
else{
    header.innerHTML = "Sayfayi yenileyiniz ardindan, lutfen isim bilgisini bos gecmeyiniz!"
    infoText.style.display = "none"
}











