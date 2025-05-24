import React from 'react';

const TestimonialItem = ({ quote, author }) => {
    return (
        <div className="testimonial-item"> {/* class from original CSS */}
            <blockquote>"{quote}"</blockquote>
            <cite>- {author}</cite>
        </div>
    );
};

export default TestimonialItem;
