import React from 'react'

const Form = () => {

    const inputTextHandler = (e) =>{
        console.log(e)
    }


    return (
    <>
    <form>
        {/* The code below states that WHENEVER our INPUT CHANGES then our function would be called. */}
        <input onChange={inputTextHandler} type="text" className="todo-input"/>
        <button className="todo-button" type="submit">
            <i className='fas fa-plus-square'></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    </>
    )
}

export default Form
