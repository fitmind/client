import React, { useEffect } from 'react';
import Header from '../../atoms/Header/Header';
import { Container, Col, Row, Card, Form, InputGroup, Button } from 'react-bootstrap';
import ListingsList from './components/listings-list';
import { getListings } from './listings-page.actions';
import { connect } from 'react-redux';
import { ApplicationState } from '../../redux/reducers/root.reducer';
import { Listing } from '../../interfaces/listing';
import { Formik } from 'formik';
import CONFIG from '../../config/config';
import * as Yup from 'yup';
import { values as getvaluesFromObj } from 'ramda';
import Select from 'react-select';

const ListingFilterSchema = Yup.object().shape({
    minPrice: Yup.string()
        .min(1)
        .max(4),
    maxPrice: Yup.string()
        .min(1)
        .max(4),
});

interface MapStateToProps {
    listings: Listing[];
}

interface MapDispatchToProps {
    getListings: typeof getListings;
}

type allProps = MapStateToProps & MapDispatchToProps;

const ListingsPage: React.FC<allProps> = ({ listings, getListings }) => {
    useEffect(() => {
        getListings({ page: 1, size: 20 });
    }, [getListings]);

    return (
        <Container fluid className={'mt-5 mb-5 text-center'}>
            <Header as={'h1'}>Listings</Header>
            <Container>
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Header>Filters</Card.Header>
                            <Card.Body>
                                <Card.Text>Please help yourself finding the right expert for your needs</Card.Text>
                                <Formik
                                    validationSchema={ListingFilterSchema}
                                    initialValues={{
                                        minPrice: '',
                                        maxPrice: '',
                                        expertise: { value: 'all', label: 'All' },
                                    }}
                                    onSubmit={(values, actions) => {
                                        getListings({ size: 20, page: 1, ...values });
                                        actions.setSubmitting(false);
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
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group>
                                                <Form.Label column={true}>Minimum price</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>£</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        name="minPrice"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.minPrice}
                                                        isValid={touched.minPrice && !errors.minPrice}
                                                        isInvalid={!!errors.minPrice}
                                                    />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>.00</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.minPrice}
                                                </Form.Control.Feedback>
                                                <Form.Text className="text-muted">Min is £1.00</Form.Text>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label column={true}>Maximum price</Form.Label>
                                                <InputGroup className="mb-3">
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>£</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        name="maxPrice"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.maxPrice}
                                                        isValid={touched.maxPrice && !errors.maxPrice}
                                                        isInvalid={!!errors.maxPrice}
                                                    />
                                                    <InputGroup.Append>
                                                        <InputGroup.Text>.00</InputGroup.Text>
                                                    </InputGroup.Append>
                                                </InputGroup>
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.maxPrice}
                                                </Form.Control.Feedback>
                                                <Form.Text className="text-muted">Max is £4000.00</Form.Text>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label column={true}>Expertise</Form.Label>
                                                <Select
                                                    value={values.expertise}
                                                    onChange={evt => {
                                                        setFieldValue('expertise', evt);
                                                    }}
                                                    options={[
                                                        { value: 'all', label: 'All' },
                                                        ...getvaluesFromObj(CONFIG.expertises),
                                                    ]}
                                                    name={'expertise'}
                                                    closeMenuOnSelect={true}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.expertise}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                            <Button
                                                variant="outline-primary"
                                                type="submit"
                                                block={true}
                                                disabled={isSubmitting}
                                            >
                                                Filter
                                            </Button>
                                        </Form>
                                    )}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={9}>
                        <ListingsList listings={listings} />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

const mapStateToProps = (state: ApplicationState) => ({
    listings: state.server.listings,
});

const mapDispatchToProps = {
    getListings,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListingsPage);
