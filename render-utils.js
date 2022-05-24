


export function createBunnyFamily() {
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

