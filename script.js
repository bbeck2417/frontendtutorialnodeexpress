// make an event listener... it will trigger when the dom is loaded

addEventListener("DOMContentLoaded", async () => {
  const response = await fetch(
    "https://backendtutorialnodeexpress--billysbeck.replit.app/api/songs",
  );
  const songs = await response.json();

  let html = ``;
  for (let song of songs) {
    html += `<li>${song.title} - ${song.artist}</li>`;
  }

  document.querySelector("#addedsongs").innerHTML = html;
});
