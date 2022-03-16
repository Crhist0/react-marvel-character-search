import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { Link } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const heroRedux = useSelector(({ hero }) => hero);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // id: Hero.id,
  // name: Hero.name,
  // comics: Hero.comics.available,
  // series: Hero.series.available,
  // stories: Hero.stories.available,
  // thumb: Hero.thumbnail.path + '.' + Hero.thumbnail.extension,
  // urls: Hero.urls,
  if (heroRedux.id === undefined) {
    return <h1>Procure por um personagem...</h1>;
  }
  return (
    <Link href={heroRedux.urls[0].url} underline="none" target="_blank">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: 'transparent',
                width: '100px',
                height: '100px',
              }}
              alt={heroRedux.name}
              src={
                heroRedux.thumb ==
                  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ||
                heroRedux.thumb ==
                  'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif' ||
                heroRedux.thumb == 'insira aqui outra imagem para exceção'
                  ? 'https://i.ibb.co/vLhYShQ/Screenshot-1.png'
                  : heroRedux.thumb
              }
            ></Avatar>
          }
          title={heroRedux.name}
        />
        {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {heroRedux.description
              ? heroRedux.description
              : 'Description not available'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <br />
            Comics: {heroRedux.comics} <br />
            Series: {heroRedux.series} <br />
            Stories: {heroRedux.stories} <br />
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
