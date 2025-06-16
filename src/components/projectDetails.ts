import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";
import { FaAws, FaReact } from "react-icons/fa";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "1800 Spirits",
        description:
            "Contributed to the development of a US-based marketplace for alcoholic beverages, focusing on frontend and backend services. Implemented features such as product search, filtering, and user authentication, enhancing the overall user experience.",
        technologies: [SiTypescript, SiReact, FaAws, SiNodedotjs, FaReact],
        techNames: ["TypeScript", "React", "AWS", "Node.js", "React Native"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/",  "https://aws.amazon.com/console/", "https://nodejs.org/en",  "https://reactnative.dev/"],
        github: "https://github.com/karthikmudunuri/eldoraui",
        demo: "www.1800spirits.com",
        image: "/projects/eldoraui.png",
        available: true,
    },
    // {
    //     id: 1,
    //     name: "VR MALL",
    //     description:
    //         "Developed an virtual mall by using Three.js and Typescript..",
    //     technologies: [SiWebgl,SiTypescript, SiReact],
    //     techNames: ["WebGL", "Typescript", "React"],
    //     techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
    //     github: "https://github.com/karthikmudunuri/VRMALL",
    //     demo: "https://vrmalldemo.netlify.app/",
    //     image: "/projects/vrmall.png",
    //     available: true,
    // },
    // {
    //     id: 2,
    //     name: "VR MALL",
    //     description:
    //         "Developed an virtual mall by using Three.js and Typescript..",
    //     technologies: [SiWebgl,SiTypescript, SiReact],
    //     techNames: ["WebGL", "Typescript", "React"],
    //     techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
    //     github: "https://github.com/karthikmudunuri/VRMALL",
    //     demo: "https://vrmalldemo.netlify.app/",
    //     image: "/projects/vrmall.png",
    //     available: true,
    // },
    // {
    //     id: 3,
    //     name: "VR MALL",
    //     description:
    //         "Developed an virtual mall by using Three.js and Typescript..",
    //     technologies: [SiWebgl,SiTypescript, SiReact],
    //     techNames: ["WebGL", "Typescript", "React"],
    //     techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
    //     github: "https://github.com/karthikmudunuri/VRMALL",
    //     demo: "https://vrmalldemo.netlify.app/",
    //     image: "/projects/vrmall.png",
    //     available: true,
    // },
    // {
    //     id: 4,
    //     name: "VR MALL",
    //     description:
    //         "Developed an virtual mall by using Three.js and Typescript..",
    //     technologies: [SiWebgl,SiTypescript, SiReact],
    //     techNames: ["WebGL", "Typescript", "React"],
    //     techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
    //     github: "https://github.com/karthikmudunuri/VRMALL",
    //     demo: "https://vrmalldemo.netlify.app/",
    //     image: "/projects/vrmall.png",
    //     available: true,
    // }
];
