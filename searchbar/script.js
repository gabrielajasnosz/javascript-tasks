const search = document.querySelector('.search');
const list=document.querySelectorAll('li');




search.addEventListener("keyup", function(){

    const text=search.value.toLowerCase();

    list.forEach(el=>{
        if(el.textContent.toLowerCase().indexOf(text) === -1){
            console.log(el.textContent);
            console.log(text);
            el.style.display='none';
        }
        else{
            el.style.display='block';
        }
    })


});

