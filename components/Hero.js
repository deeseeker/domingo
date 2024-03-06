export default function Hero() {
  return (
    <div className="relative w-full sm:w-1000 h-96 sm:h-666">
      <div className="absolute inset-0 bg-hero bg-cover bg-center"></div>
      <div className="absolute text-white top-[50%] left-4 sm:left-20 transform -translate-y-1/2">
        <h1 className="text-2xl sm:text-4xl mb-2.5 font-bold max-w-sm sm:max-w-none tracking-wide">
          Find Your Perfect Place To Call Home
        </h1>
        <p className="max-w-2xl">
          Discover the perfect blend of comfort and luxury with Domingo. Explore
          our curated selection of exquisite properties tailored to match your
          lifestyle aspirations. From cozy suburban retreats to urban havens
          boasting breathtaking views, we have the key to your ideal abode.
        </p>
      </div>
    </div>
  );
}
