import { Outlet } from 'react-router-dom'
import Navbar from './components/header'

export const RootUser = () => {
    return (
        <div>
            <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
                <Navbar />
            </div>
            <div className='md:min-h-screen h-full'>
                <Outlet />
            </div>
        </div>
    )
}