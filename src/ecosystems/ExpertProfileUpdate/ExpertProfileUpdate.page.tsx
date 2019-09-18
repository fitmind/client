import { Formik } from 'formik';
import React from 'react';
import { Button, Card, Col, Container, Form, Image, Jumbotron, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import * as Yup from 'yup';
import CONFIG from '../../config/config';
import { expertProfileUpdateAction, fetchExpertUserAction } from '../../redux/actions/server/server.actions';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { expertUserInterface } from '../../redux/reducers/server-reducer/server.reducer';
import Select from 'react-select';
import Header from '../../atoms/Header/Header';
import { values as getvaluesFromObj } from 'ramda';

const ExpertProfileUpdateSchema = Yup.object().shape({
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
    expertUser: expertUserInterface;
}

interface PropsFromDispatch {
    fetchExpertUserAction: typeof fetchExpertUserAction;
    expertProfileUpdateAction: typeof expertProfileUpdateAction;
}
type ExpertProfilePageAllProps = RouteComponentProps & ConnectedReduxProps & PropsFromState & PropsFromDispatch;

export class ExpertProfileUpdate extends React.Component<ExpertProfilePageAllProps> {
    public componentDidMount() {
        this.props.fetchExpertUserAction();
    }
    public render() {
        const { expertUser } = this.props;
        return (
            <Container fluid className={'text-center'}>
                <Jumbotron>
                    <Header as={'h2'}>Update your profile here</Header>
                </Jumbotron>
                <Row className={'mt-5 mb-5'}>
                    <Col md={4} />
                    <Col md={4}>
                        <Card>
                            <Card.Header as="h5">Edit your Profile</Card.Header>
                            <Card.Body>
                                <Image src={expertUser.profilePictureUrl} rounded />
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={expertUser}
                                    validationSchema={ExpertProfileUpdateSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        this.props.expertProfileUpdateAction(values);
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
                                                <Form.Label column={true}>Expertises</Form.Label>
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
                                            {expertUser &&
                                                CONFIG.daysOfTheWeek.map(day => (
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
                                                Update Profile
                                            </Button>
                                        </Form>
                                    )}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    expertUser: state.server.expertUser,
});
export default withRouter(
    connect(
        mapStateToProps,
        {
            fetchExpertUserAction,
            expertProfileUpdateAction,
        },
    )(ExpertProfileUpdate),
);
