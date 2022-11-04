const coffees = [
  { name: "Red Bull", image: "assets/img/red-bull.jpg" },
  { name: "Ferrari", image: "assets/img/ferrari.jpg" },
  { name: "McLaren", image: "assets/img/mclaren.jpg" },
  { name: "Alpine", image: "assets/img/alpine.jpg" },
  { name: "Alpha Tauri", image: "assets/img/alpha-tauri.jpg" },
  { name: "Alpha Romeo", image: "assets/img/alpha-romeo.jfif" },
  { name: "Aston Martin", image: "assets/img/aston-martin.png" },
  { name: "Haas", image: "assets/img/haas.jpg" },
  { name: "Williams", image: "assets/img/williams.jpg" },
]

    coffees.map(x => {
      const content = document.createElement("div");
      content.className = 'card';
      content.setAttribute("id", "card" + x.name);
    
      document.getElementById("container").appendChild(content);

      const img = document.createElement("img");
      img.className = "card--avatar";
      img.setAttribute("src", x.image);

      document.getElementById('card' + x.name).appendChild(img);

      const h2 = document.createElement("h3");
      h2.setAttribute("id", "titleMovie");
      h2.className = "card--title";
      h2.appendChild(document.createTextNode(x.name));

      document.getElementById('card' + x.name).appendChild(h2);

      const a = document.createElement("h3");
      a.setAttribute("href", "#");
      a.className = "card--link";
      a.appendChild(document.createTextNode("Détails"));

      document.getElementById('card' + x.name).appendChild(a);
    })
