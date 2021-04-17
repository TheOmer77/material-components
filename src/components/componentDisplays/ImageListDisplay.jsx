import { ImageList, ImageListImage, ImageListItem } from '@rmwc/image-list';
import React from 'react';

const ImageListDisplay = ({ data }) => {
  return (
    <div className='row'>
      <ImageList
        masonry
        style={{
          columnCount: 2,
          columnGap: '16px',
          maxWidth: '400px',
          maxHeight: '600px',
          margin: 0,
        }}
      >
        {data.map((src) => (
          <ImageListItem key={src} style={{ marginBottom: '16px' }}>
            <ImageListImage src={src} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageListDisplay;
