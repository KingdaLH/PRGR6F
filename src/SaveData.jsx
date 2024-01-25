import {useContext} from 'react'
import {ContextApi} from './ContextApi.jsx'

let endPoint = "";

function SaveData({ mode, id }) {
    const {setUpdate} = useContext(ContextApi);

    async function handleSubmit(e) {
        e.preventDefault();

        const data = Array.from(e.target.elements)
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

        if (mode === "update") {
            endPoint = "http://185.228.81.142:8080/cards/" + id;
            mode = "PUT"
        }
        else {
            endPoint = "http://185.228.81.142:8080/cards";
            mode = "POST"
        }

        const response = await fetch(endPoint, {
            method: mode,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        setUpdate(true);
        location.href = "/";
    }

  return handleSubmit;
}

export default SaveData;