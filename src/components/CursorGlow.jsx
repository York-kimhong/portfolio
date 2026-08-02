import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function CursorGlow() {

  const [points, setPoints] = useState([]);


  useEffect(() => {

    const handleMouseMove = (event) => {

      setPoints((prev) => [

        {
          x: event.clientX,
          y: event.clientY,
          id: Date.now(),
        },

        ...prev,

      ].slice(0, 25));

    };


    window.addEventListener(
      "mousemove",
      handleMouseMove
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

    };


  }, []);



  return (

    <>

      {points.map((point, index) => (

        <motion.div

          key={point.id}

          initial={{
            opacity: 0.6,
            scale: 1,
          }}

          animate={{
            opacity: 0,
            scale: 0,
          }}

          transition={{
            duration: 1,
            ease: "easeOut",
          }}


          className="
            fixed
            pointer-events-none
            z-[999]

            rounded-full

            bg-cyan-400

            blur-xl

            hidden
            md:block
          "


          style={{

            left: point.x - 15,

            top: point.y - 15,


            width: `${Math.max(
              10,
              45 - index * 2
            )}px`,


            height: `${Math.max(
              10,
              45 - index * 2
            )}px`,

          }}

        />

      ))}

    </>

  );

}