import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

const listEl = document.querySelector(".list")

let instance = null;


listEl.addEventListener("click", (e) => {
    
    if(e.target.nodeName !== "IMG") {
        return;
    }

    const largeImg = e.target.dataset.src;

    instance = basicLightbox.create(`
    <div class="modal">
       <img src="${largeImg}" alt="#"/>
        <h2>INFO</h2>
        <p></p>

        <h2>WHEN</h2>
        <p></p>
        <p></p>

        <h2>WHERE</h2>
        <p></p>
        <p></p>

        <h2>WHO</h2>
        <p></p>

        <h2>PRICES</h2>
        <p></p>
        <a href=""></a>
        <p></p>
        <a href=""></a>

        
        <button class="modal_btn" type="button">MORE FROM THIS AUTHOR</button>

    </div>
    `)

    instance.show();

    document.addEventListener("keydown", closeModal);

});



function closeModal(e) {

    if (e.key === "Escape") {
        instance.close();
        instance = null;

        document.removeEventListener("keydown", closeModal)
      
    }

}