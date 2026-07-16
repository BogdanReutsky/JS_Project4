const inputEl = document.querySelector(".start")
const listEl = document.querySelector(".list")
const selectEl = document.querySelector(".country")


const URL = "https://app.ticketmaster.com/"
const API_KEY = "Zqwp16d8s8fASQAt6sNhVwQmnMgHWNgA"
const page = 1
const size = 20

async function getEvents(){
const country = selectEl.value
const res = await fetch(`${URL}discovery/v2/events.json?countryCode=${country}&apikey=${API_KEY}&page=${page}&size=${size}`)
const data = await res.json()
return data._embedded.events || []
}

getEvents().then(res => console.log(res[19]))

function render(array){
    const item = array.map(({name, dates, images, _embedded})=>{
        return `<li class="item">
    <img class="eventImage" src="${images[1].url}" data-src="${images[images.length - 1].url}" alt="">
    <h3 class="eventName">${name}</h3>
    <p class="eventData">${dates.start.localDate}</p>
    <p class="eventAdress">${_embedded.venues[0].city?.name}</p>
    </li>`
    }).join("")

    listEl.innerHTML = item
}

selectEl.addEventListener("change", async ()=>{
    const events = await getEvents()
    return render(events)
})

getEvents().then(res => render(res))