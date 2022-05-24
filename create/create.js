import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout, 
    
} from '../fetch-utils.js';


const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
    const familyId = formData.get('family-id');
    const name = formData.get('bunny-name');
    await createBunny({ name: name, family_id: familyId });

    form.reset();
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    
    // grab the select HTML element from the DOM
    const familyId = document.getElementsByName('family-id');
    familyId.textContent = '';
    // go get the families from supabase
    const family = await getFamilies();
        

    const select = document.querySelector('select');

    for (let bunny of family) {
        const option = document.createElement('option');
        option.textContent = `${bunny.name}`;
        option.value = bunny.id;
        select.append(option);
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
