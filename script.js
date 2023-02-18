
const form_tag = document.createElement('form');
form_tag.className = "brew";
const bdy = document.querySelector('body');
bdy.insertAdjacentElement('afterbegin',form_tag);
 
const input_tg = document.createElement('input');
input_tg.setAttribute('placeholder','search here');
const add_inp = document.querySelector('.brew');
add_inp.insertAdjacentElement('afterbegin',input_tg);

const sub_btn = document.createElement('button');
sub_btn.innerText = "SEARCH";
sub_btn.setAttribute('type','submit');
add_inp.insertAdjacentElement('beforeend',sub_btn);

const parent_div = document.createElement('div');
parent_div.className = "collection";
add_inp.insertAdjacentElement('afterend',parent_div);

async function breweries(result){
    var data = fetch(`https://api.openbrewerydb.org/breweries/search?query=${result}`);
    var out = await data;
    var prom = out.json();
    var out1 = await prom;
    console.log(out1);
    console.log(out1.length); 
    
    var collect = document.querySelector('.collection'); 
    for(let i of out1){
    try{
        const container = document.createElement('div');
        container.classList.add('con_style');
        container.style.border = '2px solid blue';
        container.style.margin = '0 20px';
        container.style.padding = '10px';
       
        var name = document.createElement('p');
        name.innerText ='BREWERY NAME :' + i.name;
        container.append(name);
    
        var type = document.createElement('p');
        type.innerText ='TYPE :' + i.brewery_type ;
        container.append(type);
       
        var street = document.createElement('p');
        street.innerText ='ADDRESS :' + i.street;
        container.append(street);
    
        var post_code = document.createElement('p');
        post_code.innerText = i.postal_code;
        container.append(post_code);

       var state = document.createElement('p');
       state.innerText = i.state;
       container.append(state);
            
       var country = document.createElement('p');
       country.innerText = i.country;
       container.append(country);

        var website_url = document.createElement('p');
        website_url.innerText ='WEBSITE :' + i.website_url;
        container.append(website_url);
      
        var phone = document.createElement('p');
        phone.innerText ='CONTACT :' + i.phone;
        container.append(phone);
      
      collect.append(container);
      console.log(out1.length);

    

    } catch {
        console.log('not available');
    }

    }  
}
breweries();



var check = document.querySelector('.brew');
check.addEventListener('submit',(e) => {
    e.preventDefault()
    parent_div.innerText = '';
    var search = document.querySelector('[placeholder="search here"]');
    var result = search.value;
    breweries(result)
    search.value = '';
})





