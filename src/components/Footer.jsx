// import * as React from 'react';
import { Box, Grid, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { YouTube } from '@mui/icons-material';

// Replace these with your own social media URLs
const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
};

function Footer() {
    return (
        <Box
            sx={{
                bgcolor: 'black',
                color: 'gray',
                // color: 'text.secondary',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth={false} >
                <Grid container spacing={3} justifyContent="space-between" sx={{marginBottom: 2}}>
                <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="h6" color="white" gutterBottom>
                            SOCIAL MEDIA
                        </Typography>
                        <IconButton aria-label="Facebook" color="inherit" component="a" href={socialMediaLinks.facebook}>
                            <FacebookIcon /> 
                        </IconButton><span>Facebook</span><br />
                        <IconButton aria-label="Twitter" color="inherit" component="a" href={socialMediaLinks.twitter}>
                            <TwitterIcon />
                        </IconButton><span>Twitter</span><br />
                        <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
                            <InstagramIcon />
                        </IconButton><span>Instagram</span><br />
                        <IconButton aria-label="Instagram" color="inherit" component="a" href={socialMediaLinks.instagram}>
                            <YouTube />
                        </IconButton><span>Youtube</span><br />
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" color="white" gutterBottom>
                        Contact
                        </Typography>
                        <Typography variant="p" gutterBottom>Contact Us</Typography><br />
                        <Typography variant="p" gutterBottom>hamasaboalmaali@icloud</Typography><br />
                        <Typography variant="p" gutterBottom>hamasahmed0@gmail</Typography><br />
                        <Typography variant="p" gutterBottom>Call us: +20 114 680 0935</Typography>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" color="white" gutterBottom>
                        About
                        </Typography>
                        <Typography variant="p" gutterBottom>Support Center</Typography><br />
                        <Typography variant="p" gutterBottom>Customer Support</Typography><br />
                        <Typography variant="p" gutterBottom>About Us</Typography><br />
                        <Typography variant="p" gutterBottom>Copyright</Typography>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" color="white" gutterBottom>
                        Customer Care
                        </Typography>
                        <Typography variant="p" gutterBottom>FAQ & Helps</Typography><br />
                        <Typography variant="p" gutterBottom>Shipping & Delivery</Typography><br />
                        <Typography variant="p" gutterBottom>Return & Exchanges</Typography><br />
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" color="white" gutterBottom>
                        Our Information
                        </Typography>
                        <Typography variant="p" gutterBottom>Privacy Policy Update</Typography><br />
                        <Typography variant="p" gutterBottom>Terms & conditions</Typography><br />
                        <Typography variant="p" gutterBottom>Return Policy</Typography><br />
                        <Typography variant="p" gutterBottom>Site Map</Typography>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" color="white" gutterBottom>
                        Top Categories
                        </Typography>
                        <Typography variant="p" gutterBottom sx={{marginBottom:3}}>Men Wear</Typography><br />
                        <Typography variant="p" gutterBottom>Men Wear</Typography><br />
                        <Typography variant="p" gutterBottom>Kid Wear</Typography><br />
                        <Typography variant="p" gutterBottom>Sports Wear</Typography>
                    </Grid>
                </Grid>

                <Typography variant="body2" color="white" align="center" sx={{ pt: 4, borderTop: "1px solid", borderColor: 'gray' }}>
                    © 2024 Company Co. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;