import React, {useState} from 'react';

export function Form (props) {
    const [form, setForm] = useState({
        date: "",
        distance: ""
    })

    const submitHandler = evt => {
        evt.preventDefault()
        let date = form.date
        let distance = form.distance
        console.log(date, distance)
        props.addResult({date: form.date, distance: form.distance})
        clearForm()
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

    const clearForm = () => {
        setForm({date: '', distance: ''})
    }

    return (
        <form onChange={changeHandler} onSubmit={submitHandler}>
            <label htmlFor="date">Дата(ДД.ММ.ГГ)</label>
            <input id="date" name="date" value={form.date} />
            <label htmlFor="distance">Пройдено км</label>
            <input id="distance" name="distance" value={form.distance}/>
            <button type="submit">OK</button>
        </form>
    )
}