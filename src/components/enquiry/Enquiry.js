import React from 'react'
import Footer from '../footer'
import EnquiryForm from './EnquiryForm'

function Enquiry() {
    return (
        <div className='bg-green-200 h-screen bg-opacity-40 pt-14 relative overflow-x-hidden'>
            <div className='mx-10 lg:mx-36'>
                <div className='font-bold text-[25px] md:text-[35px] text-black mb-2'>Enquiry Now <hr className='bg-green-800 h-[5px] outline-0 rounded-xl' /></div>

                <div className='h-[800px] flex flex-col items-center justify-center rounded-xl' style={{
                    backgroundImage: `url('https://img.freepik.com/premium-photo/contact-us-hand-businessman-holding-mobile-smartphone-with-mail-phone-email-icon_52701-38.jpg')`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center right',
                }}>
                    <div className='h-[800px] w-full flex items-center justify-center'>
                        <EnquiryForm />
                    </div>

                </div>
            </div>

            <div className='h-[50px]'></div>
            <Footer />
        </div>
    )
}

export default Enquiry