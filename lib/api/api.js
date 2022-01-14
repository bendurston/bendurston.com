export function getPublicApiUrl(path) {
  return `${process.env.PUBLIC_API_URL || "http://localhost:1337/api"}${path}`;
}

export async function getProjects() {
  const requestUrl = await getPublicApiUrl("/projects?populate=*");
  const reponse = await fetch(requestUrl);
  const projects = await reponse.json();
  const unsortedProjects = formatData(projects.data, false);
  return sortProjects(unsortedProjects);
}

function formatData(data, hasImage) {
  if (hasImage) {
    const results = data.map((result) => {
      return {
        id: result.id,
        ...result.attributes,
        image: result.attributes.image.data.attributes,
      };
    });
    return results;
  } else {
    const results = data.map((result) => {
      return {
        id: result.id,
        ...result.attributes,
      };
    });
    return results;
  }
}

function sortProjects(projects) {
    return projects.sort((a, b) => {
        if (a.order < b.order) {
            return -1
          } else {
            return 1
          }
    })
}
