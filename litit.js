// Compose the URL for your project's endpoint and add the query
let container = document.querySelector("[data-litit]");
let URL = `https://litit.netlify.app/user-notes?key=${container.dataset.litit}`;


// fetch the content
fetch(URL)
  .then((res) => res.json())
  .then(({ result }) => {
    container.innerHTML = JSON.stringify(result);
  })
  .catch((err) => console.error(err));
