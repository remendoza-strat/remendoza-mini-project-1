import {Inter} from 'next/font/google';

interface TextTitle{
    text: string;
}

const inter = Inter({
    subsets: ["latin"]
});

export default function Title({text}: TextTitle){
    return(
        <>
            <h1 className={`text-5xl p-2 my-3 text-center text-white font-bold ${inter.className}`}>{text}</h1>
        </>
    );
}