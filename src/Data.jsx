import { useState, useEffect } from 'react'

function Get() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://185.228.81.142:8080/cards')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
}

export default Get;