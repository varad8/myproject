import React from "react";
//import styled from "styled-components";

import { menuData } from "./menuData";
import NavigationButton from "./NavigationButton";

const App = () => {
  return (
   <>
        {menuData.map((data, index) => {
          return (
            <NavigationButton
              key={index}
              image={data.image}
              name={data.name}
            />
            
          );
        })}
      </>
   
  );
};

export default App;
