import React from 'react';
import './App.css';
import Webcam from 'react-webcam';

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
            <header className="App-header">
                <Webcam ref={webCamRef} audio={false} height={720} screenshotFormat="image/jpeg" width={1280} />
                <button onClick={capture}> capture </button>
                {imgSrc && <img src={imgSrc} alt={'kaki'} />}
            </header>
        </div>
    );
}

export default App;
