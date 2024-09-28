import { ChevronFirst } from "lucide-react";
import Image from "next/image";

const Sidebar = ({ children } : {children:React.ReactNode}) => {
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm w-64">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="https://img.logoipsum.com/243.svg" width={150} height={100} alt="hello" />
                    <button className = "p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                     <ChevronFirst />  
                    </button>

                </div>

                <ul className="flex-1 px-3">{children}</ul>

                <div className="border-t flex p-3">
                <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
                    <div className={`
                        
                    `}>

                    </div>

                </div>

            </nav>

        </aside>
    )
}

export default Sidebar;