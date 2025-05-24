import React from 'react';
// import './FeaturedCakesSection.css'; // Optional

const FeaturedCakesSection = () => {
    const featuredCakes = [ // Placeholder data
        { id: 1, name: "Classic Chocolate", description: "Rich and decadent." },
        { id: 2, name: "Vanilla Dream", description: "Elegant and timeless." },
        { id: 3, name: "Red Velvet Delight", description: "Smooth and flavorful." },
        { id: 4, name: "Fruity Fantasy", description: "Light and refreshing."}
    ];

    return (
        <section className="featured-cakes"> {/* Ensure class names match original for styling */}
            <div className="container"> {/* Added container for consistency with original static site */}
                <h2>Our Featured Cakes</h2>
                <div className="cake-carousel-placeholder"> {/* This class should exist in your CSS */}
                    {featuredCakes.map(cake => (
                        <div key={cake.id} className="cake-item-placeholder"> {/* This class should exist */}
                            <div className="cake-image-placeholder"> {/* Using original class name */}
                                {/* Placeholder for image, or use an <img> if you have one */}
                                {/* Text is now handled by CSS pseudo-element for .cake-image-placeholder */}
                            </div>
                            <h3>{cake.name}</h3>
                            <p>{cake.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default FeaturedCakesSection;
