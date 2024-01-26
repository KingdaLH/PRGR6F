import {Link} from "react-router-dom";

const Records = ({data}) => {
    
  return (  
    <div className="min-h-screen w-screen bg-black flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto mt-4">
            {data.map((item) => (
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
    ) 
}

export default Records