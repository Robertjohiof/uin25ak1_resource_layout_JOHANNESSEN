const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

//Finne id der innhold skal vises
const innholdVar = document.getElementById("innhold")

//Funksjon for å gå igjennom Array, få tak i objekter og vise dem i forhold til hvilken tab man er i.
function visInnhold(category) {
    //Bruk .filter til å finne elementet som er først
    const resource = resources.filter(item => item.category === category)[0]

    if (resource) {
        //Bruke .map for å gå igjennom og printe det som skal vises
        const sourcesHtml = resource.sources
            .map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`)
            .join("")

        //Print innhold i rikitig format!
        innholdVar.innerHTML = `
            <h2>${category}</h2>
            <p>${resource.text}</p>
            <ul>${sourcesHtml}</ul>
        `
    }
}

//Kalle funksjon og vise riktig fane først
visInnhold("HTML")

//Evenlisteners for knappene i tabbene
const faneKlikkVar = document.querySelectorAll(".faneKlikk")
faneKlikkVar.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.id
        visInnhold(category)
    })
})


///Evenlisteners for aktive/inaktive tabber
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".faneKlikk")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove("active"))
            button.classList.add("active")            
        })
    })
})