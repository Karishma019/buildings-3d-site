import React from 'react';
import '@google/model-viewer';
import Header from "../components/Header.jsx";

const ModelViewer = ({ src, alt, autoRotate = true, cameraControls = true, ...props }) => {

    return (
        <>
            {/* Model Viewer Component */}
            <model-viewer
                src={src}
                alt={alt}
                auto-rotate={autoRotate}
                camera-controls={cameraControls}
                {...props}
            >
                <Header formPage={true} />
                {/* AR Button */}
                <button id='ar-button' slot="ar-button" >
                    View in AR
                </button>
            </model-viewer>
            
            
        </>
        
    );
};

export default ModelViewer;