import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URLModal, openModal } from 'react-url-modal';

function ListPage() {
    const [list, setList] = useState(null);

    useEffect(() => {
        async function getList() {
            try {
                const response = await fetch('http://185.228.81.142:8080/cards', {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Response is not okay');
                }

                const data = await response.json();
                setList(data);
            } catch (error) {
                console.error(error);
            }
        }

        getList();
    }, []);

    return (
        <div className="min-h-screen w-screen bg-black flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto mt-4">
                {list &&
                    list.items.map((item) => (
                        <div key={item.id} className="bg-purple-300 p-4 rounded shadow-md hover:shadow-lg">
                            <div className="mb-2">
                                <span className="font-bold">Rank:</span> {item.rank}
                            </div>
                            <div className="mb-2">
                                <span className="font-bold">Suit:</span> {item.suit}
                            </div>
                            <div className="text-blue-500 underline">
                                <Link to={`/cards/${item.id}`}>Details</Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ListPage;
