import {useContext, useEffect, useState} from 'react';
import {ContextApi} from './ContextApi';
import Records from './Records.jsx';
import Pagination from './Pagination.jsx';

let caption = "";

function ListPage() {
    const {cardList, setCardList, update, setUpdate} = useContext(ContextApi);
    const [list, setList] = useState(null);
    const [selectedRank, setSelectedRank] = useState("");
    const [selectedSuit, setSelectedSuit] = useState("");

    const rankOptions = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suitOptions = ["diamonds", "hearts", "clubs", "spades"];

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    console.log(update);

    useEffect(() => {
        async function getList() {
            if (update) {
                caption = "Card List from fetch";

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
                    setCardList(data);
                    setUpdate(false);
                }
                else
                {
                    caption = "Card List from Context";
                    setList(cardList);
                }
            }
            getList()
            .catch(console.error);
        }, []);

        const handleRankChange = (e) => {
            caption = "Card List from Context";
            setSelectedRank(e.target.value);
        };
    
        const handleSuitChange = (e) => {
            caption = "Card List from Context";
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
    
        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        const currentRecords = filteredList.slice(indexOfFirstRecord, indexOfLastRecord);
        const nPages = Math.ceil(filteredList.length / recordsPerPage);

    return (
        <div className="wrapper bg-black w-screen">
            <div className="search-wrapper">
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
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <h1 className="text-2xl w-screen font-semibold text-white bg-black m5 p5">{caption}</h1>
            <Records data={currentRecords}/>
        </div>
    )
}

export default ListPage
