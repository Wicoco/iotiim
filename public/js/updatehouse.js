async function updateLastCard(carte) {
  const data = await fetchInfoCard(carte);
  console.log("datdatatdtad" + data.house);
  const response = await fetch("/tutu", {
    method: "POST",
    headers: {
      "Content-Type": "application.json",
    },
    body: JSON.stringify({
      lastHouseVisited: data.house,
    }),
  });

  const date = await response.json();
  const card = date.message;
  console.log("house", card);
}
updateLastCard();
