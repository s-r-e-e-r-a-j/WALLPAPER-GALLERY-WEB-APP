

const imagesarray=[];
const aarray=[];
const limit=prompt("Enter The Number Of Images");//disclaimer don`t set numbers greater than 500 `
const div=document.createElement("div");          //some times it leads server down
div.classList.add("img-container");
for(let i=0;i<=limit;i++){
var id=Math.floor(Math.random()*limit)+500;
const a=document.createElement('a');
aarray.push(a);
aarray[i].setAttribute("download",true)
const image=document.createElement("img");
imagesarray.push(image);
imagesarray[i].style.width="420px"
imagesarray[i].style.height="420px"
imagesarray[i].style.border="10px solid black"
imagesarray[i].style.borderRadius="20px"
imagesarray[i].src=`https://wallpaperaccess.com/download/4k-${id}`
aarray[i].href=`https://wallpaperaccess.com/download/4k-${id}`
aarray[i].appendChild(imagesarray[i])
div.appendChild(aarray[i]);
document.body.appendChild(div)

}





