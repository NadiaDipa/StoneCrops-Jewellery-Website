import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import ShowFeedback from '../ShowFeedback/ShowFeedback';

const Feedback = () => {
    const [reviews, setReviews] = useState([]);
        useEffect(() => {
            fetch("https://boiling-caverns-07920.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
        }, []);
    return (
        <div>
            <Container className="mt-5">
                <div>
                    <h1 className="text-center mb-5 text-info">TESTIMONIAL</h1>
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