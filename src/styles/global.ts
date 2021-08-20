import { createGlobalStyle } from 'styled-components';
import note from '../assets/pages.png';

export default createGlobalStyle`
 *{
   margin:0;
   padding:0;
   box-sizing: border-box;
   outline:0;
 }

 body{
  background: #F0F0F5 url(${note}) no-repeat 70% top;
  -webkit-font-smoothinf: antialiased;

 }
 body, input, button{
  font-family: 'Roboto', sans-serif;
 }

 #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

 butoon{
   cursor: pointer;
 }
`;
