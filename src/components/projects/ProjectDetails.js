import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';



const ProjectDetails = (props) => {
    const { project, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />

    if (project) {
        return (
            <div>
                <div className="container section project-details" style={{ width: 800 }}>
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">{project.projectName} </span>
                            <p>{project.content}</p>
                        </div>
                        <div className="card-action grey lighten-4 grey-text">
                            <div>Posted by: {project.authorFirstName} {project.authorLastName} </div>
                            <p className="grey-text">date</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading, just a second...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    //console.log(state);

    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)