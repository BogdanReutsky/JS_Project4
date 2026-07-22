import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import { render } from "./base";

const listEl = document.querySelector(".list")

let instance = null;

const URL = "https://app.ticketmaster.com/";
const API_KEY = "Zqwp16d8s8fASQAt6sNhVwQmnMgHWNgA";


listEl.addEventListener("click", async (e) => {
    
    if(e.target.nodeName !== "IMG") {
        return;
    }

    const id = e.target.dataset.id;

    const event = await getElementById(id);

    const author = event._embedded?.attractions?.[0]?.name;

    const largeImg = e.target.dataset.src;

    instance = basicLightbox.create(`
    <div class="modal">

        <button class="modal_close" type="button">&times;</button>

        <img class="modal_avatar" src="${largeImg}" alt="">

        <div class="modal_content">

            <div class="modal_circle"></div>  

            <div class="modal_image">
                <img src="${largeImg}" alt="#"/>
            </div>   

            <div class="modal_info">
               <h2>INFO</h2> 
               <p>${event.info ?? "Інформація відсутня"}</p> 
               
               <h2>WHEN</h2> 
               <p>${event.dates.start.localDate}</p> 
               <p>${event.dates.start.localTime.slice(0, 5)} (${event.dates.timezone})</p> 
               
               <h2>WHERE</h2> 
               <p>${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].country.name}</p> 
               <p>${event._embedded.venues[0].name}</p> 
               
               <h2>WHO</h2> 
               <p>${event._embedded?.attractions?.[0]?.name ?? "Невідомо"}</p> 
               
               <h2>PRICES</h2> 
                <p>#</p> 
                <a href="${event.url}">BUY TICKETS</a> 
                <p>#</p> 
                <a href="${event.url}">BUY TICKETS</a> 

            </div> 

        </div>

        
        <button class="modal_btn" type="button">MORE FROM THIS AUTHOR</button>

    </div>
    `)

    instance.show();

    document.querySelector(".modal_close").addEventListener("click", () => {
        instance.close();
        instance = null;
        document.removeEventListener("keydown", closeModal);
    });

    document.querySelector(".modal_btn").addEventListener("click", async () => {
        if (!author) {
            return
        };

        const events = await getEventsByAuthor(author);

        listEl.innerHTML = "";
        render(events);

        instance.close();
    });

    document.addEventListener("keydown", closeModal);

});



async function closeModal(e) {

    if (e.key === "Escape") {
        instance.close();
        instance = null;

        document.removeEventListener("keydown", closeModal)
      
    }

}

async function getElementById(id) {

    const res = await fetch(`${URL}discovery/v2/events/${id}.json?apikey=${API_KEY}`)

    return await res.json();
    
}


async function getEventsByAuthor(author) {

    const res = await fetch(
        `${URL}discovery/v2/events.json?keyword=${encodeURIComponent(author)}&apikey=${API_KEY}`
    );

    const data = await res.json();

    return data._embedded?.events || [];
}