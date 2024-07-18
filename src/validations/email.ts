import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Nama wajib diisi'),
  email: Yup.string().email('Email tidak valid').required('Email wajib diisi'),
  message: Yup.string().required('Pesan wajib diisi')
});
