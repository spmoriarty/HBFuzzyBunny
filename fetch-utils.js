// Create your own supabase database using the provided seeds.sql file
const SUPABASE_URL = 'https://xsjxkslcnzexkeuqopsq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzanhrc2xjbnpleGtldXFvcHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTI0MzIsImV4cCI6MTk2Nzg2ODQzMn0.6PW-I5jDnoqhgO6Egpvc5fEpprJ1jHfmAODRlCynp2I';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function getFamilies() {
    const response = await client.from('loving_families').select('*, family_id(*)');
    // fetch all families and their bunnies
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
    return checkError(response);
}

export async function deleteBunny(id) {
    cont response = await client.from('fuzzy_bunnies').delete().eq('id', id);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}

export async function createBunny(bunny) {
    // create a bunny using the bunny argument
    const response = await client.from('fuzzy_bunnies').insert(bunny);
    if (response.error) {
        console.error(response.error.message);
    } else {
        return response.data;
    }
}


// MARTHA STEWART (PRE-MADE) FUNCTIONS

export async function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./families');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
