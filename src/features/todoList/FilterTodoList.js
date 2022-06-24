


export const FilterTodoList = ({onFilterClicks}) => {
    
    const {onViewAllClicked, onViewCompletedClicked, onViewUnCompletedClicked} = onFilterClicks

    return (
        <div>
            <button onClick={onViewAllClicked}>All</button>
            <button onClick={onViewUnCompletedClicked}>Uncompleted</button>
            <button onClick={onViewCompletedClicked}>Completed</button>
        </div>
    )


}