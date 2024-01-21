import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function ListPage() {
    const [list, setList] = useState(null);
 
    useEffect(() => {
        async function getList() {
            const response = await fetch("http://185.228.81.142:8080/cards", {
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
                setList(data);
            }
            getList()
            .catch(console.error);
        }, []);
  
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-black p-6 rounded-lg shadow-md w-full max-w-screen-md">
                    <h1 className="text-2xl font-semibold mb-4">Card List</h1>
                    <table className="w-full table-auto">
                        <thead>
                        <tr>
                            <th className="px-4 py-2">Rank</th>
                            <th className="px-4 py-2">Suit</th>
                            <th className="px-4 py-2">Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        {list && list.items.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-500">
                                <td className="border px-4 py-2">{item.rank}</td>
                                <td className="border px-4 py-2">{item.suit}</td>
                                <td className="border px-4 py-2 text-blue-500 underline"><Link to={`/cards/${item.id}`}>
                                    Details
                                </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
  
export default ListPage;
