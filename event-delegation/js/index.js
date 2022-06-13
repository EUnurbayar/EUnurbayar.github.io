/**
 * index.js
 */


$("#articlesList ").on("click", "article",function(event){
    event.preventDefault();
    console.log($(this).text());
    const $a = $(`
   
        <p>Article Title - 
            <a href="http://www.google.com">Click to Add a new Article</a>
        </p>
   `)
    $("#articlesList ").append($a)
});




// const customUI = document.createElement("article");
// function responding(event){
//     if(event.target.nodeName == " article"){
//         console.log("responding")
//     }
//     for(let i = 1; i < 10; i++){
//         const newElement = document.createElement("article");
//         newElement.textContent = i;
//         customUI.append(newElement);
//     }
// }
// customUI.addEventListener("click", responding);