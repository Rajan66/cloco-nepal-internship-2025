import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Loader2 className="size-16 animate-spin text-blue-600" />
        </div>
    );
};

export default Loading;
