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
      {projects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          inDevelopment={project.inDevelopment}
          image={project.image}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}
