import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
    <Card style={{ width: '78rem' }}>
      <Card.Header><h1>Blogs</h1></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><h3>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3><br />
        <h5>
        Access token and Refresh token are used in authentication or authorization systems. Refresh token is long-lived and requests a new access token when it is expired . Access tokens are used to access protected resources. </h5> <br />
        <h4 style={{ textDecoration: 'underline' }}>Refresh Token</h4>
       <h5> Refresh token re-validate user without re-enter to login credentials multiple times. Refresh tokens should be stored in an HTTP-only secure cookie.</h5><br />
        <h4 style={{ textDecoration: 'underline' }}>Access Token</h4>
        <h5> Access token is used to authenticate and authorize a user to accessing protected resources and performs actions on server and API. Access tokens should be stored in the client-side memory or in cookies or session storage.
        </h5>
        </ListGroup.Item>
        <ListGroup.Item>
            <h3>2. Compare SQL and NoSQL databases? </h3>
            <h4 style={{ textDecoration: 'underline' }}>SQL Databases</h4>
            <h5>i. SQL databases are in Relational Database Management System (RDBMS) categoory.</h5>
            <h5>ii. SQL databases are suited for complex queries.</h5>
            <h5>iii. MySQL, Oracle are examples of SQL database.</h5>
            <h4 style={{ textDecoration: 'underline' }}>NoSQL Databases</h4>
            <h5>i. NoSQL databases are in the Non-relational or distributed database system category.</h5>
            <h5>ii. NoSQL databases are not suitable for complex queries .</h5>
            <h5>iii. MongoDB, Neo4j are examples of nosql database.</h5>
        </ListGroup.Item>
        <ListGroup.Item> <h3>3. What is express js? What is Nest JS?</h3>
        <h4 style={{ textDecoration: 'underline' }}>Express JS</h4>
        <h5>Express.js is a framework which provides minimalist and flexible approach for building web applications and APIs. It is a layer on the top of the Node js that manages servers and routes.</h5>
        <h4 style={{ textDecoration: 'underline' }}>NestJS</h4>
        <h5>NestJS is a progressive framework built for building efficient, scalable, and maintainable server-side applications. It is a Node.js framework.</h5>
        </ListGroup.Item>
        <ListGroup.Item>
            <h3>4. What is MongoDB aggregate and how does it work?</h3>
            <h5>MongoDB's aggregate is a aggregation framework that performs advanced data analysis and transformation operations. 
                <br />MongoDB aggregate operation processes the data records or documents then returns computed results.
            </h5>
        </ListGroup.Item>
      </ListGroup>
    </Card>
        </div>
    );
};

export default Blog;