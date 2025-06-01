
import "./globals.css";
// import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/sections/Header";



// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rahul Akubattini | Personal Portfolio",
  description: "Rahul Akubattini is a full-stack developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
      
      >
        
          <ActiveSectionContextProvider>
            <Header />
            {children}
    

    
       
          </ActiveSectionContextProvider>
    
      </body>
    </html>
  );
}
