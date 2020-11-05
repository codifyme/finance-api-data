import React from 'react';
import {SidebarContainer, Icon, CloseIcon} from './SidebarElements';

const Sidebar = () => {
    return (
       <SidebarContainer>
           <Icon>
               <closeIcon />
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
               <SidebBtnWrap>
                   <SidebarRoute to='/signin'>Sign In</SidebarRoute>
               </SidebBtnWrap>

           </SidebarWrapper>
       </SidebarContainer>
    );
};

export default Sidebar;
