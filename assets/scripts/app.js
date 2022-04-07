const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("add-modal");
const title = document.getElementById("title");
const img = document.getElementById("image-url");
const rating = document.getElementById("rating");
// const movieList = document.getElementById("movie-list");
const entryText = document.getElementById("entry-text");
const main = document.querySelector("body");

backdrop.addEventListener("click", HideFormulaire);
console.log(backdrop);

// Cette fonction sera appelé si on click sur le boutton HTML
function OpenFormulaire() {
    backdrop.style.display = "block";
    modal.style.display = "block";
    console.log("formulaire ouvert");
}

function HideFormulaire() {
    backdrop.style.display = "none";
    modal.style.display = "none";
    console.log("formulaire caché ou annulé");
}
function AddFormulaire() {
    let NewTitle = title.value;
    let NewImg = img.value;
    let NewRating = rating.value;

    if (NewTitle !== "") {
    console.log("title valide");
        if (NewImg !== "") {
        console.log("image valide");
            if (NewRating !== "" && NewRating < 6 && NewRating > 0) {
            console.log("rating valide");
            } else {   
            console.log("rating vide");
            alert("Please enter valid RATING (1 to 5)");
            }
        } else {
        console.log("image vide");
        alert("Please enter valid URL");
        }
    } else {
    console.log("title vide");
    alert("Please enter valid TITLE");
    }
    console.log("formulaire ajouté");

    if (NewTitle && NewImg && NewRating) {
    HideFormulaire();
    add_li();
    }
}

function add_li() {
    let NewTitle = title.value;
    let NewImg = img.value;
    let NewRating = rating.value;

        // on cré une nouvelle section
        let section = document.createElement("section");
        section.setAttribute("class","movie-element");
        section.setAttribute("id", "entry-text");
        main.appendChild(section);

        // on cré une nouvelle image
        let oImg = document.createElement("img");
        oImg.setAttribute("class","movie-element__image");
        oImg.src = "./assets/img.jpg";
        section.appendChild(oImg);

        // on cré un titre h2
        let h2G = document.createElement("h2"); // on cré un paraG
        h2G.innerHTML = NewTitle;
        section.appendChild(h2G);

        // on cré un btn
        let pRating = document.createElement("p"); // on cré un ul
        // pRating.setAttribute("class", "movie-element p")
        pRating.innerHTML = NewRating;
        section.appendChild(pRating);

        //let oUl = document.getElementById("movie-list"); // récupération de la liste
        // let iLength = oUl.getElementsByTagName("li").length; // longueur de la liste (nombre d'items)

        // let oLi = document.createElement("li"); // on cré un nouveau noeud item de liste

        // // let oText = document.createTextNode("Ceci est l'item de liste n°" + (iLength + 1)); // on cré un noeud texte
        // let oText = document.createTextNode(NewTitle); // on cré un noeud texte
        // let oText2 = document.createTextNode(NewImg); // on cré un noeud texte
        // let oText3 = document.createTextNode(NewRating); // on cré un noeud texte

        // oLi.appendChild(oImg); // on attache le noeud texte au noeud item de liste
        // oLi.appendChild(oText); // on attache le noeud texte au noeud item de liste
        // oLi.appendChild(oText2); // on attache le noeud texte au noeud item de liste
        // oLi.appendChild(oText3); // on attache le noeud texte au noeud item de liste
        // oUl.appendChild(oLi); // on attache le noeud item de liste au noeud liste

        // // oText.setAttribute("class","movie-element__info");

        // // return oLi;
        // entryText.appendChild(oUl);
    }