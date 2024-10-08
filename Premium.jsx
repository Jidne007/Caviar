

const Premium = () => {
    return (
        <div className='bg-white py-[100px] '>
        <div className="2xl:container mx-auto px:[1%] lg:px-[100px]">
            
           
            <div className="flex  gap-4">
                
                <div className='w-full'>
                <h2 className='text-5xl text-orange-200 font-semibold mb-11'>SCHWEIZER CAVIAR</h2>
                    <img className='w-[550px] mt-5' src="https://premium-caviar.ch/wp-content/uploads/2024/09/onarneu.png#551" alt="" />
                  </div>

                <div className='w-[850px]'>
                    <strong className='text-[18px] text-slate-700'>Hier kommt die Reinheit dieses Caviars besonders zur Geltung.</strong>
                        <p className=' text-[18px] text-slate-500'>Mit einem Salzanteil von maximal 3,5 Prozent ist er leicht gesalzen und entwickelt sein nussiges, charaktervolles Aroma bestens. Zudem zeichnen die homogene Farbgebung und das runde Korn diesen Caviar aus</p>
                        
                        
                        <div className="py-8">
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

export default Premium;