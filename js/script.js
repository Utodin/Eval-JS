const burger = document.querySelector('#menuBurger');

const nav = document.querySelector('#menuOuvert')

burger.addEventListener('click', () => {
    nav.classList.toggle('displayNone');
    burger.classList.toggle('displayNone');
})

nav.addEventListener('click', () => {
    nav.classList.toggle('displayNone');
    burger.classList.toggle('displayNone');    
})


const identiteprenom = document.querySelector("#identiteprenom")
const identitenom = document.querySelector("#identitenom")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const prenom = document.querySelector("#prenom")
const age = document.querySelector("#age")
const ville = document.querySelector("#ville")
const pays = document.querySelector("#pays")
const job = document.querySelectorAll(".job")
const base = document.querySelector("#base")
const image = document.querySelector("#imageHero")

const createCard = (data) => {

    identiteprenom.textContent = data.results[0].name.first 
    identitenom.textContent = data.results[0].name.last;
    email.textContent = data.results[0].email;
    phone.textContent = `☎ ${data.results[0].phone}`;
    const gender = data.results[0].gender;
    image.src = data.results[0].picture.thumbnail;
    prenom.textContent = data.results[0].name.first;
    age.textContent = data.results[0].dob.age;
    pays.textContent = data.results[0].location.country;
    ville.textContent = data.results[0].location.city;

    if(gender == "female") {
        job.forEach(job2 => job2.textContent = "Développeuse");
        base.textContent = "basée";
    } else {
        job.forEach(job2 => job2.textContent = "Développeur");
        base.textContent = "basé";
    }


}

/**
 * function fecthUrlUser
 * @param {string} url 
 */

const fetchUrlUser = async (url = 'https://randomuser.me/api/') => {
    const data = await fetch(url);
   
    if (data.status == 200) {
        const response = await data.json()
         createCard(response);
    }else {
        console.log("ERREUR"+data.status)
    }
}

fetchUrlUser();


const baseUrl = "https://www.spreadshirt.fr/shopData/reviews?productTypeId=";
const fr = "&locale=fr_FR";
const avis0 = document.querySelector("#avis0")
const avis1 = document.querySelector("#avis1")
const avis2 = document.querySelector("#avis2")
const AffichageAvis = (avis) => {

     avis0.textContent  = avis[0].comment
     avis1.textContent  = avis[1].comment
     avis2.textContent  = avis[2].comment
}




 const ChoixAvis = (...data) => {
    const avisChoisis = [];
  
    for (let i = 0; i < 3; i++) {

    min = 0;
    max = data[0].length
    id = parseInt(Math.random() * (max - min)) + min;
         avisChoisis.push(data[0][id])
         console.log(id)
}
console.log(avisChoisis)
    AffichageAvis(avisChoisis);
 }


const TriAvis = (data) => {
    tab = data.comments;
        const avis = [];    
    tab.forEach((elt) => { 
        if(elt.rating == 5) {
            avis.push(elt)

         }
         
    } )
    console.log(tab)
    ChoixAvis(avis);
    
}



const fetchUrlAvis = async (url) => {
        const data = await fetch(url);
   
    if (data.status == 200) {
        const response = await data.json()
         TriAvis(response);
    }else {
        console.log("ERREUR"+data.status)
    }
}

const CreateUrl = () => {

  min = 812;
  max = 818;
  id = parseInt(Math.random() * (max - min)) + min;
  Url = `${baseUrl}${id}${fr}`


fetchUrlAvis(Url);
}

CreateUrl();