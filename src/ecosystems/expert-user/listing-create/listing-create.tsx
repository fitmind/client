import React from 'react';
import { Button, Card, Col, Container, Form, InputGroup, Jumbotron, Row } from 'react-bootstrap';
import Header from '../../../atoms/Header/Header';
import { Formik } from 'formik';
import CONFIG from '../../../config/config';
import { values as getvaluesFromObj } from 'ramda';
import * as Yup from 'yup';
import Select from 'react-select';
import Paragraph from '../../../atoms/Paragraph/Paragraph';
import { listingCreateAction } from './listing-create.actions';
import { connect } from 'react-redux';

const ListingCreateSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    price: Yup.string()
        .min(2, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(6, 'Too Short!')
        .max(1000, 'Too Long!')
        .required('Required'),
    postCode: Yup.string()
        .min(4, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    expertiseArea: Yup.object().required('Required'),
});

interface MapDispatchToProps {
    listingCreateAction: typeof listingCreateAction;
}

type AllProps = MapDispatchToProps;

const ListingCreate: React.FC<AllProps> = ({ listingCreateAction }) => (
    <Container fluid>
        <Jumbotron>
            <Header as={'h2'}>Lets get your listing created</Header>
            <Paragraph as={'md'}>
                Once you have created the listing it will go to be reviewed by one of our experts prior going live
            </Paragraph>
        </Jumbotron>
        <Row className={'mt-5 mb-5'}>
            <Col md={4} />
            <Col>
                <Card>
                    <Card.Body>
                        <Formik
                            initialValues={{
                                name: 'Diego',
                                price: '100',
                                description: 'blah blah blah blah blah blah blah blah blah blah blah blah',
                                expertiseArea: { value: 'PERSONAL_COACH', label: 'Personal Trainer' },
                                pictureUrl: CONFIG.testingPictureUrl,
                                postCode: 'NW13LR',
                            }}
                            validationSchema={ListingCreateSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                console.log(values);
                                listingCreateAction(values);
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
                                        <Form.Label column={true}>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            isValid={touched.name && !errors.name}
                                            isInvalid={!!errors.name}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label column={true}>Price</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>£</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                                type="text"
                                                name="price"
                                                placeholder="How much are you charging?"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.price}
                                                isValid={touched.price && !errors.price}
                                                isInvalid={!!errors.price}
                                            />
                                            <InputGroup.Append>
                                                <InputGroup.Text>.00</InputGroup.Text>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
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
                                        <Form.Label column={true}>Expertise Area</Form.Label>
                                        <Select
                                            value={values.expertiseArea}
                                            onChange={evt => {
                                                setFieldValue('expertiseArea', evt);
                                            }}
                                            options={getvaluesFromObj(CONFIG.expertises)}
                                            name={'expertiseArea'}
                                            closeMenuOnSelect={false}
                                        />
                                        <Form.Text className="text-muted">
                                            You can only select one expertise area for your listing
                                        </Form.Text>
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.expertiseArea}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label column={true}>Post Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="postCode"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.postCode}
                                            isValid={touched.postCode && !errors.postCode}
                                            isInvalid={!!errors.postCode}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">{errors.postCode}</Form.Control.Feedback>
                                    </Form.Group>
                                    <Button
                                        variant="outline-primary"
                                        type="submit"
                                        block={true}
                                        disabled={isSubmitting}
                                    >
                                        Submit Listing For Approval
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

const mapDispatchToProps = {
    listingCreateAction,
};

export default connect(
    null,
    mapDispatchToProps,
)(ListingCreate);
