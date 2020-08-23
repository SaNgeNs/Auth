import React, { useState, memo } from 'react';
import { useSelector } from 'react-redux';
import { getFormValues } from 'redux-form';
import FormGroup from '@material-ui/core/FormGroup';
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import FieldInput from './partitions/FieldInput';
import GenderGroup from './partitions/GenderGroup';
import Select from './partitions/Select';

import {
  validationStepOne,
  validationStepTwo,
} from './validation';

import {
  useStyles,
} from './styles';

const MAX_STEP = 3;

export const Form = ({
  handleSubmit,
}) => {
  const styles = useStyles();
  const [ step, setStep ] = useState(1);
  const [ openModal, setOpenModal ] = useState(false);
  const formValues = useSelector(state => getFormValues('singup')(state));
  const translateValue = (step - 1) * 100;
  const firstStep = step === 1;
  const lastStep = step === MAX_STEP;

  const submitForm = (values) => {
    switch (step) {
      case 1: {
        validationStepOne(values);
        setStep(2);
        break;
      }

      case 2: {
        validationStepTwo(values);
        setStep(3);
        break;
      }

      default:
        break;
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submitForm)}
      className={styles.form}
    >
      <p data-title="1" className={styles.title}>
        {lastStep ? "Thank you!" : "Signup"}
      </p>

      <LinearProgress
        variant="determinate"
        value={step * 100 / MAX_STEP}
        className={styles.stepper}
      />

      <div className={styles.overflow}>
        <div
          data-test-wrap="1"
          className={styles.container}
          style={{
            transform: `translateX(${translateValue ? `-${translateValue}%` : 0})`,
          }}
        >
          <FormGroup className={`${styles.group} ${step === 1 ? styles.showGroup : styles.hideGroup}`}>
            <FieldInput name="email" id="email" label="EMAIL" type="email" />
            <FieldInput name="password" id="password" label="PASSWORD" type="password" />
            <FieldInput name="confirm_password" id="confirm_password" label="CONFIRM PASSWORD" type="password" />
          </FormGroup>

          <FormGroup className={`${styles.group} ${step === 2 ? styles.showGroup : styles.hideGroup}`}>
            <FormLabel className={styles.text}>date of birth</FormLabel>
            <div className={styles.date}>
              <FieldInput normalize={(val) => val.replace(/\D+/g,"").slice(0, 2)} name="day" id="day" label="DD" type="number" variant="outlined" />
              <FieldInput normalize={(val) => val.replace(/\D+/g,"").slice(0, 2)} name="month" id="month" label="MM" type="number" variant="outlined" />
              <FieldInput normalize={(val) => val.replace(/\D+/g,"").slice(0, 4)} name="year" id="year" label="YYYY" type="number" variant="outlined" />
            </div>

            <FormLabel className={styles.text}>gender</FormLabel>
            <GenderGroup />

            <FormLabel className={styles.text}>where did you hear about is?</FormLabel>
            <Select />
          </FormGroup>

          <FormGroup
            className={`${styles.group} ${step === 3 ? styles.showGroup : styles.hideGroup}`}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CheckCircleRoundedIcon style={{ color: '#BBE98C', fontSize: 230 }} />

            <Button
              role="dashboard-btn"
              variant="outlined"
              color="primary"
              endIcon={<ArrowForward />}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Go to Dashboard
            </Button>

            <Modal
              className={styles.modal}
              open={openModal}
              onClose={() => {
                setOpenModal(false);
              }}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openModal}>
                <code className={styles.modalContent}>
                  {JSON.stringify(formValues)}
                </code>
              </Fade>
            </Modal>
          </FormGroup>
        </div>
      </div>

      <div
        className={styles.buttons}
        style={{
          opacity: lastStep ? 0 : 1,
          pointerEvents: lastStep ? 'none' : 'initial',
        }}
      >
        <Button
          role="back-btn"
          startIcon={<ArrowBack />}
          onClick={() => {
            setStep((step - 1) || 1)
          }}
          style={{
            visibility: firstStep ? 'hidden' : 'visible',
          }}
        >
          Back
        </Button>

        <Button
          role="submit"
          type="submit"
          color="primary"
          endIcon={<ArrowForward />}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default memo(Form);
