import { Formik } from 'formik';
import React from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import * as Yup from 'yup';
import CONFIG from '../../config/config';
import { expertProfileUpdateAction, fetchExpertUserAction } from '../../redux/actions/server/server.actions';
import { ApplicationState, ConnectedReduxProps } from '../../redux/reducers/root.reducer';
import { expertUserInterface } from '../../redux/reducers/server-reducer/server.reducer';

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
            <Container fluid>
                <Row>
                    <Col md={4} />
                    <Col md={4}>
                        <CardWrapper>
                            <Card>
                                <Card.Header as="h5">Edit your Profile</Card.Header>
                                <Card.Body>
                                    <CenterContainer>
                                        <Image src={expertUser.profilePictureUrl} rounded />
                                        <Formik
                                            enableReinitialize={true} // #DOUBT without this, details not coming
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
                                                        <Form.Label column={true}>
                                                            What type of coaching are you looking at?
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="select"
                                                            multiple={true}
                                                            name="interestedInExpertiseAreas"
                                                            onChange={evt =>
                                                                setFieldValue(
                                                                    'interestedInExpertiseAreas',
                                                                    [].slice
                                                                        .call(
                                                                            (evt.target as HTMLSelectElement)
                                                                                .selectedOptions,
                                                                        )
                                                                        .map(option => option.value),
                                                                )
                                                            }
                                                            values={expertUser.isAnExpertIn}
                                                            onBlur={handleBlur}
                                                            isValid={touched.isAnExpertIn && !errors.isAnExpertIn}
                                                            isInvalid={!!errors.isAnExpertIn}
                                                        >
                                                            {' '}
                                                            {Object.keys(CONFIG.expertises).map((key: string) => (
                                                                <option
                                                                    key={key}
                                                                    value={CONFIG.expertises[key].value}
                                                                    selected={
                                                                        values &&
                                                                        values.isAnExpertIn &&
                                                                        values.isAnExpertIn.indexOf(
                                                                            CONFIG.expertises[key].value,
                                                                        ) !== -1
                                                                            ? true
                                                                            : false
                                                                    }
                                                                >
                                                                    {CONFIG.expertises[key].display}
                                                                </option>
                                                            ))}
                                                        </Form.Control>
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
                                                    {/*<Form.Group>*/}
                                                    {/*    <Form.Label>Weekly Availibility(Monday)</Form.Label>*/}
                                                    {/*    <MultiSelect*/}
                                                    {/*        showSearch={false}*/}
                                                    {/*        name="monday"*/}
                                                    {/*        items={CONFIG.oneDayAvailability}*/}
                                                    {/*        selectedItems={*/}
                                                    {/*            values.weeklyAvailability*/}
                                                    {/*                ? values.weeklyAvailability.monday*/}
                                                    {/*                : []*/}
                                                    {/*        }*/}
                                                    {/*        onChange={values => {*/}
                                                    {/*            setFieldValue('weeklyAvailability.monday', values);*/}
                                                    {/*        }}*/}
                                                    {/*    />*/}
                                                    {/*</Form.Group>*/}
                                                    {/*<Form.Group>*/}
                                                    {/*    <Form.Label>Weekly Availibility(Tuesday)</Form.Label>*/}
                                                    {/*    <MultiSelect*/}
                                                    {/*        showSearch={false}*/}
                                                    {/*        name="monday"*/}
                                                    {/*        items={CONFIG.oneDayAvailability}*/}
                                                    {/*        selectedItems={*/}
                                                    {/*            values.weeklyAvailability*/}
                                                    {/*                ? values.weeklyAvailability.tuesday*/}
                                                    {/*                : []*/}
                                                    {/*        }*/}
                                                    {/*        onChange={values => {*/}
                                                    {/*            setFieldValue('weeklyAvailability.tuesday', values);*/}
                                                    {/*        }}*/}
                                                    {/*    />*/}
                                                    {/*</Form.Group>*/}
                                                    {/*<Form.Group>*/}
                                                    {/*    <Form.Label>Weekly Availibility(Wednessday)</Form.Label>*/}
                                                    {/*    <MultiSelect*/}
                                                    {/*        showSearch={false}*/}
                                                    {/*        name="monday"*/}
                                                    {/*        items={CONFIG.oneDayAvailability}*/}
                                                    {/*        selectedItems={*/}
                                                    {/*            values.weeklyAvailability*/}
                                                    {/*                ? values.weeklyAvailability.wednessday*/}
                                                    {/*                : []*/}
                                                    {/*        }*/}
                                                    {/*        onChange={values => {*/}
                                                    {/*            setFieldValue('weeklyAvailability.wednessday', values);*/}
                                                    {/*        }}*/}
                                                    {/*    />*/}
                                                    {/*</Form.Group>*/}
                                                    {/*<Form.Group>*/}
                                                    {/*    <Form.Label>Weekly Availibility(Thursday)</Form.Label>*/}
                                                    {/*    <MultiSelect*/}
                                                    {/*        showSearch={false}*/}
                                                    {/*        name="monday"*/}
                                                    {/*        items={CONFIG.oneDayAvailability}*/}
                                                    {/*        selectedItems={*/}
                                                    {/*            values.weeklyAvailability*/}
                                                    {/*                ? values.weeklyAvailability.thursday*/}
                                                    {/*                : []*/}
                                                    {/*        }*/}
                                                    {/*        onChange={values => {*/}
                                                    {/*            setFieldValue('weeklyAvailability.thursday', values);*/}
                                                    {/*        }}*/}
                                                    {/*    />*/}
                                                    {/*</Form.Group>*/}
                                                    {/*<Form.Group>*/}
                                                    {/*    <Form.Label>Weekly Availibility(Friday)</Form.Label>*/}
                                                    {/*    <MultiSelect*/}
                                                    {/*        showSearch={false}*/}
                                                    {/*        name="monday"*/}
                                                    {/*        items={CONFIG.oneDayAvailability}*/}
                                                    {/*        selectedItems={*/}
                                                    {/*            values.weeklyAvailability*/}
                                                    {/*                ? values.weeklyAvailability.friday*/}
                                                    {/*                : []*/}
                                                    {/*        }*/}
                                                    {/*        onChange={values => {*/}
                                                    {/*            setFieldValue('weeklyAvailability.friday', values);*/}
                                                    {/*        }}*/}
                                                    {/*    />*/}
                                                    {/*</Form.Group>*/}
                                                    {/*<Form.Group>*/}
                                                    {/*    <Form.Label>Weekly Availibility(Saturday)</Form.Label>*/}
                                                    {/*    <MultiSelect*/}
                                                    {/*        showSearch={false}*/}
                                                    {/*        name="monday"*/}
                                                    {/*        items={CONFIG.oneDayAvailability}*/}
                                                    {/*        selectedItems={*/}
                                                    {/*            values.weeklyAvailability*/}
                                                    {/*                ? values.weeklyAvailability.saturday*/}
                                                    {/*                : []*/}
                                                    {/*        }*/}
                                                    {/*        onChange={values => {*/}
                                                    {/*            setFieldValue('weeklyAvailability.saturday', values);*/}
                                                    {/*        }}*/}
                                                    {/*    />*/}
                                                    {/*</Form.Group>*/}
                                                    {/*<Form.Group>*/}
                                                    {/*    <Form.Label>Weekly Availibility(Sunday)</Form.Label>*/}
                                                    {/*    <MultiSelect*/}
                                                    {/*        showSearch={false}*/}
                                                    {/*        name="monday"*/}
                                                    {/*        items={CONFIG.oneDayAvailability}*/}
                                                    {/*        selectedItems={*/}
                                                    {/*            values.weeklyAvailability*/}
                                                    {/*                ? values.weeklyAvailability.sunday*/}
                                                    {/*                : []*/}
                                                    {/*        }*/}
                                                    {/*        onChange={values => {*/}
                                                    {/*            setFieldValue('weeklyAvailability.sunday', values);*/}
                                                    {/*        }}*/}
                                                    {/*    />*/}
                                                    {/*</Form.Group>*/}
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
