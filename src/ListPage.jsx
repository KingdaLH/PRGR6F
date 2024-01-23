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
            <div className="min-h-screen min-w-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-black p-6 rounded-lg shadow-md w-full">
                    <h1 className="text-2xl font-semibold mb-4 text-white">Card List</h1>
                    {list && list.items.map((item) => (
                        <div key={item.id} className="bg-purple-300 mb-4 p-4 rounded shadow-md hover:shadow-lg">
                            <div className="mb-2">
                                <span className="font-bold">Rank:</span> {item.rank}
                            </div>
                            <div className="mb-2">
                                <span className="font-bold">Suit:</span> {item.suit}
                            </div>
                            <div className="text-blue-500 underline">
                                <Link to={`/cards/${item.id}`}>
                                    Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
  
export default ListPage;