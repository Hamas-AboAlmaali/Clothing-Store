import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';


function Brands() {

    const brands = [
        {
            mainImg: 'https://media.istockphoto.com/id/1441759606/photo/happy-sportswoman-with-earbuds-running-in-the-park.jpg?s=612x612&w=0&k=20&c=_RHiYpQFiZRxESWzCsr8k9SsOr-T-Qj3OcpINB1aVrg=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/fusion.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1440795547/photo/mannequin-at-sports-store.jpg?s=612x612&w=0&k=20&c=Ho0TUrh1oaCzpfImRAU_3UbdJtvlFmi10TLyB_nMvAk=',
            logo: '	https://chawkbazar.vercel.app/assets/images/brands/grid/sholy.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1231564358/photo/sportswoman-sprinting-in-the-city.jpg?s=612x612&w=0&k=20&c=T2oaylDZ1UNtuoyQB9zYfCyiFznia0ymHNbb94QoUko=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/tyrant.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1486146700/photo/mature-men-outdoor-physical-activity.jpg?s=612x612&w=0&k=20&c=DHndau78yF1WK4zLaoneS2qEs905m6_8pmkKr30l3-M=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/fashadil.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1293759002/photo/side-view-mid-section-of-asian-chinese-woman-with-yoga-pants-sport-clothing-sexual-sporty.jpg?s=612x612&w=0&k=20&c=4gItP7wuUMjw9ukXAPEgmFSy1PtjIX_zuzm4tM4gxnU=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/clothingegy.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1220888548/photo/woman-getting-ready-for-a-workout.jpg?s=612x612&w=0&k=20&c=E6sJZqFbhWW1xf9TTXbEWjyd1_Yw8xkxOG2dWyTnU3E=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/shosio.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1475047698/photo/athletic-middle-aged-woman-making-v-up-abs-workout-outdoors.jpg?s=612x612&w=0&k=20&c=uQb54GOuV_cKskCr54iTJhJYehYNjq2xtJWRze-CW9o=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/club-shoes.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1206992991/photo/i-just-had-a-great-yoga-session.jpg?s=612x612&w=0&k=20&c=fIBXHGu8LmaxqKy3nfgWWWnDhJ-WixBeUU9qywOk8zA=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/pop-clothing.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/628504820/photo/they-keep-each-other-going.jpg?s=612x612&w=0&k=20&c=9bsULmyIarCyxiX5O7W3yZCkWZdhWLTPGu6E7k7mQNE=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/hoppister.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/906511890/photo/getting-ready.jpg?s=612x612&w=0&k=20&c=_KSBFxriRqmjxEjBnbset3w4WZGCw9PrBPNzkNzkkns=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/shovia.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1346094881/photo/cropped-shot-of-an-unrecognizable-woman-tying-her-shoelaces-while-exercising-at-the-gym.jpg?s=612x612&w=0&k=20&c=MFlCV5osWA0t7r2oTP6PTzvfKoO2NUDhF40zzkomxGc=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/shoozly.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1413988031/photo/active-fit-and-healthy-man-jogging-on-a-beach-while-listening-to-music-on-earphones-with.jpg?s=612x612&w=0&k=20&c=M2I6ILnxxjBO7tDvKZ7igl81envkv9byKS8ZmOV9qoQ=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/blaze-fashion.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1279902517/photo/be-as-strong-as-you-were-born-to-be.jpg?s=612x612&w=0&k=20&c=VL1HmKItYHiZkUguh-Fsa1W1qccUuWoUQBNLzHqcbns=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/elegance.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1453748988/photo/group-of-young-athlete-male-and-female-exercising-together-in-fitness-attractive-handsome.jpg?s=612x612&w=0&k=20&c=86OYQ-5zdVQUGdcsmZeWNEhOg_QR6J12K66hlW5QNow=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/clothingtastic.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1125038961/photo/young-man-running-outdoors-in-morning.jpg?s=612x612&w=0&k=20&c=LVAlQIforg7ZRAF-bOvdvoD_k3ejEeimrWbGq2IA5ak=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/fashnetic.png'
        },
        {
            mainImg: 'https://media.istockphoto.com/id/1387134184/photo/positive-sporty-black-lady-sitting-on-fitness-mat-and-smiling.jpg?s=612x612&w=0&k=20&c=NoznsvEsfTTV7Q35SreWiwTXS10EhelnsHV0HEwEj3o=',
            logo: 'https://chawkbazar.vercel.app/assets/images/brands/grid/hunter-shoes.png'
        },
    ]

    return (
        <>
            <Box sx={{ flexGrow: 1, marginLeft: 1, marginTop: 6,marginBottom: 6 }}>
                <h1 style={{marginLeft: '15px'}}>Top Brands</h1>
                <Grid container spacing={2}>
                    {
                        brands.map(item => {
                            return (
                                <Grid>
                                    <div style={{
                                        width: "315px",
                                        height: "315px",
                                        position: 'relative',
                                        marginLeft: '20px',
                                        
                                    }}>
                                        <div style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '10px'
                                            }}>
                                            <img style={{
                                                width: '100%',
                                                height: '100%',
                                                borderRadius: '10px'
                                            }}
                                                src={item.mainImg} alt="" />
                                        </div>

                                        <div className='brand' style={{
                                            backgroundColor: 'rgba(0,0,0,0.5)',
                                            width: '100%',
                                            height: '100%',
                                            position: 'absolute',
                                            top: '0%',
                                            textAlign: 'center',
                                            borderRadius: '10px'
                                        }}>
                                            <img style={{
                                                marginTop: '35%'
                                            }} src={item.logo} alt="" />
                                        </div>

                                    </div>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Box>
        </>
    )
}

export default Brands
