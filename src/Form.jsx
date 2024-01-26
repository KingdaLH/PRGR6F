import {useState, useContext} from 'react'
import {useParams} from "react-router-dom";
import SaveData from "./SaveData.jsx";

import {ContextApi} from './ContextApi.jsx';

const colorOptions = ['Yellow', 'Green', 'Purple', 'Blue'];
const entityOptions = ['Shub-Niggurath', 'King in Yellow', 'Cthulhu', 'Nyarlathotep'];
const suitOptions = ['diamonds', 'clubs', 'spades', 'hearts'];
let mode = "create";
let caption = "";
let buttonText = "";
let initialFormData = {};

function Form() {
    const {card} = useContext(ContextApi);
    const {mode} = useParams();
    const {id} = useParams();

    console.log(mode)

    const handleSubmit = SaveData(
        {mode, id}
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    if (mode === "update") {
        caption = "Card Details from Context"
        buttonText = "Update";

        initialFormData = {
            rank: card.rank,
            suit: card.suit,
            color: card.color,
            role: card.role,
            num: card.num,
            entity: card.entity,
        };
    }
    else {
        caption = "New Card";
        buttonText = "Create";
        
        initialFormData = {
            rank: '',
            suit: 'diamonds',
            color: 'Yellow',
            role: '',
            num: '',
            entity: 'Shub-Niggurath',
        };        
    }

    const [formData, setFormData] = useState(initialFormData);

    return (
        <div className="wrapper bg-black w-screen">
        <h1 className="text-2xl m5 p5 font-semibold text-white bg-black">{caption}</h1>
        <div className="min-h-screen min-w-screen flex bg-black items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-purple-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="rank">
                        Rank
                    </label>
                    <input
                        type="text"
                        id="rank"
                        name="rank"
                        value={formData.rank}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter rank"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="suit">
                        Suit
                    </label>
                    <select
                        id="suit"
                        name="suit"
                        value={formData.suit}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="" disabled>Select a suit</option>
                        {suitOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="color">
                        Color
                    </label>
                    <select
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    >
                        {colorOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="role">
                        Role
                    </label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter role"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="num">
                        Number
                    </label>
                    <input
                        type="text"
                        id="num"
                        name="num"
                        value={formData.num}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2" htmlFor="entity">
                        Entity
                    </label>
                    <select
                        id="entity"
                        name="entity"
                        value={formData.entity}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    >
                        {entityOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-span-2 flex items-center justify-end">
                    <button
                        type="submit"
                        className="bg-purple-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        {buttonText}
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
}
export default Form