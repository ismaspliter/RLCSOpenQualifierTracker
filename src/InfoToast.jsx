// InfoToast.js
import React from 'react';

const InfoToast = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto p-6 relative">
                {/* Botón para cerrar el toast */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

               

                {/* Contenido del toast */}
                <div className="space-y-4 text-gray-800">
                     {/* Título */}
                    <h2 className="text-3xl font-bold mb-4 text-center">
                        Live Tracker Open Qualifier EUROPE #3
                    </h2>
                    <p>
                        This page is a real-time tracker for the Europe Open Qualifier results. Data is automatically fetched from&nbsp;
                        <a
                            href="https://www.start.gg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            start.gg
                        </a>
                        &nbsp;every 10 minutes. An automated process updates the repository with the latest data, allowing it to be displayed here in real time.
                    </p>
                    <p>
                        The filters enable you to search by player or team name, as well as filter by the top 5 countries with the highest number of participants. In future updates, you will be able to choose from all available countries.
                    </p>
                    <p>
                        Additional filters allow you to sort teams by their tournament status and use a pool filter to view all potential rivals based on seeding and pool assignments.
                    </p>
                    <p>
                        This project was developed by&nbsp;
                        <a
                            href="https://twitter.com/ismaspliter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            @ismaspliter
                        </a>.
                    </p>
                    <p>
                        <strong>Acknowledgements:</strong> Many thanks to everyone who contributed to its testing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoToast;
