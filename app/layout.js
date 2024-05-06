import { Inter, Jersey_15 } from "next/font/google";
import "./globals.css";
import NavBar from "@/componenets/NavBar";

const inter = Inter({ subsets: ["latin"] });
const jersey = Jersey_15({subsets: ['latin'], weight: '400'})
export const metadata = {
  title: "Space Site",
  description: "Training gsp skills",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jersey.className}>
        
        {children}
        <NavBar/>
        </body>
    </html>
  );
}


