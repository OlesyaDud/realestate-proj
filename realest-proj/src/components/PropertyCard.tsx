import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Bed, Bath, Square } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  location: string;
  description: string;
  beds: number;
  baths: number;
  sqft: string;
}

const PropertyCard = ({
  image,
  price,
  location,
  description,
  beds,
  baths,
  sqft,
}: PropertyCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={location}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
          {price}
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <h3 className="font-semibold text-lg mb-3 line-clamp-2">
          {description}
        </h3>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span>{sqft}</span>
          </div>
        </div>

        {/* ✅ Orange button here */}
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
          Contact Agent
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
