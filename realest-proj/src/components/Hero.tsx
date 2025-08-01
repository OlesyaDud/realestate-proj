import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-orange-500 text-white py-24 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-orange-700 opacity-10"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Perfect
          <br />
          Dream Home
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Discover exceptional properties with our expert real estate team. We
          make your home buying journey seamless and rewarding.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="bg-white text-orange-500 hover:bg-orange-100 font-semibold">
            Browse Listings
          </Button>
          <Button className="bg-orange-400 hover:bg-orange-600 text-white font-semibold">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
