//siden er loadet: sidenVises
$(window).on("load", sidenVises);



function sidenVises() {
    console.log("sidenVises");
    //start lyd: Jungle lyde
    $("#baggrundsmusik")[0].play();

    //start abe
    $("#abe").addClass("moving");


    //start skat
    $("#skat").addClass("move");


    //start flytte anim:
    $("#mand_container").addClass("move_in");

    //start sprite anim: walk
    $("#mand_sprite").addClass("walk");

    $("#mand_container").on("animationend", burFalder);




}

function burFalder() {
    console.log("burFalder");
    //sæt position: position_in

    //stop sprite: walk
    $("#mand_sprite").removeClass("walk");

    //start bur:
    $("#bur").addClass("bur_falder");
    //start lyd: BOM


    //start lyd: mand skriger
    $(".bur_falder").on("animationend", mandFanget);
    $("#bom")[0].play();
}

function mandFanget() {
    console.log("mandFanget");
    //stop lyd: BOM
    //stop lyd: mand skriger
    //start lyd: tik tak
    $("#tiktak")[0].play();
    //start anim: manddød
    $("#mand_sprite").addClass("skelet");
    $("skelet").on("animationend", mandLig);


}

function mandLig() {
    console.log("mandLig");
    $("#mand_sprite").addClass("lig");








}

//$("#mand_gaa").on("click", sidenVises);
//$("#bur_falder").on("click", burFalder);
//$("#mand_fanget").on("click", mandFanget);
