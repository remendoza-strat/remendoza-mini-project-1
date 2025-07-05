'use client';
import {ReactNode, useState} from 'react';
import {Inter} from 'next/font/google';
import Language from '@/src/components/about/Language';

interface LanguageData{
    name: string;
    icon: ReactNode;
}

interface LanguageSectionData{
    data: Record<string, LanguageData[]>;
}

const inter = Inter({
  subsets: ['latin']
});

export default function LanguageSection({data} : LanguageSectionData){
    const [activeTab, setActiveTab] = useState(Object.keys(data)[0]);
    return(
        <>
            <div>
                <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6 overflow-x-auto">
                    {Object.keys(data).map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)} className={`text-xl cursor-pointer ${inter.className} ${
                            activeTab === tab ? 'text-white font-semibold p-1 bg-red-400 rounded-md' : 'text-gray-400'}`}>
                                {tab}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 p-2 justify-center">
                    {data[activeTab].map(({name, icon}) => (
                        <Language key={name} name={name} icon={icon}/>
                    ))}
                </div>
            </div>
        </>
    );
}