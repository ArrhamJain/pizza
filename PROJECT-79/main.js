menu_list_array = ["Veg Margherita Pizza",
"Chicken Tandoori Pizza",
"Veg Supreme Pizza",
"Paneer Tikka Pizza",
"Deluxe Veggie Pizza"

];


function getmenu() {
    var htmldata; htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length; i++) { htmldata = htmldata + '<li>' + menu_list_array[i] + '</li>' } htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){ var htmldata;
     var item=document.getElementById("add_item").value; menu_list_array.sort(); htmldata="<section class='cards'>"
      for(var i=0;i<menu_list_array.length;i++){ htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] + '</div>' } htmldata=htmldata+"</section>"
       document.getElementById("display_addedmenu").innerHTML = htmldata; } 

       var item=document.getElementById("add_item").value; menu_list_array.sort(); htmldata="<section class='cards'>"
       for(var i=0;i<menu_list_array.length;i++){ htmldata=htmldata+'<div class="card">' +'<img src="https://image.shutterstock.com/image-photo/fat-crust-pizza-spicy-chicken-260nw-1327070108.jpg"/>' + menu_list_array[i] + '</div>' } htmldata=htmldata+"</section>"
        document.getElementById("display_addedmenu").innerHTML = htmldata; 

        var item=document.getElementById("add_item").value; menu_list_array.sort(); htmldata="<section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){ htmldata=htmldata+'<div class="card">' +'<img src="https://i.pinimg.com/originals/48/b5/d2/48b5d236bac9c2d3415a7ba3159280e5.jpg"/>' + menu_list_array[i] + '</div>' } htmldata=htmldata+"</section>"
         document.getElementById("display_addedmenu").innerHTML = htmldata; 

         var item=document.getElementById("add_item").value; menu_list_array.sort(); htmldata="<section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){ htmldata=htmldata+'<div class="card">' +'<img src="https://mpng.subpng.com/20181107/ctu/kisspng-pizza-vegetarian-cuisine-paneer-tikka-tandoori-chi-pizza-menu-5be36b05e38ff0.0586028915416307259321.jpg"/>' + menu_list_array[i] + '</div>' } htmldata=htmldata+"</section>"
         document.getElementById("display_addedmenu").innerHTML = htmldata; 

         var item=document.getElementById("add_item").value; menu_list_array.sort(); htmldata="<section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){ htmldata=htmldata+'<div class="card">' +'<img src="https://image.shutterstock.com/image-photo/supreme-pizza-isolated-on-white-260nw-228989371.jpg"/>' + menu_list_array[i] + '</div>' } htmldata=htmldata+"</section>"
         document.getElementById("display_addedmenu").innerHTML = htmldata; 
    
       function add_top(){ var item=document.getElementById("add_item").value; menu_list_array.push(item);
        add_item(); }