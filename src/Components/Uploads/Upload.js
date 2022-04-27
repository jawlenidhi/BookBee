import React from 'react';
import './Upload.scss';
const Upload = () => {
    return (
        <div className="UploadFile">
            <div className="uploadWrapper">
                <h1 className="uploadTemplate">Upload page will appear here</h1>
                <div>
                <form method="POST" enctype="multipart/form-data">
                    <input type="file" name="file" id="file" class="custom-file-input"/>

                    <label for="file" class="custom-file-label">Choose File    
                    </label>
                    <input type="submit" value="Submit" class="btn-btn-primary btn-block"/> 
                    </form>
                </div>
          
            </div>
        </div>
    )
}

export default Upload
