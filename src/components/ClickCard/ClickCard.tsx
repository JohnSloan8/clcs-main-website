import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface ClickCardProps {
  title?: string;
  description?: string;
  padding: 2 | 4 | 8;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
}

const ClickCard = ({
  title = 'ABOUT',
  description = 'some text about the card',
  padding = 4,
  color = 'black',
  backgroundColor = 'white',
  onClick = () => {
    console.log('clicked');
  },
}: ClickCardProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: backgroundColor,
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardContent sx={{ flexGrow: 1, py: padding, color: color }}>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {title}
          </Typography>
          <Typography align="center">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ClickCard;
