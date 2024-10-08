import Link from "next/link";

const SidebarItem = ({ icon, text, active, link }: { icon: React.ReactNode, text: string, active: boolean, link: string }) => {
    return (
        <Link href={link} className={`
            relative flex items-center py-2 px-3 my-1
            font-medium cursor-pointer
            transition-colors gap-4
            ${
                active
                    ? "bg-gradient-to-tr from-red-300 to-red-50 text-maroon rounded-full" // Added `rounded-full` here
                    : "hover:bg-red-50 text-maroon rounded-full"
            }
        `}>
            {icon}
            <span>{text}</span>
        </Link>
    )
}
export default SidebarItem;