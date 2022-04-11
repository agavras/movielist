// declaration et initialisation des constantes
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("add-modal");
const title = document.getElementById("title");
const img = document.getElementById("image-url");
const rating = document.getElementById("rating");
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

// Cette fonction sera appelée si on clic sur le boutton CANCEL du Formulaire ADD MOVIE
function CancelFormulaire() {
    console.log("formulaire annulé");
    HideFormulaire();

}

// Cette fonction sera appelée pour cacher le formulaire
function HideFormulaire() {
    backdrop.style.display = "none";
    modal.style.display = "none";
    console.log("formulaire caché");
}

// Cette fonction sera appelée si on clic sur le boutton ADD du Formulaire ADD MOVIE
function AddFormulaire() {
    let NewTitle = title.value;
    let NewImg = img.value;
    let NewRating = rating.value;

    if (NewTitle !== "") {
    console.log("titre valide");
        if (NewImg !== "") {
        console.log("image valide");
            if (NewRating !== "" && NewRating < 6 && NewRating > 0) {
            console.log("note valide");
            } else {  
            NewRating=null;
            console.log("note invalide");
            alert("Entrez une NOTE valide (1 to 5)");
            }
        } else {
        NewImg=null;
        console.log("image invalide");
        alert("Entrez une URL valide");
        }
    } else {
    NewTitle=null;
    console.log("titre invalide");
    alert("Entrez un TITRE valide");
    }
    
    if (NewTitle && NewImg && NewRating) {
    add_li();
    console.log("formulaire ajouté");
    HideFormulaire();
    }
}

// Cette fonction sera appelée si à cliqué sur le boutton ADD du HTML et que les 3 conditions sont remplies
function add_li() {
    let NewTitle = title.value;
    let NewImg = img.value;
    let NewRating = rating.value;

        // on cré une nouvelle section
        section[sectionID] = document.createElement("li");
        section[sectionID].setAttribute("class","movie-element");
        // section[sectionID].setAttribute("id", "entry-text");
        ulHtml.appendChild(section[sectionID]);
        section[sectionID].addEventListener("click", AskForDelete);
        section[sectionID].setAttribute("liID", sectionID.toString());

        // on cré une nouvelle image
        let oImg = document.createElement("img");
        // oImg.setAttribute("class","movie-element__image");
        oImg.src = "./assets/img.jpg";
        section[sectionID].appendChild(oImg);

        // on cré un titre h2
        let h2G = document.createElement("h2");
        h2G.innerHTML = NewTitle;
        section[sectionID].appendChild(h2G);

        // on cré un btn
        let pRating = document.createElement("p");
        pRating.innerHTML = NewRating;
        section[sectionID].appendChild(pRating);

        sectionID ++;
        // console.log(sectionID);
    }

    // si on clique sur une fiche que l'on à precedament créé
    function AskForDelete() {
        DeleteDiv.style.display="block";
        idToDelete = this.getAttribute("liID")
        // console.log(idToDelete);
    }

    // si on clique sur YES pour valider la suppression
    function FunctionYes() {
            console.log("YES");
            DeleteDiv.style.display="none";
            // console.log(idToDelete);
            section[idToDelete].remove();
    }
    
    // si on clique sur NO(cancel) pour annuler la suppression
    function FunctionNo() {
            console.log("NO");
            DeleteDiv.style.display="none";
    }