window.onload = () => {
    
    fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7',
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        
        }
        ).then(response => response.json())
        .then(data => {
            data.forEach(post => {
                const cardContainer = document.querySelector('#card-container');
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
                cardContainer.append(postElement);
    
                const checkbox = document.createElement('input');
                
                const postEl = document.querySelector('.post');
              
                console.log(postEl);
                checkbox.type = 'checkbox';
                checkbox.classList.add('input');
                postElement.append(checkbox);
               
   
                checkbox.addEventListener('click', function() {                    
          
                                     
                    if(checkbox.checked) {             
                        console.log('checked');
                        const counter = document.querySelectorAll('input[type="checkbox"]:checked').length;
                        const result = document.querySelector('.result');                   
                        result.innerHTML = counter;
                        postElement.style.background = 'black';
                        postElement.style.color = 'white';
    
                    } else {
                        console.log('unchecked');
                       
                        const counter = document.querySelectorAll('input[type="checkbox"]:checked').length;
                        const result = document.querySelector('.result');
                        result.innerHTML = counter;   
                        postElement.style.background = 'white';
                        postElement.style.color = 'black';

                    }                  
                });            
            });

    
           const search = document.getElementById('search');
          
           if(localStorage.getItem('search')) {
               search.value = localStorage.getItem('search');
             
               
           }
           search.addEventListener( 'input', function() {
               localStorage.setItem('search', search.value);    
               const btn = document.getElementById('btn');
             
               btn.addEventListener('click', function() {             
                   const value = search.value;
                   const posts = document.querySelectorAll('.post');
                   posts.forEach(post => { 
                                  
                       const title = post.querySelector('h2').innerText.toLowerCase();
                       if( title.includes(value)) {
                           post.style.display = 'block';
                       } else {                      
                           post.style.display = 'none';
                       }
                      
                   })                                    
               })              
           })                   
    })   
}