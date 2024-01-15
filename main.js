//nos variables

const btn = document.querySelector('.btn-gen');
let auteur = document.querySelector('.auteur');
let citation = document.querySelector('.citation');

const citations = [{citation:"Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.",auteur:"Nelson Mandela"},
{citation:"La beauté est dans les yeux de celui qui regarde.",auteur:"Oscar Wild"},
{citation:"Fais de ta vie un rêve, et d'un rêve, une réalité.",auteur:"Antoine de Saint-Exupéry"},
{
    citation:"Le souvenir, c'est la présence invisible.",auteur:"Victor Hugo"
},
{
    citation:"Vis comme si tu devais mourir demain.Apprends comme si tu devais vivre toujours",auteur:"Gandhi"
},
{
    citation:"Lorsqu'une porte du bonheur se ferme, une autre s'ouvre ; mais parfois on observe si longtemps celle qui est fermée qu'on ne voit pas celle qui vient de s'ouvrir à nous.",auteur:"Helen Keller" 
},{
    citation:"La vie sans musique est tout simplement une erreur,une fatigue,un exil",auteur:"Friedrich Nietzsche"
},{
    citation:"Si ceux qui disent du mal de moi savaient exactement ce que je pense d'eux,ils en diraient bien davantage", auteur:"Sacha Guitry"
},
{
    citation:"Un probleme sans solution est un problème mal posé.",auteur:"Albert Einstein"
},{
    citation:"ce qui compte,chez un homme,ce n'est pas la couleur de sa peau ou la texture de sa chevelure,mais la texture et la qualité de son âme.", auteur:"Martin Luther King"
},{
    citation:"Deux choses sont infinies: l'univers et la bêtise humaine.Mais en ce qui concerne l'univers, je n'en ai pas encore acquis la certitude absolue.",auteur:"Albert Einstein"
},{
    citation:"Le premier savoir est le savoir de mon ignorance:c'est le début de l'intelligence.",auteur:"Socrate"
}];

btn.addEventListener('click',function(){
    let random = Math.floor((Math.random())*citations.length);

    citation.innerText = citations[random].citation;
    auteur.innerText = citations[random].auteur;
})