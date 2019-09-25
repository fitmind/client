import { Formik } from 'formik';
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import Select from 'react-select';
import * as Yup from 'yup';
import CONFIG from '../../config/config';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { values as getvaluesFromObj } from 'ramda';

getvaluesFromObj(CONFIG.expertises);

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

type ExpertSignUpPageAllProps = RouteComponentProps & ConnectedReduxProps;

export class ExpertRegister extends React.Component<ExpertSignUpPageAllProps> {
    public render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col>
                        <Card>
                            <Card.Header as="h5">Expert Registration</Card.Header>
                            <Card.Body>
                                <Formik
                                    initialValues={{
                                        email: 'hola@mail.com',
                                        firstName: 'Diego',
                                        lastName: 'Romero',
                                        password: 'Testing123!',
                                        passwordConfirm: 'Testing123!',
                                        interestedInExpertiseAreas: [],
                                        description: 'blah blah blah',
                                        phone: '07413140789',
                                        isAnExpertIn: [{ value: 'PERSONAL_COACH', label: 'Personal Trainer' }],
                                        profilePictureUrl:
                                                'https://fitmind-dev.s3.eu-west-2.amazonaws.com/mock-images/daniel_photo.png',
                                        weeklyAvailability: {
                                            monday: [],
                                            tuesday: [],
                                            wednesday: [],
                                            thursday: [],
                                            friday: [],
                                            saturday: [],
                                            sunday: [],
                                        },
                                    }}
                                    validationSchema={ExpertSignUpSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        // this.props.expertSignUpAction(values);
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
                                                <Form.Label column={true}>First Name</Form.Label>
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
                                                <Form.Label column={true}>Last Name</Form.Label>
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
                                                <Form.Label column={true}>Email address</Form.Label>
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
                                                <Form.Label column={true}>Password</Form.Label>
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
                                                <Form.Label column={true}>Password Confirmation</Form.Label>
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
                                                <Form.Label column={true}>Expertise</Form.Label>
                                                <Select
                                                    value={values.isAnExpertIn}
                                                    onChange={evt => {
                                                        setFieldValue('isAnExpertIn', evt);
                                                    }}
                                                    options={getvaluesFromObj(CONFIG.expertises)}
                                                    isMulti={true}
                                                    name={'isAnExpertIn'}
                                                    closeMenuOnSelect={false}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.isAnExpertIn}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label column={true}>Your Description</Form.Label>
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
                                                <Form.Label column={true}>Phone</Form.Label>
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
                                            {CONFIG.daysOfTheWeek.map(day => (
                                                <Form.Group key={day}>
                                                    <Form.Label column={true}>{day} Availability</Form.Label>
                                                    <Select
                                                        value={values.weeklyAvailability[day.toLowerCase()]}
                                                        onChange={evt => {
                                                            setFieldValue(
                                                                `weeklyAvailability.${day.toLocaleLowerCase()}`,
                                                                evt,
                                                            );
                                                        }}
                                                        options={CONFIG.availableHours}
                                                        isMulti={true}
                                                        name={`weeklyAvailability.${day.toLocaleLowerCase()}`}
                                                        closeMenuOnSelect={false}
                                                    />
                                                </Form.Group>
                                            ))}
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
                    </Col>
                    <Col md={4} />
                </Row>
            </Container>
        );
    }
}

// const mapDispatchToProps = {
//     expertSignUpAction,
// };

export default connect(
    null,
    null,
)(ExpertRegister);
