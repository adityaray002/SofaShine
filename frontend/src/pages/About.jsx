import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Heart, Target, Users, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Making Every Home <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Fresh & Clean</span>
            </h1>
            <p className="text-xl text-gray-600">
              SofaShine is your trusted partner for professional sofa cleaning services. We combine expertise, eco-friendly solutions, and customer satisfaction to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZ3xlbnwwfHx8fDE3NjIyMzcwOTR8MA&ixlib=rb-4.1.0&q=85"
                  alt="Professional cleaning team"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2025, SofaShine started with a simple mission: to provide affordable, high-quality sofa cleaning services that everyone can access in Delhi.
                </p>
                <p className="text-gray-700 mb-4">
                  We noticed that most cleaning services were either too expensive or lacked transparency in pricing. So we decided to change that by offering professional cleaning with clear, upfront pricing and a commitment to customer satisfaction.
                </p>
                <p className="text-gray-700">
                  Today, we've served over 1,000 happy customers across Delhi, and we're just getting started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our values guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: 'Quality First',
                description: 'We never compromise on the quality of our service or the products we use'
              },
              {
                icon: Heart,
                title: 'Customer Love',
                description: 'Your satisfaction is our success. We go the extra mile to make you happy'
              },
              {
                icon: Users,
                title: 'Transparency',
                description: 'No hidden charges, no surprises. What you see is what you get'
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-teal-200">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-teal-500 to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Customers Choose SofaShine
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Eco-friendly, non-toxic cleaning solutions',
                'Trained and verified professionals',
                'Transparent, upfront pricing',
                '100% satisfaction guarantee',
                'Same-day and next-day service available',
                'Serving Delhi with excellence',
                'Quick drying process (2-4 hours)',
                'Free re-cleaning if not satisfied'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '1,000+', label: 'Happy Customers' },
              { number: 'Delhi', label: 'Service Area' },
              { number: '4.9/5', label: 'Average Rating' },
              { number: '99%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the SofaShine Difference
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers. Book your first cleaning today!
          </p>
          <Link to="/book">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-gray-100 shadow-xl text-lg px-8 py-6">
              Book Now - Get 10% Off
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
