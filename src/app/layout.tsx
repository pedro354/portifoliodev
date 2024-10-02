import { Poppins } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
const poppins = Poppins({
  subsets: ["latin"],
  weight: "100"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className} id="body">
        
        {children}
        
        </body>
    </html>
  );
}
