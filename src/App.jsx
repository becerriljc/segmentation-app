import { useDropzone } from 'react-dropzone'
import React, { useEffect, useState } from "react";

import './App.scss'

function App() {
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone( {
        noClick: true,
        accept: {
            'image/png': [ '.jpg', '.jpeg' ],
        },
    } )
    
    const files = acceptedFiles.map( file => <b><span key={file.path}>{file.path}</span></b> )
    
    let file = acceptedFiles.map( function(f) {
        return URL.createObjectURL(f);
    })

    return (
        <div className="app container-fluid" style={{height : "85vh"}}>
            <h1>Segmentation System</h1>
            <div className="row h-100">
                <div className="col-5 p-3 d-flex justify-content-center">
                    <div className='row w-100'>
                        <div className='col-12' style={{height : "4.5em"}}>
                            <div {...getRootProps( { className: 'dropzone' } ) }>
                                <input {...getInputProps()} />
                                <span>Drag your image here</span>
                                {files}
                            </div>
                            <div className = 'col-12 mt-3 image d-flex justify-content-center' style={{height : "24.5em"}} id='user-image'>
                                <div>
                                    <img src={file} style={{height : "20em", width: "30em"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <button style={{height : "3.5em", width : "8em"}} className='btn btn-primary' >Process</button>
                </div>
                <div className="col-5 p-3 d-flex justify-content-center">
                    <div className='row w-100'>
                        <div style={{height : "4.5em"}} className='d-flex col-12 justify-content-center p-0'>
                            <button className='btn btn-primary w-100'>Download Result</button>
                        </div>
                        <div className = 'col-12 mt-3 image d-flex justify-content-center' style={{height : "26em"}} id='segmented-image'>
                            The segmented will be displayed here.
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default App
