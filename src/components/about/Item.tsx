import Image from 'next/image';
import {inter} from '@/src/app/layout';

interface ItemProps{
    image: string;
    data1: string;
    data2: string;
    data3: string;
}

export default function Item({image, data1, data2, data3} : ItemProps){
    
    return(
        <>
            <div className="flex flex-col sm:flex-row border-2 border-red-400 rounded p-4 m-2 gap-4 w-full sm:w-[60%] about-item-effect" data-aos="zoom-in">
              
                <div className="w-full sm:w-1/2 flex justify-center">
                    <div className="w-24 h-24 relative rounded overflow-hidden">
                        <Image src={image} alt={data1} fill className="object-cover" />
                    </div>
                </div>

                <div className={`w-full sm:w-1/2 flex flex-col gap-2 items-center sm:items-start text-center sm:text-left ${inter.className}`}>
                    <span className="text-white text-sm">{data1}</span>
                    <span className="text-white text-lg font-semibold">{data2}</span>
                    <span className="text-gray-300 text-sm">{data3}</span>
                </div>

            </div>
        </>
    );

}