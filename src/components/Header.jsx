// import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
// import Image from '../images/6.webp';

function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1}}>
                <Grid container columnSpacing={2}>
                    <Grid item xs={8} sx={{ maxWidth: 820 }}>
                        <div style={{ maxWidth: 820 }}>
                            <img style={{ width: "100%" }} src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-1.jpg&w=3840&q=100" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={2} sx={{ minWidth: 310 }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            <img style={{ width: "100%", height: "98%" }} src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-2.jpg&w=1080&q=100" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={2} sx={{ minWidth: 310 }}>
                        <div style={{ maxWidth: 330, height: "100%" }}>
                            <img style={{ width: "100%", height: "98%" }} src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-3.jpg&w=1080&q=100" alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1, marginTop:1}}>
                <Grid container columnSpacing={2}>
                    
                    <Grid item xs={2} sx={{ minWidth: 310 }}>
                        <div style={{ width: "100%", height: "100%" }}>
                            <img style={{ width: "100%", height: "98%" }} src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-4.jpg&w=1080&q=100" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={2} sx={{ minWidth: 310 }}>
                        <div style={{ maxWidth: 330, height: "100%" }}>
                            <img style={{ width: "100%", height: "98%" }} src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-5.jpg&w=1080&q=100" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={8} sx={{ maxWidth: 820 }}>
                        <div style={{ maxWidth: 820 }}>
                            <img style={{ width: "100%" }} src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-6.jpg&w=3840&q=100" alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Header