import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  movieCard: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2% 5%',
    padding: '2% 5%',
  },
  headerLink: { textDecoration: 'none', color: 'inherit' },
  poster: { margin: '5%', borderRadius: '5px' },
  tagline: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
  descr: { textAlign: 'justify', marginTop: '5%', marginBottom: '10%' },
  dollar: { display: 'flex', marginTop: '1%' },
  genres: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2%',
  },
});
