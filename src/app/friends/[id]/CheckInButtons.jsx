"use client";

import { useContext } from "react";
import { TimeLineContext } from "../../context/TimelineContext";
import { Phone, MessageCircle, Video } from "lucide-react";

const CheckInButtons = ({ friendName }) => {
    const { addTimeline } = useContext(TimeLineContext);

    return (
        <div className="grid grid-cols-3 gap-4">
            <button onClick={() => addTimeline(`📞 Call with ${friendName}`, "call")} className="flex flex-col items-center gap-2 py-5 border border-gray-100 rounded-2xl hover:bg-gray-50 transition hover:shadow-sm">
                <Phone size={20} className="text-gray-700" />
                <span className="text-sm text-gray-600">Call</span>
            </button>
            <button onClick={() => addTimeline(`💬 Text with ${friendName}`, "text")} className="flex flex-col items-center gap-2 py-5 border border-gray-100 rounded-2xl hover:bg-gray-50 transition hover:shadow-sm">
                <MessageCircle size={20} className="text-gray-700" />
                <span className="text-sm text-gray-600">Text</span>
            </button>
            <button onClick={() => addTimeline(`🎥 Video with ${friendName}`, "video")} className="flex flex-col items-center gap-2 py-5 border border-gray-100 rounded-2xl hover:bg-gray-50 transition hover:shadow-sm">
                <Video size={20} className="text-gray-700" />
                <span className="text-sm text-gray-600">Video</span>
            </button>
        </div>
    );
};

export default CheckInButtons;