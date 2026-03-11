import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Teaching Assistant at the Faculty of Computers and Information Sciences with a background in Open Source Development." , 
              "Experienced in React.js, Next.js, Vue.js, building responsive web applications and integrating RESTful APIs." , 
              "Pursuing a Master’s in Information Technology, focusing on Artificial Intelligence in medical image analysis"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type