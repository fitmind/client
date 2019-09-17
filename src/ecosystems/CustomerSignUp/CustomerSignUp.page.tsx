import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { customerSignUpAction } from '../../redux/actions/server/server.actions';
import { ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import CONFIG from '../../config/config';
import { values as getvaluesFromObj } from 'ramda';
import Select from 'react-select';

const CustomerSignUpSchema = Yup.object().shape({
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
    interestedInExpertiseAreas: Yup.array()
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
    customerSignUpAction: typeof customerSignUpAction;
}

type CustomerSignUpPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps;

export class CustomerSignUpPage extends React.Component<CustomerSignUpPageAllProps> {
    public render() {
        return (
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col>
                        <CardWrapper>
                            <Card>
                                <Card.Header as="h5">Customer Registration</Card.Header>
                                <Card.Body>
                                    <Formik
                                        initialValues={{
                                            email: '',
                                            firstName: '',
                                            lastName: '',
                                            password: '',
                                            passwordConfirm: '',
                                            interestedInExpertiseAreas: [],
                                            description: '',
                                            phone: '',
                                        }}
                                        validationSchema={CustomerSignUpSchema}
                                        onSubmit={(values, { setSubmitting }) => {
                                            this.props.customerSignUpAction(values);
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
                                                <Form.Group controlId="formBasicPassword">
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
                                                <Form.Group controlId="formBasicPasswordConfirm">
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
                                                    <Form.Label column={true}>
                                                        What type of coaching are you looking at?
                                                    </Form.Label>
                                                    <Select
                                                        value={values.interestedInExpertiseAreas}
                                                        onChange={evt => {
                                                            setFieldValue('interestedInExpertiseAreas', evt);
                                                        }}
                                                        options={getvaluesFromObj(CONFIG.expertises)}
                                                        isMulti={true}
                                                        name={'interestedInExpertiseAreas'}
                                                        closeMenuOnSelect={false}
                                                    />
                                                    {/*<Form.Control*/}
                                                    {/*    as="select"*/}
                                                    {/*    multiple={true}*/}
                                                    {/*    name="interestedInExpertiseAreas"*/}
                                                    {/*    onChange={evt =>*/}
                                                    {/*        setFieldValue(*/}
                                                    {/*            'interestedInExpertiseAreas',*/}
                                                    {/*            [].slice*/}
                                                    {/*                .call(*/}
                                                    {/*                    (evt.target as HTMLSelectElement)*/}
                                                    {/*                        .selectedOptions,*/}
                                                    {/*                )*/}
                                                    {/*                .map(option => option.value),*/}
                                                    {/*        )*/}
                                                    {/*    }*/}
                                                    {/*    onBlur={handleBlur}*/}
                                                    {/*    isValid={*/}
                                                    {/*        touched.interestedInExpertiseAreas &&*/}
                                                    {/*        !errors.interestedInExpertiseAreas*/}
                                                    {/*    }*/}
                                                    {/*    isInvalid={!!errors.interestedInExpertiseAreas}*/}
                                                    {/*>*/}
                                                    {/*    {' '}*/}
                                                    {/*    {Object.keys(CONFIG.expertises).map((key: string) => (*/}
                                                    {/*        <option key={key} value={CONFIG.expertises[key].value}>*/}
                                                    {/*            {CONFIG.expertises[key].display}*/}
                                                    {/*        </option>*/}
                                                    {/*    ))}*/}
                                                    {/*</Form.Control>*/}
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
    customerSignUpAction,
};

export default connect(
    null,
    mapDispatchToProps,
)(CustomerSignUpPage);

const CardWrapper = styled.div`
    margin-top: 5rem;
`;
