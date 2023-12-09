import React, { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const focusedStyle = {
    borderColor: '#FF602E'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

function FileUploader() {
    const [fileAccepted, setFileAccepted] = useState("Drag 'n' drop some files here, or click to select files");
    const handleOnDrop = (acceptedFiles) => {
        setFileAccepted(`${acceptedFiles.length} file(s) uploaded!`);
    };

    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
        acceptedFiles,
    } = useDropzone({ accept: { 'image/*': [] }, onDrop: handleOnDrop });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {}),
    }), [isFocused, isDragAccept, isDragReject]);

  
    return (
        <div className="">
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>{fileAccepted}</p>
            </div>
            {acceptedFiles.length > 0 && (
                <div>
                    {acceptedFiles.map((file) => (
                        <p className='small' key={file.name}>{file.name}</p>
                    ))}
                </div>
            )}
        </div>
    );
}


export default FileUploader