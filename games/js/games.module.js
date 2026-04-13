
import { Ui } from "./ui.module.js";
import { Details } from "./details.module.js";

export class Games {
   constructor() {
      this.ui = new Ui(); 
      this.getdata("mmorpg");

      let navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach(link => {
         link.addEventListener("click", (e) => {
            e.preventDefault();
            let category = link.getAttribute("data-category");
            this.getdata(category);

            navLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
         });
      });
   }

   async getdata(category) {
      document.querySelector(".loading").classList.remove("d-none"); 
      document.querySelector(".games").classList.remove("d-none"); 
      document.querySelector(".description").classList.add("d-none"); 

      const options = {
         method: 'GET',
         headers: {
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
            'X-RapidAPI-Key': '28aacc9049msha7f252b075f3be3p1b0c42jsn462b0244dc99' 
         }
      };
      try {
         let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
         this.x = await (response.json());
         this.ui.displayGames(this.x);
         this.card();
      } catch (error) {
         console.error("Error fetching games:", error);
      } 
       finally {
          document.querySelector(".loading").classList.add("d-none"); 
       }
   }

   card() {
      document.querySelectorAll(".card").forEach((item) => {
         item.addEventListener("click", () => {
            const index = item.dataset.index;
            const id = this.x[index].id;
            document.querySelector(".games").classList.add("d-none"); 
            document.querySelector(".description").classList.remove("d-none"); 
            new Details(id);
         });
      });
   }
}