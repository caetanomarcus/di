import styled from "styled-components";
import bgDesktop from '../../assets/images/bg-home-desktop.jpg';
import bgMobile from '../../assets/images/bg-home-mobile.jpg';
import ff7cursor from '../../assets/icons/FF7Cursor.png';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${bgDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    padding-top: 29px;
    padding-left: 85px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 767px){
        padding: 0;
        padding-bottom: 15%;
        background-image: url(${bgMobile});
    }
`;

export const TitleBox = styled.div`
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    /* margin-bottom: 5%; */
    padding-left: 64px;
    @media screen and (max-width: 767px){
        padding: 0;
    }
`;

export const Title1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 128px;
    color: #fff;
    text-shadow: 5px 4px 4px #00000080;
    text-align: center;
    width: fit-content;
    text-transform: uppercase;

    ::after{
        content: 'S.S';
        font-family: 'Montserrat', sans-serif;
        /* font-weight: 600; */
        color: #fff;
        text-shadow: 5px 4px 4px #00000080;
        text-align: center;
        position: absolute;
        bottom: -80%;
        right: 0;
    }

    @media screen and (max-width: 767px){
        font-size: 80px;
        font-weight: 400;
    }
`;

export const MenuBox = styled.nav`
    width: 455px;
    height: 392px;
    background-color: #001C72CC;
    border: solid #f1f1f1 4px;
    border-radius: 10px;

    @media screen and (max-width: 767px){
        width: 70%;
        height: auto;
        margin: 0 auto;
    }
`;

export const Menu = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 74px;
    padding-bottom: 80px;
    gap: 22px;

    @media screen and (max-width: 767px){
      padding-bottom: 69px;
      padding-top: 51px;
    }

`;

export const MenuItem = styled.li`
    font-family: 'Genos', sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    position: relative;
    width: 144px ;
    /* transition: 0.9s; */

    ::before{
        content: '';
        width: 65px;
        height: 32.5px;
        background-image: url(${ff7cursor});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        left: -50%;
        top: 50%;
        transform: translateY(-25%);
        display: ${({isActive}) => isActive? 'block': 'none'};
        

    }

    :hover{
        ::before{
            display: block;
            
        }
    }

    @media screen and (max-width: 767px){
        font-size: 20px;
        text-align: center;
    }
`;