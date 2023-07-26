const form = document.querySelector('form') //dobavljanje forme

// svaki put kad se klikne submit button ovaj kod ce se izvrsiti
form.addEventListener('submit', (e) => {
  e.preventDefault() // da se ne refresha pge

  const formData = new FormData(form)
  // kreiranje objekta koji cemo slati na api/register
  const req = {} 

  for (const [key, value] of formData.entries()) {
    req[key] = value
  }


  // slanje req objekta na api/register
  fetch('http://localhost:8080/api/register', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(req), 
          })
})