import {inter} from '../../app/layout';
import Image from 'next/image';

interface ItemProps{
    image: string;
    data1: string;
    data2: string;
    data3: string;
}

export default function Item({image, data1, data2, data3} : ItemProps){
    
    return(
        <>
            <div className="flex gap-4 border-2 border-red-400 rounded p-4 m-2 items-center w-[60%]">
                
                <div className="w-16 h-16 relative rounded overflow-hidden">
                    <Image src={image} alt={data1} fill className="object-cover"/>
                </div>

                <div className={`flex flex-col gap-4 ${inter.className}`}>
                    <span className="text-white text-sm">{data1}</span>
                    <span className="text-white text-lg font-semibold}">{data2}</span>
                    <span className="text-gray-300 text-sm">{data3}</span>
                </div>

            </div>
        </>
    );

}