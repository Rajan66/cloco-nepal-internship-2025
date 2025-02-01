import logo from '@/app/favicon.ico'
import Image from 'next/image'
import SidebarItem from './SidebarItem'

const Sidebar = () => {
    return (
        <aside className='w-[15%] bg-dark border-r-[2px] border-neutral-700 h-full '>
            <div className='p-4'>
                <a href="/" className='flex gap-2 items-end cursor-pointer'>
                    <Image src={logo} width={50} height={50} alt='datemydaughter_logo' />
                    <span className='font-semibold text-red-300 text-2xl'>DateMyDaughter</span>
                </a>
            </div>
            <div className='w-full mt-[5%]'>
                <SidebarItem />
            </div>
        </aside >
    )
}

export default Sidebar