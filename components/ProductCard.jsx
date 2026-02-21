import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';

function ProductCard() {
    // Centrar contenido de Card, quitar padding de los contenedores hijos
    return (
        <Card sx={{ maxWidth: 215, maxHeight: 356, p: 0.5, mb: 1 }}>
            <CardMedia component="img"
                height="194"
                image="/openclipart-vectors-match-159212_640.png"
                alt="Paella dish" 
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}/>
            <CardHeader title="Sticker" />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', p: '1' }}>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    $9.99
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    $7.90 con Efectivo o Transferencia
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="agregar a favoritos">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="compartir">
                    <ShareIcon />
                </IconButton>
                <Button aria-label='agregar al carrito' variant="contained">Agregar al Carrtio</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;