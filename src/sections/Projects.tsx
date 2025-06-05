import AnimatedBody from "@/animations/AnimatedBody";
import AnimatedTitle from "@/animations/AnimatedTitle";
import CardCarousel from "@/components/card-carousel";
import { projects, ProjectProps } from "@/components/projectDetails";
import ProjectCardBlack from "@/components/ui/ProjectcardBlack";
import { LanyardCard } from "@/Lanyard/lanyard";

const Projects = () => {
    const ProjectCardContentBlack = [
  {
    title: "1800 Spirits",
    description: "Contributed to the development of a US-based marketplace for alcoholic beverages, focusing on frontend and backend services.",
    technologies: ['React', 'AWS', 'TypeScript', 'Node.js', 'Chakra UI'],
    techColors: ['#818CF8', '#38B2AC', '#3178C6', '#8CC84B', '#FBBF24'],
    imageUrl: "https://images.unsplash.com/photo-1717954681473-2b3c638fbd19?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    projectUrl: "https://i.imgur.com/VRtqhGC.png",
    githubUrl: "https://i.imgur.com/VRtqhGC.png"
  },
]
    return (
        <section
            className="relative z-10 h-full w-full overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className=" flex flex-col place-content-center">
                <AnimatedTitle
                    text={"My Work"}
                    className={
                        "mb-4 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="flex w-[100%] flex-col lg:gap-20">
                    {/* <ProjectCardBlack
                    ProjectCardContent={ProjectCardContentBlack}
                    /> */}
                  {/* {projects.map((project: ProjectProps) => (
                    <ProjectCardBlack
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        techNames={project.techNames}
                        techLinks={project.techLinks}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                        available={project.available}
                    />
                ))} */}
                <CardCarousel/>
                </div>
            </div>
            {/* <LanyardCard
      className="rounded-lg shadow-xl"
      height="80vh"
     
    /> */}
        </section>
    );
};

export default Projects;