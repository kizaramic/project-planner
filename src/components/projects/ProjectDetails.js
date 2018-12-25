import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
    const { project } = props;
    if (project) {
        return (
            <div>
                <div className="container section project-details">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{project.projectName} </span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by: {project.authorFirstName} {project.authorLastName} </div>
                            <div> Here comes the date ya alll</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading, just a sec...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'project' }
    ])
)(ProjectDetails)