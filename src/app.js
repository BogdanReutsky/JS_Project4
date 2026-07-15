import "./scss/main.scss";

const inputEl = document.querySelector(".search")
const selectEl = document.querySelector(".select")
const listEl = document.querySelector(".list")


const URL = "https://app.ticketmaster.com/"
const API_KEY = "Zqwp16d8s8fASQAt6sNhVwQmnMgHWNgA"
const country = "US"
const page = 1
const size = 25

async function getEvents(){
const res = await fetch(`${URL}discovery/v2/events.json?countryCode=${country}&apikey=${API_KEY}&page=${page}&size=${size}`)
const data = await res.json()
return data._embedded.events
}

getEvents().then(res => console.log(res[19]))

function render(array){
    const item = array.map(({name, dates, images, _embedded})=>{
        return `<li class="item">
    <img class="eventImage" src="${images[1].url}" alt="">
    <h3 class="eventName">${name}</h3>
    <p class="eventData">${dates.start.localDate}</p>
    <p class="eventAdress">${_embedded.venues[0].address?.line1}</p>
    </li>`
    }).join("")

    listEl.innerHTML = item
}

getEvents().then(res => render(res))