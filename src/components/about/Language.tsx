import {ReactNode} from 'react';
import {Inter} from 'next/font/google';

interface Language{
    name: string;
    icon: ReactNode;
}

const inter = Inter({
    subsets: ["latin"],
});

export default function Language({name, icon} : Language){
    
    return(
        <>
            <div className="flex items-center border-2 border-red-400 rounded m-3 py-3 px-5 about-item-effect" data-aos="zoom-in">
                <div className="text-2xl text-white mr-2">{icon}</div>
                <span className={`text-white text-lg font-medium ${inter.className}`}>{name}</span>
            </div>
        </>
    );

}