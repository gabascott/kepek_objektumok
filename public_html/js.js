//window.addEventListener("load", init);

//function $(nev) {
//    return document.querySelectorAll(nev);
//}
//var kepek = ["kepek/pizza.jpg", "kepek/pizza.png", "kepek/trav.jpg"];
//var cim = ["1. kép címe", "2. kép címe", "3. kép címe"];
//var leiras = ["1. kép leírása", "2. kép leírása", "3. kép leírása"];

var kep1 = {
    eleresiut: "kepek/pizza.jpg",
    cim: "1. kép címe",
    leiras: "1. kép leírása"
};
var kep2 = {
    eleresiut: "kepek/pizza.png",
    cim: "2. kép címe",
    leiras: "2. kép leírása"
};
var kep3 = {
    eleresiut: "kepek/trav.jpg",
    cim: "3. kép címe",
    leiras: "3. kép leírása"
};
var kepTomb = [kep1, kep2, kep3];

//function init() {
////    console.log("Üdvözöl a JS");
////    $("section")[0].innerHTML="Hello";
//
//
////    for (var i = 0; i < kepTomb.length; i++) {
////        var elem = '<div><h3></h3><img id="' + i + '" src="" alt=""/><p></p></div>';
////        $("article").eq(0).append(elem);
////    }
//
//    console.log(kepTomb);
//    for (var i = 0; i < $("article img").length; i++) {
//        $("article img").eq(i).attr()("src", kepTomb[i].eleresiut);
//        $("article h3").eq(i).html(kepTomb[i].cim);
//        $("article p").eq(i).html(kepTomb[i].leiras);
////        $("article h3")[i].innerHTML = kepTomb[i].cim;
////        $("article p")[i].innerHTML = kepTomb[i].leiras;
////        $("article img")[i].src=kepek[i];
////        $("article h3")[i].innerHTML=cim[i];
////        $("article p")[i].innerHTML=leiras[i];
//    }
//
//    //kattintás eseménykezelő
////    for (var i = 0; i < kepTomb.length; i++) {
////        $("article div img")[i].addEventListener("click", betolt);
////    }
//
////    $("article img")[0].src="kepek/pizza.png";
////    $("article img")[0].src="kepek/trav.jpg.jpg";
//
////    document.getElementById("bal").addEventListener("click", bal);
////    document.getElementById("jobb").addEventListener("click", jobb);
//
//}
function betolt() {
//    var index = this.id;
//        console.log(kepTomb[index].eleresiut);
//        console.log(kepTomb[index].cim);
//        console.log(kepTomb[index].leiras);
    $("section div img").attr("src", kepTomb[index].eleresiut);
    $("section div h3").html("src", kepTomb[index].cim);
    $("section div p").html("src", kepTomb[index].leiras);
//    $("section div h3")[0].innerHTML = kepTomb[index].cim;
//    $("section div p")[0].innerHTML = kepTomb[index].leiras;
}

var index = 0;
function bal() {
//    $("section div img").eq(0).attr("src", kepTomb[index].eleresiut);
//    $("section div h3").eq(0).html(kepTomb[index].cim);
//    $("section div p").eq(0).html(kepTomb[index].leiras);
//    $("section div h3")[0].innerHTML = kepTomb[index].cim;
//    $("section div p")[0].innerHTML = kepTomb[index].leiras;
    index -= 1;
    if (index < 0) {
        index = kepTomb.length - 1;
    }
    $("section div img").eq(0).attr("src", kepTomb[index].eleresiut);
    $("section div h3").eq(0).html(kepTomb[index].cim);
    $("section div p").eq(0).html(kepTomb[index].leiras);
}
function jobb() {
    
//    $("section div img")[0].src = kepTomb[index].eleresiut;
//    $("section div h3")[0].innerHTML = kepTomb[index].cim;
//    $("section div p")[0].innerHTML = kepTomb[index].leiras;
    index += 1;
    if (index === kepTomb.length) {
        index = 0;
    }
    $("section div img").eq(0).attr("src", kepTomb[index].eleresiut);
    $("section div h3").eq(0).html(kepTomb[index].cim);
    $("section div p").eq(0).html(kepTomb[index].leiras);
}
/*--------------JQ--------------*/
$(function () {
    betolt();
    for (var i = 0; i < kepTomb.length; i++) {
        var elem = '<div><h3></h3><img id="' + i + '" src="" alt=""/><p></p></div>';
        $("article").eq(0).append(elem);
    }
    for (var i = 0; i < $("article img").length; i++) {
        $("article img").eq(i).attr("src", kepTomb[i].eleresiut);
        $("article h3").eq(i).html(kepTomb[i].cim);
        $("article p").eq(i).html(kepTomb[i].leiras);
    }
    $("article div img").click(betolt);
    $("#bal").click(bal);
    $("#jobb").click(jobb);
});
/*--------------JQ--------------*/