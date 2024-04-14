import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

import './App.scss'
import axios from 'axios'

function App() {
    const [ image, setImage ] = useState( null )
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone( {
        noClick: true,
        accept: {
            'image/png': [ '.jpg', '.jpeg' ],
        },
    } )

    const files = acceptedFiles.map( file => (
        <b key={file.path}><span key={file.path}>{file.path}</span></b>
    ) )

    let file = acceptedFiles.map( function( f ) {
        return URL.createObjectURL( f );
    } )

    async function processImage() {
        try {
            console.log( acceptedFiles )
            let formData = new FormData()
            formData.append( 'file', acceptedFiles[ 0 ] )
            const response = await axios.post(
                'http://localhost:8000/api/v1/segmentation/dogs/predict',
                formData,
                {
                    responseType: 'blob',
                    auth: {
                        username: 'admin',
                        password: 'secret',
                    },
                }
            )

            const url = URL.createObjectURL( response.data );

            console.log( url )

            setImage( url )
        } catch ( error ) {
            console.error( error )
        }
    }

    return (
        <div className='app container-fluid' style={{ height : "85vh" }}>
            <h1>Segmentation System</h1>
            <div className='row h-100'>
                <div className='col-5 p-3 d-flex justify-content-center'>
                    <div className='row w-100'>
                        <div className='col-12' style={{ height : "4.5em" }}>
                            <div {...getRootProps( { className: 'dropzone' } ) }>
                                <input {...getInputProps()} />
                                <span>Arrastra tu imagen aquí</span>
                                {files}
                            </div>
                            <div className = 'col-12 mt-3 image d-flex justify-content-center' style={{ height : "24.5em" }} id='user-image'>
                                <div>
                                    <img alt='Image' src={file} style={{ height : "20em", width: "30em" }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <button style={{ height : "3.5em", width : "8em" }} className='btn btn-primary' onClick={processImage}>Process</button>
                </div>
                <div className='col-5 p-3 d-flex justify-content-center'>
                    <div className='row w-100'>
                        <div style={{ height : "3.5em" }} className='d-flex col-12 justify-content-center p-0'>
                            <button className='btn btn-primary w-100'>Descargar resultado</button>
                        </div>
                        <div className = 'col-12 mt-3 image d-flex justify-content-center' style={{ height : "26em" }} id='segmented-image'>
                            {
                                image && (
                                    <div>
                                        <img alt='Image' src={image} style={{ height : "20em", width: "30em" }}/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
