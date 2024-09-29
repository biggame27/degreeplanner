"use client"
import { Calculator, Check, GraduationCap, House } from "lucide-react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import imageAsset from '/assets/maroon_dp.png'

const Sidebar = ({ children, username, email } : {children:React.ReactNode, username:string, email: string}) => {
    const path = usePathname();
    return (
        <>
            <aside className="h-screen fixed">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm w-64">
                    <div className="p-8 pb-5 flex justify-between items-center">
                        <div className="flex flex-row text-maroon text-xl gap-9 justify-center items-center">
                        <Image src= {imageAsset} width={50} height={50} alt="hello" />
                        Aggie Atlas
                        </div>
                    </div>

                    <ul className="flex-1 px-6">
                        <SidebarItem icon={<House size={20} />} text="Home" active={path=="/"} link={"/"} />
                        <SidebarItem icon={<Check size={20} />} text="Progress" active={path=="/progress"} link={"/progress"} />
                        <SidebarItem icon={<Calculator size={20} />} text="GPA Calculator" active={path=="/gpa-calculator"} link={"/gpa-calculator"} />
                        <SidebarItem icon={<GraduationCap size={20} />} text="Advising" active={path=="/advising"} link={"/advising"} />
                    </ul>

                    <div className="border-t flex p-3">
                        <UserButton /> 
                        <div className={`flex justify-between items-center leading-4 overflow-hidden transition-all w-96 ml-3`}>
                        <div>
                            <h4 className="font-semibold">{username}</h4>
                            <span className="text-xs text-gray-600">{email}</span>
                        </div>
                        
                        </div>
                        <div className={`
                        flex justify-between  items-center
                        w-52 ml-3 
                        `}>
                            {/* <div>
                                <h4 className="font-semibold">John Doe</h4>
                                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                            </div>
                            <MoreVertical size={20} /> */}
                        </div>
                    </div>
                </nav>
            </aside>
            <div className="w-full p-10 pl-72 transition-all">
                {children}
            </div>
        </>
    )
}

export default Sidebar;