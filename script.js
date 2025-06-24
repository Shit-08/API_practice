let button_id= document.getElementById("load");
function fetchJokes(){
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response =>{
        return response.json();
      })
      .then(data =>{
        const container= document.getElementById("Jokes");
        const div= document.createElement("div");
        div.className='post';
        div.innerHTML=` <h3> ${data.type} </h3> <p>${data.setup} </p> <p> Punchline : ${data.punchline} </p>`;
        container.appendChild(div);
      })
      .catch(error =>{
        console.error('Error fetching jokes', error);
      });
}

button_id.addEventListener("click", fetchJokes);