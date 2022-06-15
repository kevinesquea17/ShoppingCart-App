import Headphones from '../img/headphones-cart.png';
import Watch from '../img/watch-cart.png';
import Backpack from '../img/backpack-cart.png';
import Sunglasses from '../img/sunglasses-cart.png';
import WomanBag from '../img/woman-bag-cart.png';
import MenShort from '../img/men-short-cart.png';
import MenShirt from '../img/shirt-men-cart.png';
import Beanie from '../img/beanie-cart.png';

const products = [
    {id: 1, name: 'Headset', price: 30, sale: true, img: Headphones },
    {id: 2, name: 'Watch', price: 95, sale: true, img: Watch },
    {id: 3, name: 'Backpack', price: 95, sale: true, img: Backpack },
    {id: 4, name: 'Sunglasses', price: 35, sale: false, img: Sunglasses },
    {id: 5, name: "Woman's Bag", price: 35, sale: false, img: WomanBag },
    {id: 6, name: "Men's Short", price: 35, sale: false, img: MenShort },
    {id: 7, name: "Men's Polo Shirt", price: 35, sale: true, img: MenShirt },
    {id: 8, name: "Beanie", price: 15, sale: true, img: Beanie }
]

export default products;