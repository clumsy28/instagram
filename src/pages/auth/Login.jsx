import { Formik, Form } from 'formik';
import Input from '../../components/Input.jsx';
import Button from '../../components/Button.jsx';
import Separator from '../../components/Separator.jsx';

export default function Login() {
  const handleSubmit = (values, actions) => {
    console.log(values);
  }

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='flex items-center justify-center rounded-lg'>
        <div>
          <img src='/assets/login-img.png' alt='login' className='h-[450px] w-auto' />
        </div>
        <Formik initialValues={{ username: '', password: '' }} onSubmit={handleSubmit}>
          {({ isSubmitting, isValid, isDirty, values }
          ) => (
            <div className='w-[350px] flex items-center justify-center'>
              <Form className='min-w-[270px] flex flex-col items-center justify-center'>
                <div className='min-w-[270px] mt-9 mb-9 flex justify-center'>
                  <img src='/assets/insta-logo.png' className='w-[175px]' alt='instagram_logo' />
                </div>
                <div className='flex flex-col gap-y-[6px] min-w-[270px] mb-[14px]'>
                  <Input name='username' label='Telefon numarası, kullanıcı adı veya e-posta' />
                  <Input type='password' name='password' label='Şifre' />
                </div>
                <Button>
                  Giriş yap
                </Button>
                <Separator />
              </Form>
            </div>
          )}


        </Formik>
      </div>
    </div>
  )
}