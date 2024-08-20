//import is usually only for javascript shit
const copypasta = " Someone extracted Yandere Simulator's assets and used those assets to develop a simple game prototype. They created an announcement trailer showing off what they had done. Despite the fact that their prototype only contains a fraction of the functionality of Yandere Simulator, their announcement trailer gave hundreds of thousands of people the false impression that it was possible to re-create the entirety of Yandere Sim in only two weeks.The only reason that their prototype looks even remotely presentable is because they simply copy-pasted all of the assets that were created for me over the course of 6 years. (Not store-bought assets, but Yandere Simulator's original, copyrighted assets.) They created nothing original, and simply stole all of my material. It's the most blatant theft I've ever seen in the history of the game industry.Because hundreds of thousands of people were tricked into believing that it's possible to re-create Yandere Sim within two weeks, my work has been completely devalued, I have begun to receive a massive amount of harassment, and I have started to lose all of the support that I had spent 6 years building up.This is not a case of another developer is making a superior game but is a case of a con artist pulling a scam that is tricking hundreds of thousands of people into hating me. ";
// Global variables
var canvas = document.getElementById("canvas");
var lock = false;
var imageHolder = document.getElementById("imageHolder"); // Global imageHolder variable
var soundID;
// Helper functions
const scaleToMaxFive = (num1, num2, scale) => [
    Math.round((num1 / Math.max(num1, num2)) * scale),
    Math.round((num2 / Math.max(num1, num2)) * scale)
];

const unViewImage = () => {
    soundID = Math.floor(Math.random() * 6) + 1;
    /*
    const audio = new Audio('./' + soundID + '.wav');
    audio.volume = 0.03;
    audio.play();
    */
    if (lock === true) {
        return;
    }
    lock = true;
    imageHolder.className = "singleImageFade";
    setTimeout(() => {
        lock = false;
        imageHolder.innerHTML = "";
        imageHolder.className = "singleImageGone"; // Corrected typo from "singeImageGone"
        canvas.style.display = "grid";
        canvas.className = "PhotoDisplay";
    }, 950);
}

const viewImage = (imageID) => {
    soundID = Math.floor(Math.random() * 5) + 1;

    /*
    const audio = new Audio('./' + soundID + '.wav');
    audio.volume = 0.05;
    audio.play();
    */
    if (lock === true) {
        return;
    }
    lock = true;
    canvas.className = "PhotoDisplayGone";
    setTimeout(() => {
        lock = false;
        canvas.style.display = 'none';
        imageHolder.style.display = "flex";
        imageHolder.className = "singleImage";
        imageHolder.style.background = `linear-gradient(rgba(111, 111, 111, 0.5), rgba(111, 111, 111, 0.7)), url(${imageID})`;
        imageHolder.style.backgroundRepeat = "no-repeat";
        imageHolder.style.backgroundSize = "cover"; // Ensure the image covers the entire container

        const imageUrl = imageID;
        const img = new Image();

        img.onload = () => {
            img.style.maxWidth = "100%"; // Ensure it covers the parent width
            img.style.maxHeight = "90%"; // Ensure it covers the parent height
            img.style.objectFit = "contain"; // Fit the image inside without distortion
            img.loading = "lazy";
            img.style.bottom = "10%";
            img.style.boxShadow = "0px 156px 258px rgba(0, 0, 0, 1)"; // Add a box shadow
        };

        img.src = imageUrl;
        imageHolder.appendChild(img);

        // Add the text section
        const textBox = document.createElement("div");
        textBox.className = "imageDescription";
        textBox.textContent = copypasta;
        imageHolder.appendChild(textBox);

        // Add the event listener
        imageHolder.addEventListener("click", unViewImage);
    }, 1000);
}

const manifestImage = (i) => {
    const imageUrl = `./BestPhotos/${i}.jpg`;
    const img = new Image();

    img.onload = () => {
        //new div
        const [colSpan, rowSpan] = scaleToMaxFive(img.width, img.height, 9);
        const newElement = document.createElement("div");
        Object.assign(newElement.style, {
            gridRow: `span ${rowSpan} / auto`,
            gridColumn: `span ${colSpan} / auto`,
        });
        newElement.className = "testDiv";
        newElement.id = i;
        canvas.appendChild(newElement); // Use the global 'canvas' variable

        //add the image
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.style.position = "absolute";
        imgElement.style.top = "0";
        imgElement.style.left = "0";
        imgElement.style.width = "inherit";
        imgElement.style.height = "inherit";
        imgElement.style.objectFit = "cover";
        imgElement.loading = "lazy";
        newElement.appendChild(imgElement);


        //event listeners
        newElement.addEventListener("click", () => viewImage(imageUrl));

    };
    img.src = imageUrl;
};

const randomMized = Array.from({ length: 38 }, (_, index) => index + 1).sort(() => Math.random() - 0.5);

// Main section
randomMized.forEach(manifestImage);



/*
var lock = false;
// Helper functions
const scaleToMaxFive = (num1, num2, scale) => [
    Math.round((num1 / Math.max(num1, num2)) * scale),
    Math.round((num2 / Math.max(num1, num2)) * scale)
];

const unViewImage = () => {
    const imageHolder = document.getElementById("imageHolder");
    imageHolder.className = "singleImageFade";
    setTimeout(() => {
        imageHolder.innerHTML = "";
        imageHolder.className = "singeImageGone";
        document.getElementById("canvas").style.display = "grid";
        document.getElementById("canvas").className = "PhotoDisplay";
    }, 1010);
}

const viewImage = (imageID) => {

    const canvas = document.getElementById("canvas");
    canvas.className = "PhotoDisplayGone";
    setTimeout(() => {
        canvas.style.display = 'none';
        document.getElementById("imageHolder").style.display = "flex";
        document.getElementById("imageHolder").className = "singleImage";

        //add the image onto it
        const imageUrl = imageID;
        const img = new Image();

        img.onload = () => {
            img.style.maxWidth = "100%"; // Ensure it covers the parent width
            img.style.maxHeight = "90%"; // Ensure it covers the parent height
            img.style.objectFit = "contain"; // Fit the image inside without distortion
            img.loading = "lazy";
            img.style.bottom = "10%";
        };
        img.src = imageUrl;
        document.getElementById("imageHolder").appendChild(img);

        //add the text section
        const textBox = document.createElement("div");
        textBox.className = "imageDescription";
        textBox.textContent = "Hentai isn't real life, so you can have any combination of kinks/fetishes you could ever possibly dream up of. It doesn't matter if it isn't biologically possible. Want somebody with a 30 inch drake-snake that splatters cum on the wall like a bucket of paint? There is a hentai for that. Want somebody with honkers bigger than their torso? Three is also a hentai for that. Limitless possibilities.Let's look at another angle: morals. When you are watching normal porn, you have that feeling of guilt knowing that these people are ruining their lives for your pleasure. However, when you are watching hentai, you know that you're helping some overworked animator in Japan pay their rent.Hentai is a lot more accessible when it comes to the content you can get. On kemono.su, for example, you can access enough masturbating material to last you a lifetime. FOR FREE. Although I would recommend finding an artist or animator you like on other websites first to filter through the garbage.Another benefit is not getting jealous of the people in hentai. Since you know it isn't real, your pride won't get hurt when you see the guy has a cock 4 inches longer than yours. Same thing applies to girls (although I doubt there are any reading this).";
        document.getElementById("imageHolder").appendChild(textBox);

        //add the event listener
        document.getElementById("imageHolder").addEventListener("click", unViewImage);
    }, 1000);
}

const manifestImage = (i) => {
    const imageUrl = `./BestPhotos/${i}.jpg`;
    const img = new Image();

    img.onload = () => {
        const [colSpan, rowSpan] = scaleToMaxFive(img.width, img.height, 9);
        const newElement = document.createElement("div");
        Object.assign(newElement.style, {
            gridRow: `span ${rowSpan} / auto`,
            gridColumn: `span ${colSpan} / auto`,
        });
        newElement.className = "testDiv";
        newElement.id = i;
        newElement.addEventListener("click", () => viewImage(imageUrl));
        document.getElementById("canvas").appendChild(newElement);
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.style.position = "absolute";
        imgElement.style.top = "0";
        imgElement.style.left = "0";
        imgElement.style.width = "inherit";
        imgElement.style.height = "inherit";
        imgElement.style.objectFit = "cover";
        imgElement.loading = "lazy";
        newElement.appendChild(imgElement);
    };
    img.src = imageUrl;
};

const randomMized = Array.from({ length: 38 }, (_, index) => index + 1).sort(() => Math.random() - 0.5);

// Main section
randomMized.forEach(manifestImage);
 */