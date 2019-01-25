export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //making async call to database while pausing the dispatch
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
            ...project
        })
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT', project });
            }).catch((err) => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err })
            })
    }
};