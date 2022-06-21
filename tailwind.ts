import {create} from 'tailwind-rn';
import styles from './styles.json';
import customStyles from './styles-custom.json';
const {tailwind, getColor} = create({...styles, ...customStyles});
export {tailwind, getColor};
