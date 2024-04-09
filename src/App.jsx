import { useDropzone } from 'react-dropzone'

import './App.scss'

function App() {
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone( {
        noClick: true,
        accept: {
            'image/png': [ '.jpg', '.jpeg' ],
        },
    } )
    const files = acceptedFiles.map( file => <li key={file.path}>{file.path}</li> )

    return (
        <section className='container'>
            <div {...getRootProps( { className: 'dropzone' } ) }>
                <input {...getInputProps()} />
                <p>Dropzone without click events</p>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{files}</ul>
            </aside>
        </section>
    )
}

export default App
