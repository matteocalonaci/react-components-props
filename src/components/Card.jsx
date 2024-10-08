import { useState } from "react";

function click(){
    alert('Hai cliccatto su "More info"')
}
// VERSIONE CODICE PULITA
function Card({title, description, imgUrl, children, isVisitated}) {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([0,1,2]);
    // const [user, setUser] = useState({ name:"dimitri", age:29});
    // console.log(user)


// aggiungo al conteggio
    const addItems = ()=>{
        setItems([...items, items.length]);
        console.log(items)
    }
    // aggiorno l'età
    // const updateUser = ()=>{
    //     setUser({...user, age:30});
    //     console.log(user)
    // }


    // if(isVisitated){
    //     return (
    //         <div className="card bg-slate-900 m-10 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
    //           <h2 className="p-2 text-lg md:text-xl lg:text-2xl"><b>{title}</b></h2>
            
    //           <img
    //             className="w-full h-64 md:h-80 lg:h-96 xl:h-128 object-cover"
    //             src={imgUrl}
    //             alt=""
    //           />
            
    //           <div className="bg-slate-900 p-4">
    //             <p className="text-sm md:text-base lg:text-base">
    //               {description}
    //             </p>
    //             <p className="pt-4"><span className=" bg-white rounded-2xl text-center text-black p-2"> <i class="fa-solid fa-check text-green-600"></i> <b>visitated</b></span> </p>

    //             <p className="text-sm md:text-base lg:text-base text-red-500">{children}</p>
    //           </div>
    //         </div>
    //             );
                
    // } 
    return (
<div className="card bg-slate-900 m-10 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
  <h2 className="p-2 text-lg md:text-xl lg:text-2xl"><b>{title}</b></h2>

  <img
    className="w-full h-64 md:h-80 lg:h-96 xl:h-128 object-cover"
    src={imgUrl}
    alt=""
  />

  <div className="bg-slate-900 p-4">
    <p className="text-sm md:text-base lg:text-base">
      {description}
    </p>

    {isVisitated ? 
    <p className="pt-4"><span className=" bg-white rounded-2xl text-center text-black p-2"> <i className="fa-solid fa-check text-green-600"></i> <b>visitated</b></span> </p>:
    <p className="pt-4"><span className=" bg-white rounded-2xl text-center text-black p-2"> <i className="fa-solid fa-x text-red-600"></i> <b>not visitated</b></span> </p>
    }

        
    <p className="text-sm md:text-base lg:text-base text-red-500 p-2">{children}</p>
    <button className="p-2 bg-red-700 rounded-2xl mx-1" onClick={click}>More info</button>
    <button className="p-2 bg-blue-700 rounded-2xl mx-1" onClick={()=> setCount((count) => count+1)}>
        Count is {count}
    </button>


  </div>
</div>
    );
  }
  
  export default Card;

// VERSIONE CODICE CORRETTA MA MIGLIORABILE
// function Card(props) {
// const title = props.title;
// const description = props.description;
// const imgUrl = props.imgUrl ;

//     return (
//       <div className="bg-slate-800 m-10 rounded-md md:m-20 lg:m-30 xl:m-40">
//         <h2 className="p-2 text-lg md:text-xl lg:text-2xl xl:text-3xl"><b>{title}</b></h2>
  
//         <img
//           className="w-full h-64 md:h-80 lg:h-96 xl:h-128 object-cover"
//           src={imgUrl}
//           alt=""
//         />
  
//         <div className="bg-slate-900">
//           <p className="p-2 text-sm md:text-base lg:text-lg xl:text-xl">
//             {description}
//           </p>
//         </div>
//       </div>
//     );
//   }
  
//   export default Card;