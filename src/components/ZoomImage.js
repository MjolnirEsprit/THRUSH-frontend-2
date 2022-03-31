import React from 'react';
import ImageZoom from 'react-image-zooom';

//The higher the resolution exple 1024 the better the zoomed image :)
function ZoomImage(){

    return (
        <div>
            <ImageZoom src="/guitar1024.png" width="576" height="1000" alt="metel3etch" zoom="200" />
        </div>
    );
}
export default ZoomImage;