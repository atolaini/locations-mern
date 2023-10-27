import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { placeValidation } from '../../utils/validations/places';

import Card from '../../shared/components/UIElements/Card';
import { Input, Textarea } from '../../shared/components/formElements/Input';
import Button from '../../shared/components/formElements/Button';

const NewPlace = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(placeValidation),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmitHandler = (data: z.infer<typeof placeValidation>) => {
    console.log('first');
    console.log(data);
    reset();
  };

  return (
    <Card className='form'>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          label={'Title'}
          {...register('title')}
        >
          {errors.title && (
            <p className='text-red-500 mt-1'>{errors.title.message}</p>
          )}
        </Input>
        <Textarea
          label='Description'
          {...register('description')}
        >
          {errors.description && (
            <p className='text-red-500 mt-2'>{errors.description.message}</p>
          )}
        </Textarea>

        <Button type='submit'>Add new place</Button>
      </form>
    </Card>
  );
};

export default NewPlace;
