window.onload=function(){
    var otxt=document.getElementById("txt");
    var oshow=document.getElementById("show");
    var count=0;
    if(document.all){
        otxt.onpropertychange=function(){
            count=count+1;
            oshow.innerHTML=count;
        }
    }
    else{
        otxt.oninput=function(){
            count=count+1;
            oshow.innerHTML=count;
        }
    }
}