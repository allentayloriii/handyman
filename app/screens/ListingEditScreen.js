import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import Screen from '../components/Screen';
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from '../components/forms';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  { label: 'Furniture', value: 1, backgroundColor: 'red', icon: 'floor-lamp' },
  { label: 'Clothing', value: 2, backgroundColor: 'blue', icon: 'shoe-heel' },
  { label: 'Camera', value: 3, backgroundColor: 'green', icon: 'camera' },
  { label: 'Games', value: 4, backgroundColor: 'purple', icon: 'cards' },
  { label: 'Cars', value: 5, backgroundColor: 'maroon', icon: 'car' },
  { label: 'Sports', value: 6, backgroundColor: 'pink', icon: 'basketball' },
  {
    label: 'Movies & Music',
    value: 7,
    backgroundColor: 'salmon',
    icon: 'headphones',
  },
  {
    label: 'Books',
    value: 8,
    backgroundColor: 'orange',
    icon: 'book-open-blank-variant',
  },
  { label: 'Other', value: 9, backgroundColor: 'brown', icon: 'dots-grid' },
];

const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={() => console.log(location)}
      >
        <FormImagePicker name='images' />
        <FormField maxLength={255} name='title' placeholder='Title' />
        <FormField
          keyboardType='numeric'
          maxLength={8}
          name='price'
          placeholder='Price'
          width={120}
        />
        <Picker
          items={categories}
          name='category'
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder='Category'
          width='50%'
        />
        <FormField
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />
        <SubmitButton text='Post' />
      </Form>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
