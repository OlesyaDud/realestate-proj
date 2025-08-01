import PropertyCard from "./PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const PropertyListings = () => {
  const properties = [
    {
      image: property1,
      price: "$750,000",
      location: "Beverly Hills, CA",
      description: "Modern Family Home with Beautiful Garden and Pool",
      beds: 4,
      baths: 3,
      sqft: "2,500 sq ft",
    },
    {
      image: property2,
      price: "$525,000",
      location: "Manhattan, NY",
      description: "Contemporary Townhouse in Prime Location",
      beds: 3,
      baths: 2,
      sqft: "1,800 sq ft",
    },
    {
      image: property3,
      price: "$425,000",
      location: "Austin, TX",
      description: "Charming Suburban House with White Picket Fence",
      beds: 3,
      baths: 2,
      sqft: "2,000 sq ft",
    },
  ];

  return (
    <section id="listings" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of premium properties in the most
            sought-after locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
          >
            View All Properties →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;
