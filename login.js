var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const baseUrl = 'http://localhost:8080';
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", callbackOnLogin);
function callbackOnLogin(event){
    event.preventDefault();
    const usernameInput = document.getElementById('usernameInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const backendLoginServiceMethodAddress = `${baseUrl}/api/login`;
    const httpRequest = {
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({usernameInput, passwordInput})
    };

    fetch(backendLoginServiceMethodAddress, httpRequest)
    .then(response =>{
        if(response.ok){
            alert('Usješno logovanje');
        }else{
            alert('Neuspješno logovanje')
        }
    }).catch(error =>{
        alert(`${error}`);
    });
}