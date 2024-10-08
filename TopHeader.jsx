import { IoSearchSharp } from 'react-icons/io5';
import './Header.css'
import { Link } from 'react-router-dom';


const TopHeader = () => {
 
    return (
        <div className='flex justify-around items-center py-8 '>
            <div className='w-auto'>
                <div className='flex items-center justify-between gap-20'>
                    <Link className='w-[250px] block'>
                        <img className=' w-full cursor-pointer' src="/public/assets/new.png" alt="" />
                    </Link>

                    
                    <form className='w-[600px] relative'>
            <div className='w-full rounded-lg flex items-center  '>

                    
                <IoSearchSharp className='cursor-pointer absolute w-5 h-5'/>
                        

                 <input type="search" placeholder="Gib hier deine Suche ein..." className='w-full  p-2 rounded-md bg-slate-100  pl-7 placeholder:text-blue-900/50' />
            </div>
                    </form>

                    
            </div>

            </div>
            
            <div className="w-auto">
            <div className='flex gap-5 items-center'>
                 <div className='flex justify-around items-center gap-4'>
                        
                 <img className='w-[20px] cursor-pointer' src="https://premium-caviar.ch/wp-content/uploads/2022/06/furniturestore-cart.svg" alt="" />
                   
                        <div className='flex items-center'>
                        <Link className='font-bold text-slate-500 cursor-pointer'>CHF 0.00</Link>
                        </div>
                        
                    
                    <img className='w-[20px] cursor-pointer' src="https://premium-caviar.ch/wp-content/uploads/2022/06/furniturestore-wishlist.svg" alt="" />
                        
                        <img className='w-[20px] cursor-pointer' src="https://premium-caviar.ch/wp-content/uploads/2022/06/furniturestore-user.svg" alt="" />
                    </div>

                </div>
            </div>
             </div>
    );
};

export default TopHeader;