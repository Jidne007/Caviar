import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <footer className='bg-white pt-[100px]'>
            <div className="container mx-auto px-[1%] lg:px-[100px]">
                <div className="flex flex-wrap justify-between items-center gap-3 pb-[100px]">

                    <div className="w-full md:w-[48%] lg:w-[250px]">
                        <Link to="/" className='block'>
                           <img src="https://premium-caviar.ch/wp-content/uploads/2022/06/new.png#354" alt="" />
                        </Link>

                        <p className='pt-7 text-slate-500 text-md font-bold pb-8'>Das Leben ist zu wertvoll, um sich mit weniger als dem Besten zufrieden zu geben.</p>
                        
                        <p className=''>Impressum/ Datenschutz</p>

                        <div className="social-icons flex items-center flex-row gap-3 transition-all duration-300">
                            
                    
                     
                         </div>
                    </div>

                    <div className="w-full md:w-[48%] lg:w-auto ">
                        <h4 className="text-blue-950 text-lg font-semibold">Sortiment</h4>
                        <ul className="flex flex-col gap-3 pt-5 text-sm text-slate-600 px-4">
                            <li className='cursor-pointer'>SPANISCHER CAVIAR</li>
                            <li className='cursor-pointer'>SWISS CAVIAR</li>
                            <li className='cursor-pointer'>WEISSER CAVIAR</li>
                            <li className='cursor-pointer'>KONTAKT</li>
                        
                        </ul>
                    </div>


                    <div className="w-full md:w-[48%] lg:w-auto ">
                        <h4 className="text-blue-950 text-lg font-semibold">Kontakt</h4>
                        <h5 className='text-md'>+41 79 329 44 44 </h5>
                        <h6 className='text-md'>MONTAG-FREITAG</h6>
                        <p className='text-md'>08:00 Uhr-17:00 Uhr</p>
                    </div>

                    


                </div>
            </div>
        </footer>
    );
};

export default Footer;