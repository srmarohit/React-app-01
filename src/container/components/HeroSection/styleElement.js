
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
      background:#0c0c0c;
      padding:0 22px;
      position : relative;
      height:800px;
       z-index:1;

:before{
    content :'';
   position : absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background : linear-gradient(
           180deg,
          rgba(0,0,0,0.2) 0%,
          rgba(0,0,0,0.6) 100%;
  ),
 
  linear-gradient(
      180deg,
     rgba(0,0,0,0.2) 0%,
     transparent 100%
);

z-index : 2;
}
`;


export const HeroBg = styled.div`
       position:absolute;
       top : 0;
       left : 0;
       right:0;
       bottom:0;
       height:100%;
       width:100%;
       overflow:hidden; 
`;

export const VideoBg = styled.video`
      width:100%;
     height:100%;
     -o-object-fit:cover;
       object-fit:cover;
     background:#232c34;
`;

export const HeroContent = styled.div`
     position:absolute;
     top:10rem;
     display:flex;
     flex-direction:column;
      align-items:center;
      padding:8px 22px;
      z-index : 3
`;

export const HeroH1 = styled.h1`
    color:#fff;
   font-size: 48px;
   text-align:center;

@media screen and (max-width:768px){
     font-size:40px;
}

@media screen and (max-width:576px){
     font-size:32px;
}

`;

export const HeroP = styled.p`
   margin-top:20px;
   color:#fff;
   font-size:32px;
   text-align:center;
   max-width:600px;

@media screen and (max-width:768px){
     font-size:24px;
}

@media screen and (max-width:576px){
     font-size:18px;
}
`;

export const HeroBtn = styled.div` 
        margin-top:-1rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        z-index:3;
`;


export const ArrowForward = styled(MdArrowForward)`
         margin-left:8px;
         font-size:20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
         margin-left:8px;
         font-size:20px;
`;