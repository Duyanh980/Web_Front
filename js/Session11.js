function item() {
    var list = document.getElementsByClassName("item");// tra ve 1 collection
    for (var i=0;i<list.length;i++){
        list[i].style.boxShadow = "0 0 5px #aaaaaa";
        list[i].style.backgroundColor = "green";
    }

    var list2 = document.querySelectorAll("div.item");
    for (var i=0;i<list2.length;i++){
        list2[i].style.border = "3px solid red";
    }
}
setTimeout(item,3000); 