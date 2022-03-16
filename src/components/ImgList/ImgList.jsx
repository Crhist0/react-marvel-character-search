import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function MasonryImageList(imgList) {
  return (
    <Box
      sx={{
        width: '90vw',
        height: '70vh',
        overflowY: 'scroll',
        scrollbarWidth: 'thin',
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8}>
        {imgList.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
