/*
    Assignment 05
    Vrund Patel
*/


$(document).ready(function () {
    class ContentItem{
       Id;
       moviename;
       description;
       category;
   
   constructor(Id, moviename, description, category){
           this.Id = Id;
           this.moviename = moviename;
           this.description = description;
           this.category = category;
           }
   
   updateContentItem(Id, moviename, description, category){
            if(this.Id == Id && moviename && description && category){
                this.Id = Id;
                this.moviename = moviename;
                this.description = description;
                this.category = category;
               }
           }

           toString(){
           return $('#content-item-list').append(`<div class="content-item-wrapper">
           <div id="content-item-${this.Id}">
           <h2 class="moviename">${this.moviename}</h2>
           <p class="description">${this.description}</p>
           <div class="category">${this.category}</div>
           </div>
            </div>`);
               }
       }
       
       let content = [
       {
           "Id": 0,
           "moviename": "Top Gun",
           "description": "A fighter piolt story!",
           "category": "Thriller"
       },
       {
           "Id": 1,
           "moviename": "Black Adam",
           "description": "Fictional Movie rolled by actor The Rock.",
           "category": "Sci-Fi"
       },
       {
           "Id": 2,
           "moviename": "Fakt Mahila O Mate",
           "description": "Gujarati drama Movie.",
           "category": "Comedy"
       },
        {
           "Id": 3,
           "moviename": "Minions",
           "description": "A cartoon movie for kids!",
           "category": "Comedy"
       },
       {
           "Id": 4,
           "moviename": "Gangajal",
           "description": "Based on imaginary story.",
           "category": "Drama"
       }
       ];
       $.each(content, function(key, val){
         $('#content-item-list').append(`<div class="content-item-wrapper">
        <div id="content-item-${this.Id}">
        <h2 class="moviename">${this.moviename}</h2>
        <p class="description">${this.description}</p>
        <div class="category">${this.category}</div>
       </div>
       </div>`);
       });
      $('h3').empty().text("About Movies");
      $('.content-item-wrapper').css({"border": "1px solid red", "width": "420px", "padding": "10px", "margin": "10px 0px"});

   });


