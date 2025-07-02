import './globals.css';
import './custom.css';
import {Inter, Jua} from 'next/font/google';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';

export const inter = Inter({
    subsets: ["latin"]
});

export const jua = Jua({
    subsets: ["latin"],
    weight: "400"
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>){
  
    return(

        <html lang="en">
        
            <body>

                <Navbar/>

                <div className="pt-25">
                    {children}
                </div>
                
                <Footer/>

            </body>

        </html>

    );

}