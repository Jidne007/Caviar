import { NavLink } from 'react-router-dom';
import './Header.css'
import TopHeader from './TopHeader';
import { useEffect, useState } from 'react';

const Header = () => {
    const [isScroll, setIsScroll] = useState(false);
    
    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className='bg-white '>
            <div className='2xl:container mx-auto px-[100px]'>
                <TopHeader />
                
                <div className={`${isScroll ? "px-0" : ""}`}>
                    <nav className={`bg-white flex w-full py-7 px-3 `}>
                        <div className="">
                    <ul className='flex gap-[10rem] text-black font-normal  text-md'>

                       <li className='text-blue-900/50 text-md'><NavLink to={'/'}>SPANISCHER CAVIAR</NavLink> </li>
                       <li className='text-blue-900/50 text-md'><NavLink to={'/'}>SWISS CAVIAR</NavLink> </li>
                       <li className='text-blue-900/50 text-md'><NavLink to={'/'}>WEISSER CAVIAR</NavLink> </li>
                       <li className='text-blue-900/50 text-md'><NavLink to={'/'}>KONTAKT</NavLink> </li>
                       <li className='text-blue-900/50 text-md'><NavLink to={'/'}>zurück zu <br />Hammerstein Group</NavLink> </li>

                   </ul> 
                      </div>
                    </nav>
                </div>

              
            </div>

            
        </header>

        
    );
};

export default Header;