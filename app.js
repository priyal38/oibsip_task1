




let string = "";
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        } else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }
    })

})
/ clear.addEventListener('click' , (e)=> {
    document.querySelector('input').value = "";
    })
   
