import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { Calendar, Phone, MapPin, Sofa, MessageCircle, Mail, User } from 'lucide-react';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Load data from localStorage
    const loadedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const loadedContacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    setBookings(loadedBookings.sort((a, b) => b.id - a.id));
    setContacts(loadedContacts.sort((a, b) => b.id - a.id));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage bookings and customer inquiries</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
                    <p className="text-3xl font-bold text-gray-900">{bookings.length}</p>
                  </div>
                  <div className="bg-teal-100 p-3 rounded-xl">
                    <Sofa className="w-6 h-6 text-teal-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Contact Messages</p>
                    <p className="text-3xl font-bold text-gray-900">{contacts.length}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Revenue (Est.)</p>
                    <p className="text-3xl font-bold text-gray-900">
                      ₹{bookings.reduce((sum, b) => sum + (b.totalPrice || 0), 0)}
                    </p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="bookings" className="space-y-6">
            <TabsList>
              <TabsTrigger value="bookings">Bookings ({bookings.length})</TabsTrigger>
              <TabsTrigger value="contacts">Contact Messages ({contacts.length})</TabsTrigger>
            </TabsList>

            {/* Bookings Tab */}
            <TabsContent value="bookings" className="space-y-4">
              {bookings.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Sofa className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No bookings yet</p>
                  </CardContent>
                </Card>
              ) : (
                bookings.map((booking) => (
                  <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{booking.customerName}</h3>
                            <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
                              {booking.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500">Booking ID: #{booking.id}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-teal-600">₹{booking.totalPrice}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700">{booking.customerPhone}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700">{booking.city}</span>
                          </div>
                          <div className="flex items-start space-x-2 text-sm">
                            <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                            <span className="text-gray-700">{booking.address}</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-sm">
                            <Sofa className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700">{booking.sofaType} (x{booking.quantity})</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-700">{booking.date} - {booking.time}</span>
                          </div>
                          {booking.services && booking.services.length > 0 && (
                            <div className="text-sm">
                              <p className="text-gray-500 mb-1">Additional Services:</p>
                              <p className="text-gray-700">{booking.services.join(', ')}</p>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                          Booked on: {new Date(booking.createdAt).toLocaleString()}
                        </p>
                        <a
                          href={`https://wa.me/${booking.customerPhone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center space-x-1"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Contact via WhatsApp</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts" className="space-y-4">
              {contacts.length === 0 ? (
                <Card>
                  <CardContent className="p-12 text-center">
                    <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No contact messages yet</p>
                  </CardContent>
                </Card>
              ) : (
                contacts.map((contact) => (
                  <Card key={contact.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="flex items-center space-x-2">
                            <User className="w-5 h-5 text-teal-600" />
                            <span>{contact.name}</span>
                          </CardTitle>
                        </div>
                        <p className="text-xs text-gray-500">
                          {new Date(contact.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                            {contact.email}
                          </a>
                        </div>
                        {contact.phone && (
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${contact.phone}`} className="text-gray-700">
                              {contact.phone}
                            </a>
                          </div>
                        )}
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Admin;
