import { checkAuth, deleteBunny, getFamilies, logout } from '../fetch-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayFamilies(families) {
    displayFamilies() = '',
    const families = await getFamilies();


    for (let family of families) {

        const familiesEl = document.createElement('div');
        div.classList.add('family');
        
        const familyEl = document.createElement('h2');
        h2.textContent = loving_families.name;

        const bunnyEl = document.createElement('h3');
        bunnyEl.textContent = fuzzy_bunny.name;
        
        const bunniesEl = document.createElement('div');
        div.classList.add('bunny');

        bunniesEl.append(bunnyEl);
        familiesEl.append(bunniesEl, familyEl);
    }
        
        bunnyEl.addEventListener( 'click' () => {
            deleteBunny(id.id);
            displayFamilies();
        });

    }

    // append the bunniesEl and nameEl to the familyEl

    // append the familyEl to the familiesEl
}
displayFamilies();
