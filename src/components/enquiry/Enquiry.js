import React from 'react'
import Footer from '../footer'
import EnquiryForm from './EnquiryForm'

function Enquiry() {
    return (
        <div className='h-screen bg-yellow-40 bg-opacity-40 relative overflow-x-hidden' style={{
            backgroundImage: `url('https://www.shutterstock.com/image-photo/enquiry-word-written-on-notepad-260nw-1824641180.jpg')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        }}>
            <div className='h-full w-full bg-white bg-opacity-20'>
                <div className='mx-10 lg:mx-36 py-10'>
                    <div className='font-bold text-[25px] md:text-[45px] text-black mb-2'>Enquiry Now <hr className='bg-[red] h-[3px] outline-0 border-0 rounded-xl' /></div>

                    <div className='h-[800px] flex flex-col items-center justify-center rounded-xl'>
                        <div className='h-[800px] w-full flex items-center justify-center'>
                            <EnquiryForm />
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Enquiry