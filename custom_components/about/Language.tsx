import {inter} from '../../app/layout';
import {ReactNode} from 'react';

interface LanguageProps{
    name: string;
    icon: ReactNode;
}

export default function Language({name, icon} : LanguageProps){
    
    return(
        <>
            <div className="flex items-center border-2 border-red-400 rounded m-3 py-3 px-5">
                <div className="text-2xl text-white mr-2">{icon}</div>
                <span className={`text-white text-lg font-medium ${inter.className}`}>{name}</span>
            </div>
        </>
    );

}