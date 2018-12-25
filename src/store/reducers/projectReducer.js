const initState = {
    projects: [
        { id: "1", projectName: "Zoran", content: "lalalla" },
        { id: "2", projectName: "Marijana", content: "lalallaajajasjajs" },
        { id: "3", projectName: "Nina", content: "lalallaasdasasd" }
    ]
}


const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return state;
        case 'CREATE_PROJECT_ERROR':
            return state;
        default:
            return state;
    }
}

export default projectReducer