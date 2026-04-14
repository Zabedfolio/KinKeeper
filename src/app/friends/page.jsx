import React from 'react';
import friends from "../../data/friends.json";

const getStatusColor = (status = "") => {
    const s = status.toLowerCase().trim();

    if (s === "almost due") return "bg-yellow-100 text-yellow-700";
    if (s === "overdue") return "bg-red-100 text-red-700";
    return "bg-green-100 text-green-700";
};

const Friends = () => {
    return (
        <>
            {friends.map((friend, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center text-center gap-2">
                    <img
                        src={friend.picture}
                        alt={friend.name}
                        className="w-16 h-16 rounded-full object-cover"
                    />

                    <h3 className="font-semibold text-gray-800 leading-tight">
                        {friend.name}
                    </h3>

                    <p className="text-xs text-gray-400">{friend.days_since_contact}d ago</p>

                    <div className="flex flex-wrap gap-1 justify-center">
                        {friend.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(friend.status)}`}>
                        {friend.status}
                    </span>
                </div>
            ))}
        </>
    );
};

export default Friends;