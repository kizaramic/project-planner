export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //making async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Zoran',
            authorLastName: 'Ramic',
            authorId: 11223414,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err: err })
        })
    }
};