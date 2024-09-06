import { Outlet } from 'react-router-dom'
import { DefaultSidebar } from './components/sidebar'

export const RootAdmin = () => {
    return (
        <div className='flex h-screen'>
            <div className="flex-shrink-0">
                <DefaultSidebar />
            </div>
            <div className='flex-grow md:min-h-screen h-full'>
                <Outlet />
            </div>
        </div>
    )
}