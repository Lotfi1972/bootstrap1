/*

console.log("its just finish")

console.log( document.getElementById("titre"))



var getClass=document.getElementsByClassName("Tracks")
var para = document.getElementsByClassName("myPara")

    var getId = document.getElementById("myPara").innerHTML
    getId="this is the modification"
alert(getId)

var feedback=document.getElementById(#"feedback").innerHTML

*/
var geText= document.getElementById("ta");
function makeBold(){

    if(geText.style.fontWeight=="bold")
    {
    geText.style.fontWeight="normal"}
    else {
    geText.style.fontWeight="bold"}
    }
function makeitalic(){
    
    if(geText.style.fontStyle=="italic")
    {geText.style.fontStyle="normal"}
    else(geText.style.fontStyle="italic")
}
function makeunderline(){
    if(geText.style.textDecoration=="underline")
    {
        geText.style.textDecoration="none"
    }
else{geText.style.textDecoration="underline"} 

}
function handleSize(){
    geText.style.fontSize= document.getElementById("size").value 
}
function handletext(){
    geText.style.fontFamily=document.getElementById("text").value

}
/*

*/

$("#img1").mouseenter( function(){
    $('#bt').show();
    $(this).css('opacity','0.5');
    
})
$("#img1").mouseleave( function(){
    $('#bt').hide();
    $(this).css('opacity','1');
    
})

$("#img2").mouseenter( function(){
    $('#bt2').show();
    $(this).css('opacity','0.5');
    
})
$("#img2").mouseleave( function(){
    $('#bt2').hide();
    $(this).css('opacity','1');
    
})
$("#img3").mouseenter( function(){
    $('#bt3').show();
    $(this).css('opacity','0.5');
    
})
$("#img3").mouseleave( function(){
    $('#bt3').hide();
    $(this).css('opacity','1');
    
})
$("#img4").mouseenter( function(){
    $('#bt4').show();
    $(this).css('opacity','0.5');
    
})
$("#img4").mouseleave( function(){
    $('#bt4').hide();
    $(this).css('opacity','1');
    
})
$("#img5").mouseenter( function(){
    $('#bt5').show();
    $(this).css('opacity','0.5');
    
})
$("#img5").mouseleave( function(){
    $('#bt5').hide();
    $(this).css('opacity','1');
    
})
$("#img6").mouseenter( function(){
    $('#bt6').show();
    $(this).css('opacity','0.5');
    
})
$("#img6").mouseleave( function(){
    $('#bt6').hide();
    $(this).css('opacity','1');
    
})

