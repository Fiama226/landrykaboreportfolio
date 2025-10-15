import { projectsData } from "./projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#020817] min-h-screen relative z-50 py-12 "
    >
      {/* ===== Title Section ===== */}
      <div className="py-12 relative z-20">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full py-30 absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>

        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Projects
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
      </div>

      {/* ===== Project Cards Section ===== */}
      <div className="pt-40 relative z-10">
        {" "}
        {/* 👈 added pt-40 to push below title */}
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky w-full mx-auto max-w-2xl"
              style={{ top: `calc(${index} * 4rem + 6rem)` }} // 👈 offset by 6rem
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
