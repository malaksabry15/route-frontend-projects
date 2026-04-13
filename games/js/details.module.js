
import { Ui } from "./ui.module.js";

export class Details {
   constructor(id) {
      this.ui = new Ui();

      
      document.querySelector(".description").addEventListener("click", (e) => {
         if (e.target.closest(".close")) {
            document.querySelector(".description").classList.add("d-none");
            document.querySelector(".games").classList.remove("d-none");
         }
      });

      this.getDetails(id);
   }

   async getDetails(id) {
       const loading = document.querySelector(".loading");
       loading.classList.remove("d-none"); 

      const options = {
         method: "GET",
         headers: {
            "X-RapidAPI-Key": "28aacc9049msha7f252b075f3be3p1b0c42jsn462b0244dc99", 
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
         },
      };

      try {
         let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
         let game = await response.json();
         this.ui.showDetails(game);
      } catch (error) {
         console.error("Error fetching game details:", error);
         
      }
       finally {
          loading.classList.add("d-none"); 
       }
   }
}