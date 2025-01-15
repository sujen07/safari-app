import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AmenitiesSection } from './components/amenities-section'
import { VideoHeader } from './components/video-header'

export default function VineyardRental() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      <VideoHeader />

      {/* About Section */}
      <section className="py-20 px-4 md:px-0">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to Safari Estate</h2>
          <p className="text-lg mb-8">
            Nestled in the heart of wine country, our stunning vineyard home offers the perfect backdrop for unforgettable events and serene vacations. Immerse yourself in the beauty of rolling hills, lush grapevines, and breathtaking sunsets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Events</h3>
                <p>Host your dream wedding, corporate retreat, or special celebration surrounded by the natural beauty of our vineyard.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Vacations</h3>
                <p>Escape to our luxurious vineyard home for a relaxing getaway. Enjoy wine tastings, scenic walks, and cozy evenings by the fireplace.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <AmenitiesSection />

      {/* Gallery Section */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience Vineyard Vista</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Image
              src="/lib/vineyard-house.jpg"
              alt="Rows of grape vines in a lush vineyard"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/lib/vineyard-house.jpg"
              alt="Luxurious bedroom with a view of the vineyard"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/lib/vineyard-house.jpg"
              alt="Elegant dining setup in the vineyard"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/lib/vineyard-house.jpg"
              alt="Wine tasting experience with vineyard view"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/lib/vineyard-house.jpg"
              alt="Cozy fireplace in the vineyard retreat"
              width={600}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/lib/vineyard-house.jpg"
              alt="Sunset over the vineyard hills"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact/Booking Section */}
      <section className="py-20 px-4 md:px-0">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Book Your Experience</h2>
          <Tabs defaultValue="tour">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tour">Schedule a Tour</TabsTrigger>
              <TabsTrigger value="stay">Book a Stay</TabsTrigger>
            </TabsList>
            <TabsContent value="tour">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Input type="tel" placeholder="Your Phone" />
                    <Textarea placeholder="Tell us about your event or vacation plans" />
                    <Calendar className="rounded-md border" />
                    <Button className="w-full">Schedule Tour</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stay">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Input type="tel" placeholder="Your Phone" />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                        <Input id="check-in" type="date" />
                      </div>
                      <div>
                        <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                        <Input id="check-out" type="date" />
                      </div>
                    </div>
                    <Input type="number" placeholder="Number of Guests" min="1" />
                    <Textarea placeholder="Any special requests?" />
                    <Button className="w-full">Book Stay</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Vineyard Vista Retreat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

