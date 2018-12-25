import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.projectName}</span>
                <p>Posted by KizaRamic</p>
                <p className="grey-text">Date of making </p>
            </div>
        </div>
    )
}

export default ProjectSummary