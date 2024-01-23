import App from "./App.jsx";
import React, { useState } from 'react';

const colorOptions = ['Yellow', 'Green', 'Purple', 'Blue'];
const entityOptions = ['Shub-Niggurath', 'King in Yellow', 'Cthulhu', 'Nyarlathotep'];
const suitOptions = ['Diamonds', 'Clubs', 'Spades', 'Hearts'];

const initialFormData = {
    rank: '',
    suit: '',
    color: 'Purple',
    role: '',
    num: '',
    entity: 'Shub-Niggurath',
};

function Form() {

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <form onSubmit={handleSubmit} className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="rank">
                        Rank
                    </label>
                    <input
                        type="text"
                        id="rank"
                        name="rank"
                        value={formData.rank}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter rank"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="suit">
                        Suit
                    </label>
                    <select
                        id="suit"
                        name="suit"
                        value={formData.suit}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="color">
                        Color
                    </label>
                    <select
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    >
                        {colorOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="role">
                        Role
                    </label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter role"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="number">
                        Number
                    </label>
                    <input
                        type="text"
                        id="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="entity">
                        Entity
                    </label>
                    <select
                        id="entity"
                        name="entity"
                        value={formData.entity}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form