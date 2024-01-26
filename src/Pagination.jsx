import React from 'react'

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    console.log(nPages);
    console.log(currentPage);
    console.log(setCurrentPage);

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const goToNextPage = () => {
        if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }

    return (
        <>
            <div className='pagination w-screen flex justify-center items-center bg-black mb-7 mt-7 p4'>
                <div className="page-item">
                    <a className="page-link bg-purple-300 hover:bg-amber-100 text-black font-bold py-2 px-4" 
                        onClick={goToPrevPage} 
                        href='#'>
                        
                        Previous
                    </a>
                </div>
                {pageNumbers.map(pgNumber => (
                    <div key={pgNumber} 
                        className= {`page-item ${currentPage == pgNumber ? 'active' : ''} `} >

                        <a onClick={() => setCurrentPage(pgNumber)}  
                            className="page-link bg-purple-300 hover:bg-amber-100 text-black font-bold py-2 px-4" 
                            href='#'>
                            
                            {pgNumber}
                        </a>
                    </div>
                ))}
                <div className="page-item">
                    <a className="page-link bg-purple-300 hover:bg-amber-100 text-black font-bold py-2 px-4" 
                        onClick={goToNextPage}
                        href='#'>
                        
                        Next
                    </a>
                </div>
            </div>
        </>
    )
}

export default Pagination