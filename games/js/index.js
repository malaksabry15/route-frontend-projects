// let row=document.getElementById("row")
// let gamesSection=document.querySelector(".games")
// let descriptionSection=document.querySelector(".description")


// class s{
//   x=[]
//    async getdata(category) {
//     const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
//     'X-RapidAPI-Key': '28aacc9049msha7f252b075f3be3p1b0c42jsn462b0244dc99'
//   }
// };
//     let response= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
//      this.x =await (response.json())
//     console.log(this.x)
//     this.display()
//     this.show()
//   }
//   display(){
//     let box=``
//     for (let i=0;i<this.x.length;i++){
//       box+=`<div class="col-md-6 col-lg-4 ">
//                 <div class="card  h-100 " style="width: 18rem; " data-index="${i}">
//   <img src="${this.x[i].thumbnail}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">
//         <div class=" d-flex justify-content-between">
//             <h3>${this.x[i].title}</h3>
//             <span>free</span>
//         </div>
//     </h5>

//     <p class="card-text text-center">${this.x[i].short_description}</p>
    
//   </div>
//   <div class="card-footer d-flex justify-content-between">
//     <span>
//        ${this.x[i].genre}
//     </span>
//     <span>${this.x[i].platform}</span>
//   </div>
// </div>
//             </div>`
//     }
//     row.innerHTML=box;
//     this.show()
//   }
// show(){
//   let cards=document.querySelectorAll(".card")
  

//   cards.forEach(card =>{
//     card.addEventListener("click",()=>{
//       gamesSection.classList.add("d-none")
//       descriptionSection.classList.remove("d-none")
//       console.log("hhhhh")
//       let y=card.getAttribute("data-index")
//       let game=this.x[y]
//       let box=`
//       <div class="header d-flex justify-content-between">
//         <h1>Details Game</h1>
//         <button class="close"><i class="fa-solid fa-xmark"></i></button>
//     </div>
//     <div class=" d-flex justify-content-between">
//         <div class="col-md-6 ">
//         <img src="${game.thumbnail}" alt="" class=" w-75">
//     </div>
//     <div class="col-md-6">
//         <div class="text ms-3">
//             <h3>${game.title}</h3>
//             <p>${game.genre}</p>
//             <p>${game.platform}</p>
//             <p>${game.status}</p>
//             <p>${game.short_description}</p>
//             <button><a href="${game.game_url}" target="_blank"> Show Game</a></button>
//         </div></div>
//     </div>`
//     document.querySelector(".description").innerHTML=box
//     this.close()
//     });
//   });
 
// };
// close(){
//   let closebtn=document.querySelector(".close")
//    closebtn.addEventListener("click",()=>{
//   descriptionSection.classList.add("d-none")
//   gamesSection.classList.remove("d-none")
// })
// }

// nav(){
//   let navLinks = document.querySelectorAll(".nav-link");
// navLinks.forEach(link => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     let category = link.getAttribute("data-category");
//     this.getdata(category); 
    
//     navLinks.forEach(link => link.classList.remove('active'));
//     link.classList.add('active')
//   });
  
// });
// }
 
// }
// // async function start(){
// // let obj=new s()
// // await obj.getdata("sailing")
// // obj.display()
// // }
// // start()


// let obj=new s()
// obj.getdata("mmorpg")
// obj.nav()



import { Games } from "./games.module.js";

new Games();