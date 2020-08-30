import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  img: { minWidth: '200px' },
  card: { margin: '2%', minHeight: '200px', display: 'flex' },
  link: { textDecoration: 'none', color: 'inherit' },
  cardContent: { display: 'flex', flexDirection: 'column', justifyContent: 'space-around' },
  mainInfo: { display: 'flex', justifyContent: 'space-around', marginTop: '2%' },
  genres: { display: 'flex', justifyContent: 'space-around', marginTop: '2%' },
});
