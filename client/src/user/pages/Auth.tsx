import { useContext } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthContext } from '../../utils/context/authContent';
import { userValidationLogin } from '../../utils/validations/users';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../shared/components/UIElements/Card';
import { Input } from '../../shared/components/formElements/Input';
import Button from '../../shared/components/formElements/Button';

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const userValidation = userValidationLogin(isLoginMode);

  const auth = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(userValidation),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const switchModeHandler = () => {
    setIsLoginMode((prevState) => !prevState);
    reset();
  };

  const loginSubmitHandler = (data: z.infer<typeof userValidation>) => {
    console.log(data);
    auth.login();
  };

  return (
    <Card className='form'>
      <h2 className='text-center mb-5'>{isLoginMode ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit(loginSubmitHandler)}>
        <Card className='form'>
          {!isLoginMode && (
            <Input
              label='user name'
              {...register('username')}
            >
              {errors.username && <p>{errors.username.message}</p>}
            </Input>
          )}

          <Input
            label='email'
            type='email'
            {...register('email')}
          >
            {errors.email && <p>{errors.email.message}</p>}
          </Input>
          <Input
            label='password'
            {...register('password')}
            type='password'
          >
            {errors.password && <p>{errors.password.message}</p>}
          </Input>
        </Card>

        <div className='flex justify-center mb-5'>
          <Button
            type='submit'
            disabled={!isValid ? true : false}
          >
            {isLoginMode ? 'Login' : 'Signup'}
          </Button>
        </div>
      </form>

      <div className='flex justify-center'>
        <Button
          inverse
          className='w-full'
          onClick={switchModeHandler}
        >
          Click to {isLoginMode ? 'Sign up' : 'Login'}
        </Button>
      </div>
    </Card>
  );
};

export default Auth;
