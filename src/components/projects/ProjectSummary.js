import React from 'react';


const ProjectSummary = ({ project }) => {
    return (
        <div className="card project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.projectName}</span>
                <p>Posted by: {project.authorFirstName} {project.authorLastName}</p>
                <div className="grey-text">date</div>
            </div>
        </div>
    )
}

export default ProjectSummary