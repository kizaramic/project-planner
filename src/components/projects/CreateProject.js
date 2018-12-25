import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        projectName: "",
        content: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="projectName">Project Name</label>
                        <input type="text" id="projectName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: project => dispatch(createProject(dispatch))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)