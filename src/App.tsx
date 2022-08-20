import { Typography } from '@material-ui/core';
import React from 'react';
import Webcam from 'react-webcam';
import './App.css';

function App() {
    const webCamRef = React.useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = React.useState<string | null>(null);

    const capture = React.useCallback(() => {
        if (webCamRef.current != null) {
            const img_ = webCamRef.current.getScreenshot();
            setImgSrc(img_);
        }
    }, [webCamRef, setImgSrc]);

    return (
        <div className="App">
            <Typography variant="h3">Diabetes Scan</Typography>
            <Webcam ref={webCamRef} audio={false} screenshotFormat="image/jpeg" />
            <button onClick={capture}> capture </button>
            {imgSrc && <img src={imgSrc} alt={'kaki'} width={320} height={240} />}
        </div>
    );
}

export default App;
