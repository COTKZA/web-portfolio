import { NavLink } from "react-router"

const Navigation = () => {
  
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-18">
                    <h1 className="font-bold text-xl">Portfolio</h1>

                    {/* DeskTop Navbar */}
                    <div className="hidden md:flex space-x-8">
                        <NavLink to={'/'}>หน้าแรก</NavLink>
                        <NavLink to={'/'}>ทักษะ</NavLink>
                        <NavLink to={'/'}>ผลงาน</NavLink>
                        <NavLink to={'/'}>ติดต่อ</NavLink>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation