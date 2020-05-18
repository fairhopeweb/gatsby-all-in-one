import React from "react";
import Layout from "../components/layout/Layout";

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import CategoryList from '../components/categories/CategoryList';
import Featured from '../components/featured/Featured';

export default ({ data }) => {

  const doRandomSearch = event => {
    alert(`Under Construction, Have Patience!`);
  }

  return (
    <Layout>
      <Container className="main" fluid>
        <Row className="justify-content-md-center">
          <Col xs lg="12">
            <Form inline className="randomSearch">
              <FormControl
                type="text"
                placeholder="Type a keyword and hit the Search button"
                className="mr-sm-2" />
              <Button 
                variant="primary"  
                onClick={ event => doRandomSearch(event)}
                active>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col sm={9}>
            <CategoryList />
          </Col>
          <Col sm={3}>
            <Row className="featured">
              <Col>
                <Featured />
              </Col>
            </Row>
            <Row>
              <Col>
                Top 5
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            All Category links
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}