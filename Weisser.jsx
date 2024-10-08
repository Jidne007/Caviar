import React from 'react';

const Weisser = () => {
    return (
        <div className='bg-white py-[100px] '>
        <div className="2xl:container mx-auto px:[1%] lg:px-[100px]">
            
           
            <div className="flex  gap-4">
                
                <div className='w-full'>
                <h2 className='text-5xl text-orange-200 font-semibold mb-11'>WEISSER CAVIAR</h2>
                    <img className='w-[750px] ' src="https://premium-caviar.ch/wp-content/uploads/2022/06/organic3-1.png#547" alt="" />
                  </div>

                <div className='w-[850px]'>
                        <strong className='text-[18px] text-slate-700'>Hammerstein 1870 aus Cham gehört zu den wenigen exklusiven Produzenten dieses „weissen Goldes.</strong>

                       <p className='pt-5 text-[18px] text-slate-500'>Der Caviar wird von Hand geerntet, sorgfältig gereinigt und behutsam mild gesalzen – ein reines Naturprodukt, frei von Farbstoffen und Konservierungsmitteln. Für unsere Kunden wird der weisse Caviar von Hammerstein 1870 stets frisch hergestellt</p>
                                   
                        <div className="py-8">
                        <button className=" btn btn-circle w-[180px]  lg:w-[250px] text-lg 
                 bg-[#EEC78C] text-white border-0 outline-none">
                    <p className=' w-[160px] lg:w-[200px]'>Mehr Informationen</p>
                    
                        </button>
                        </div>

                        <p className='pt-5 text-[18px] text-slate-500'> Weisser Caviar vom Albino-Stör zählt zu den exklusivsten Luxusgütern der Welt. Mit einer weltweiten Jahresproduktion von lediglich 8 kg gehört diese Delikatesse zu den seltensten Genüssen.</p>
                        
                        
            </div>
        </div>
     </div>
    </div>
    );
};

export default Weisser;