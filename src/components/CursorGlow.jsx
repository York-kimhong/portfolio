import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function CursorGlow(){

const [points,setPoints] = useState([]);


useEffect(()=>{


const move = (e)=>{


setPoints((prev)=>[

{
x:e.clientX,
y:e.clientY,
id:Date.now()
},

...prev

].slice(0,50));


};



window.addEventListener(
"mousemove",
move
);


return ()=>{

window.removeEventListener(
"mousemove",
move

);

};


},[]);





return (

<>

{

points.map((point,index)=>(


<motion.div

key={point.id}

initial={{

opacity:0.5,

scale:1

}}

animate={{

opacity:0,

scale:0.2

}}

transition={{

duration:1.2,

ease:"easeOut"

}}

className="

fixed

pointer-events-none

z-[999]

rounded-full

bg-cyan-400

blur-xl

"

style={{

left:point.x-20,

top:point.y-20,

width:`${50-index*4}px`,

height:`${50-index*4}px`

}}

/>


))


}



</>

);

}