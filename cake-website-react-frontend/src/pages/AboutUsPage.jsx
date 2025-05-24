import React from 'react';
import TeamMember from '../components/TeamMember';
import TestimonialItem from '../components/TestimonialItem';
// Optional: import './AboutUsPage.css';

const AboutUsPage = () => {
    const teamMembers = [
        { id: 1, name: "Jane Doe", role: "Founder & Head Baker", bio: "Jane is the creative force behind The Sweet Spot. With over 15 years of baking experience, her passion is crafting unique cakes that exceed expectations.", imagePlaceholder: true },
        { id: 2, name: "John Smith", role: "Lead Decorator", bio: "John's artistic talent brings our cakes to life. He specializes in intricate sugar work and custom designs, ensuring every cake is a masterpiece.", imagePlaceholder: true },
        { id: 3, name: "Alice Brown", role: "Customer Happiness Manager", bio: "Alice ensures every customer experience is smooth and delightful, from initial consultation to the final delicious bite.", imagePlaceholder: true },
    ];

    const bakeryValues = [
        { id: 'v1', title: "Quality Ingredients", description: "We use only the freshest, locally-sourced ingredients whenever possible, because great taste starts with great quality." },
        { id: 'v2', title: "Artistry & Creativity", description: "Every cake is a canvas. We embrace creativity and meticulous craftsmanship to create edible works of art." },
        { id: 'v3', title: "Customer Joy", description: "Our greatest reward is the smile on our customers' faces. We strive to make every celebration a little sweeter." },
        { id: 'v4', title: "Passion for Baking", description: "We genuinely love what we do, and this passion is baked into every cake and treat we create." },
    ];

    const testimonials = [
        { id: 't1', quote: "This was the most delicious and beautiful birthday cake I've ever had! The Sweet Spot truly exceeded my expectations. Highly recommend!", author: "Sarah L." },
        { id: 't2', quote: "Our wedding cake was an absolute dream. Jane and her team listened to our vision and brought it to life perfectly. Thank you, Sweet Spot!", author: "Mark & Emily P." },
        { id: 't3', quote: "I order all my special occasion cakes from here. Consistently amazing quality and service. The chocolate fudge cake is to die for!", author: "David K." },
    ];

    return (
        <> {/* Using a React Fragment as the top-level container */}
            <div className="page-heading-container"> {/* From original CSS */}
                <h1>About Our Bakery</h1>
            </div>

            <div className="container about-us-container"> {/* From original CSS */}
                <section className="brand-story"> {/* From original CSS */}
                    <h2>Our Story</h2>
                    <p>Founded in 2015, The Sweet Spot started from a small home kitchen with a big dream: to create the most delightful and visually stunning cakes that bring joy to every occasion. Our founder, Jane Doe, a passionate baker since childhood, poured her heart and soul into perfecting her recipes and cake decorating techniques.</p>
                    <p>What began as a hobby, baking for friends and family, quickly blossomed into a beloved local business known for its commitment to quality, creativity, and personalized service. We believe that every cake has a story to tell, and we're honored to be a part of our customers' most cherished moments, from birthdays and weddings to anniversaries and simple "just because" celebrations.</p>
                    <p>Our mission is to combine the finest, freshest ingredients with artistic flair to craft cakes that are not only beautiful but also incredibly delicious. We are dedicated to making your sweet dreams come true, one cake at a time.</p>
                </section>

                <section className="team-section"> {/* From original CSS */}
                    <h2>Meet Our Team</h2>
                    <div className="team-members"> {/* From original CSS */}
                        {teamMembers.map(member => (
                            <TeamMember
                                key={member.id}
                                name={member.name}
                                role={member.role}
                                bio={member.bio}
                                imagePlaceholder={member.imagePlaceholder}
                            />
                        ))}
                    </div>
                </section>

                <section className="bakery-values"> {/* From original CSS */}
                    <h2>Our Values</h2>
                    <ul> {/* Matches original CSS structure */}
                        {bakeryValues.map(value => (
                            <li key={value.id}>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="customer-testimonials"> {/* From original CSS */}
                    <h2>What Our Customers Say</h2>
                    <div className="testimonials-list"> {/* From original CSS */}
                        {testimonials.map(testimonial => (
                            <TestimonialItem
                                key={testimonial.id}
                                quote={testimonial.quote}
                                author={testimonial.author}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default AboutUsPage;
