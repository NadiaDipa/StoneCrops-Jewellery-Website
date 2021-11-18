import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import ShowFeedback from '../ShowFeedback/ShowFeedback';

const Feedback = () => {
    const [reviews, setReviews] = useState([]);
        useEffect(() => {
            fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
        }, []);
    return (
        <div>
            <Container className="mt-5">
                    <div>
                        <h1 className="text-center fw-bold mt-4">
                        <span className="border-bottom border-dark" style={{ color: '#000002', letterSpacing: '5px' }}>CLIENT TESTIMONIALS</span>
                        </h1>
                        <h5 className="mb-4" style={{letterSpacing:'5px', color: '#000002'}}>WHAT THEY SAY</h5>
                    </div>

                <div className="row">
                    {reviews.map((review) => (
                    <ShowFeedback key={review._id} review={review}></ShowFeedback>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Feedback;