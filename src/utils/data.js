import shopping from '../assets/shopping.png';
import autumn from '../assets/autumn.jpg';
import popular from '../assets/popular.jpg';
import lightjacket from '../assets/lightjacket.jpg';
import loungewear from '../assets/loungewear clothes.jpeg';
import shirtstyle from '../assets/shirt style.jpg';
import { light } from '@mui/material/styles/createPalette';

export const sliderItems = [
  {
    id: 1,
    img: shopping,
    title: 'SUMMER SALE',
    desc: `DON'T COMPROMISE ON STYLE! GET A FLAT 30% OFF FOR NEW ARRIVALS`,
    bg: 'f5fafd',
  },
  {
    id: 2,
    img: autumn,
    title: 'AUTUMN SALE',
    desc: `DON'T COMPROMISE ON STYLE! GET A FLAT 30% OFF FOR NEW ARRIVALS`,
    bg: 'fcf1ed',
  },
  {
    id: 3,
    img: popular,
    title: 'POPULAR SALE',
    desc: `DON'T COMPROMISE ON STYLE! GET A FLAT 30% OFF FOR NEW ARRIVALS`,
    bg: 'fbf0f4',
  },
];

export const categories = [
  { id: 1, img: shirtstyle, title: 'SHIRT STYLE!' },
  { id: 2, img: loungewear, title: 'LOUNGEWEAR LOVE' },
  { id: 3, img: lightjacket, title: 'LIGHT JACKETS' },
];
