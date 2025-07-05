import {Inter} from 'next/font/google';

interface TitleTitle{
    text: string;
}

const inter = Inter({
    subsets: ["latin"]
});

export default function Title({text} : TitleTitle){
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