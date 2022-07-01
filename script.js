let tagsDescriptionItems = document.querySelectorAll(".tagsDescriptionItemsHolder");
let bottomLines = document.querySelectorAll(".bottomline");
function showItsContent(ind){
    tagsDescriptionItems.forEach(function(item,index){
        item.style.display  = "none";
        bottomLines[index].style.display = "none";
    });
    tagsDescriptionItems[ind].style.display  = "block";
    bottomLines[ind].style.display = "block";
};
