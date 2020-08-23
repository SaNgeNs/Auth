import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles({
  group: {
    display: 'flex',
    marginBottom: '20px',
  },
  label: {
    position: 'relative',
    width: '100%',
  },
  field: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    cursor: 'pointer',
    width: '100%',
    height: '100%',
    margin: 0,
  },
  button: {
    width: '100%',
    borderRadius: 0,
    padding: '15px 10px',
  },
});

export default useStyles;
