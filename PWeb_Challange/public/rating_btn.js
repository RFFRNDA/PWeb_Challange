
document.addEventListener('click', function(event) {
    let clicked = event.target;

    if(clicked.classList.contains('pokus')){
      localStorage.setItem('rating',parseInt(clicked.innerHTML))
    }

  });

const card = document.querySelector('#card')

const loadFeedback = (rating) => {
  fetch ('./feedback.html')
  .then(res => {
    if(res.ok){return res.text()}
  })
  .then(text => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    
    const p = doc.querySelector('#rating-val')
    p.innerHTML = rating
    console.log(doc)

    console.log(doc.innerHTML)
    card.innerHTML = doc.documentElement.innerHTML
  })
}

const submit = document.querySelector('#submit')

submit.addEventListener('click', ()=>{
    loadFeedback(localStorage.getItem('rating'));
});