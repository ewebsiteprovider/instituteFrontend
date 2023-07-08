import React from 'react'
import Footer from '../footer'
import EnquiryForm from './EnquiryForm'

function Enquiry() {
    return (
        <div className='h-screen relative overflow-x-hidden' style={{
            backgroundImage: `url('https://assets.tes.com/magazine-attachments/s3fs-public/styles/amp_1200x675_16_9/public/media/image/archived/istock-957511688.jpg?itok=VBf-CbHy')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        }}>
            <div className='h-full w-full bg-white bg-opacity-10'>
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