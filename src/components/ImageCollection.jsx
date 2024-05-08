// import * as React from 'react';
import { Container } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default function ImageCollection() {
  return (
    <Container maxWidth="xl" sx={{marginTop: 5}}>
      <h1>Featured Products</h1>
      <ImageList
      // sx={{ width: 800, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={300}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
  );
}

const itemData = [
  {
    img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/P2-FEB-iStock-1217787639.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/P1-FEB-iStock-1806296436.jpg',
    title: 'Burger',
  },
  {
    img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/P3-FEB-iStock-1421584055.jpg',
    title: 'Camera',
  },
  {
    img: 'https://www.istockphoto.com/resources/images/PhotoFTLP/P5-FEB-iStock-1394055240.jpg',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Camera',
  },
  
];

// export default ImageList