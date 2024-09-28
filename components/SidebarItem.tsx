import Link from "next/link";

const SidebarItem= ({icon, text, active, link} : {icon:any, text:any, active:any, link:string}) => {
    return (
        <Link href={link} className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors
        ${
            active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" 
                :"hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
            {icon}
            <span>{text}</span>
        </Link>
    )
}
export default SidebarItem;