"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mountain,
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EscapeElevateLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50">
      {/* Skip Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mountain className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-800">Camping Nigeria</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="#offerings" className="text-emerald-700 hover:text-emerald-900 font-medium">
              Offerings
            </Link>
            <Link href="#testimonials" className="text-emerald-700 hover:text-emerald-900 font-medium">
              Reviews
            </Link>
            <Link
              href="https://paystack.shop/camping-gear-nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-900 font-medium"
            >
              Shop Gear
            </Link>
            <Link href="#contact" className="text-emerald-700 hover:text-emerald-900 font-medium">
              Contact
            </Link>
          </nav>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
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
            <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto text-center relative z-10">
            <Badge className="mb-6 bg-emerald-100 text-emerald-800 px-4 py-2 text-sm font-medium" role="text">
              🏕️ Adventure Made Simple
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Camping <span className="text-emerald-400">Nigeria</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
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
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg focus:ring-4 focus:ring-emerald-300"
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
                className="border-2 border-white text-emerald-400 hover:bg-white hover:text-emerald-800 px-8 py-4 text-lg backdrop-blur-sm focus:ring-4 focus:ring-white/50"
                aria-label="Learn about corporate retreat packages"
                asChild
              >
                <a href="https://forms.office.com/r/yvQ8xrUq00" target="_blank" rel="noopener noreferrer">
                  Corporate Retreats
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Smooth Transition Section */}
        <section className="py-8 bg-gradient-to-b from-black/20 via-emerald-50/50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="w-12 h-1 bg-emerald-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Problem vs Solution Chart */}
        <section className="py-16 bg-white" aria-labelledby="comparison-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="comparison-heading" className="text-4xl font-bold text-emerald-900 mb-4">
                Why choose us?
              </h2>
              <p className="text-xl text-emerald-700">See the difference we make</p>
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

                <Card className="border-emerald-200 bg-emerald-50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-emerald-800 flex items-center justify-center space-x-2">
                      <span className="text-2xl">🎯</span>
                      <span>Camping Nigeria Way</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-700">Everything planned for you</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-700">Expert guides & safety first</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-700">All gear included</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                        <span className="text-emerald-700">Seamless group experience</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">
                Everything included for your perfect adventure
              </h2>
              <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
                No hidden costs, no surprises. Just pure outdoor bliss.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Tent className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle className="text-emerald-800">Premium Gear</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-600">Professional camping equipment, hiking gear, and safety equipment</p>
                </CardContent>
              </Card>
              <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Compass className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <CardTitle className="text-emerald-800">Expert Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-600">
                    Certified outdoor professionals with local expertise and safety training
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Heart className="h-12 w-12 text-rose-500 mx-auto mb-4" />
                  <CardTitle className="text-emerald-800">Gourmet Meals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-600">Delicious outdoor cuisine prepared by our camp chefs</p>
                </CardContent>
              </Card>
              <Card className="text-center border-emerald-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Camera className="h-12 w-12 text-sky-600 mx-auto mb-4" />
                  <CardTitle className="text-emerald-800">Pro Photography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-600">Professional photos to capture your adventure memories</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Segmented Offerings */}
        <section id="offerings" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">Adventures tailored for everyone</h2>
              <p className="text-xl text-emerald-700">Choose the perfect outdoor experience for your needs</p>
            </div>
            <Tabs defaultValue="individual" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="individual" className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Individuals</span>
                </TabsTrigger>
                <TabsTrigger value="corporate" className="flex items-center space-x-2">
                  <Building className="h-4 w-4" />
                  <span>Corporate</span>
                </TabsTrigger>
                <TabsTrigger value="resorts" className="flex items-center space-x-2">
                  <TreePine className="h-4 w-4" />
                  <span>Resorts</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="individual">
                <Card className="border-emerald-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-emerald-800">Weekend Escape Packages</CardTitle>
                    <CardDescription className="text-lg text-emerald-600">
                      Perfect for individuals and young adults seeking adventure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-emerald-800 mb-4">What's Included:</h4>
                        <ul className="space-y-2 text-emerald-700">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>All camping gear and equipment</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Professional guides and safety support</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>All meals and refreshments</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Round-trip transportation</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Professional adventure photography</span>
                          </li>
                        </ul>
                        <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                          <p className="font-bold text-emerald-800 mb-2">🎁 Special Bonus:</p>
                          <p className="text-emerald-700">"Bring 5 friends, get 1 spot FREE" + VIP club access</p>
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
                <Card className="border-emerald-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-emerald-800">Corporate Team-Building Retreats</CardTitle>
                    <CardDescription className="text-lg text-emerald-600">
                      Strengthen your team with unforgettable outdoor experiences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-emerald-800 mb-4">Corporate Package Includes:</h4>
                        <ul className="space-y-2 text-emerald-700">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Custom team-building activities</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Leadership development workshops</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Complete logistics management</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Post-event feedback reports</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Branded gear for employees</span>
                          </li>
                        </ul>
                        <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                          <p className="font-bold text-teal-800 mb-2">🏆 Corporate Benefits:</p>
                          <p className="text-teal-700">
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
                <Card className="border-emerald-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-emerald-800">Resort Partnership Programs</CardTitle>
                    <CardDescription className="text-lg text-emerald-600">
                      Enhance your guest experience with premium outdoor adventures
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-emerald-800 mb-4">Partnership Benefits:</h4>
                        <ul className="space-y-2 text-emerald-700">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Co-branded guest experiences</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Flexible gear leasing partnerships</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Custom event design and planning</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Dedicated guest outdoor excursions</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-emerald-600" />
                            <span>Revenue sharing opportunities</span>
                          </li>
                        </ul>
                        <div className="mt-6 p-4 bg-sky-50 rounded-lg">
                          <p className="font-bold text-sky-800 mb-2">🤝 Partnership Perks:</p>
                          <p className="text-sky-700">Increase guest satisfaction and create new revenue streams</p>
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
        <section className="py-16 bg-gradient-to-r from-teal-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">Risk-free adventure guarantee</h2>
              <p className="text-xl text-emerald-700">
                We're so confident you'll love your experience, we guarantee it
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center border-emerald-200 bg-white">
                <CardHeader>
                  <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle className="text-emerald-800">100% Satisfaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-600">
                    If you're not completely satisfied, we'll make it right or refund your adventure
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-emerald-200 bg-white">
                <CardHeader>
                  <Gift className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <CardTitle className="text-emerald-800">Free Bonuses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-600">
                    Adventure starter kit, professional photos, and exclusive access to VIP events
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-emerald-200 bg-white">
                <CardHeader>
                  <Award className="h-12 w-12 text-sky-600 mx-auto mb-4" />
                  <CardTitle className="text-emerald-800">Premium Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-emerald-600">
                    Dedicated support team available 24/7 before, during, and after your adventure
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Urgency Block */}
        <section className="py-16 bg-emerald-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <Clock className="h-16 w-16 mx-auto mb-6 text-emerald-300" />
            <h2 className="text-4xl font-bold mb-4">Limited Monthly Availability</h2>
            <p className="text-xl mb-8 text-emerald-100">
              To ensure the highest quality experience, we limit our adventures each month
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
              <div className="bg-emerald-700 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-200 mb-2">75</div>
                <div className="text-emerald-100">Individual Adventure Spots</div>
              </div>
              <div className="bg-emerald-700 rounded-lg p-6">
                <div className="text-3xl font-bold text-emerald-200 mb-2">5</div>
                <div className="text-emerald-100">Corporate Retreat Packages</div>
              </div>
            </div>
            <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-4 text-lg" asChild>
              <a href="https://forms.office.com/r/yvQ8xrUq00" target="_blank" rel="noopener noreferrer">
                Secure Your Spot Now
              </a>
            </Button>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-emerald-900 mb-4">What our adventurers say</h2>
              <p className="text-xl text-emerald-700">Real experiences from real people</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-emerald-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-emerald-700 mb-4">
                    "Absolutely incredible experience! The team handled everything perfectly. I've never felt so relaxed
                    on an outdoor adventure."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center">
                      <span className="text-emerald-800 font-bold">AO</span>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-800">Adebayo Ogundimu</div>
                      <div className="text-emerald-600 text-sm">Lagos, Nigeria</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-emerald-700 mb-4">
                    "Our corporate retreat was a game-changer for team morale. The activities were perfectly designed
                    for team building."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-200 rounded-full flex items-center justify-center">
                      <span className="text-teal-800 font-bold">FE</span>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-800">Funmi Eze</div>
                      <div className="text-emerald-600 text-sm">HR Director, TechCorp</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-emerald-200">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-emerald-700 mb-4">
                    "The photography package was amazing! They captured memories we'll treasure forever. Highly
                    recommend to everyone."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sky-200 rounded-full flex items-center justify-center">
                      <span className="text-sky-800 font-bold">KA</span>
                    </div>
                    <div>
                      <div className="font-bold text-emerald-800">Kemi Adebayo</div>
                      <div className="text-emerald-600 text-sm">Abuja, Nigeria</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">Ready for your next adventure?</h2>
              <p className="text-xl text-emerald-100 mb-8">Fill out our quick intake form to get started</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-4 text-lg" asChild>
                  <a href="https://forms.office.com/r/yvQ8xrUq00" target="_blank" rel="noopener noreferrer">
                    Start Your Adventure Request
                  </a>
                </Button>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg" asChild>
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
      <footer className="bg-emerald-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mountain className="h-8 w-8 text-emerald-400" />
                <span className="text-2xl font-bold">Camping Nigeria</span>
              </div>
              <p className="text-emerald-200 mb-4">Adventure made simple.</p>
              <p className="text-emerald-300 text-sm">
                Making outdoor recreation accessible and stress-free for everyone in Nigeria.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-emerald-200 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-emerald-300">
                <li>
                  <Link href="#offerings" className="hover:text-white">
                    Our Offerings
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-white">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-emerald-200 mb-4">Services</h4>
              <ul className="space-y-2 text-emerald-300">
                <li>Individual Adventures</li>
                <li>Corporate Retreats</li>
                <li>Resort Partnerships</li>
                <li>Gear Rentals</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-emerald-200 mb-4">Contact Info</h4>
              <div className="space-y-2 text-emerald-300">
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
                    className="hover:text-white"
                  >
                    @camping_ng
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-300">
            <p>&copy; {new Date().getFullYear()} Camping Nigeria. All rights reserved. Adventure made simple.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
