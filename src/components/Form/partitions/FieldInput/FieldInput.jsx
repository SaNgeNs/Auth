import React, { memo } from 'react';
import { Field } from 'redux-form';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {
  useStyles,
} from './styles';

const renderField = ({
  input: { onBlur, onFocus, ...inputProps },
  meta: { touched, error },
  ...fieldProps
}) => {
  return (
    <TextField
      {...inputProps}
      {...fieldProps}
      fullWidth
      helperText={error}
      error={!!touched && !!error}
    />
  );
};

export const FieldInput = (props) => {
  const styles = useStyles();

  return (
    <FormControlLabel
      className={styles.control}
      control={(
        <Field
          { ...props }
          className={styles.input}
          component={renderField}
        />
      )}
    />
  );
};

export default memo(FieldInput);
