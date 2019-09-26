import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ConnectedReduxProps } from '../../../redux/reducers/root.reducer';
import CONFIG from '../../../config/config';
import { values as getvaluesFromObj } from 'ramda';
import Select from 'react-select';
import { customerRegisterAction } from './customer-register.actions';
import { bindActionCreators } from 'redux';

const CustomerRegisterPageSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    name: Yup.string()
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
});

interface PropsFromDispatch {
    customerRegisterAction: typeof customerRegisterAction;
}

type CustomerSignUpPageAllProps = PropsFromDispatch & RouteComponentProps & ConnectedReduxProps;

class CustomerRegister extends React.Component<CustomerSignUpPageAllProps> {
    public render() {
        return (
            <Container fluid>
                <Row className={'mt-5 mb-5'}>
                    <Col md={4} />
                    <Col>
                        <Card>
                            <Card.Header as="h5">Customer Registration</Card.Header>
                            <Card.Body>
                                <Formik
                                    initialValues={{
                                        email: 'testing@email.com',
                                        name: 'Diego',
                                        password: 'Testing123!',
                                        passwordConfirm: 'Testing123!',
                                        pictureUrl: CONFIG.testingPictureUrl,
                                        interestedInExpertiseAreas: [
                                            {
                                                value: 'YOGA_COACH',
                                                label: 'Yoga Teacher',
                                            },
                                        ],
                                        description: 'blah blah blah blah',
                                    }}
                                    validationSchema={CustomerRegisterPageSchema}
                                    onSubmit={values => {
                                        this.props.customerRegisterAction(values);
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
                                                <Form.Label column={true}>Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    placeholder="your name"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.name}
                                                    isValid={touched.name && !errors.name}
                                                    isInvalid={!!errors.name}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.name}
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
                                                <Form.Text className="text-muted">Passwords need to match</Form.Text>
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

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            customerRegisterAction,
        },
        dispatch,
    );

export default connect(
    null,
    mapDispatchToProps,
)(CustomerRegister);
