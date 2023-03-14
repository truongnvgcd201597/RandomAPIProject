const emoiji = document.querySelector('.container');
const textEmoji = document.querySelector('.emoji-text');

const buttonSubmit = emoiji.querySelector('#btn');
buttonSubmit.addEventListener('click', getEmojiAPI);

async function getEmojiAPI(){
     const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit')
     const data = await response.json();
     console.log(data);
     if(!data.joke){
        textEmoji.textContent = 'No Quote in the Joke';
     }else{
     const jokeQuote = data.joke;
     textEmoji.textContent = jokeQuote;
     }
     
}
