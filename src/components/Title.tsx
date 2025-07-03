import {inter} from '@/src/app/layout';

interface Title{
    text: string;
}

export default function Title({text}: Title){
    return(
        <>
            <h1 className={`text-5xl p-2 my-3 text-center text-white font-bold ${inter.className}`}>{text}</h1>
        </>
    );
}