
const intro = document.getElementById("intro");
const openButton = document.getElementById("openButton");
const scene = document.getElementById("scene");

const flowersContainer = document.getElementById("flowers");
const petalsContainer = document.getElementById("petals");


/* =========================
   ABRIR LA CARTA
========================= */

openButton.addEventListener("click", () => {

    intro.classList.add("hide");

    setTimeout(() => {

        scene.classList.add("show");

        createFlowers();

        createPetals();

    }, 500);

});


/* =========================
   CREAR FLORES
========================= */

function createFlowers() {

    const flowers = [

        {
            left: "5%",
            scale: 0.8,
            delay: 0.2
        },

        {
            left: "15%",
            scale: 1,
            delay: 0.5
        },

        {
            left: "27%",
            scale: 0.7,
            delay: 0.8
        },

        {
            left: "40%",
            scale: 1.1,
            delay: 0.3
        },

        {
            left: "53%",
            scale: 0.8,
            delay: 1
        },

        {
            left: "65%",
            scale: 1,
            delay: 0.6
        },

        {
            left: "78%",
            scale: 0.75,
            delay: 0.9
        },

        {
            left: "90%",
            scale: 0.9,
            delay: 0.4
        }

    ];


    flowers.forEach((flowerData) => {

        const flower = document.createElement("div");

        flower.classList.add("flower");

        flower.style.left = flowerData.left;

        flower.style.transform =
            `scale(${flowerData.scale})`;

        flower.style.animationDelay =
            `${flowerData.delay}s,
             ${flowerData.delay + 2}s`;


        flower.innerHTML = `

            <div class="stem"></div>

            <div class="leaf left"></div>

            <div class="leaf right"></div>

            <div class="flower-head">

                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>

                <div class="center"></div>

            </div>

        `;

        flowersContainer.appendChild(flower);

    });

}


/* =========================
   CREAR PÉTALOS
========================= */

function createPetals() {

    const numberOfPetals = 12;


    for (let i = 0; i < numberOfPetals; i++) {

        const petal =
            document.createElement("div");

        petal.classList.add("falling-petal");


        /* Posición horizontal aleatoria */

        petal.style.left =
            `${Math.random() * 100}%`;


        /* Velocidad */

        const duration =
            7 + Math.random() * 8;

        petal.style.animationDuration =
            `${duration}s`;


        /* Retraso */

        const delay =
            Math.random() * 10;

        petal.style.animationDelay =
            `${delay}s`;


        /* Tamaño */

        const size =
            8 + Math.random() * 7;

        petal.style.width =
            `${size}px`;

        petal.style.height =
            `${size * 1.5}px`;


        petalsContainer.appendChild(petal);

    }

}

