import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const pages = ['Demos', 'Men Wear ▾', 'Women Wear ▾', 'Search', 'Shops', 'Pages'];
const countries = [
    { code: 'Eng', label: 'English' },
    {
        code: 'Ar',
        label: 'Arabic',
        img: "data:image/png;base64,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"
    }
]

function NavBar() {

    const [, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" sx={{
            backgroundColor: "gray",
            minWidth: 310
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* Logo Image */}
                    <Typography sx={{
                        mr: 1,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                        <img src='https://chawkbazar.vercel.app/assets/images/logo.svg' />

                    </Typography>

                    {/* Headlines */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ mx: 2, my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Autocomplete
                        id="language-selection"
                        sx={{ width: 250, padding: 2 }}
                        options={countries}
                        autoHighlight
                        getOptionLabel={(option) => `${option.label} (${option.code})`}

                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Choose a Language"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                        )}
                    />

                    {/* Search Icon */}
                    <IconButton size="large" aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>


                    <Box>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ mx: 3, my: 2, color: 'white', display: 'block' }}
                        >
                            Sign In
                        </Button>
                    </Box>

                    <Box>
                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                            <Badge badgeContent={3} color="error" sx={{ mx: 2 }}>
                                <AddShoppingCartIcon />
                            </Badge>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>

    );
}
export default NavBar;