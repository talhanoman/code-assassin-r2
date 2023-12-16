import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom';
import Overlay from 'react-bootstrap/Overlay';
// import { MdOutlineEmail } from "react-icons/md";
import { logo } from '../imagepath'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-chat-elements/dist/main.css';
import FileUploader from '../FileUploader';
import ReactTagsInput from '../pages/course/addCourse/tags';
import { Link } from 'react-router-dom';
export default function FloatingButton() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    const portalContainer = document.createElement('div');
    document.body.appendChild(portalContainer);


    const handleClick = () => setShow(!show);
    const renderPortalContent = () => (
        <div className="floating-button-portal">
              <Overlay target={target.current} show={show} placement="top">
                    {({
                        placement: _placement,
                        arrowProps: _arrowProps,
                        show: _show,
                        popper: _popper,
                        hasDoneInitialMeasure: _hasDoneInitialMeasure,
                        ...props
                    }) => (
                        <div
                            {...props}
                            style={{
                                position: 'absolute',
                                boxShadow: '0 8px 8px -4px #95abbb',                                
                                overflowY: 'auto',
                                height: '70vh',                              
                                borderRadius: 3,
                                zIndex: 1000000,
                                ...props.style,
                            }}
                        >
                            <div className="card">
                                <DoubtScreen />
                            </div>
                        </div>
                    )}
                </Overlay>
        </div>
    );
    return (
        <>
            <>
                <div class="floating-container">
                    <div
                        onClick={handleClick}
                        ref={target}
                        class="floating-button"
                    >
                        <img src={logo} alt="Logo" className='mw-100 mh-100 p-1' />
                    </div>
                    {show && ReactDOM.createPortal(renderPortalContent(), portalContainer)}
                </div>
            </>
        </>
    )
}


const DoubtScreen = () => {
    const textareaRef = useRef(null);
    const [pastedImages, setPastedImages] = useState([]);
    const handlePaste = (event) => {
        const clipboardData = event.clipboardData || window.clipboardData;
        const items = clipboardData.items;

        const newPastedImages = [];

        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            if (item.type.indexOf('image') !== -1) {
                const blob = item.getAsFile();
                const reader = new FileReader();

                reader.onloadend = () => {
                    // Handle the image data (e.g., display it, upload it, etc.)
                    console.log('Pasted Image Data:', reader.result);
                    newPastedImages.push(reader.result);
                    setPastedImages([...pastedImages, ...newPastedImages]);
                };

                reader.readAsDataURL(blob);
            }
        }
    };



    return (

        <div className='rounded-md card-body text-white' style={{ width: '700px', margin: 'auto', zIndex: 1000000 }}>

            {/* <h4 className='text-center text-white bg-orange py-3 rounded' style={{
                opacity: 0.9
            }}>Doubt Submission</h4> */}
            <div className='p-3'>
                <div className="form-group">
                    <label className='text-sm text-dark'>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Doubt Title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label className='text-sm text-dark'>Question Link</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Question Link"
                        required
                    />
                </div>
                <CopyToClipboard text="" onCopy={() => console.log('Text copied')}>
                    <div className="form-group">
                        <label className='text-sm text-dark'>Doubt Description</label>
                        <textarea
                            ref={textareaRef}
                            onPaste={handlePaste}
                            type="text"
                            className="form-control"
                            placeholder="Enter Doubt Description"
                            required
                            rows={4}
                        ></textarea>
                    </div>
                </CopyToClipboard>

                {
                    pastedImages !== null
                    &&
                    <div className='d-flex' >
                        {pastedImages?.map((image, index) => (
                            <div key={index} className="me-3 position-relative">
                                <img
                                    src={image}
                                    className="img-thumbnail img-fluid"
                                    alt={`Pasted from Clipboard ${index + 1}`}
                                    width={80}
                                    height={80}
                                    style={{
                                        aspectRatio: '1',
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                }
                <div className='form-group'>
                    <label className='text-sm text-dark'>Tags</label>
                    <ReactTagsInput />
                </div>
                <div className="form-group">
                    <div className="d-flex justify-content-between">
                        <label className='text-sm text-dark'>Upload Attachment &lt;5MB</label>
                        <label className='text-sm text-dark text-end small'>Upto 3 Attachments</label>
                    </div>
                    <FileUploader />

                </div>
                <div className="d-flex justify-content-center">
                    <Link to="#" className="discover-btn" style={{
                        opacity: 0.9
                    }}>
                        Submit  <i className="fas fa-paper-plane ms-2"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};
