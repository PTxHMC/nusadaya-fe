'use client';

import Image from 'next/image';
import { useFormik } from 'formik';
import { Button, Input, Textarea } from '@nextui-org/react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { ContactSchema } from '@/validations/email';

const ContactSection = () => {
  const handleFormInput = (event: any) => {
    formContact.setFieldValue(event.target.name, event.target.value);
  };

  const sendEmail = (values: {}) => {
    emailjs.send(
      'service_3m6kqzb',
      'template_5wvsigh',
      values,
      'aYmcT_rE-0MjMzZOH'
    );
  };

  const formContact = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: ContactSchema,
    onSubmit: values => {
      sendEmail(values);
      toast.success('Pesan Terkirim!');
    }
  });

  return (
    <section
      id="Hubungi Kami"
      className="my-24 flex flex-col gap-x-24 gap-y-10 p-8 lg:flex-row lg:justify-between lg:px-36"
    >
      <div className="max-w-3xl text-primary-text lg:flex-shrink-0 lg:flex-grow">
        <h2 className="text-5xl font-bold">Hubungi Kami</h2>
        <form onSubmit={formContact.handleSubmit}>
          <div className="mt-6 flex flex-col gap-6">
            <Input
              type="text"
              name="name"
              labelPlacement="outside"
              label="Nama Lengkap"
              placeholder="Masukkan Nama"
              onChange={handleFormInput}
            />
            <Input
              type="email"
              name="email"
              labelPlacement="outside"
              label="Alamat Email"
              placeholder="Masukkan Email"
              onChange={handleFormInput}
            />
            <Textarea
              name="message"
              label="Pesan"
              labelPlacement="outside"
              placeholder="Masukkan Pesan"
              onChange={handleFormInput}
            ></Textarea>
          </div>
          <Button
            type="submit"
            size="lg"
            className="mt-6 bg-primary-2 font-medium text-white-1"
          >
            Kirim Pesan
          </Button>
        </form>
      </div>
      <div className="mx-auto lg:flex-auto">
        <Image
          src="/assets/contact-section.svg"
          width={700}
          height={0}
          className="mx-auto h-auto"
          alt="About Section"
        />
      </div>
    </section>
  );
};

export default ContactSection;
