"use client"
import { Calculator, Check, ChevronFirst, House } from "lucide-react";
import Image from "next/image";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
    const path = usePathname();
    return (
        <>
            <aside className="h-screen fixed z-10">
                <nav className="h-full flex flex-col bg-white border-r shadow-sm w-64">
                    <div className="p-4 pb-2 flex justify-between items-center">
                        <Image src="https://img.logoipsum.com/243.svg" width={150} height={100} alt="hello" />
                        <button className = "p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <ChevronFirst />  
                        </button>

                    </div>

                    <ul className="flex-1 px-6">
                        <SidebarItem icon={<House size={20} />} text="Home" active={path=="/"} link={"/"} />
                        <SidebarItem icon={<Check size={20} />} text="Progress" active={path=="/progress"} link={"/progress"} />
                        <SidebarItem icon={<Calculator size={20} />} text="GPA Calculator" active={path=="/gpa-calculator"} link={"/gpa-calculator"} />
                        <SidebarItem icon={<Calculator size={20} />} text="Advising" active={path=="/advising"} link={"/advising"} />
                    </ul>

                    <div className="border-t flex p-3">
                        <UserButton />
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
        </>
    )
}

export default Sidebar;