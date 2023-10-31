import { useForm } from 'react-hook-form';
import { PopupLayout } from 'react-modal-global';
import { Stack } from '@mui/system';
import InputTextField from '../components/InputTextField';
import MultipleSelect from '../components/MultipleSelect';
import DatePicker from '../components/DatePicker';
import BasicButton from '../components/BasicButton';
import { getItem } from '../utils/handleStorage';

const MovieForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data));
    const genres = getItem('genres');

    return (
        <PopupLayout>
            <h1>Create new movie</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}>
                    <InputTextField label='Title' {...register('originalTitle', { required: 'Title field is required', minLength: { value: 2, message: 'Min length is 2' } })} />
                    <p style={{ color: 'red' }}>{errors.originalTitle?.message}</p>
                    <MultipleSelect label='Genre' options={genres} valueField='id' nameField='name' {...register('genre')} />
                    <DatePicker label='Release date' format='YYYY-MM-DD' {...register('releaseDate', { required: 'Release date is required', validate: { validateDate: date => new Date(date) != 'Invalid Date' } })} />
                    <p style={{ color: 'red' }}>{errors.releaseDate?.message}</p>
                    <InputTextField label='Actors' multiline {...register('actors')} />
                    <InputTextField label='Directors' multiline {...register('directors')} />
                    <BasicButton label='Save' type='submit' />
                </Stack>
            </form>
        </PopupLayout>
    );
}

export default MovieForm;
