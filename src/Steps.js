import React, {useState} from "react";
import {Step} from "./Step";

export function Steps (props) {
    const [form, setForm] = useState({
        date: "",
        distance: ""
    })
    const [state, setState] = useState({
        results: []
    })
    const submitHandler = evt => {
        evt.preventDefault()
        let date = form.date
        let distance = form.distance
        console.log(date, distance)
        addResult({date: form.date, distance: form.distance})
        clearForm()
    }
    const addResult = (res) => {
        let newResult = state.results
        newResult.push(res)
        setState({results: newResult})
    }

    const updateForm = (unit) => {
        setForm({date: unit.date, distance: unit.distance})
        deleteResult(unit.index)
    }

    const clearForm = () => {
        setForm({date: '', distance: ''})
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
    const changeHandler = evt => {
        switch(evt.target.name) {
            case 'date':
                setForm({date: evt.target.value, distance: form.distance})
            break;
            case 'distance':
                setForm({date: form.date, distance: evt.target.value})
            break;
        }

    }

    return (
        <>
            <form onSubmit={submitHandler} onChange={changeHandler}>
                <label htmlFor="date">Дата(ДД.ММ.ГГ)</label>
                <input id="date" name="date" value={form.date} />
                <label htmlFor="distance">Пройдено км</label>
                <input id="distance" name="distance" value={form.distance}/>
                <button type="submit">OK</button>
            </form>
            <Step results = {state.results} deleteHandler = {deleteResult} updateForm = {updateForm}/>
        </>
    )
}


