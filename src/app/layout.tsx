import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import ClickSpark from '@/src/effects/ClickSpark';
import './globals.css';
import './custom.css';

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>){
    return(
        <html lang="en">

            <body>

                <head>
                    <link rel="icon" href="/images/icon.png"/>
                </head>

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