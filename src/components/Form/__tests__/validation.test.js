import {
  validationStepOne,
  validationStepTwo,
} from '../validation';

const dataValidStepOne = {
  email: 'test@mail.ru',
  password: '123456',
  confirm_password: '123456',
};

const dataValidStepTwo = {
  day: 11,
  month: 10,
  year: 2000,
};

describe('validationStepOne: ', () => {
  it('Should return error: email required', () => {
    try {
      validationStepOne({});
    } catch (error) {
      expect(error.errors.email).toBe('email required');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: invalid email address', () => {
    try {
      validationStepOne({
        email: 'invalid email'
      });
    } catch (error) {
      expect(error.errors.email).toBe('invalid email address');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: password required', () => {
    try {
      validationStepOne({
        email: dataValidStepOne.email,
      });
    } catch (error) {
      expect(error.errors.password).toBe('password required');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: password must be at least 6 characters', () => {
    try {
      validationStepOne({
        email: dataValidStepOne.email,
        password: '123',
      });
    } catch (error) {
      expect(error.errors.password).toBe('password must be at least 6 characters');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: confirm password required', () => {
    try {
      validationStepOne({
        email: dataValidStepOne.email,
        password: dataValidStepOne.password,
      });
    } catch (error) {
      expect(error.errors.confirm_password).toBe('password required');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: password mismatch', () => {
    try {
      validationStepOne({
        email: dataValidStepOne.email,
        password: dataValidStepOne.password,
        confirm_password: '123'
      });
    } catch (error) {
      expect(error.errors.confirm_password).toBe('password mismatch');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return true', () => {
    expect(validationStepOne(dataValidStepOne)).toBeTruthy();
    expect(validationStepOne(dataValidStepOne)).toMatchSnapshot();
  });
});


describe('validationStepTwo: ', () => {
  it('Should return error: day required', () => {
    try {
      validationStepTwo({});
    } catch (error) {
      expect(error.errors.day).toBe('day required');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: month required', () => {
    try {
      validationStepTwo({
        day: dataValidStepTwo.day,
      });
    } catch (error) {
      expect(error.errors.month).toBe('month required');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: year required', () => {
    try {
      validationStepTwo({
        day: dataValidStepTwo.day,
        month: dataValidStepTwo.month,
      });
    } catch (error) {
      expect(error.errors.year).toBe('year required');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: day invalid', () => {
    try {
      validationStepTwo({
        day: 30,
        month: 2,
        year: 1990,
      });
    } catch (error) {
      expect(error.errors.day).toBe('day invalid');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: month invalid', () => {
    try {
      validationStepTwo({
        day: 26,
        month: 13,
        year: 1990,
      });
    } catch (error) {
      expect(error.errors.month).toBe('month invalid');
      expect(error).toMatchSnapshot();
    }
  });

  it('Should return error: year invalid', () => {
    try {
      validationStepTwo({
        day: 26,
        month: 10,
        year: 1,
      });
    } catch (error) {
      expect(error.errors.year).toBe('year invalid');
      expect(error).toMatchSnapshot();
    }
  });
});
