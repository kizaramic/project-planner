import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.projectName}</span>
                <p>Posted by: {project.authorFirstName} {project.authorLastName}</p>
                <div className="grey-text">{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    )
}

export default ProjectSummary