import React, { useRef, useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { drawImageOnCanvas, generateImage } from '@/Components/utils';

const renderComponent = ({onInputChange, ratio}) => {
    const [image, setImage] = useState();

    const [imgSrc, setImgSrc] = useState();
    const [crop, setCrop] = useState();
    const [completedCrop, setCompletedCrop] = useState(null);

    const imgRef = useRef(null);
    const canvasRef = useRef(null);

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setImgSrc(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    function getImage(){
        return image
    }

    const handleCompleteCrop = async (crop) => {
        drawImageOnCanvas(imgRef.current, canvasRef.current, crop);
        setCompletedCrop(crop);
        const img = await generateImage(canvasRef.current, completedCrop);
        onInputChange(img)
        setCompletedCrop(crop);
    };

    // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
    const canvasStyles = {
        width: Math.round(completedCrop?.width ?? 0),
        height: Math.round(completedCrop?.height ?? 0),
    };

    return (
        <div className='App'>
            <div className='FileSelector'>
                <input
                    id='file'
                    type='file'
                    accept='image/*'
                    onChange={handleFileSelect}
                    placeholder='Choose file'
                />
            </div>

            <div className='CropperWrapper'>
                <ReactCrop
                    crop={crop}
                    onChange={setCrop}
                    aspect={ratio}
                    onComplete={handleCompleteCrop}
                >
                    {imgSrc && <img ref={imgRef} src={imgSrc} alt='cropper image' width={500}/>}
                </ReactCrop>
                <div className='CanvasWrapper'>
                    {imgSrc && <h1 className='font-bold text-xl'>Foto yang telah dipotong</h1>}
                    {/* Canvas to display cropped image */}
                    <canvas ref={canvasRef} style={canvasStyles} />
                </div>
            </div>
        </div>
    );
}

export default renderComponent;
