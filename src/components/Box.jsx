import React from 'react';

const Box = ({ inProgress, resolved }) => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-6 px-10 mt-10">
<div className="bg-linear-to-tr from-[#4c229f] to-[#8c54c3] 
 text-white p-10 rounded-xl shadow text-center">
<h2 className="text-2xl font-bold">In-Progress</h2>
<p className="text-4xl mt-4">{inProgress}</p>
</div>
<div className="bg-linear-to-br  from-[#5ec74e] to-[#1e7e72] text-white p-10 rounded-xl shadow text-center">
<h2 className="text-2xl font-bold">Resolved</h2>
<p className="text-4xl mt-4">{resolved}</p>
</div>
</div>
        </div>
    );
};

export default Box;