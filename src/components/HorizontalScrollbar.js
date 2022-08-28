import React, { useContext } from 'react'
import { Box, Typography} from '@mui/material'
import Category from './Category'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


function LeftArrow() {

  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
}

function RightArrow() {

  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
}

  const HorizontalScrollbar = ({data, categories, setCategories}) => (
      
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item}
          itemID={item}
          title={item}
          m="0 40px"
        >
          <Category 
          name={item} categories={categories} setCategories={setCategories}/>
          </Box>
      ))} 
    </ScrollMenu>
  );

  

export { HorizontalScrollbar }