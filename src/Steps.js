import React, {useState} from "react";
import {Step} from "./Step";
import {Form} from "./Form"

export function Steps (props) {
    const [state, setState] = useState({
        results: []
    })

    const addResult = (res) => {
        let newResult = state.results
        newResult.push(res)
        setState({results: newResult})
    }

    const deleteResult = (resIndex) => {
        let newResult = []
        state.results.forEach((elem, i) => {
            if(resIndex !== i) {
                newResult.push(elem)
            }
        })
        setState({results: newResult})
    }

    return (
        <>
            <Form addResult={addResult} deleteResult={deleteResult}/>
            <Step results = {state.results} deleteHandler = {deleteResult} />
        </>
    )
}


