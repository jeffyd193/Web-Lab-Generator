export default function appReducer(state, action) {
    switch(action.type) {
        case "ADD_SECTION":
            return {
                ...state,
                sections: [...state.sections, action.payload],
            };

            case "EDIT_SECTION":
                const updatedSection = action.payload;

                const updatedSections = state.sections.map((section) => {
                    if(section.id === updatedSection.id) {
                        return updatedSection;
                    }
                    return section;
                });

                return {
                    ...state,
                    sections: updatedSections,
                };

                case "REMOVE_SECTION":
                    return {
                        ...state,
                        sections: state.sections.filter(
                            (section) => section.id !== action.payload
                        ),
                    };
                default:
                    return state;
    }
};