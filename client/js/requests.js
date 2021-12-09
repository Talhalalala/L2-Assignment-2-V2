let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  handleValues(e);
});

function handleValues(e) {
  e.preventDefault();
  let titleData = document.querySelector("#title").value;
  let authorData = document.querySelector("#author").value;
  let storyData = document.querySelector("#story").value;

  // displayPost(title, author, story);
  postPost(titleData, authorData, storyData);
}

async function postPost(titleData, authorData, storyData) {
  try {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleData,
        author: authorData,
        story: storyData,
      }),
    };

    const response = await fetch("http://localhost:3000/posts", options);
    const data = await response.json();
    displayPost(data);
  } catch (err) {
    console.warn(err);
  }
}

async function displayPost(data) {
  try {
    const response = await fetch(`http://localhost:3000/posts/${data.id}`);
    const mainData = await response.json();

    document.querySelector("#displayedtitle").textContent = mainData.title;
    document.querySelector("#displayedauthor").textContent = mainData.author;
    document.querySelector("#displayedstory").textContent = mainData.story;

    document.querySelector("#form").style.display = "none";
    document.querySelector("#heading").style.display = "none";
    document.querySelector("#button").style.display = "none";
  } catch (err) {
    console.warn(err);
  }
}
