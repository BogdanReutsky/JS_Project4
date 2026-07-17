import debounce from "lodash.debounce";

const inputEl = document.querySelector(".start")
const listEl = document.querySelector(".list")
const selectEl = document.querySelector(".country")


const URL = "https://app.ticketmaster.com/"
const API_KEY = "Zqwp16d8s8fASQAt6sNhVwQmnMgHWNgA"
let page = 1
let size = 20
let search = ""

async function getEvents(){
const country = selectEl.value
const res = await fetch(`${URL}discovery/v2/events.json?countryCode=${country}&apikey=${API_KEY}&keyword=${search}&page=${page}&size=${size}`)
const data = await res.json()
return data._embedded?.events || []
}

getEvents().then(res => console.log(res[19]))

function render(array){
    const item = array.map(({id, name, dates, images, _embedded})=>{
        return `<li class="item">
    <img class="eventImage" src="${images[1].url}" data-id="${id}" data-src="${images[images.length - 1].url}" alt="">
    <h3 class="eventName">${name}</h3>
    <p class="eventData">${dates.start.localDate}</p>
    <p class="eventAdress">${_embedded.venues[0].city?.name}</p>
    </li>`
    }).join("")

    listEl.insertAdjacentHTML("beforeend", item)
}

inputEl.addEventListener("input",  debounce(async(e)=>{
    search = e.target.value
    
    console.log(search);
    

    const res = await getEvents()

    render(res)
}, 500))

selectEl.addEventListener("change", async()=>{
    listEl.innerHTML = ""
    const events = await getEvents()
    return render(events)
})

getEvents().then(res => render(res))


const elementEl = document.querySelector(".element")

const observer = new IntersectionObserver((entry)=>{

  entry.forEach(async (e)=>{
    if(e.isIntersecting){  
      page += 1
      const res = await getEvents(search, page)
      await render(res)
    }
  })
  
},{
  rootMargin: "200px"
})

observer.observe(elementEl)
