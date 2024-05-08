// import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';


const Cards = () => {
    const data = [
        {
            img: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-16-md.png&w=750&q=100",
            title: "Armani Wide-Leg",
            description: "Monochrome elegance. Made with a relaxed wide-leg...",
            price: "$45.00"
        },
        {
            img: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-8-md.png&w=750&q=100",
            title: "Gucci Carlton UK",
            description: "Knitted midi A-line dress, has a scoop neck, sleeveless...",
            price: "$14.99"
        },
        {
            img: "https://chawkbazar.vercel.app/assets/images/products/p-14-m.png",
            title: "Hermes Carlton",
            description: "Off-White self-striped knitted midi A-line dress, has a scoop...",
            price: "$15.00"
        },
        {
            img: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-1.png&w=750&q=100",
            title: "Nike Black",
            description: "Lizards are a widespread group of squamate reptiles...",
            price: "$11.00"
        },
        {
            img: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-6.png&w=750&q=100",
            title: "Zara Solly Shirt",
            description: "For a chic and smart look, don this white shirt from Solly...",
            price: "$25.00"
        },
        {
            img: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-17.png&w=750&q=100",
            title: "Short Sleeve Shirts",
            description: "From casual days out to parties, dinners and other events...",
            price: "$12.99"
        },
        {
            img: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-7.png&w=750&q=100",
            title: "Basic Shirts",
            description: "Casual wear may be a Western code that’s relaxed...",
            price: "$12.30"
        },
        {
            img: "https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-9.png&w=750&q=100",
            title: "Fitted Neck T-Shirt",
            description: "All about the crisp cut and exceptional quality...",
            price: "$28.00"
        }
    ]

    return (
        <>
            <div>
                <Container maxWidth="xl" sx={{
                    // border: "1px solid gray",
                    mt: 5
                }}>
                    <Typography variant="h4" sx={{ m: 3 }}>Flash Sale</Typography>
                    <Box sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={5}>
                            {data.map(item => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    sx={{
                                                        "&:hover": {
                                                            boxShadow: 3
                                                        }
                                                    }}
                                                    component="img"
                                                    height="350"
                                                    image={item.img}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {item.description}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="div" sx={{ mt: 1 }}>
                                                        {item.price}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </Container>
            </div>
        </>
    )
}

export default Cards