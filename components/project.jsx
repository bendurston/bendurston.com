import { getProjects } from "../lib/api/api"

export async function getStaticProps() {
    const projects = await getProjects()
    return {
        props: {
            projects
        },
    }
}

export default function Project ({ projects }) {
    return (
        <div>
            { console.log(projects) }
            <>{console.log("hello")}</>
        </div>
    )
}