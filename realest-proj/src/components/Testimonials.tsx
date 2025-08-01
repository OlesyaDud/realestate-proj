import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      location: "Beverly Hills, CA",
      text: "The team at DreamHome Realty made our home buying process incredibly smooth. Their expertise and dedication helped us find our perfect family home.",
      rating: 5,
    },
    {
      name: "David Thompson",
      location: "Manhattan, NY",
      text: "Professional, knowledgeable, and always available to answer questions. I couldn't have asked for better service when selling my property.",
      rating: 5,
    },
    {
      name: "Emily Chen",
      location: "Austin, TX",
      text: "From our first meeting to closing day, the entire experience was exceptional. They truly care about their clients and it shows in everything they do.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-orange-500">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience with DreamHome Realty.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border border-muted shadow-sm">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Stars */}
                <div className="flex mb-4 text-orange-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>

                {/* Client info */}
                <div className="mt-auto">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
