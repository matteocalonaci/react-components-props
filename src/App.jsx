import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  // aggiorno l'età
  const [user, setUser] = useState({ name:"dimitri", age:29});
  const updateUser = ()=>{
    setUser({...user, age:34});
    console.log(user)
}

  const cities = [
    { 
      id:0,
      title: "Tokyo",
      description:"Tokyo is the capital city of Japan, known for its vibrant atmosphere, cutting-edge technology, and rich cultural heritage. From neon-lit skyscrap ers to ancient temples and shrines, Tokyo offers a unique blend of traditional and modern experiences. Visit the famous Shibuya Crossing, explore the trendy Harajuku district, and sample the city's world-renowned cuisine, from sushi to ramen.",
      imgUrl:"https://plus.unsplash.com/premium_photo-1661873673782-88b30e6abef4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
      isVisitated:true
    },
    {
      id:1,
      title:"Osaka",
      description:" Osaka is a city located in western Japan, known for its food, entertainment, and nightlife. The city is famous for its delicious cuisine, including popular dishes like takoyaki, okonomiyaki, and kushikatsu. Visit the iconic Osaka Castle, explore the lively Dotonbori district, and enjoy the city's vibrant atmosphere.",
      imgUrl:"https://images.unsplash.com/photo-1704004363915-c4d848da44ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3Nha2F8ZW58MHx8MHx8fDA%3D",
      isVisitated:false
    },
    {
      id:2,
      title:"Kyoto",
    description:"Kyoto is a city located in western Japan, known for its stunning temples, gardens, and traditional architecture. The city is a treasure trove of Japanese culture and history, with famous landmarks like the Fushimi Inari Shrine, Kiyomizu-dera Temple, and Arashiyama Bamboo Forest. Visit the Gion district to see geishas, sample traditional Japanese sweets, and experience the city's serene atmosphere.",
    imgUrl:"https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGt5b3RvfGVufDB8fDB8fHww",
    isVisitated:false
    },
    {
      id:3,
      title:"Sapporo",
    description:"Sapporo is the largest city on the northern island of Hokkaido, known for its snowy winters, delicious seafood, and vibrant festivals. The city is famous for its Sapporo Snow Festival, which attracts millions of visitors each year. Visit the Sapporo Clock Tower, explore the lively Susukino district, and sample the city's fresh seafood, including crab, salmon, and scallops.",
    imgUrl:"https://images.unsplash.com/photo-1696053066632-3ef25f7bb0eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FwcG9yb3xlbnwwfHwwfHx8MA%3D%3D",
    isVisitated:true
    }


  ]

  return (
    <>
<div className="flex flex-wrap justify-center">
  {cities
  // .filter((city) => city.isVisitated) //-> aggiungo un filtro per mostrare in pagina solo le città visitate
  .map((city)=> (
  <Card
    key={city.id}
    title={city.title}
    description={city.description}
    imgUrl={city.imgUrl}city
    isVisitated={city.isVisitated}
  >
  </Card>))}
  {/* <Card
    className="w-full md:w-1/2 xl:w-1/2"
    title="Osaka"
    description=" Osaka is a city located in western Japan, known for its food, entertainment, and nightlife. The city is famous for its delicious cuisine, including popular dishes like takoyaki, okonomiyaki, and kushikatsu. Visit the iconic Osaka Castle, explore the lively Dotonbori district, and enjoy the city's vibrant atmosphere."
    imgUrl="https://images.unsplash.com/photo-1704004363915-c4d848da44ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3Nha2F8ZW58MHx8MHx8fDA%3D"
    isVisitated={false}
  > */}
       {/* tutto ciò che ho qui è children, se aggiungo nella funzione childern automaticamente potrò visualizzare anche questo testo in quanto passato anch'esso come
       <p>Ciao sono un children</p>
  </Card> */}
  {/* <Card
    className="w-full md:w-1/2 xl:w-1/2"
    title="Kyoto"
    description="Kyoto is a city located in western Japan, known for its stunning temples, gardens, and traditional architecture. The city is a treasure trove of Japanese culture and history, with famous landmarks like the Fushimi Inari Shrine, Kiyomizu-dera Temple, and Arashiyama Bamboo Forest. Visit the Gion district to see geishas, sample traditional Japanese sweets, and experience the city's serene atmosphere."
    imgUrl="https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGt5b3RvfGVufDB8fDB8fHww"
    isVisitated={false}
  ></Card>
  <Card
    title="Sapporo"
    description="Sapporo is the largest city on the northern island of Hokkaido, known for its snowy winters, delicious seafood, and vibrant festivals. The city is famous for its Sapporo Snow Festival, which attracts millions of visitors each year. Visit the Sapporo Clock Tower, explore the lively Susukino district, and sample the city's fresh seafood, including crab, salmon, and scallops."
    imgUrl="https://images.unsplash.com/photo-1696053066632-3ef25f7bb0eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2FwcG9yb3xlbnwwfHwwfHx8MA%3D%3D"
    isVisitated={true}
  ></Card> */}

</div>
<div>
<button className="p-2 w-20 bg-orange-600 rounded-2xl mx-1" onClick={updateUser}>
        Add
    </button>
</div>
    </>
  );
}

export default App;
