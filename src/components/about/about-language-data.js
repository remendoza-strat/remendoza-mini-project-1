import {
  IconFileTypeHtml, IconFileTypeCss, IconFileTypeJs, IconBrandPython,
  IconBrandBootstrap, IconBrandPhp, IconBrandLaravel, IconBrandTailwind,
  IconFileTypeXml, IconBrandFlutter, IconBrandMysql, IconBrandFirebase,
  IconBrandAdobePhotoshop, IconBrandFigma, IconAssembly, IconSquareFilled 
} from '@tabler/icons-react';

export const tabs = {
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
        { name: "Tailwind", icon: <IconBrandTailwind/> }
    ],
    Mobile: [
        { name: "Java", icon: <IconSquareFilled/> },
        { name: "XML", icon: <IconFileTypeXml/> },
        { name: "Dart", icon: <IconSquareFilled/> },
        { name: "Flutter", icon: <IconBrandFlutter/> }
    ],
    Database: [
        { name: "MySQL", icon: <IconBrandMysql/> },
        { name: "SQLite", icon: <IconSquareFilled/> },
        { name: "Firebase", icon: <IconBrandFirebase/> }
    ],
    Design: [
        { name: "Photoshop", icon: <IconBrandAdobePhotoshop/> },
        { name: "Figma", icon: <IconBrandFigma/> }
    ],
    Other: [
        { name: "C", icon: <IconSquareFilled/> },
        { name: "Assembly", icon: <IconAssembly/> },
        { name: "COBOL", icon: <IconSquareFilled/> }
    ]
};