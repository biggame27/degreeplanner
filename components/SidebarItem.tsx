import Link from "next/link";

const SidebarItem = ({ icon, text, active, link }: { icon: React.ReactNode, text: string, active: boolean, link: string }) => {
    return (
        <Link href={link} className={`
            relative flex items-center py-2 px-3 my-1
            font-medium cursor-pointer
            transition-colors gap-4
            ${
                active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 rounded-full" // Added `rounded-full` here
                    : "hover:bg-indigo-50 text-gray-600 rounded-full"
            }
        `}>
            {icon}
            <span>{text}</span>
        </Link>
    )
}
export default SidebarItem;