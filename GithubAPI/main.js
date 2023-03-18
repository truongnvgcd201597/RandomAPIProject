const formInput = document.getElementById('form-input');
const inputText = document.getElementById('input');
const output = document.getElementById('output');

formInput.addEventListener('submit', (e)=>{
    e.preventDefault();
    getGithubUsers();
});

function getGithubUsers(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.github.com/users/${inputText.value}`, false);
    xhr.onload = function(){
        if(xhr.status == 200){
            let outputType = '';
            console.log(JSON.parse(xhr.responseText));
            let data = JSON.parse(xhr.responseText);
            outputType += `
             <img src="${data.avatar_url}"></img>
            `
            output.innerHTML = outputType;
        }else{
            throw new Error('BUG')
        }
    }
    xhr.send();
}