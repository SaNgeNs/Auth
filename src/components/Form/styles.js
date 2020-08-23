import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles({
  form: {
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid rgba(0, 0, 0, 0.54)',
    boxShadow: '10px 10px 51px -19px rgba(0,0,0,0.45)',
    borderRadius: '7px',
    padding: '20px 0',
    flexDirection: 'column',
    margin: '20px auto'
  },
  group: {
    width: '100%',
    padding: '30px 20px 40px 20px',
    flexShrink: '0',
  },
  stepper: {
    width: '100%',
    background: 'transparent',
    margin: '10px 0',
    borderTop: '1px solid rgba(0, 0, 0, 0.54)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.54)',
    padding: '3px 0',
  },
  title: {
    color: '#4384f5',
    fontSize: '20px',
    marginBottom: '10px',
  },
  overflow: {
    overflow: 'hidden',
    width: '100%',
  },
  container: {
    display: 'flex',
    transition: 'transform ease .3s',
  },
  date: {
    display: 'flex',
  },
  text: {
    margin: '10px 0 20px 0',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  buttons: {
    width: '100%',
    borderTop: '1px solid rgba(0, 0, 0, 0.54)',
    padding: '20px 20px 0 20px',
    justifyContent: 'space-between',
    display: 'flex',
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    padding: '20px',
    background: '#fff',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
    wordBreak: 'break-all',
    margin: '0 20px',
  },
  hideGroup: {
    visibility: 'hidden',
    transition: 'visibility ease 0s',
    transitionDelay: '.3s',
  },
  showGroup: {
    visibility: 'visible',
  },
});

export default useStyles;
