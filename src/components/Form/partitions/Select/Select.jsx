import React, { memo } from 'react';
import { Field } from 'redux-form';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const renderSelectField = ({
  input: { onBlur, onFocus, ...inputProps },
  meta: { touched, error },
  children,
  ...fieldProps
}) => (
  <Select
    {...inputProps}
    {...fieldProps}
    children={children}
  />
);

export const GenderGroup = () => {
  return (
    <FormControl variant="outlined">
      <Field
        name="how_hear_about_us"
        id="how_hear_about_us"
        component={renderSelectField}
      >
        <MenuItem value="facebook">Facebook</MenuItem>
        <MenuItem value="linkedin">Linkedin</MenuItem>
        <MenuItem value="google">Google</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </Field>
    </FormControl>
  );
};

export default memo(GenderGroup);
