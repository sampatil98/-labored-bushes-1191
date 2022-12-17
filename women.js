
let container =document.getElementById("product_div");
let val=fetch("https://639b871131877e43d68e7385.mockapi.io/products");
val.then(function(res){
    return res.json();
})
.then(function(res){
    let actualdata=res;
    console.log(actualdata)
    displaydata(actualdata)
})
.catch(function(err){
    console.log(err)
})

function displaydata(data){
    data.forEach(function(element,index){
        if(element.category === "women"){
            let card=document.createElement("div");
            let img=document.createElement("img");
            img.src=element.img;
            let heading=document.createElement("h4");
            heading.innerText="shopify"
            let name=document.createElement("p");
            name.innerText=element.name;
            let prise=document.createElement("h5");
            prise.innerText="₹"+element.prise;
            let button=document.createElement("button");
            button.innerText="Buy Now";
            card.append(img,heading,name,prise,button);
            container.append(card)
        }
    })
    
}




