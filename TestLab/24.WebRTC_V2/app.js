const scriptURL =
  "https://script.google.com/macros/s/AKfycbw6Jt8qmO3jbUNbMuoe9tbGoXJ_DlfCQUw1sU4RCRmLdlcIzudpSgcCHtxQGxZP7EZt8w/exec";
const form = document.forms["submit-to-google-sheet"];

testPost = () => {
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({nama: "ronal",age:35}),
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

testFetch = async () => {
  const data = await fetch(scriptURL);
  const res = await data.json();
  console.log(res);
};
