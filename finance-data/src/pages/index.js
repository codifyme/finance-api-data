import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import Services from '../components/Service';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infoSection/Data';

const Home=()=> {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            {/* <InfoSection {...homeObjFour}/> */}
        </> 
    );
};
export default Home;