//hero img 
import HeroBg from '../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png';

export default function Hero() {
     return (
          <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center md:px-20 px-6 py-5 mb-10">
               {/* banner left side  */}
               <div className="order-2 md:order-1 flex flex-col items-start justify-center gap-y-6">
                    <h1 className='md:text-5xl text-3xl mt-4 md:mt-0 font-bold text-[#111430] leading-normal md:leading-normal'>BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
                    <p className='text-[#666666] md:w-3/4 w-full'>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                    {/* APPOINTMENT BUTTON  */}
                    <button type="button"
                         className='bg-primary h-12 px-7 rounded-md text-white font-medium'
                    >Get an Appointment</button>

               </div>

               {/* banner right side  */}
               <div className="order-1 md:order-2 flex items-center justify-center">
                    <img src={HeroBg} alt=""
                         className='w-[450px]'
                    />
               </div>
          </section>
     )
}
