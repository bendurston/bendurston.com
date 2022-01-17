import { remark } from "remark";
import html from "remark-html";

export function getPublicApiUrl(path) {
  return `${process.env.PUBLIC_API_URL || "http://localhost:1337/api"}${path}`;
}

export async function getProjects() {
  const requestUrl = await getPublicApiUrl("/projects?populate=*");
  const reponse = await fetch(requestUrl);
  const projects = await reponse.json();
  const unsortedProjects = await formatDataToArray(projects.data);
  return sortProjects(unsortedProjects);
}

async function formatDataToArray(data) {
  const projects = [];
  for (let i = 0; i < data.length; i++) {
    let description = (
      await remark().use(html).process(data[i].attributes.description)
    ).toString();
    const project = {
      id: data[i].id,
      descriptionHTML: description,
      ...data[i].attributes,
    };
    projects.push(project);
  }
  return projects;
}

function sortProjects(projects) {
  return projects.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else {
      return 1;
    }
  });
}
