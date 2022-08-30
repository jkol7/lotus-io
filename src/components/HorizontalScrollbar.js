import React, { useContext } from 'react'
import { Box, Typography} from '@mui/material'
import Category from './Category'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";


import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';



// Icons for the Yoga categories. These are not in the API so need to be created here.

import armBalanceIcon from '../assets/icons/arm-balance-icon.png'
import backbendIcon from '../assets/icons/backbend-icon.png'
import balancingIcon from '../assets/icons/balancing-icon.png'
import chestOpeningIcon from '../assets/icons/chest-opening-icon.png'
import coreIcon from '../assets/icons/core-icon.png'
import forwardBendIcon from '../assets/icons/forward-bend-icon.png'
import hipOpeningIcon from '../assets/icons/hip-opening-icon.png'
import inversionIcon from '../assets/icons/inversion-icon.png'
import restorativeIcon from '../assets/icons/restorative-icon.png'
import seatedIcon from '../assets/icons/seated-icon.png'
import standingIcon from '../assets/icons/standing-icon.png'
import strengthIcon from '../assets/icons/strength-icon.png'


// Dictionary to match the category name with the icon

const iconDict = {
  "Core": coreIcon,
  "Seated": seatedIcon,
  "Strengthening": strengthIcon,
  "Chest Opening": chestOpeningIcon,
  "Backbend": backbendIcon,
  "Forward Bend": forwardBendIcon,
  "Hip Opening": hipOpeningIcon,
  "Standing": standingIcon,
  "Restorative": restorativeIcon,
  "Arm Balance": armBalanceIcon,
  "Balancing": balancingIcon,
  "Inversion": inversionIcon
 }


function LeftArrow() {

  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
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



  const HorizontalScrollbar = ({categories, category, setCategory}) => (

    
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {categories.map((item, index) => (
        <Box
          key={index}
          itemId={index}
          title={item}
          m="0 60px"
        >
          <Category 
          name={item}
          category={category}
          categoryID={index}
          setCategory={setCategory}
          iconType={iconDict[item]}
          />
          </Box>
      ))}
    </ScrollMenu>
  );

  

export { HorizontalScrollbar }