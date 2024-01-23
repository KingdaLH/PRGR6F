import {useEffect, useState} from 'react'
import {Link, useParams} from "react-router-dom";

function DeletePage() {
    const {id} = useParams();
  
    useEffect(() => {
        async function deleteDetail() {
            const response = await fetch("http://185.228.81.142:8080/cards/" + id, {
                method: "DELETE",
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
            }
            deleteDetail()
            .catch(console.error);
        }, []);
  
        return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-black p-6 rounded-lg shadow-md w-full max-w-screen-md">
            Deleted
        </div>
    </div>
        );
    }
  
    export default DeletePage;