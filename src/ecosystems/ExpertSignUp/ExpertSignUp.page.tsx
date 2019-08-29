import MultiSelect from '@kenshooui/react-multi-select';
import '@kenshooui/react-multi-select/dist/style.css';
import { Formik } from 'formik';
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import * as Yup from 'yup';
import CONFIG from '../../config/config';
import { expertSignUpAction } from '../../redux/actions/server/server.actions';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';

const ExpertSignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirm is required'),
    isAnExpertIn: Yup.array()
        .of(Yup.string())
        .min(1)
        .required('Required'),
    description: Yup.string()
        .min(6, 'Too Short!')
        .max(700, 'Too Long!')
        .required('Required'),
    phone: Yup.string()
        .matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            'Invalid',
        )
        .required('Required'),
});

interface PropsFromDispatch {
    expertSignUpAction: typeof expertSignUpAction;
}

type ExpertSignUpPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps;

export class ExpertSignUpPage extends React.Component<ExpertSignUpPageAllProps> {
    public render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col>
                        <CardWrapper>
                            <Card>
                                <Card.Header as="h5">Expert Registration</Card.Header>
                                <Card.Body>
                                    <Formik
                                        initialValues={{
                                            email: '',
                                            firstName: '',
                                            lastName: '',
                                            password: '',
                                            passwordConfirm: '',
                                            isAnExpertIn: [],
                                            description: '',
                                            phone: '',
                                            weeklyAvailability: {
                                                monday: [],
                                                tuesday: [],
                                                wednessday: [],
                                                thursday: [],
                                                friday: [],
                                                saturday: [],
                                                sunday: [],
                                            },
                                        }}
                                        validationSchema={ExpertSignUpSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            this.props.expertSignUpAction(values);
                                            setSubmitting(false);
                                        }}
                                        render={({
                                            values,
                                            errors,
                                            touched,
                                            handleBlur,
                                            handleChange,
                                            handleSubmit,
                                            isSubmitting,
                                            setFieldValue,
                                        }) => (
                                            <Form noValidate onSubmit={handleSubmit}>
                                                <Form.Group>
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="firstName"
                                                        placeholder="your name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.firstName}
                                                        isValid={touched.firstName && !errors.firstName}
                                                        isInvalid={!!errors.firstName}
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.firstName}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="lastName"
                                                        placeholder="your last name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.lastName}
                                                        isValid={touched.lastName && !errors.lastName}
                                                        isInvalid={!!errors.lastName}
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.lastName}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                        isValid={touched.email && !errors.email}
                                                        isInvalid={!!errors.email}
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.email}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        name="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                        isValid={touched.password && !errors.password}
                                                        isInvalid={!!errors.password}
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.password}
                                                    </Form.Control.Feedback>
                                                    <Form.Text className="text-muted">
                                                        Password needs to have numbers and letters
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Password Confirmation</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        name="passwordConfirm"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.passwordConfirm}
                                                        isValid={touched.passwordConfirm && !errors.passwordConfirm}
                                                        isInvalid={!!errors.passwordConfirm}
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.passwordConfirm}
                                                    </Form.Control.Feedback>
                                                    <Form.Text className="text-muted">
                                                        Passwords need to match
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Expertise</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        multiple={true}
                                                        name="isAnExpertIn"
                                                        onChange={evt =>
                                                            setFieldValue(
                                                                'isAnExpertIn',
                                                                [].slice
                                                                    .call(
                                                                        (evt.target as HTMLSelectElement)
                                                                            .selectedOptions,
                                                                    )
                                                                    .map(option => option.value),
                                                            )
                                                        }
                                                        onBlur={handleBlur}
                                                        isValid={touched.isAnExpertIn && !errors.isAnExpertIn}
                                                        isInvalid={!!errors.isAnExpertIn}
                                                    >
                                                        {' '}
                                                        {Object.keys(CONFIG.expertises).map((key: string) => (
                                                            <option key={key} value={CONFIG.expertises[key].value}>
                                                                {CONFIG.expertises[key].display}
                                                            </option>
                                                        ))}
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Your Description</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={4}
                                                        type="text"
                                                        name="description"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.description}
                                                        isValid={touched.description && !errors.description}
                                                        isInvalid={!!errors.description}
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.description}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Phone</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="phone"
                                                        placeholder="Enter phone"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.phone}
                                                        isValid={touched.phone && !errors.phone}
                                                        isInvalid={!!errors.phone}
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        {errors.phone}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Weekly Availibility(Monday)</Form.Label>
                                                    <MultiSelect
                                                        showSearch={false}
                                                        name="monday"
                                                        items={CONFIG.oneDayAvailability}
                                                        selectedItems={values.weeklyAvailability.monday}
                                                        onChange={values => {
                                                            setFieldValue('weeklyAvailability.monday', values);
                                                        }}
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Weekly Availibility(Tuesday)</Form.Label>
                                                    <MultiSelect
                                                        showSearch={false}
                                                        name="monday"
                                                        items={CONFIG.oneDayAvailability}
                                                        selectedItems={values.weeklyAvailability.tuesday}
                                                        onChange={values => {
                                                            setFieldValue('weeklyAvailability.tuesday', values);
                                                        }}
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Weekly Availibility(Wednessday)</Form.Label>
                                                    <MultiSelect
                                                        showSearch={false}
                                                        name="monday"
                                                        items={CONFIG.oneDayAvailability}
                                                        selectedItems={values.weeklyAvailability.wednessday}
                                                        onChange={values => {
                                                            setFieldValue('weeklyAvailability.wednessday', values);
                                                        }}
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Weekly Availibility(Thursday)</Form.Label>
                                                    <MultiSelect
                                                        showSearch={false}
                                                        name="monday"
                                                        items={CONFIG.oneDayAvailability}
                                                        selectedItems={values.weeklyAvailability.thursday}
                                                        onChange={values => {
                                                            setFieldValue('weeklyAvailability.thursday', values);
                                                        }}
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Weekly Availibility(Friday)</Form.Label>
                                                    <MultiSelect
                                                        showSearch={false}
                                                        name="monday"
                                                        items={CONFIG.oneDayAvailability}
                                                        selectedItems={values.weeklyAvailability.friday}
                                                        onChange={values => {
                                                            setFieldValue('weeklyAvailability.friday', values);
                                                        }}
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Weekly Availibility(Saturday)</Form.Label>
                                                    <MultiSelect
                                                        showSearch={false}
                                                        name="monday"
                                                        items={CONFIG.oneDayAvailability}
                                                        selectedItems={values.weeklyAvailability.saturday}
                                                        onChange={values => {
                                                            setFieldValue('weeklyAvailability.saturday', values);
                                                        }}
                                                    />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Label>Weekly Availibility(Sunday)</Form.Label>
                                                    <MultiSelect
                                                        showSearch={false}
                                                        name="monday"
                                                        items={CONFIG.oneDayAvailability}
                                                        selectedItems={values.weeklyAvailability.sunday}
                                                        onChange={values => {
                                                            setFieldValue('weeklyAvailability.sunday', values);
                                                        }}
                                                    />
                                                </Form.Group>
                                                <Button
                                                    variant="outline-primary"
                                                    type="submit"
                                                    block={true}
                                                    disabled={isSubmitting}
                                                >
                                                    Register
                                                </Button>
                                            </Form>
                                        )}
                                    />
                                </Card.Body>
                            </Card>
                        </CardWrapper>
                    </Col>
                    <Col md={4} />
                </Row>
            </Container>
        );
    }
}

const mapDispatchToProps = {
    expertSignUpAction,
};

export default connect(
    null,
    mapDispatchToProps,
)(ExpertSignUpPage);

const CardWrapper = styled.div`
    margin-top: 5rem;
`;
