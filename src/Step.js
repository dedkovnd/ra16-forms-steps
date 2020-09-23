import React from "react";

export function Step (props) {

    return (
        <>
            <table>
                <tr>
                    <th>Дата</th>
                    <th>Пройдено</th>
                    <th>Действие</th>
                </tr>
                {props.results.map((result, i) =>
                    <tr key={i}>
                        <td>{result.date}</td>
                        <td>{result.distance}</td>
                        <td>
                            <span onClick = {(e)=>
                                props.updateForm({ index: i,
                                    date: result.date,
                                    distance: result.distance})}>изменить</span>
                            <span onClick = {(e)=>
                                props.deleteHandler(i)}>&times;</span>
                        </td>
                    </tr>)}
            </table>
        </>
    )
}

