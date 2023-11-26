import React, { useState } from 'react';

const FileUploader = () => {


    return (
        <fieldset class="upload_dropZone text-center mb-3 p-4">

            <legend class="visually-hidden">Image uploader</legend>

            <svg class="upload_svg" width="60" height="60" aria-hidden="true">
                <use href="#icon-imageUpload"></use>
            </svg>

            <p class="small my-2">Drag &amp; Drop background image(s) inside dashed region<br /><i>or</i></p>

            <input id="upload_image_background" data-post-name="image_background" data-post-url="https://someplace.com/image/uploads/backgrounds/" class="position-absolute invisible" type="file" multiple accept="image/jpeg, image/png, image/svg+xml" />

            <label class="btn btn-upload mb-3" for="upload_image_background">Choose file(s)</label>

            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>

        </fieldset>
    );
};

export default FileUploader;