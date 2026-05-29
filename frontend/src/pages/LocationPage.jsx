import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { getLocationBySlug } from '../data/locations';
import { services } from '../mock';
import { CheckCircle, Phone, MessageCircle, ArrowRight, MapPin, Star } from 'lucide-react';

const LocationPage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const location = getLocationBySlug(slug);

  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Helmet><title>Area Not Found | SofaShine</title></Helmet>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Area not found</h2>
          <Link to="/services"><Button>View All Services</Button></Link>
        </div>
      </div>
    );
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": `SofaShine ${location.city}`,
    "url": `https://sofashine.in/${location.slug}`,
    "telephone": "+919315576914",
    "email": "hello@sofashine.in",
    "description": location.metaDescription,
    "areaServed": {
      "@type": "City",
      "name": location.city,
      "containedInPlace": {
        "@type": "State",
        "name": location.schema.region
      }
    },
    "priceRange": "₹449–₹4999",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "09:00",
      "closes": "19:00"
    }],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.85",
      "reviewCount": "1000",
      "bestRating": "5"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sofashine.in/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sofashine.in/services" },
      { "@type": "ListItem", "position": 3, "name": `Sofa Cleaning in ${location.city}`, "item": `https://sofashine.in/${location.slug}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": location.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const topServices = services.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{location.metaTitle}</title>
        <meta name="description" content={location.metaDescription} />
        <link rel="canonical" href={`https://sofashine.in/${location.slug}`} />
        <meta property="og:title" content={location.metaTitle} />
        <meta property="og:description" content={location.metaDescription} />
        <meta property="og:url" content={`https://sofashine.in/${location.slug}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-teal-600 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{location.city}, {location.schema.region}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {location.h1}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              {location.heroTagline}
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {location.areas.slice(0, 6).map((area) => (
                <span key={area} className="bg-white border border-teal-200 text-teal-700 px-3 py-1 rounded-full text-sm font-medium">
                  {area}
                </span>
              ))}
              {location.areas.length > 6 && (
                <span className="bg-white border border-gray-200 text-gray-500 px-3 py-1 rounded-full text-sm">
                  +{location.areas.length - 6} more areas
                </span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919315576914" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white shadow-lg">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
              <Link to="/book">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white shadow-lg">
                  Book Now — 10% Off
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-6 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            {[
              { icon: Star, text: "4.85/5 Rated" },
              { icon: CheckCircle, text: "1,000+ Customers" },
              { icon: CheckCircle, text: "Eco-Friendly Products" },
              { icon: CheckCircle, text: "Same-Day Service" },
              { icon: CheckCircle, text: "100% Satisfaction Guarantee" }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-2">
                <item.icon className="w-4 h-4 text-teal-600" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sofa Cleaning in {location.city} — Why SofaShine?
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">{location.intro}</p>
              {location.bodyContent.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
              Services & Pricing in {location.city}
            </h2>
            <p className="text-gray-600 text-center mb-10">
              Transparent pricing — same rates as Delhi NCR, no location surcharge
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topServices.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow border-2 hover:border-teal-200">
                  <div className="relative h-40 overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt={`${service.name} in ${location.city}`}
                      width="400"
                      height="160"
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{service.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">Starts at</p>
                        <p className="text-xl font-bold text-teal-600">₹{service.startingPrice}</p>
                      </div>
                      <Link to="/book">
                        <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                          Book
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/services">
                <Button variant="outline" className="border-2 border-teal-500 text-teal-700 hover:bg-teal-50">
                  View All Services & Pricing
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              FAQs — Sofa Cleaning in {location.city}
            </h2>
            <div className="space-y-4">
              {location.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white border-2 border-gray-200 rounded-xl px-6 hover:border-teal-200 transition-colors group"
                >
                  <summary className="flex justify-between items-center py-4 font-semibold text-gray-900 hover:text-teal-600 cursor-pointer list-none">
                    {faq.question}
                    <span className="ml-4 flex-shrink-0 text-teal-500 transition-transform duration-200 group-open:rotate-180">▾</span>
                  </summary>
                  <div className="pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book in {location.city}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional cleaning at transparent prices — 10% off your first service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919315576914">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10">
                <Phone className="mr-2 w-5 h-5" />
                +91 9315576914
              </Button>
            </a>
            <Link to="/book">
              <Button size="lg" className="w-full sm:w-auto bg-white text-teal-700 hover:bg-gray-100 shadow-xl">
                Book Now — Get 10% Off
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
