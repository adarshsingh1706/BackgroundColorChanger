const buttons  = document.querySelectorAll('.button');
const body = document.querySelector('body');

//gray
buttons.forEach((element) =>{
    element.addEventListener('mouseenter',(e) =>{
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'gray';
        }
    })
    element.addEventListener('mouseleave',(e) =>{
        if(e.target.id === 'grey'){
            body.style.backgroundColor = 'black';
        }
    })

//white
    element.addEventListener('mouseenter',(e) =>{
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'whitesmoke';
        }
    })
    element.addEventListener('mouseleave',(e) =>{
        if(e.target.id === 'white'){
            body.style.backgroundColor = 'black';
        }
    })

//blue
    element.addEventListener('mouseenter',(e) =>{
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'blue';
        }
    })
    element.addEventListener('mouseleave',(e) =>{
        if(e.target.id === 'blue'){
            body.style.backgroundColor = 'black';
        }
    })

//yellow
    element.addEventListener('mouseenter',(e) =>{
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'yellow';
        }
    })
    element.addEventListener('mouseleave',(e) =>{
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = 'black';
        }
    })

})