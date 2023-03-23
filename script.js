const maDiv   = document.querySelector("#maDiv"); // récupération de la div (qui est un élément du DOM) dans une constante
// const maDiv = document.getElementByID("maDiv");


// classList
maDiv.addEventListener('click', e => { // 1 er paramètre click
    maDiv.classList.toggle("active"); // 2 ème paramètre fonction callback
});


const boutonOpen  = document.querySelector("#open");
boutonOpen.addEventListener('click', e => {
    maDiv.classList.add('active')
})

const boutonClose  = document.querySelector("#close");
boutonClose.addEventListener('click', e => {
    maDiv.classList.remove('active')
})