"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Users,
  Camera,
  Shield,
  Clock,
  Star,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Tent,
  Compass,
  TreePine,
  Building,
  Heart,
  Award,
  Gift,
  ArrowRight,
  Instagram,
  HelpCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EscapeElevateLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-cream-50 via-warm-beige-100 to-golden-sand-50">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-burnt-orange-500 text-warm-cream-50 px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      {/* Header */}
      <header className="bg-forest-green-700/95 backdrop-blur-md border-b border-forest-green-600 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/camping-nigeria-logo.png"
              alt="Camping Nigeria Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-warm-cream-50">Camping Nigeria</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#offerings"
              className="text-warm-cream-100 hover:text-burnt-orange-400 font-medium transition-colors"
            >
              Offerings
            </Link>
            <Link
              href="#testimonials"
              className="text-warm-cream-100 hover:text-burnt-orange-400 font-medium transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="https://paystack.shop/camping-gear-nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-cream-100 hover:text-burnt-orange-400 font-medium transition-colors"
            >
              Shop Gear
            </Link>
            <Link
              href="#contact"
              className="text-warm-cream-100 hover:text-burnt-orange-400 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-burnt-orange-500 hover:bg-burnt-orange-600 text-warm-cream-50 shadow-lg" asChild>
            <a href="https://forms.office.com/r/yvQ8xrUq00" target="_blank" rel="noopener noreferrer">
              Book Adventure
            </a>
          </Button>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-20 px-4 min-h-screen flex items-center" role="banner" aria-label="Hero section">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-camping.jpg"
              alt="Group of people enjoying a nighttime camping experience around a campfire with blue tents in the background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-dark-forest-900/70" aria-hidden="true"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto text-center relative z-10">
            <Badge
              className="mb-6 bg-warm-cream-50/90 text-forest-green-700 px-4 py-2 text-sm font-medium border border-burnt-orange-300"
              role="text"
            >
              🏕️ Adventure Made Simple
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-warm-cream-50 mb-6 leading-tight">
              Camping <span className="text-burnt-orange-400">Nigeria</span>
            </h1>
            <p className="text-xl md:text-2xl text-warm-beige-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience unforgettable outdoor adventures in Nigeria without the planning stress. From weekend escapes
              to corporate retreats, we handle everything.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              role="group"
              aria-label="Call to action buttons"
            >
              <Button
                size="lg"
                className="bg-burnt-orange-500 hover:bg-burnt-orange-600 text-warm-cream-50 px-8 py-4 text-lg focus:ring-4 focus:ring-burnt-orange-300 shadow-lg"
                aria-label="Join our next adventure - main call to action"
                asChild
              >
                <a href="https://forms.office.com/r/yvQ8xrUq00" target="_blank" rel="noopener noreferrer">
                  Join Next Adventure <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-warm-cream-50 text-warm-cream-50 hover:bg-warm-cream-50 hover:text-forest-green-700 px-8 py-4 text-lg backdrop-blur-sm focus:ring-4 focus:ring-warm-cream-300 bg-transparent"
                aria-label="Rent outdoor camping gear"
                asChild
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeuoVbPDWlUws6VnV7GFWi1rvsBeooVfdZF0ld3icHficzkTA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rent Outdoor Gears
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Smooth Transition Section */}
        <section className="py-8 bg-gradient-to-b from-dark-forest-900/20 via-warm-beige-100/50 to-warm-cream-50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="w-12 h-1 bg-burnt-orange-500 mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Problem vs Solution Chart */}
        <section className="py-16 bg-warm-cream-50" aria-labelledby="comparison-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="comparison-heading" className="text-4xl font-bold text-forest-green-700 mb-4">
                Why choose us?
              </h2>
              <p className="text-xl text-dark-forest-700">See the difference we make</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-red-800 flex items-center justify-center space-x-2">
                      <span className="text-2xl">😰</span>
                      <span>DIY Outdoor Planning</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-red-100">
                        <div className="w-3 h-3 bg-red-600 rounded-full" aria-hidden="true"></div>
                        <span className="text-red-800">Hours of research & planning</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-red-100">
                        <div className="w-3 h-3 bg-red-600 rounded-full" aria-hidden="true"></div>
                        <span className="text-red-800">Safety concerns & risks</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-red-100">
                        <div className="w-3 h-3 bg-red-600 rounded-full" aria-hidden="true"></div>
                        <span className="text-red-800">Expensive gear purchases</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-red-100">
                        <div className="w-3 h-3 bg-red-600 rounded-full" aria-hidden="true"></div>
                        <span className="text-red-800">Coordination headaches</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-forest-green-300 bg-forest-green-50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-forest-green-700 flex items-center justify-center space-x-2">
                      <span className="text-2xl">🎯</span>
                      <span>Camping Nigeria Way</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-forest-green-600" />
                        <span className="text-forest-green-700">Everything planned for you</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-forest-green-600" />
                        <span className="text-forest-green-700">Expert guides & safety first</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-forest-green-600" />
                        <span className="text-forest-green-700">All gear included</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-forest-green-600" />
                        <span className="text-forest-green-700">Seamless group experience</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gradient-to-r from-warm-beige-100 to-golden-sand-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-forest-green-700 mb-4">
                Everything included for your perfect adventure
              </h2>
              <p className="text-xl text-dark-forest-700 max-w-2xl mx-auto">
                No hidden costs, no surprises. Just pure outdoor bliss.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center border-forest-green-200 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <Tent className="h-12 w-12 text-burnt-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-forest-green-700">Premium Gear</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-forest-600">
                    Professional camping equipment, hiking gear, and safety equipment
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-forest-green-200 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <Compass className="h-12 w-12 text-mountain-green-500 mx-auto mb-4" />
                  <CardTitle className="text-forest-green-700">Expert Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-forest-600">
                    Certified outdoor professionals with local expertise and safety training
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-forest-green-200 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                  <CardTitle className="text-forest-green-700">Gourmet Meals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-forest-600">Delicious outdoor cuisine prepared by our camp chefs</p>
                </CardContent>
              </Card>
              <Card className="text-center border-forest-green-200 hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <Camera className="h-12 w-12 text-golden-sand-500 mx-auto mb-4" />
                  <CardTitle className="text-forest-green-700">Pro Photography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-forest-600">Professional photos to capture your adventure memories</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Segmented Offerings */}
        <section id="offerings" className="py-16 bg-warm-cream-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-forest-green-700 mb-4">Adventures tailored for everyone</h2>
              <p className="text-xl text-dark-forest-700">Choose the perfect outdoor experience for your needs</p>
            </div>
            <Tabs defaultValue="individual" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-warm-beige-200">
                <TabsTrigger
                  value="individual"
                  className="flex items-center space-x-2 data-[state=active]:bg-burnt-orange-500 data-[state=active]:text-warm-cream-50"
                >
                  <Users className="h-4 w-4" />
                  <span>Individuals</span>
                </TabsTrigger>
                <TabsTrigger
                  value="corporate"
                  className="flex items-center space-x-2 data-[state=active]:bg-burnt-orange-500 data-[state=active]:text-warm-cream-50"
                >
                  <Building className="h-4 w-4" />
                  <span>Corporate</span>
                </TabsTrigger>
                <TabsTrigger
                  value="resorts"
                  className="flex items-center space-x-2 data-[state=active]:bg-burnt-orange-500 data-[state=active]:text-warm-cream-50"
                >
                  <TreePine className="h-4 w-4" />
                  <span>Resorts</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="individual">
                <Card className="border-forest-green-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-forest-green-700">Weekend Escape Packages</CardTitle>
                    <CardDescription className="text-lg text-dark-forest-600">
                      Perfect for individuals and young adults seeking adventure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-forest-green-700 mb-4">What's Included:</h4>
                        <ul className="space-y-2 text-dark-forest-700">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>All camping gear and equipment</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Professional guides and safety support</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>All meals and refreshments</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Round-trip transportation</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Professional adventure photography</span>
                          </li>
                        </ul>
                        <div className="mt-6 p-4 bg-burnt-orange-50 rounded-lg border border-burnt-orange-200">
                          <p className="font-bold text-burnt-orange-700 mb-2">🎁 Special Bonus:</p>
                          <p className="text-burnt-orange-600">"Bring 5 friends, get 1 spot FREE" + VIP club access</p>
                        </div>
                      </div>
                      <div>
                        <Image
                          src="/images/individuals-adventure.jpg"
                          alt="Young people doing group outdoor exercises and activities in Nigeria"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="corporate">
                <Card className="border-forest-green-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-forest-green-700">Corporate Team-Building Retreats</CardTitle>
                    <CardDescription className="text-lg text-dark-forest-600">
                      Strengthen your team with unforgettable outdoor experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-forest-green-700 mb-4">Corporate Package Includes:</h4>
                        <ul className="space-y-2 text-dark-forest-700">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Custom team-building activities</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Leadership development workshops</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Complete logistics management</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Post-event feedback reports</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Branded gear for employees</span>
                          </li>
                        </ul>
                        <div className="mt-6 p-4 bg-mountain-green-50 rounded-lg border border-mountain-green-200">
                          <p className="font-bold text-mountain-green-700 mb-2">🏆 Corporate Benefits:</p>
                          <p className="text-mountain-green-600">
                            Improved team cohesion, leadership skills, and employee satisfaction
                          </p>
                        </div>
                      </div>
                      <div>
                        <Image
                          src="/images/corporate-team-building.jpg"
                          alt="Corporate team engaged in outdoor painting team-building activity"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resorts">
                <Card className="border-forest-green-200 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl text-forest-green-700">Resort Partnership Programs</CardTitle>
                    <CardDescription className="text-lg text-dark-forest-600">
                      Enhance your guest experience with premium outdoor adventures
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-forest-green-700 mb-4">Partnership Benefits:</h4>
                        <ul className="space-y-2 text-dark-forest-700">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Co-branded guest experiences</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Flexible gear leasing partnerships</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Custom event design and planning</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Dedicated guest outdoor excursions</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-forest-green-600" />
                            <span>Revenue sharing opportunities</span>
                          </li>
                        </ul>
                        <div className="mt-6 p-4 bg-golden-sand-50 rounded-lg border border-golden-sand-200">
                          <p className="font-bold text-golden-sand-700 mb-2">🤝 Partnership Perks:</p>
                          <p className="text-golden-sand-600">
                            Increase guest satisfaction and create new revenue streams
                          </p>
                        </div>
                      </div>
                      <div>
                        <Image
                          src="/images/resorts-camping.jpg"
                          alt="Professional camping setup with colorful tents and chairs for resort guests"
                          width={400}
                          height={300}
                          className="rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Bonuses & Guarantee */}
        <section className="py-16 bg-gradient-to-r from-warm-beige-100 to-golden-sand-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-forest-green-700 mb-4">Risk-free adventure guarantee</h2>
              <p className="text-xl text-dark-forest-700">
                We're so confident you'll love your experience, we guarantee it
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center border-forest-green-200 bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-12 w-12 text-forest-green-600 mx-auto mb-4" />
                  <CardTitle className="text-forest-green-700">100% Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-forest-600">
                    If you're not completely satisfied, we'll make it right or refund your adventure
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-forest-green-200 bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Gift className="h-12 w-12 text-burnt-orange-500 mx-auto mb-4" />
                  <CardTitle className="text-forest-green-700">Free Bonuses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-forest-600">
                    Adventure starter kit, professional photos, and exclusive access to VIP events
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-forest-green-200 bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="h-12 w-12 text-golden-sand-500 mx-auto mb-4" />
                  <CardTitle className="text-forest-green-700">Premium Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-forest-600">
                    Dedicated support team available 24/7 before, during, and after your adventure
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Urgency Block */}
        <section className="py-16 bg-forest-green-700 text-warm-cream-50">
          <div className="container mx-auto px-4 text-center">
            <Clock className="h-16 w-16 mx-auto mb-6 text-burnt-orange-400" />
            <h2 className="text-4xl font-bold mb-4">Limited Monthly Availability</h2>
            <p className="text-xl mb-8 text-warm-beige-100">
              To ensure the highest quality experience, we limit our adventures each month
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="bg-forest-green-600 rounded-lg p-6 border border-forest-green-500">
                <div className="text-3xl font-bold text-burnt-orange-300 mb-2">75</div>
                <div className="text-warm-cream-100">Individual Adventure Spots</div>
              </div>
              <div className="bg-forest-green-600 rounded-lg p-6 border border-forest-green-500">
                <div className="text-3xl font-bold text-burnt-orange-300 mb-2">5</div>
                <div className="text-warm-cream-100">Corporate Retreat Packages</div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-burnt-orange-500 hover:bg-burnt-orange-600 text-warm-cream-50 px-8 py-4 text-lg shadow-lg"
              asChild
            >
              <a href="https://forms.office.com/r/yvQ8xrUq00" target="_blank" rel="noopener noreferrer">
                Secure Your Spot Now
              </a>
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-warm-cream-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-forest-green-700 mb-4">What our adventurers say</h2>
              <p className="text-xl text-dark-forest-700">Real experiences from real people</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-forest-green-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-golden-sand-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-dark-forest-700 mb-4">
                    "Absolutely incredible experience! The team handled everything perfectly. I've never felt so relaxed
                    on an outdoor adventure."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-burnt-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-burnt-orange-700 font-bold">AO</span>
                    </div>
                    <div>
                      <div className="font-bold text-forest-green-700">Adebayo Ogundimu</div>
                      <div className="text-dark-forest-600 text-sm">Lagos, Nigeria</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-forest-green-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-golden-sand-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-dark-forest-700 mb-4">
                    "Our corporate retreat was a game-changer for team morale. The activities were perfectly designed
                    for team building."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-mountain-green-100 rounded-full flex items-center justify-center">
                      <span className="text-mountain-green-700 font-bold">FE</span>
                    </div>
                    <div>
                      <div className="font-bold text-forest-green-700">Funmi Eze</div>
                      <div className="text-dark-forest-600 text-sm">HR Director, TechCorp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-forest-green-200 bg-white hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-golden-sand-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-dark-forest-700 mb-4">
                    "The photography package was amazing! They captured memories we'll treasure forever. Highly
                    recommend to everyone."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-golden-sand-100 rounded-full flex items-center justify-center">
                      <span className="text-golden-sand-700 font-bold">KA</span>
                    </div>
                    <div>
                      <div className="font-bold text-forest-green-700">Kemi Adebayo</div>
                      <div className="text-dark-forest-600 text-sm">Abuja, Nigeria</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-gradient-to-r from-warm-beige-100 to-golden-sand-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <HelpCircle className="h-12 w-12 text-burnt-orange-500 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-forest-green-700 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-dark-forest-700 max-w-2xl mx-auto">
                Everything you need to know about camping adventures in Nigeria
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white border border-forest-green-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-forest-green-700 font-semibold hover:text-burnt-orange-500">
                    Where do Camping Nigeria adventures take place?
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-forest-700">
                    We operate across Nigeria, with regular adventures in Lagos, Abuja, Ogun State, and other scenic
                    locations. Each adventure is carefully selected for its natural beauty, safety, and accessibility.
                    We partner with verified outdoor locations and resorts throughout Nigeria to ensure the best
                    experience for our adventurers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white border border-forest-green-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-forest-green-700 font-semibold hover:text-burnt-orange-500">
                    What is included in the adventure packages?
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-forest-700">
                    All our packages include professional camping gear and equipment, certified guides and safety
                    support, all meals and refreshments, round-trip transportation from meeting points, professional
                    adventure photography, safety equipment, and 24/7 support. You don't need to bring anything except
                    personal items and a sense of adventure.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white border border-forest-green-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-forest-green-700 font-semibold hover:text-burnt-orange-500">
                    How do I book an adventure with Camping Nigeria?
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-forest-700">
                    Booking is simple! Click any "Book Adventure" or "Join Next Adventure" button on this website to
                    fill out our intake form at forms.office.com/r/yvQ8xrUq00. Our team will contact you within 24 hours
                    to confirm availability, discuss your preferences, and complete your booking. You can also reach us
                    directly via phone at +234 704 053 8528 or +234 813 312 1484, or email us at
                    campinggearsng@gmail.com.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white border border-forest-green-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-forest-green-700 font-semibold hover:text-burnt-orange-500">
                    What makes Camping Nigeria different from planning my own camping trip?
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-forest-700">
                    We eliminate all the stress of planning outdoor adventures. Instead of spending hours researching
                    locations, buying expensive gear you'll rarely use, worrying about safety, and coordinating group
                    logistics, we handle everything. Our expert guides know the best locations in Nigeria, we provide
                    all equipment, ensure safety protocols are followed, and create seamless group experiences. You just
                    show up and enjoy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white border border-forest-green-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-forest-green-700 font-semibold hover:text-burnt-orange-500">
                    Do you offer corporate team-building retreats in Nigeria?
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-forest-700">
                    Yes! We specialize in corporate team-building retreats across Nigeria. Our corporate packages
                    include custom team-building activities, leadership development workshops, complete logistics
                    management, post-event feedback reports, and branded gear for employees. We've worked with companies
                    in Lagos, Abuja, and throughout Nigeria to improve team cohesion, develop leadership skills, and
                    boost employee satisfaction. We currently offer only 5 corporate retreat packages per month to
                    ensure quality.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white border border-forest-green-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-forest-green-700 font-semibold hover:text-burnt-orange-500">
                    Can I rent camping gear without joining an adventure?
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-forest-700">
                    We offer camping gear rental services for those who want to plan their own adventures. Fill out our
                    gear rental form at docs.google.com/forms to see our available equipment, pricing, and rental terms.
                    We offer tents, sleeping bags, cooking equipment, hiking gear, and more. You can also purchase
                    camping gear directly from our online shop at paystack.shop/camping-gear-nigeria.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-white border border-forest-green-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-forest-green-700 font-semibold hover:text-burnt-orange-500">
                    What is the "Bring 5 friends, get 1 spot FREE" promotion?
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-forest-700">
                    For individual weekend escape packages, when you bring 5 friends who book and pay for an adventure,
                    you get your spot completely free. This promotion also includes VIP club access with exclusive
                    benefits, early access to new adventure locations, priority booking, and special discounts. It's our
                    way of rewarding adventurers who help build our community.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-white border border-forest-green-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-forest-green-700 font-semibold hover:text-burnt-orange-500">
                    Do you work with resorts and hotels in Nigeria?
                  </AccordionTrigger>
                  <AccordionContent className="text-dark-forest-700">
                    Yes! We offer resort partnership programs for hotels, resorts, and hospitality businesses across
                    Nigeria. Our partnership benefits include co-branded guest experiences, flexible gear leasing
                    partnerships, custom event design and planning, dedicated guest outdoor excursions, and revenue
                    sharing opportunities. We help resorts enhance their guest experience while creating new revenue
                    streams. Contact us to discuss partnership opportunities.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-16 bg-gradient-to-r from-forest-green-700 to-forest-green-600 text-warm-cream-50"
        >
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">Ready for your next adventure?</h2>
              <p className="text-xl text-warm-beige-100 mb-8">Fill out our quick intake form to get started</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-burnt-orange-500 hover:bg-burnt-orange-600 text-warm-cream-50 px-8 py-4 text-lg shadow-lg"
                  asChild
                >
                  <a href="https://forms.office.com/r/yvQ8xrUq00" target="_blank" rel="noopener noreferrer">
                    Start Your Adventure Request
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-golden-sand-500 hover:bg-golden-sand-600 text-warm-cream-50 px-8 py-4 text-lg shadow-lg"
                  asChild
                >
                  <a href="https://paystack.shop/camping-gear-nigeria" target="_blank" rel="noopener noreferrer">
                    Shop Camping Gear
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-forest-900 text-warm-cream-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/camping-nigeria-logo.png"
                  alt="Camping Nigeria Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-2xl font-bold">Camping Nigeria</span>
              </div>
              <p className="text-warm-beige-200 mb-4">Adventure made simple.</p>
              <p className="text-warm-beige-300 text-sm">
                Making outdoor recreation accessible and stress-free for everyone in Nigeria.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-burnt-orange-400 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-warm-beige-300">
                <li>
                  <Link href="#offerings" className="hover:text-burnt-orange-400 transition-colors">
                    Our Offerings
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-burnt-orange-400 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-burnt-orange-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-burnt-orange-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-burnt-orange-400 mb-4">Services</h4>
              <ul className="space-y-2 text-warm-beige-300">
                <li>Individual Adventures</li>
                <li>Corporate Retreats</li>
                <li>Resort Partnerships</li>
                <li>Gear Rentals</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-burnt-orange-400 mb-4">Contact Info</h4>
              <div className="space-y-2 text-warm-beige-300">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Abuja, Nigeria</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+234 704 053 8528</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+234 813 312 1484</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>campinggearsng@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="h-4 w-4" />
                  <a
                    href="https://www.instagram.com/camping_ng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-burnt-orange-400 transition-colors"
                  >
                    @camping_ng
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-forest-green-700 mt-8 pt-8 text-center text-warm-beige-300">
            <p>&copy; {new Date().getFullYear()} Camping Nigeria. All rights reserved. Adventure made simple.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
