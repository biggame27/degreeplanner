
const SidebarItem = ({ icon, text, active, link }: { icon: React.ReactNode, text: string, active: boolean, link: string }) => {
    return (
        <a href={link} className={`
            relative flex items-center py-2 px-3 my-1
            font-medium cursor-pointer
            transition-colors gap-4
            ${
                active
                    ? "bg-gradient-to-tr from-red-200 to-red-100 text-red-950 rounded-full" // Added `rounded-full` here
                    : "hover:bg-red-50 text-gray-600 rounded-full"
            }
        `}>
            {icon}
            <span>{text}</span>
        </a>
    )
}
export default SidebarItem;