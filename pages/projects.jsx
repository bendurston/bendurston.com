import Project from "../components/project";

import { getProjects } from "../lib/api/api";

export async function getStaticProps() {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  return (
    <div className="slate-100">
      <div className="grid justify-items-center mb-4 mt-8">
        <h1 className="font-lato text-6xl font-extrabold">PROJECTS</h1>
        <p className="font-lato text-xl font-thin">
          Projects that I have or am currently working on.
        </p>
      </div>
      <div className="container m-auto">
        <div className="flex flex-wrap justify-center">
          {projects.map((project, index) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.descriptionHTML}
              inDevelopment={project.inDevelopment}
              technologies={project.technologies}
              link={project.link}
              linkText={project.linkText}
              delayMulti={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
