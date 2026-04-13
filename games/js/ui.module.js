
export class Ui {

   displayGames(data) {
    let box=``
   
      for (let i = 0; i < data.length; i++) {
         box += `
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="card h-100 p-3 bg-transparent text-white pb-1" data-index="${i}">
                <img src="${data[i].thumbnail}" class=" rounded-2" alt="${data[i].title} thumbnail">
                <div class="card-body">
                  <div class="d-flex justify-content-between align-items-center mb-2">
                    <h3 class="h6">${data[i].title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-text text-center opacity-75">${data[i].short_description.split(" ", 8)}</p>
                </div>
                <div class="card-footer p-0 d-flex justify-content-between align-items-center">
                    <span >${data[i].genre}</span>
                    <span >${data[i].platform}</span>
                </div>
              </div>
            </div>`;
      }

      document.getElementById("row").innerHTML = box;
   }

   showDetails(game) {
      let box = `
         <div class="header d-flex justify-content-between align-items-center">
            <h1 >Details Game</h1>
            <button class="btn-close btn-close-white close"></button>
         </div>
         <div class="row g-4 py-4">
            <div class="col-md-4">
               <img src="${game.thumbnail}" class="w-100" alt="${game.title} thumbnail">
            </div>
            <div class="col-md-8">
               <h3>Title: ${game.title}</h3>
               <p>Category: <span class="badge text-bg-info">${game.genre}</span></p>
               <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
               <p>Status: <span class="badge text-bg-info">${game.status}</span></p>
               <p class="small">${game.description}</p>
               <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
            </div>
         </div>`;

      document.querySelector(".description").innerHTML = box;
      document.querySelector(".games").classList.add("d-none"); 
      document.querySelector(".description").classList.remove("d-none"); 
   }
}