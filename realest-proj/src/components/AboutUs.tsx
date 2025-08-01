import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Home } from "lucide-react";
import agent1 from "@/assets/agent-1.jpg";
import agent2 from "@/assets/agent-2.jpg";

const AboutUs = () => {
  const stats = [
    {
      icon: <Home size={24} className="text-orange-500" />,
      number: "500+",
      label: "Properties Sold",
    },
    {
      icon: <Users size={24} className="text-orange-500" />,
      number: "1000+",
      label: "Happy Clients",
    },
    {
      icon: <Award size={24} className="text-orange-500" />,
      number: "15+",
      label: "Years Experience",
    },
  ];

  const agents = [
    {
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      image: agent1,
      experience: "10+ years",
    },
    {
      name: "Michael Chen",
      title: "Property Specialist",
      image: agent2,
      experience: "8+ years",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-orange-500">DreamHome Realty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are passionate about helping families find their perfect home.
            With over 15 years of experience in the real estate market, our team
            provides expert guidance and personalized service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2 text-orange-500">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-card rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center text-orange-500">
            Our Mission
          </h3>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto">
            To provide exceptional real estate services that exceed our clients'
            expectations. We believe that buying or selling a home should be an
            exciting and stress-free experience. Our dedicated team works
            tirelessly to ensure every client finds their dream home or achieves
            the best possible outcome when selling their property.
          </p>
        </div>

        {/* Team */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">
            Meet Our <span className="text-orange-500">Expert Team</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {agents.map((agent, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-lg mb-1">{agent.name}</h4>
                  <p className="text-orange-500 mb-2">{agent.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {agent.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
