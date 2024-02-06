import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import MakeAppointmentPopup from './MakeAppointmentPopup';

export default function ServiceCard({ service }) {
     const [popupState, setPopupState] = useState(false);
     const closeModal = () => {
          const removeBodyStyle = document.body
          removeBodyStyle.removeAttribute('style');
          setPopupState(pre => !pre)
     };
     const { _id, image, price, describe } = service;

     return (
          <div className="flex flex-col items-center justify-center gap-y-2 max-w-xs md:w-96 h-80 shadow-xl rounded-xl p-2">
               <figure>
                    <img src={image} alt="serive image" className='w-20' />
               </figure>
               <div className="text-xl font-semibold text-[#111430]"><h4>{service.service}</h4></div>
               <p className="text-xl font-medium text-primary px-2">${price}</p>
               <p className="text-sm md:text-xs- font-light text-gray px-3 mb-2">
                    {describe}
               </p>
               <button type="button"
                    onClick={() => closeModal()}
                    className="capitalize px-7 py-3 h-12 text-white bg-primary rounded-[5px] font-medium"
               >
                    make an appointment
               </button>

               {
                    popupState && <Popup
                         open={popupState}
                         closeOnDocumentClick
                         lockScroll
                         overlayStyle={{
                              background: "rgba(0,0,0,0.5)",
                              backdropFilter: "blur(2px)",
                         }}
                    >
                         <MakeAppointmentPopup
                              serviceId={_id}
                              closeModal={closeModal}
                         />
                    </Popup>
               }
          </div>
     )
}