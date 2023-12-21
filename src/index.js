fetch("http://localhost:3000/ducks").then((resp) => resp.json()).then((duckArray) => renderDucks(duckArray))


function renderDucks(duckArray){
    // console.log(duckArray)
    const div = document.querySelector("#duck-nav");
    // console.log(div);
    const imgTag = document.querySelector("#duck-display-image");
    // console.log(imgTag);
    const h2 = document.querySelector("#duck-display-name");
    // console.log(h2);
    const likeButton = document.querySelector("#duck-display-likes");
    likeButton.textContent = duckArray[0].likes;
    h2.textContent = duckArray[0].name;
    imgTag.src = duckArray[0].img_url;
    // console.log(imgTag)
        duckArray.forEach((duckObj) => {
             // console.log(duckObj);
            let LikeValue = duckObj.likes
            const img = document.createElement("img");
             // console.log(img);
            img.src = duckObj.img_url;
            // console.log(img):
            div.append(img);

            img.addEventListener("click", (e) => {
            h2.textContent = duckObj.name;
            imgTag.src = duckObj.img_url;
            likeButton.textContent = LikeValue
            })
        
                   
    })
   
    function increaseLikes (e){
        // console.log(e.target.textContent)
        let likeValue = e.target.textContent;
        const patchObj = {
            method: "PATCH",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(likeValue++)
        };
        fetch(`http://localhost:3000/ducks`, [patchObj])
        .then((resp)=>resp.json()).then((data)=> console.log(data));
        // function addALike(){
        //     likeValue = likeValue++
        // }





    }


}




const h2 = document.querySelector("#duck-display-name");
