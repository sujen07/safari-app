import { Wifi, Wine, UtensilsCrossed, Car, Tv, ShowerHeadIcon as SwimmingPool, Mountain, Sun } from 'lucide-react'

const amenities = [
  { icon: Wifi, name: 'Free Wi-Fi' },
  { icon: Wine, name: 'Wine Tasting' },
  { icon: UtensilsCrossed, name: 'Gourmet Kitchen' },
  { icon: Car, name: 'Free Parking' },
  { icon: Tv, name: 'Smart TVs' },
  { icon: SwimmingPool, name: 'Outdoor Pool' },
  { icon: Mountain, name: 'Scenic Views' },
  { icon: Sun, name: 'Private Terrace' },
]

export function AmenitiesSection() {
  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">Our Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <amenity.icon className="w-12 h-12 mb-4 text-stone-700" />
              <span className="text-lg font-semibold">{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

