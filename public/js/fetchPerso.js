let url = new URL(window.location.href);
let searchParams = new URLSearchParams(url.search);
const slug = searchParams.get("slug");

async function fetchdata() {
  const response = await fetch("https://hp-api.lainocs.fr/characters/" + slug);
  const data = await response.json();

  await postHouse(data.house);
}

async function postHouse(house) {
  const response = await fetch("/tutu", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      house: house,
    }),
  });

  const data = response.json();
}

fetchdata();
