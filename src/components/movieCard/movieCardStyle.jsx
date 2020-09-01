import { makeStyles } from '@material-ui/core/styles';

const mainStyle = makeStyles({
  img: { width: '20%', height: '250px', float: 'left' },
  card: { margin: '2%', minHeight: '200px', display: 'flex' },
  link: { textDecoration: 'none', color: 'inherit' },
  cardContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  mainInfo: { display: 'flex', justifyContent: 'space-around', marginTop: '2%' },
  genres: { display: 'flex', justifyContent: 'space-around', marginTop: '2%' },
  genresNames: { color: 'lightskyblue' },
});

const mobile = makeStyles({
  img: { width: '50%', height: '200px', float: 'left' },
  card: { margin: '1%', display: 'flex' },
  link: { textDecoration: 'none', color: 'inherit' },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '2px',
    width: '100%',
    '&:last-child': {
      paddingBottom: '2px',
    },
  },
  mainInfo: { display: 'flex', justifyContent: 'space-around', marginTop: '2%' },
  genres: { display: 'flex', justifyContent: 'space-around', marginTop: '2%' },
  genresNames: { color: 'lightskyblue' },
});
export { mainStyle, mobile };
