import Sidebar from "@/components/Sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        <div>
            <Sidebar>
                {children}
            </Sidebar>
        </div>
    </main>
  );
}
