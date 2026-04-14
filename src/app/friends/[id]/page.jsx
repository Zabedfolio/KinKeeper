import React from 'react';

const FriendDetails = async({params}) => {
    const {id} = await params;
    // console.log(id, "params")
    return (
        <div>
            This is friends detail page
        </div>
    );
};

export default FriendDetails;