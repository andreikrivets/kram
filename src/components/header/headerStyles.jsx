import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  headerLink: {
    color: '#581845',
    cursor: 'pointer',
    transition: '0.4s ease-out',
    fontWeight: '400',
    '&:hover': {
      color: '#C70039',
    },
  },
});
