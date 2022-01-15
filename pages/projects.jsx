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
//grid md:grid-cols-2 grid-cols-1 gap-6
export default function Projects({ projects }) {
  return (
    <div className="container m-auto justify-center">
      <h1>Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              inDevelopment={project.inDevelopment}
              technologies={project.technologies}
              link={project.link}
              linkText={project.linkText}
            />
        ))}
      </div>
    </div>
  );
}
