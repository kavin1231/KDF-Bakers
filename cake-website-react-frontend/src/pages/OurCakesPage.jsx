import React from 'react';
// Optional: import './OurCakesPage.css'; // if specific styles are extracted

const OurCakesPage = () => {
    // Placeholder data - in a real app, this might come from an API or a dedicated data file
    const cakeData = [
        {
            categoryTitle: "Birthday Cakes",
            id: "birthday-cakes",
            cakes: [
                { id: 'b1', name: "Rainbow Sprinkle Surprise", description: "A vibrant vanilla cake packed with colorful sprinkles, perfect for celebrations.", price: "Starting from $45", imagePlaceholder: true },
                { id: 'b2', name: "Chocolate Fudge Volcano", description: "Rich chocolate fudge layers with a molten chocolate core.", price: "Starting from $55", imagePlaceholder: true },
                { id: 'b3', name: "Princess Tiara Cake", description: "Elegant cake with edible tiara, available in various flavors.", price: "Starting from $60", imagePlaceholder: true },
            ]
        },
        {
            categoryTitle: "Wedding Cakes",
            id: "wedding-cakes",
            cakes: [
                { id: 'w1', name: "Classic Elegance Tier", description: "Timeless multi-tiered cake with delicate sugar flowers and satin ribbon.", price: "Starting from $350", imagePlaceholder: true },
                { id: 'w2', name: "Rustic Buttercream Beauty", description: "Semi-naked cake adorned with fresh berries and a light buttercream frosting.", price: "Starting from $300", imagePlaceholder: true },
            ]
        },
        {
            categoryTitle: "Custom Design Cakes",
            id: "custom-design-cakes",
            cakes: [
                { id: 'c1', name: "Your Vision, Our Creation", description: "Tell us your dream cake design, and we'll bring it to life!", price: "Price upon consultation", imagePlaceholder: true },
                { id: 'c2', name: "Themed Masterpiece", description: "From superheroes to fairy tales, we craft cakes for every theme.", price: "Price upon consultation", imagePlaceholder: true },
            ]
        },
        {
            categoryTitle: "Cupcakes & Small Treats",
            id: "cupcakes",
            cakes: [
                { id: 's1', name: "Assorted Dozen Box", description: "A mix of our most popular cupcake flavors, perfect for sharing.", price: "Starting from $30 (dozen)", imagePlaceholder: true },
                { id: 's2', name: "Red Velvet Cupcakes", description: "Classic red velvet cupcakes with signature cream cheese frosting.", price: "Starting from $3 (each)", imagePlaceholder: true },
                { id: 's3', name: "Custom Logo Cupcakes", description: "Branded cupcakes for corporate events or special occasions.", price: "Price upon consultation", imagePlaceholder: true },
            ]
        }
    ];

    return (
        <> {/* Using a React Fragment as the top-level container */}
            <div className="page-heading-container"> {/* From original CSS */}
                <h1>Our Cakes</h1>
            </div>
            <div className="cake-categories-container"> {/* From original CSS */}
                {cakeData.map(category => (
                    <section key={category.id} id={category.id} className="cake-category"> {/* From original CSS */}
                        <div className="container"> {/* Added container for consistency with original HTML structure */}
                            <h2>{category.categoryTitle}</h2>
                            <div className="cake-gallery"> {/* From original CSS */}
                                {category.cakes.map(cake => (
                                    <div key={cake.id} className="cake-gallery-item"> {/* From original CSS */}
                                        <div className="cake-image-placeholder">
                                            {/* Placeholder for image - text content is handled by CSS pseudo-element */}
                                        </div>
                                        <h3>{cake.name}</h3>
                                        <p>{cake.description}</p>
                                        <p className="price">{cake.price}</p> {/* From original CSS */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
};

export default OurCakesPage;
