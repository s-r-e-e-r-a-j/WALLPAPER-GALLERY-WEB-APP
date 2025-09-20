// coded by Sreeraj

const limit = parseInt(prompt("Enter the number of images (max 500):"), 10);

if (!isNaN(limit) && limit > 0 && limit <= 500) {
    const div = document.createElement("div");
    div.classList.add("img-container");

    for (let i = 0; i < limit; i++) {
        const id = Math.floor(Math.random() * limit) + 500;

        const a = document.createElement("a");
        a.href = `https://wallpaperaccess.com/download/4k-${id}`;
        a.setAttribute("download", true);

        const img = document.createElement("img");
        img.src = `https://wallpaperaccess.com/download/4k-${id}`;
        img.alt = "Wallpaper";

        a.appendChild(img);
        div.appendChild(a);
    }

    document.body.appendChild(div);
} else {
    alert("Invalid number! Please enter a value between 1 and 500.");
}
