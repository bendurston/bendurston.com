import Project from '../components/project'

import { getProjects } from "../lib/api/api"
import Image from 'next/image'

export async function getStaticProps() {
    const projects = await getProjects()
    
    return {
        props: {
            projects
        },
    }
}

export default function Projects ({ projects }) {
    return (
        <div>
            <div>
                <Project />
                {console.log(projects)}
            </div>
        </div>
    )
}