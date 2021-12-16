var Reason=["2. Trees Help to balance The Biodiversity In Environment", "3. Trees provide shelter.", "4. Trees make natural fertilizers and medicines.", "5. Trees provide natural buffer for disasters and prevent soil erosion."];
var images=["https://d2s6h2b6.stackpathcdn.com/blog/wp-content/uploads/2017/12/Balance-of-nature.png", "https://images.slideplayer.com/23/6666767/slides/slide_19.jpg", "https://homegrownfun.com/wp-content/uploads/homemade-organic-fertilizers-egg-shells.jpg", "https://theclimatelemon.com/wp-content/uploads/2017/10/Trees-erosion.jpg"
];
var i=0;
function whenclick(){
if (i==4){
i=0;
}
document.getElementById("tree").src=images[i];
document.getElementById("Reasons").innerHTML=Reason[i];
i++;
document.getElementById("audio").play();
}
