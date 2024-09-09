let input =[...document.querySelectorAll('input')]
console.log(input);
input.forEach(Element=>{
    Element.addEventListener('keyup',()=>{
        if(input.indexOf(element)+1 != input.length)
            input[input.indexOf(element)+1].focus()
    })
});