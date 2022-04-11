// declaration et initialisation des constantes
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("add-modal");
const title = document.getElementById("title");
const img = document.getElementById("image-url");
const rating = document.getElementById("rating");
const entryText = document.getElementById("entry-text");
const main = document.querySelector("body");
const DeleteDiv = document.getElementById("delete-modal");
const btnPassive = document.getElementById("no");
const btnDanger = document.getElementById("yes");
const btnAdd = document.getElementById("add");
const btnCancel = document.getElementById("cancel");
const btnAddMovie = document.getElementById("addmovie");
const ulHtml = document.getElementById("movie-list");

// declaration et initialisation des variables (global)
let section = [];
let sectionID = 0;
let idToDelete = 0;

// addEventListener
btnAddMovie.addEventListener("click", OpenFormulaire);
btnAdd.addEventListener("click", AddFormulaire);
btnCancel.addEventListener("click", CancelFormulaire);
btnPassive.addEventListener("click", FunctionNo);
btnDanger.addEventListener("click", FunctionYes);
backdrop.addEventListener("click", HideFormulaire);

// Cette fonction sera appelée si on clic sur le boutton ADD MOVIE du HTML
function OpenFormulaire() {
    backdrop.style.display = "block";
    modal.style.display = "block";
    console.log("formulaire ouvert");
}

// Cette fonction sera appelée si on clic sur le boutton CANCEL du HTML
function HideFormulaire() {
    backdrop.style.display = "none";
    modal.style.display = "none";
    console.log("formulaire caché ou annulé");
}

// Cette fonction sera appelée si on clic sur le boutton ADD du HTML
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

// Cette fonction sera appelée si on clic sur le boutton CANCEL du HTML
function CancelFormulaire() {
    HideFormulaire();
}

// Cette fonction sera appelée si à cliqué sur le boutton ADD du HTML et que les 3 conditions sont remplies
function add_li() {
    let NewTitle = title.value;
    let NewImg = img.value;
    let NewRating = rating.value;

        // on cré une nouvelle section
        section[sectionID] = document.createElement("li");
        section[sectionID].setAttribute("class","movie-element");
        section[sectionID].setAttribute("id", "entry-text");
        ulHtml.appendChild(section[sectionID]);
        section[sectionID].addEventListener("click", AskForDelete);
        section[sectionID].setAttribute("liID", sectionID.toString());
        console.log("sectionID "+sectionID.toString());

        // on cré une nouvelle image
        let oImg = document.createElement("img");
        oImg.setAttribute("class","movie-element__image");
        oImg.src = "./assets/img.jpg";
        section[sectionID].appendChild(oImg);

        // on cré un titre h2
        let h2G = document.createElement("h2"); // on cré un paraG
        h2G.innerHTML = NewTitle;
        section[sectionID].appendChild(h2G);

        // on cré un btn
        let pRating = document.createElement("p"); // on cré un ul
        // pRating.setAttribute("class", "movie-element p")
        pRating.innerHTML = NewRating;
        section[sectionID].appendChild(pRating);

        sectionID ++;
        console.log(sectionID);
    }

    // si on clique sur une fiche que l'on à precedament créé
    function AskForDelete() {
        // DeleteDiv.setAttribute("class","modal");
        DeleteDiv.style.display="block";
        idToDelete = this.getAttribute("liID")
        console.log(idToDelete);
    }

    // si on clique sur YES dans le HTML
    function FunctionYes() {
        let id = sectionID-1;
            console.log("YES");
            // DeleteDiv.setAttribute("class","modal");
            DeleteDiv.style.display="none";
            console.log(idToDelete);
            section[idToDelete].remove();
    }
    
    // si on clique sur NO(cancel) dans le HTML
    function FunctionNo() {
            console.log("NO");
            DeleteDiv.style.display="none";
            // DeleteDiv.setAttribute("class","modal");
    }