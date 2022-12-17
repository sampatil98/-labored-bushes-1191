let data=JSON.parse(localStorage.getItem("cart"));
let count=document.getElementById("count");


displaycart(data)
function displaycart(data){
    let value=data.length;
    count.innerText=value
    data.forEach((element,index)=>{
        let container=document.getElementById("container");
        let card=document.createElement("div");
        let subcard=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=element.name;
        let prise=document.createElement("h3");
        prise.innerText="₹"+element.prise;
        let button=document.createElement("button");
        button.innerText="remove";
        let subcard2=document.createElement("div");
        let img=document.createElement("img");
        img.src=element.img;
        subcard.append(name,prise,button);
        subcard2.append(img)
        card.append(subcard,subcard2);
        container.append(card);

    });
}