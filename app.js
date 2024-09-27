let users;
let currIndex = 0;
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data;
    console.log(users);
  });

function displayUserName() {
  const userName = document.querySelector("h2#userName");
  userName.textContent = users[currIndex].name;
}

const nextBtn = document.querySelector("button#nextBtn");
nextBtn.addEventListener("click", function () {
  if (currIndex == users.length) currIndex = 0;
  displayUserName();
  currIndex++;
});
