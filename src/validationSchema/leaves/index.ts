import * as yup from 'yup';

export const leaveValidationSchema = yup.object().shape({
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  reason: yup.string().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
