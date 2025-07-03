import {useState} from 'react';
import {
  IconFileTypeHtml, IconFileTypeCss, IconFileTypeJs, IconBrandPython,
  IconBrandBootstrap, IconBrandPhp, IconBrandLaravel, IconBrandTailwind,
  IconFileTypeXml, IconBrandFlutter, IconBrandMysql, IconBrandFirebase,
  IconBrandAdobePhotoshop, IconBrandFigma, IconAssembly, IconSquareFilled 
} from '@tabler/icons-react';
import {inter} from '@/src/app/layout';
import Language from '@/src/components/about/Language';

const  TabContent = {
    Web: [
        { name: "HTML", icon: <IconFileTypeHtml/> },
        { name: "CSS", icon: <IconFileTypeCss/> },
        { name: "JavaScript", icon: <IconFileTypeJs/> },
        { name: "Python", icon: <IconBrandPython/> },
        { name: "Flask", icon: <IconSquareFilled/> },
        { name: "Jinja", icon: <IconSquareFilled/> },
        { name: "Bootstrap", icon: <IconBrandBootstrap/> },
        { name: "PHP", icon: <IconBrandPhp/> },
        { name: "Laravel", icon: <IconBrandLaravel/> },
        { name: "Blade", icon: <IconSquareFilled/> },
        { name: "Tailwind", icon: <IconBrandTailwind/> },
    ],
    Mobile: [
        { name: "Java", icon: <IconSquareFilled/> },
        { name: "XML", icon: <IconFileTypeXml/> },
        { name: "Dart", icon: <IconSquareFilled/> },
        { name: "Flutter", icon: <IconBrandFlutter/> },
    ],
    Database: [
        { name: "MySQL", icon: <IconBrandMysql/> },
        { name: "SQLite", icon: <IconSquareFilled/> },
        { name: "Firebase", icon: <IconBrandFirebase/> },
    ],
    Design: [
        { name: "Photoshop", icon: <IconBrandAdobePhotoshop/> },
        { name: "Figma", icon: <IconBrandFigma/> },
    ],
    Other: [
        { name: "C", icon: <IconSquareFilled/> },
        { name: "Assembly", icon: <IconAssembly/> },
        { name: "COBOL", icon: <IconSquareFilled/> },
    ]
};

export default function LanguageSection(){

    const [activeTab, setActiveTab] = useState("Web");

    return(
        <>
            <div>

                <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6 overflow-x-auto">
                    {Object.keys( TabContent).map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`text-xl ${inter.className} ${
                        activeTab === tab? 'text-white font-semibold p-1 bg-red-400 rounded-md' : 'text-gray-400'}`}>
                            {tab}
                    </button>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 p-2 justify-center">
                    { TabContent[activeTab as keyof typeof  TabContent].map(({name, icon}) => (
                        <Language key={name} name={name} icon={icon}/>
                    ))}
                </div>  
                 
            </div>
        </>
    );

}