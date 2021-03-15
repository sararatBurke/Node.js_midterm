

const photos =  [
    {url: "https://wallpapercave.com/wp/vSb0Pj5.jpg"},
    {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_XOfml0QOhPf524baJwCv-YodkF7LeC9SQPY7j7WTrHlDuujQ_XGHoWS7lOvTfbtVZw&usqp=CAU"},
    {url: "https://www.bhmpics.com/walls/winter_time_presents_exciting-wide.jpg"},
    {url: "https://wallpaperaccess.com/full/393985.jpg"},
    {url: "https://i.pinimg.com/originals/6d/58/07/6d5807d4be8c4df4ba331de42662af48.jpg"}
]
 
 
  const display = photos.map(img => `<img src="${img.url}">`).join('');
  document.getElementById("images").innerHTML = display
 
 
 