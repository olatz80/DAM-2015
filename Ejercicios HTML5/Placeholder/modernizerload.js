window.onload=function(){
    if(Modernizr.input.placeholder){
        console.log("YEP");}
    else{
        console.log("nope");
    }

Modernizr.load({
   test: Modernizr.input.placeholder,
   
   nope: [Modernizer.input.placeholder, 'placeholder-polyfill.js']
});