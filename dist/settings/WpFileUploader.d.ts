import React from "react";
interface WpFileUploaderProps {
    frameButtonTitle: string;
    frameHeaderTitle: string;
    uploadButtonText: string;
    containerClassName?: string;
    onSelect: (imageObject: {
        url: string;
    } | null) => void;
}
declare const WpFileUploader: React.FC<WpFileUploaderProps>;
export default WpFileUploader;
