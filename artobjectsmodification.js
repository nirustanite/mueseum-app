const paintings = data.artObjects;

/*paintings.forEach(function (painting){
    console.log(paintings[index]);
    console.log(painting)
})*/

let images, title;

function  createArtObjects(images, title)
{
    const div = document.createElement("div");
    const anchor = document.createElement("a");
    const image = document.createElement("img");
    const paragraph = document.createElement("p");

    div.className="display";
    anchor.setAttribute("href","./pages/detail-page.html");
    image.src = images;
    paragraph.innerHTML = title;

    section = document.getElementById("gallery");
    div.append(anchor);
    anchor.append(image);
    div.append(paragraph);
    section.append(div);
}

paintings.forEach(function (paintimages){
    images = paintimages.webImage.url;
    title = paintimages.longTitle;
    createArtObjects(images,title);
})

