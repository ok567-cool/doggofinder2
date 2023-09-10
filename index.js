let mainButton = document.getElementById('mainButton');
let mainImage = document.getElementById('mainImage');

mainButton.addEventListener('click', function(){
    
   
    
    
    fetch('https://dog.ceo/api/breeds/image/random')

        
        .then(res => res.json())
        .then(result =>{
            let dogName = result.message.slice(0,-19).slice(30)
            dogName = dogName.replace('-', ' ');
            document.getElementById('Dogname').innerText = dogName;
            document.getElementById('Dogname').setAttribute("href", result.message)
            mainImage.src = result.message
        
        })
        .catch(err=>console.log(err))
    
})