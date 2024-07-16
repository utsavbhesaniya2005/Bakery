window.addEventListener("wheel", function(event){

    if(event.deltaY>0){
        window.scrollBy({
            left: event.deltaY,
            //behavior:"smooth",
        });
    }else{
        window.scrollBy({
            left: event.deltaY-10,
            //behavior:"smooth",
        });
    }
});