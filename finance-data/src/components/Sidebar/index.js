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
                    <SidebarLink to='product' onClick={toggle}>
                        Product
                    </SidebarLink>
                    <SidebarLink to='docs' onClick={toggle}>
                        Docs
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="register" onClick={toggle}>
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

// Import { SidebarMenu,
// SidebarLink,
// SideBtnWrap,
// SidebarRoute } from './SidebarElements';

// constSidebar =({isOpen, toggle})=>{
//     return(
//         <SidebarContainer isOpen={isOpen} onClick={toggle}>
//             <Icon onClick={toggle}>
//                 <CloseIcon />
//             </Icon>
//             <SidebarWrapper>
//                 <SidebarMenu>
//                     <Sidebarlink to='product' onClick={toggle}>Product</Sidebarlink>
//                     <Sidebarlink to='discover' onClick={toggle}>Discover</Sidebarlink>
//                     <Sidebarlink to='services' onClick={toggle}>Services</Sidebarlink>
//                     <Sidebarlink to='signup' onClick={toggle}>Sign Up</Sidebarlink>
//                 </SidebarMenu>
//                 <SideBtnWrap>
//                     <SidebarRouter to='/signin'>Sign In</SidebarRouter>
//                 </SideBtnWrap>
//             </SidebarWrapper>
//         </SidebarContainer>
//     )
// };
// export default Sidebar;