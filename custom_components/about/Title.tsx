import {inter} from '../../app/layout';

interface Title{
    text: string;
}

export default function Title({text} : Title){
    
    return(
        <>
            <div className="flex items-center m-3">
                <div className="w-30 h-[5px] bg-red-400"></div>
                <h2 className={`text-white text-5xl ${inter.className}`}>
                    <b>{text}</b>
                </h2>
            </div>
        </>
    );

}