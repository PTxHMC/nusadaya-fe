import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username minimal 3 karakter')
    .max(30, 'Username maksimal 30 karakter')
    .required('Username wajib diisi'),
  email: Yup.string()
    .email('Format email harus valid')
    .max(254, 'Email maksimal 254 karakter')
    .required('Email wajib diisi'),
  password: Yup.string()
    .min(6, 'Password minimal 6 karakter')
    .max(255, 'Password maksimal 255 karakter')
    .required('Password wajib diisi'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password')], 'Password dan konfirmasi password harus sama')
    .required('Konfirmasi password wajib diisi')
});
