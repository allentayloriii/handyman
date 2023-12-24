import { Formik } from 'formik';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});
const RegisterScreen = () => {
  const initialValues = {name: '', email: '', password: ''};
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handlesubmit, errors }) => (
          <>
            <AppTextInput 
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              onChangeText={handleChange('name')}
              placeHolder="Name"
            />
            <ErrorMessage error={errors.name} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              onChangeText={handleChange('email')}
              placeHolder="Email"
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange('password')}
            />
            <ErrorMessage error={errors.password} />
            <AppButton text="Register" onPress={handlesubmit} />
          </>
        )}
      </Formik>
    </Screen>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})