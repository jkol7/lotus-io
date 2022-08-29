import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const Category = ({ name, category, setCategory }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="category-card"
    sx={ {background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setCategory(name);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    > 
    <img src={Icon} alt="gym" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="22px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize" textAlign="center"> {name}</Typography>
  </Stack>
);

export default Category;