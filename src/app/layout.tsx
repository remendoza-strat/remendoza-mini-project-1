import './globals.css';
import './custom.css';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import ClickSpark from '@/src/effects/ClickSpark';

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>){
    return(
        <html lang="en">
            <head>
                <link rel="icon" href="/images/icon.png"/>
            </head>
            <body>
                <Navbar/>
                <div className="pt-25">
                    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={500}>
                        {children}
                    </ClickSpark>
                </div>
                <Footer/>
            </body>
        </html>
    );
}