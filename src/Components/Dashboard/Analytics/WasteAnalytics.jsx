import React from 'react';
import './WasteAnalytics.css';

const Analytics = ({ data }) => {
    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='analytics'>
            <h2>Analytics</h2>
            <div className='analytics-section'>
                <h3>Total Waste Data</h3>
                <ul>
                    {data.totalWasteData.map((item, index) => (
                        <li key={index}>
                            <span>Waste Quantity: {item.wasteQuantityInKg} kg</span>
                            <span>Amount: {item.amount} USD</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='analytics-section'>
                <h3>Total Rejected Waste Data</h3>
                <ul>
                    {data.totalRejectedWasteData.map((item, index) => (
                        <li key={index}>
                            <span>Waste Quantity: {item.wasteQuantityInKg} kg</span>
                            <span>Amount: {item.amount} USD</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='analytics-section'>
                <h3>Total Pending Waste Data</h3>
                <ul>
                    {data.totalPendingdWasteData.length === 0 ? (
                        <li>No Pending Waste Data</li>
                    ) : (
                        data.totalPendingdWasteData.map((item, index) => (
                            <li key={index}>
                                <span>Waste Quantity: {item.wasteQuantityInKg} kg</span>
                                <span>Amount: {item.amount} USD</span>
                            </li>
                        ))
                    )}
                </ul>
            </div>
            <div className='analytics-section'>
                <h3>Total Sold Waste Type Wise Data</h3>
                <ul>
                    {data.totalSoldWasteTypeWiseData.map((item, index) => (
                        <li key={index}>
                            <span>Waste Type: {item._id.wasteType}</span>
                            <span>Waste Quantity: {item.wasteQuantityInKg} kg</span>
                            <span>Amount: {item.amount} USD</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='analytics-section'>
                <h3>Total Sold Waste Collector Wise Data</h3>
                <ul>
                    {data.totalSoldWasteCollectorWiseData.map((item, index) => (
                        <li key={index}>
                            <span>Collector ID: {item._id.wasteCollectorId}</span>
                            <span>Waste Quantity: {item.wasteQuantityInKg} kg</span>
                            <span>Amount: {item.amount} USD</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Analytics;
