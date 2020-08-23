import withErrorHandler from 'Components/withErrorHandler';
import loadable from '@loadable/component';
import { reduxForm } from 'redux-form';

const Form = loadable(() => import(/* webpackChunkName: "form_component" */'./Form'));

export default withErrorHandler(reduxForm({
  form: 'singup',
  onChange: (values, dispatch, props) => {
    if (props.invalid) dispatch(props.clearSubmitErrors('singup'));
  },
  initialValues: {
    email: '',
    password: '',
    confirm_password: '',
    day: '',
    month: '',
    year: '',
    gender: 'male',
    how_hear_about_us: '',
  },
})(Form));
