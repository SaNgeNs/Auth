import { SubmissionError } from 'redux-form'

export const validationStepOne = values => {
  const {
    email,
    password,
    confirm_password,
  } = values;

  const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email) {
    throw new SubmissionError({
      email: 'email required',
    })
  } else if (!emailRe.test(email) || /\@.*\@/.test(email) || /\@.*_/.test(email)) {
    throw new SubmissionError({
      email: 'invalid email address',
    })
  }

  if (!password) {
    throw new SubmissionError({
      password: 'password required',
    })
  } else if (String(password).length < 6) {
    throw new SubmissionError({
      password: 'password must be at least 6 characters',
    })
  } else if (!confirm_password) {
    throw new SubmissionError({
      confirm_password: 'password required',
    })
  } else if (password !== confirm_password) {
    throw new SubmissionError({
      confirm_password: 'password mismatch',
    })
  }

  return true;
};

export const validationStepTwo = values => {
  const {
    day,
    month,
    year,
  } = values;

  if (!day) {
    throw new SubmissionError({
      day: 'day required',
    })
  } else if (!month) {
    throw new SubmissionError({
      month: 'month required',
    })
  } else if (!year) {
    throw new SubmissionError({
      year: 'year required',
    })
  }

  const date = new Date(year, month - 1, day);

  if (Number(date.getDate()) !== Number(day)) {
    throw new SubmissionError({
      day: 'day invalid',
    })
  } else if (Number(date.getMonth()) !== Number(month - 1)) {
    throw new SubmissionError({
      month: 'month invalid',
    })
  } else if (Number(date.getFullYear()) !== Number(year)) {
    throw new SubmissionError({
      year: 'year invalid',
    })
  }

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dobnow = new Date(today.getFullYear(), date.getMonth(), date.getDate());
  let age;

  age = today.getFullYear() - date.getFullYear();
  if (today < dobnow) {
    age = age - 1;
  }

  if (age < 18) {
    throw new SubmissionError({
      day: 'you are',
      month: 'not 18',
      year: 'years old',
    })
  }

  return true;
};
