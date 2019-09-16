import React from 'react';
import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';

const ListingsFilters: React.FC = () => (
    <Card>
        <Card.Header>Filters</Card.Header>
        <Card.Body>
            <Card.Text>Please help yourself finding the right expert for your needs</Card.Text>
            <Formik
                initialValues={{ maximumPrice: '', minimumPrice: '', expertise: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('submitted', values);
                    setSubmitting(false);
                }}
                render={({ values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label column={true}>Minimum price</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>£</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="minimumPrice"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.minimumPrice}
                                    isValid={touched.minimumPrice && !errors.minimumPrice}
                                    isInvalid={!!errors.minimumPrice}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">{errors.minimumPrice}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label column={true}>Maximum price</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>£</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    name="maximumPrice"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.maximumPrice}
                                    isValid={touched.maximumPrice && !errors.maximumPrice}
                                    isInvalid={!!errors.maximumPrice}
                                />
                                <InputGroup.Append>
                                    <InputGroup.Text>.00</InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">{errors.maximumPrice}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label column={true}>Expertise</Form.Label>
                            <Form.Control
                                as="select"
                                // multiple
                                name="expertise"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.expertise}
                            >
                                <option>yoga teacher</option>
                                <option>personal trainer</option>
                                <option>nutritionist</option>
                                <option>life coach</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="outline-primary" type="submit" block={true} disabled={isSubmitting}>
                            Filter
                        </Button>
                    </Form>
                )}
            />
        </Card.Body>
    </Card>
);

export default ListingsFilters;
