
export function getPublicApiUrl(path){
    return `${
        process.env.PUBLIC_API_URL || "http://localhost:1337"
    }${path}`;
}


export async function getProjects() {
    const requestUrl = getPublicApiUrl('/api/projects');
    const reponse = await fetch('http://localhost:1337/api/projects');
    const data = await reponse.json();
    return data;
}
