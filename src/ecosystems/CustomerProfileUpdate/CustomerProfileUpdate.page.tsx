import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import CONFIG from '../../config/config';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { customerUserInterface } from '../../redux/reducers/server-reducer/server.reducer';
import { fetchCustomerUserAction, customerProfileUpdateAction } from '../../redux/actions/server/server.actions';
import Select from 'react-select';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { values as getvaluesFromObj } from 'ramda';

const CustomerProfileUpdateSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
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
interface PropsFromState {
    customerUser: customerUserInterface;
}

interface PropsFromDispatch {
    fetchCustomerUserAction: typeof fetchCustomerUserAction;
    customerProfileUpdateAction: typeof customerProfileUpdateAction;
}
type CustomerProfilePageAllProps = RouteComponentProps & ConnectedReduxProps & PropsFromState & PropsFromDispatch;

export class CustomerProfileUpdate extends React.Component<CustomerProfilePageAllProps> {
    public componentDidMount() {
        this.props.fetchCustomerUserAction();
    }
    public render() {
        let { customerUser } = this.props;
        if (this.props && customerUser && customerUser.interestedInExpertiseAreas) {
            customerUser = {
                ...customerUser,
                interestedInExpertiseAreas: customerUser.interestedInExpertiseAreas.map(x => ({ value: x, label: x })),
            };
        }
        return (
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col md={4}>
                        <CardWrapper>
                            <Card>
                                <Card.Header as="h5">Edit your Profile</Card.Header>
                                <Card.Body>
                                    <CenterContainer>
                                        <Image src={customerUser.pictureUrl} rounded />
                                        <Formik
                                            enableReinitialize={true}
                                            initialValues={customerUser}
                                            validationSchema={CustomerProfileUpdateSchema}
                                            onSubmit={(values, { setSubmitting }) => {
                                                this.props.customerProfileUpdateAction(values);
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
                                                        Update Profile
                                                    </Button>
                                                </Form>
                                            )}
                                        />
                                    </CenterContainer>
                                </Card.Body>
                            </Card>
                        </CardWrapper>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const CenterContainer = styled.div`
    text-align: center;
`;

const CardWrapper = styled.div`
    margin-top: 5rem;
`;

const mapStateToProps = (state: ApplicationState) => ({
    customerUser: state.server.customerUser,
});
export default withRouter(
    connect(
        mapStateToProps,
        {
            fetchCustomerUserAction,
            customerProfileUpdateAction,
        },
    )(CustomerProfileUpdate),
);
