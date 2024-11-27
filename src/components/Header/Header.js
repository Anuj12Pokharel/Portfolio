import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'; // Correctly import icons once
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'; // Assuming these are custom components

const Header = () => (
  <Container>
    {/* Logo Section */}
    <Div1>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <img 
          src="/images/logo-search-grid-1x (1).png" 
          alt="Logo" 
          height={40} 
          width={40} 
        />
        <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
          Anuj Pokharel
        </span>
      </Link>
    </Div1>

    {/* Navigation Links */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <a href="https://www.youtube.com/@anujpokharel4677">
          <NavLink>YouTube</NavLink>
        </a>
      </li>
    </Div2>

    {/* Social Media Icons */}
    <Div3>
      <SocialIcons href="https://github.com/Anuj12Pokharel">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/anuj-pokharel-b6094216b/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/anuj_pokharel_1/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://x.com/AnujPokharel222">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
