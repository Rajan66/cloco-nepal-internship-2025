import logo from '@/app/favicon.ico'
import Image from 'next/image'
import FooterItem from './FooterNav'
import ContactList from './ContactList'

const Footer = () => {
    return (
        <footer className=' bottom-0 bg-dark w-full border-t-[2px] border-neutral-700'>
            <div className='mx-[20%] flex justify-between items-center p-4 py-10'>
                <div className='flex flex-col w-1/4 items-start gap-6'>
                    <a href="/" className='flex flex-col gap-2 items-center cursor-pointer'>
                        <Image src={logo} width={60} height={60} alt='datemydaughter_logo' />
                        <span className='font-semibold text-red-300 text-2xl'>DateMyDaughter</span>
                    </a>
                    <p className='text-pretty'>
                        {`Some words about chatgpt's daughter: First off, she's got that big-brain energy—sharp as a
                        tack and always asking the kind of questions that make you rethink life. You know, the deep 
                        ones like, "If a tree falls in a forest and no one's around, does it still have WiFi?"`}
                    </p>
                </div>
                <div className='flex flex-col items-start gap-6'>
                    <h2 className='font-semibold text-xl'>Resources</h2>
                    <FooterItem />
                </div>
                {/* Replace with other footer resources */}
                <div className='flex flex-col items-start gap-6'>
                    <h2 className='font-semibold text-xl'>More</h2>
                    <ContactList />
                </div>
            </div>
        </footer >
    )
}

export default Footer