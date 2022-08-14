let search = document.querySelector('#mysearch');
let postrendered = document.querySelector('.center')
const image = document.querySelector('.image')
let stores = [];

const url = 'https://api.github.com/users/chris-de-sypher/repos';

search.addEventListener('keyup', run)
function run(e){
  try{
    const searchstring = e.target.value.toLowerCase();
    let searches = stores.filter(character => {
      return (
        character.name.toLowerCase().includes(searchstring) || character.description.toLowerCase().includes(searchstring)
      );
    });
    dataCarried(searches);
  }catch(err){
    alert(err)
  }
}

async function fetches(){
  try{
    const res = await fetch(url)
    stores = await res.json()
    dataCarried(stores)
    console.log(stores)
  }catch(err){
    console.error(err)
  }
}

const dataCarried = async (stores) => {
  let output = await stores.map(item => {
    console.log(item.owner['avatar_url'])
    return `<li>
      <div class="title">
        <h2>${item.name}</h2>
      </div>
      <div class="">
        <p>${item.description}</p>
      </div>
      <hr>
      <div class="date">
        <span>${item.created_at}</span>
        <span>${item.updated_at}</span>
      </div>
      <div class="lan">
        <span>${item.language}</span>
        <img src="${item.owner['avatar_url']}"></img>
      </div>
      <div class="button">
        <a href="${item.html_url}" target='_blank'>Link</a>
      </div>
    </li>`
  })
  .join('')
  postrendered.innerHTML = output;
}


fetches()


let close1 = document.querySelector('.fa-xmark')
let bars = document.querySelector('.fa-bars')
let user = document.querySelector('.fa-user')
let close2 = document.querySelector('.fa-circle-xmark')
function execute(){
  const x = document.querySelector('.left')
  const y = document.querySelector('.display')
  const r = document.querySelector('.first')
  const t = document.querySelector('.two')
  bars.addEventListener('click', function(e){
    e.preventDefault();
    x.classList.add('active');
  })
  close1.addEventListener('click', function(e){
    e.preventDefault();
    x.classList.remove('active')
  })
  user.addEventListener('click', function(e){
    e.preventDefault();
    y.classList.add('active');
    r.style.display = 'none';
    t.style.display ='block';
  })
  close2.addEventListener('click', function(e){
    e.preventDefault();
    y.classList.remove('active');
    r.style.display = 'block';
    t.style.display ='none';
  })
}
execute()
