// ***********Randomizing quotes***********

const lines=["The greatest glory in living lies not in never falling, but in rising every time we fall.",
"The way to get started is to quit talking and begin doing.",
"If life were predictable it would cease to be life, and be without flavor.",
"Life is what happens when you're busy making other plans.",
"When you reach the end of your rope, tie a knot in it and hang on.",
"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
"Never let the fear of striking out keep you from playing the game.",
"Life is either a daring adventure or nothing at all.",
"Life is never fair, and perhaps it is a good thing for most of us that it is not.",
"I find that the harder I work, the more luck I seem to have.",
"If you really look closely, most overnight successes took a long time."]


var selectedIndexNumber  = Math.floor((Math.random()*lines.length));
var quote = document.querySelector(".quotes")
quote.textContent= lines[selectedIndexNumber];


// ***********Button Actions***********

var quotebox = document.querySelector(".quote")
const blue = document.querySelector(".blue-b")
const lime = document.querySelector(".lime-b")
const yellow = document.querySelector(".yellow-b")
const lavender = document.querySelector(".lavender-b")
const navcell= document.querySelectorAll(".cell")

blue.addEventListener("click",function(){
    quotebox.classList.add("blue");
    quotebox.classList.remove("lime","levender","yellow");

    document.querySelector("a.active").style.backgroundColor="#92B4EC";
    
navcell.forEach(cell => {
    cell.addEventListener('mouseenter', () => {
      cell.style.backgroundColor="#92B4EC";
        
        
    });
});
navcell.forEach(cell => {
    cell.addEventListener('mouseout', () =>  {
        cell.style.backgroundColor="black";
    });
});
    
    
    
});

lime.addEventListener("click",function(){
    quotebox.classList.add("lime");
    quotebox.classList.remove("blue","lavender","yellow");  
    document.querySelector("a.active").style.backgroundColor="#AEDBCE";
    
    navcell.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor="#AEDBCE";
            
            
        });
    });
    navcell.forEach(cell => {
        cell.addEventListener('mouseout', () =>  {
           cell.style.backgroundColor="black";
        });
    });
})

yellow.addEventListener("click",function(){
    quotebox.classList.add("yellow");
    quotebox.classList.remove("blue","lavender","lime"); 
    document.querySelector("a.active").style.backgroundColor="#FFE69A";
    
    navcell.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor="#FFE69A";
            
            
        });
    });
    navcell.forEach(cell => {
        cell.addEventListener('mouseout', () =>  {
            cell.style.backgroundColor="black";
        });
    });
})

lavender.addEventListener("click",function(){
    quotebox.classList.add("lavender");
    quotebox.classList.remove("blue","yellow","lime");
    document.querySelector("a.active").style.backgroundColor="#FBCAFF";

    navcell.forEach(cell => {
        cell.addEventListener('mouseenter', () => {
             cell.style.backgroundColor="#FBCAFF";
            
            
        });
    });
    navcell.forEach(cell => {
        cell.addEventListener('mouseout', () =>  {
           cell.style.backgroundColor="black";
        });
    });
})


