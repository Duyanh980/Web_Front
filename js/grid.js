function grid() {
    var grid_html = "";
    for (var i=0;i<50;i++){
        grid_html+= "<div class=\"col-md-4\">\n" +
            "                    <div class=\"item\">\n" +
            "                        <img src=\"imgs/nezuko.jpg\"/>\n" +
            "                        <h2>Tiêu đề item</h2>\n" +
            "                        <p class='price'>20.000đ</p>\n" +
            "                    </div>\n" +
            "                </div>";
    }
    return grid_html;
}
document.getElementById("grid").innerHTML= grid(); 