import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const Category = ({ name, categories, setCategories }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="category-card"
    sx={categories === name ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setCategories(name);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="gym" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {name}</Typography>
  </Stack>
);

export default Category;