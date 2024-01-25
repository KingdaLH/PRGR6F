import {useEffect, useState, useContext} from 'react'
import {Link, useParams} from "react-router-dom";

import {ContextApi} from './ContextApi.jsx';

function DetailPage() {
    const {id} = useParams();
    const [detail, setDetail] = useState({});
    const {setCard} = useContext(ContextApi);

    useEffect(() => {
        async function getDetail() {
            const response = await fetch("http://185.228.81.142:8080/cards/" + id, {
                method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                    }
                });

                if (!response.ok) {
                    throw new Error("Response is not okay");
                }
        
                const data = await response.json();
                console.log(data);
                setDetail(data);
                setCard(data);
            }
            getDetail()
            .catch(console.error);
        }, []);

        return (
        <div className="min-h-screen min-w-screen flex bg-black items-center justify-center">
            <div className="bg-purple-300 p-6 rounded-lg shadow-md w-full max-w-screen-md">
            <h1 className="text-2xl font-semibold mb-4">Card Details from fetch</h1>
            <table className="w-full table-auto">
                <thead>
                <tr>
                    <th className="px-4 py-2">Rank</th>
                    <th className="px-4 py-2">Suit</th>
                    <th className="px-4 py-2">Color</th>
                    <th className="px-4 py-2">Role</th>
                    <th className="px-4 py-2">Num</th>
                    <th className="px-4 py-2">Entity</th>
                    <th className="px-4 py-2">Update</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border px-4 py-2">{detail.rank}</td>
                        <td className="border px-4 py-2">{detail.suit}</td>
                        <td className="border px-4 py-2">{detail.color}</td>
                        <td className="border px-4 py-2">{detail.role}</td>
                        <td className="border px-4 py-2">{detail.num}</td>
                        <td className="border px-4 py-2">{detail.entity}</td>
                        <td className="border px-4 py-2 text-blue-500 underline">
                            <Link to={`/cards/update/${detail.id}`}>
                                Update
                            </Link>
                        </td>
                        <td className="border px-4 py-2 text-blue-500 underline">
                            <Link to={`/cards/delete/${detail.id}`}>
                                Delete
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        );
    }
  
    export default DetailPage;