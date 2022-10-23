import { useState } from 'react'
import * as S from './styles'

const Home = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [isDisabled, setDisabled] = useState(false);
    const menu = [
        {
            name: 'Portfólio',
            id: 0
        },
        {
            name: 'Zine',
            id: 1
        },
        {
            name: 'Diogo',
            id: 2
        },
        {
            name: 'Contato',
            id: 3
        }
    ]

    const handleClick = (id) => {
        if(window.innerWidth >=768){
            if(!isDisabled){
                setActiveItem(id)
                setTimeout(()=> {
                    alert("deu bom")
                    setDisabled(true)
                }, 700)
            }
        } else {
            if(!isDisabled){
                setTimeout(()=> {
                    alert("deu bom")
                    setDisabled(true)
                }, 700)
            }
        }
        

       
    }

    return (<S.Wrapper>
        <S.TitleBox>
            <S.Title1>Diogo</S.Title1>
        </S.TitleBox>
        <S.MenuBox>
            <S.Menu>
                {menu.map(item => <S.MenuItem  
                key={item.id} 
                onClick={() => handleClick(item.id)} 
                isActive={item.id === activeItem} 
                >
                {item.name}
                </S.MenuItem>
                    )}
            </S.Menu>
        </S.MenuBox>
    </S.Wrapper>)
}

export default Home;