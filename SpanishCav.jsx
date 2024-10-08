import React from 'react';

const SpanishCav = () => {
    return (
        <div className='bg-white py-[100px] '>
            <div className="2xl:container mx-auto px:[1%] lg:px-[100px]">
                
               
                <div className="flex  gap-4">
                    
                    <div className='w-full'>
                    <h2 className='text-5xl text-orange-200 font-semibold mb-11'>SPANICHER CAVIAR</h2>
                        <img className='w-[550px] mt-8' src="https://premium-caviar.ch/wp-content/uploads/2024/09/natural.png#490" alt="" />
                      </div>

                    <div className='w-[850px]'>
                        <strong className='text-[18px] text-slate-700'>Willkommen in der Welt des aussergewöhnlichen Geschmacks</strong>
                        <p className='pt-2 text-[18px] text-slate-500'>mit unserem erstklassigen geschlachteten schwarzen Caviar. Dieser herrliche Kaviar hat eine unvergleichliche Qualität, die ihn zu einem wahren kulinarischen Meisterwerk macht.</p>

                        <p className='pt-5 text-[18px] text-slate-500'>Jeder winzige Caviar wird sorgfältig von Hand nach Größe ausgewählt, um die perfekte Kombination aus Geschmack und Textur zu gewährleisten.</p>

                        <p className='pt-8 text-[18px] text-slate-500'>Die zarten Wände des Caviars lassen Sie den reichen Kaviargeschmack sofort erleben und sein Premiumstatus unterstreicht den höchsten Qualitätsstandard. Tauchen Sie mit unserem geschlachteten schwarzen Caviar in die raffinierte Welt der Premiumgastronomie ein – es ist nicht nur Caviar, es ist die Verkörperung von Pracht auf Ihrem Tisch.</p>

                        <div className="py-12">
                        <button className=" btn btn-circle w-[180px]  lg:w-[250px] text-lg 
                 bg-[#EEC78C] text-white border-0 outline-none">
                    <p className=' w-[160px] lg:w-[200px]'>Mehr Informationen</p>
                    
                        </button>
                        </div>
                </div>
            </div>
         </div>
        </div>
    );
};

export default SpanishCav;