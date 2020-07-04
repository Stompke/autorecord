import React from 'react';

// Components
import Record from './Record';

const RecordDashboard = () => {

    return (
        <>
        <h1>Record Dashboard</h1>
        <Record vehicle='Porsche'/>
        <Record vehicle='Odyssey'/>
        <Record vehicle='Sidekick'/>
        </>
    )
}

export default RecordDashboard