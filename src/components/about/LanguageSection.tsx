'use client';
import {useState} from 'react';
import {inter} from '@/src/app/layout';
import Language from '@/src/components/about/Language';
import {tabs} from '@/src/components/about/about-language-data'

export default function LanguageSection(){

    const [activeTab, setActiveTab] = useState("Web");

    return(
        <>
            <div>
                <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6 overflow-x-auto">
                    {Object.keys(tabs).map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`text-xl ${inter.className} ${
                        activeTab === tab? 'text-white font-semibold p-1 bg-red-400 rounded-md' : 'text-gray-400'}`}>
                            {tab}
                    </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 p-2 justify-center">
                    {tabs[activeTab as keyof typeof tabs].map(({name, icon}) => (
                        <Language key={name} name={name} icon={icon}/>
                    ))}
                </div>  
            </div>
        </>
    );

}