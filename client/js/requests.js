
// function displayPost(title, author, story) {
//     // fetch newly added post from database
// }


// ASSIGNMENT WROTE:

async function getAll(category){
    try {
        const response = await fetch(`http://localhost:3000/${category}`);
        const data = await response.json()
        return data;
    } catch (err) {
        console.warn(err);
    }
}

// async function getItem(category, id) {
//     try {
//         const response = await fetch(`http://localhost:3000/${category}/${id}`);
//         const data = await response.json();
//         return data;
//     } catch (err) {
//         console.warn(err);
//     }
// }



// WE WROTE:

let form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    handleValues(e);
});

function handleValues(e){
    e.preventDefault();
    let titleInput = document.querySelector('#title').value;
    let authorInput = document.querySelector('#author').value;
    let storyInput = document.querySelector('#story').value; 

    displayPost(title, author, story);
    postPost()
}

async function postPost(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch('http://localhost:3000/post', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `#books/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}
