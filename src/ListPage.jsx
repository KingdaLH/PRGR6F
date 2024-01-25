import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListPage() {
    const [list, setList] = useState(null);
    const [selectedRank, setSelectedRank] = useState("");
    const [selectedSuit, setSelectedSuit] = useState("");
    const rankOptions = Array.from({ length: 100 }, (_, i) => (i + 1).toString());
    const suitOptions = ["diamonds", "hearts", "clubs", "spades"];

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

    const handleRankChange = (e) => {
        setSelectedRank(e.target.value);
    };

    const handleSuitChange = (e) => {
        setSelectedSuit(e.target.value);
    };

    const filteredList = list && list.items ? list.items.filter((item) => {
        const rankFilter = selectedRank ? item["rank"] === selectedRank : true;
        const suitFilter = selectedSuit ? item["suit"] === selectedSuit : true;
        return rankFilter && suitFilter;
    }) : [];

    if (!list) {
        return <div>Loading...</div>;
    }

    return (
        <div className="wrapper">
            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <span className="sr-only">Search card</span>
                </label>
                <select value={selectedRank} onChange={handleRankChange}
                        className="block w-screen appearance-none bg-amber-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500 focus:bg-amber-100 focus:shadow-outline">
                    <option value="">All Ranks</option>
                    {rankOptions.map((rank) => (
                        <option key={rank} value={rank}>{rank}</option>
                    ))}
                </select>
                <select value={selectedSuit} onChange={handleSuitChange}
                        className="block w-screen appearance-none bg-amber-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-blue-500 focus:bg-amber-100 focus:shadow-outline">
                    <option value="">All Suits</option>
                    {suitOptions.map((suit) => (
                        <option key={suit} value={suit}>{suit}</option>
                    ))}
                </select>
            </div>
            <div className="min-h-screen w-screen bg-black flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto mt-4">
                    {filteredList.map((item) => (
                        <div key={item.id} className="bg-purple-300 p-4 rounded shadow-md hover:shadow-lg">
                            <div className="mb-2">
                                <span className="font-bold">Rank:</span> {item.rank}
                            </div>
                            <div className="mb-2">
                                <span className="font-bold">Suit:</span> {item.suit}
                            </div>
                            <div className="text-amber-100 underline">
                                <Link to={`/cards/${item.id}`}>Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ListPage;
