import React, { useEffect, useState, useRef } from 'react'
import { StyledHeader, BurgerIconStyled } from './Navbar.styled';
import Logo from './Logo';
import { Link } from 'react-scroll';
import { MenuList } from './Navbar.styled';
function Header() {
    const ref = useRef();
    const burgerref = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                if(!burgerref.current.contains(e.target)){
                setIsMenuOpen(false)
            }
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])

    const close = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen)
    }


    return (
        <StyledHeader id='header'>
            <div className='header__container'> 
                <Logo />

                <BurgerIconStyled ref={burgerref} className="hello" status={isMenuOpen} onClick={close}>
                    <div />
                    <div />
                    <div />
                </BurgerIconStyled>

                <MenuList ref={ref} status={isMenuOpen} onClick={close}>
                    <li>
                        <Link onClick={close} className='menu__link' to="heropage" smooth={true} duration={10}>home</Link>
                    </li>
                    <li>
                        <Link onClick={close} className='menu__link' to="aboutme" smooth={true} duration={10}>ABOUT</Link>
                    </li>
                    <li>
                        <Link onClick={close} className='menu__link' to="project" smooth={true} duration={10}>PROJECTS</Link>
                    </li>
                    <li>
                        <Link onClick={close} className='menu__link' to="contact" smooth={true} duration={10}>CONTACT</Link>
                    </li>
                </MenuList>

            </div>
        </StyledHeader>
    )
}

export default Header;