<!DOC TYPE html>
<html> lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sprite from jSON</title>
        <link rel="stylesheet" href="style.css">
    </head>
    </html>

body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
  }
  
  .sprite {
    width: 130px;
    height: 230px;
    border: 3px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.3s ease-in-out;
  }
  
  .sprite img {
    width: 150px;
    height: 150px;
    border-radius: 15px;
  }
  
  .sprite p {
    margin: 5px 0;
  }
  
  .sprite:hover {
    transform: scale(1.1);
  }


  
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    data.forEach(item => {
      createSprite(item);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

class Sprite {
  constructor(id, title, artist, cover, duration) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.cover = cover;
    this.duration = duration;
    this.element = null; 
  }


  createElement() {
    this.element = document.createElement('div');
    this.element.classList.add('sprite');
  
    const img = document.createElement('img');
    img.src = this.cover; 
    img.alt = `${this.title} Cover`;
    
    const title = document.createElement('p');
    title.textContent = this.title;
    
    const artist = document.createElement('p');
    artist.textContent = `by ${this.artist}`;
    
    this.element.appendChild(img);
    this.element.appendChild(title);
    this.element.appendChild(artist);

 
    const container = document.getElementById('sprite-container');
    if (container) {
      container.appendChild(this.element);
    } else {
      document.body.appendChild(this.element); // Fallback
    }
  }
}


function createSprite(data) {
  const sprite = new Sprite(data.id, data.title, data.artist, data.cover, data.duration);
  sprite.createElement();
}

[
    {
      "id": 1,
      "title": "Song 1",
      "artist": "Artist A",
      "cover": "song1.jpg",
      "duration": "3:45"
    },
    {
      "id": 2,
      "title": "Song 2",
      "artist": "Artist B",
      "cover": "song2.jpg",
      "duration": "4:10"
    },
    {
      "id": 3,
      "title": "Song 3",
      "artist": "Artist C",
      "cover": "song3.jpg",
      "duration": "2:30"
    }
  ]
