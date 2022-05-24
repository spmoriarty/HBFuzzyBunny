import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout, 
    deleteBunny
} from '../fetch-utils.js';
import { displayFamilies } from '../families/families.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    e.preventDefault();
    getFamilies();
    createBunny();

    form.reset();
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    
    // grab the select HTML element from the DOM
    const familyId = document.getElementById('main');
    familyId.textContent = '';
    // go get the families from supabase
    const family = await getFamilies();
        

    const ul = document.createElement('ul');

    for (let bunny of family.fuzzy_bunnies) {
        const li = document.createElement('li');
        li.textContent = `${bunny.name}`;
        li.addEventListener('click', async () => {
            familyEl;
            await deleteBunny(bunny.id);
            await displayFamilies();
        });
        ul.append(li);
    }


}
    // for each family

    // create an option tag

    // set the option's value and text content

    // and append the option to the select
);


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
