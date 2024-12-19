import React from "react";
import ModelViewer from '../components/ModelViewer.jsx';

const ARPage = () => {

    return <>
        <ModelViewer
            src="./models/model.glb"
            alt="3D model"
            style={{ width: '100%', height: '100vh' }}
            ar
            touch-action="pan-y"
            ar-modes='scene-viewer quick-look'
            environment-image="neutral"
            shadow-intensity="1"
        />
    </>
}

export default ARPage;