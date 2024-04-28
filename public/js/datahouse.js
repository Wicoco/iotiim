async function getLastCard() {
  const response = await fetch("/tutu");
  const data = await response.json();
  const card = data.message;
  console.log("house", card);
}
