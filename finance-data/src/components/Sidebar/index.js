import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute  } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                    <SidebarLink to="product">
                        Product
                    </SidebarLink>
                    <SidebarLink to="docs">
                        Docs
                    </SidebarLink>
                    <SidebarLink to="company">
                        Company
                    </SidebarLink>
                    <SidebarLink to="register">
                        Register
                    </SidebarLink>
               </SidebarMenu>
               <SideBtnWrap>
                   <SidebarRoute to='/signin'>Sign In</SidebarRoute>
               </SideBtnWrap>

           </SidebarWrapper>
       </SidebarContainer>
    );
};

export default Sidebar;
