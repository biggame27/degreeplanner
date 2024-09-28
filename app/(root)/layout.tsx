import Sidebar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <div className= "flex flex-row">
            <Sidebar />
            {children}
        </div>
    </main>
  );
}
