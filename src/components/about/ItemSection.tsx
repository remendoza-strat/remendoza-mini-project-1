'use client';
import {useState} from 'react';
import {Inter} from 'next/font/google';
import Item from '@/src/components/about/Item';

interface ItemData{
    image: string;
    data1: string;
    data2: string;
    data3: string;
}

interface ItemSectionData{
    data: Record<string, ItemData[]>;
}

const inter = Inter({
	subsets: ["latin"]
});

export default function ItemSection({data} : ItemSectionData){
  	const [activeTab, setActiveTab] = useState(Object.keys(data)[0]);
	return(
		<>
			<div>
				<div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6 overflow-x-auto">
					{Object.keys(data).map((tab) => (
						<button key={tab} onClick={() => setActiveTab(tab)} className={`text-xl cursor-pointer ${inter.className} ${
							activeTab === tab ? "text-white font-semibold p-1 bg-red-400 rounded-md" : "text-gray-400"}`}>
								{tab}
						</button>
					))}
				</div>
				<div className="flex flex-wrap gap-4 m-2 justify-center">
					{data[activeTab].map((element, index) => (
						<Item key={index} {...element}/>
					))}
				</div>
			</div>
		</>
	);
}