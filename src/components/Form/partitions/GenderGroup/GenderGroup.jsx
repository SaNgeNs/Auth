import React, { memo } from 'react';
import { Field, formValueSelector } from 'redux-form';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

import {
  useStyles,
} from './styles';

export const GenderGroup = () => {
  const styles = useStyles();
  const selector = formValueSelector('singup');
  const valueText = useSelector(state => selector(state, 'gender'));

  return (
    <div className={styles.group}>
      <label className={styles.label} htmlFor="male">
        <Button
          className={styles.button}
          variant={valueText === 'male' ? 'contained' : 'outlined'}
          color={valueText === 'male' ? 'primary' : 'default'}
        >
          <Field
            className={styles.field}
            name="gender"
            id="male"
            value="male"
            type="radio"
            component="input"
          />

          male
        </Button>
      </label>

      <label className={styles.label} htmlFor="female">
        <Button
          className={styles.button}
          variant={valueText === 'female' ? 'contained' : 'outlined'}
          color={valueText === 'female' ? 'primary' : 'default'}
        >
          <Field
            className={styles.field}
            name="gender"
            id="female"
            value="female"
            type="radio"
            component="input"
          />

          female
        </Button>
      </label>

      <label className={styles.label} htmlFor="unspecified">
        <Button
          className={styles.button}
          variant={valueText === 'unspecified' ? 'contained' : 'outlined'}
          color={valueText === 'unspecified' ? 'primary' : 'default'}
        >
          <Field
            className={styles.field}
            name="gender"
            id="unspecified"
            value="unspecified"
            type="radio"
            component="input"
          />

          unspecified
        </Button>
      </label>
    </div>
  );
};

export default memo(GenderGroup);
