"use client";

import React, { createContext, useState } from 'react';

const TimeLineContext = createContext();

export { TimeLineContext }; 

const TimelineProvider = ({ children }) => {  
    const [timeline, setTimeline] = useState([]);

    const addTimeline = (text) => {
        const newItem = {
            id: Date.now(),
            text,
            time: new Date().toLocaleString()
        };
        setTimeline((prev) => [newItem, ...prev]);
    };

    return (
        <TimeLineContext.Provider value={{ timeline, addTimeline }}>  {/* ← capital P */}
            {children}
        </TimeLineContext.Provider>
    );
};

export { TimelineProvider };

export default TimelineProvider;