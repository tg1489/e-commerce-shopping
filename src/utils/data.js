import shopping from '../assets/shopping.png';
import autumn from '../assets/autumn.jpg';
import popular from '../assets/popular.jpg';
import lightjacket from '../assets/lightjacket.jpg';
import loungewear from '../assets/loungewear clothes.jpeg';
import shirtstyle from '../assets/shirt style.jpg';
import { light } from '@mui/material/styles/createPalette';
import prod1 from '../assets/prod1.jpeg';
import prod2 from '../assets/prod2.jpeg';
import prod3 from '../assets/prod3.jpeg';
import prod4 from '../assets/prod4.jpeg';
import prod5 from '../assets/prod5.jpeg';
import prod6 from '../assets/prod6.jpeg';
import prod7 from '../assets/prod7.jpeg';
import prod8 from '../assets/prod8.jpeg';

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

export const popularProducts = [
  { id: 1, img: prod1 },
  { id: 2, img: prod2 },
  { id: 3, img: prod3 },
  { id: 4, img: prod4 },
  { id: 5, img: prod5 },
  { id: 6, img: prod6 },
  { id: 7, img: prod7 },
  { id: 8, img: prod8 },
];
