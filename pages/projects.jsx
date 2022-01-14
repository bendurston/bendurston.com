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
    <div>
      <h1>Projects</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 m-3">
        {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              inDevelopment={project.inDevelopment}
              technologies={project.technologies}
              link={project.link}
            />
        ))}
      </div>
    </div>
  );
}
