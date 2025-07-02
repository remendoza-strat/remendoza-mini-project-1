import './globals.css';
import './custom.css';
import {Inter, Jua} from 'next/font/google';
import Navbar from '../custom_components/Navbar';
import Footer from '../custom_components/Footer';
import ClickSpark from '../custom_effects/ClickSpark';

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
                    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
                        {children}
                    </ClickSpark>
                </div>
                <Footer/>
            </body>
        </html>
    );
}