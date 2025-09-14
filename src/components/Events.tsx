import React, { useState, useMemo } from 'react';
import { Search, Calendar, MapPin, Users, Clock, DollarSign, Mic, PartyPopper } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { mockEvents } from './mockData';
import Footer from './Footer';

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = useMemo(() => {
    return mockEvents.filter(event => {
      const matchesSearch = searchTerm === '' || 
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesSearch;
    });
  }, [searchTerm]);

  const handleRegister = (eventName: string) => {
    alert(`Registration successful for ${eventName}!`);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header Section */}
      <div className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-accent to-blue-accent-text transition-colors duration-300">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <PartyPopper className="h-4 w-4 text-white/80" />
            <span className="text-white/80 text-sm">Community Events</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Events & Reunions
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Seamless access to networking, career opportunities, and alumni events that 
            will strengthen connections and foster a vibrant, active community.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="sticky top-12 z-40 bg-background/80 backdrop-blur-md border-b border-border py-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 transition-colors duration-300" />
            <Input
              placeholder="Search events by name, location, or speaker..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            />
          </div>
          <div className="mt-3 text-center">
            <div className="inline-block bg-blue-accent-bg border border-blue-accent-border rounded-full px-3 py-1 transition-colors duration-300">
              <span className="text-blue-accent-text text-sm font-medium">
                {filteredEvents.length} upcoming events
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="group bg-card border border-border hover:border-primary/30 hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300">
              <CardContent className="p-0">
                {/* Event Header */}
                <div className="relative p-8 bg-gradient-to-br from-accent/50 to-card transition-colors duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2 transition-colors duration-300">{event.name}</h3>
                      <div className="flex items-center text-muted-foreground transition-colors duration-300">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{event.date}</span>
                        <span className="mx-2">•</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <Badge 
                      className={`transition-colors duration-300 ${
                        event.status === 'Open' 
                          ? 'bg-secondary text-secondary-foreground border-border' 
                          : 'bg-destructive/10 text-destructive border-destructive/30'
                      } border rounded-full px-4 py-2`}
                    >
                      {event.status}
                    </Badge>
                  </div>
                </div>

                {/* Event Body */}
                <div className="p-8 space-y-6">
                  {/* Event Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-xl p-4 border border-border transition-colors duration-300">
                      <div className="flex items-center text-primary mb-1 transition-colors duration-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-xs font-medium">Location</span>
                      </div>
                      <p className="text-foreground text-sm transition-colors duration-300">{event.location}</p>
                    </div>
                    
                    <div className="bg-muted rounded-xl p-4 border border-border transition-colors duration-300">
                      <div className="flex items-center text-primary mb-1 transition-colors duration-300">
                        <DollarSign className="h-4 w-4 mr-2" />
                        <span className="text-xs font-medium">Fee</span>
                      </div>
                      <p className="text-foreground text-sm font-medium transition-colors duration-300">{event.fee}</p>
                    </div>
                    
                    <div className="bg-muted rounded-xl p-4 border border-border transition-colors duration-300">
                      <div className="flex items-center text-primary mb-1 transition-colors duration-300">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-xs font-medium">Attendees</span>
                      </div>
                      <p className="text-foreground text-sm transition-colors duration-300">{event.attendees} registered</p>
                    </div>
                    
                    <div className="bg-muted rounded-xl p-4 border border-border transition-colors duration-300">
                      <div className="flex items-center text-primary mb-1 transition-colors duration-300">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-xs font-medium">Deadline</span>
                      </div>
                      <p className="text-foreground text-sm transition-colors duration-300">{event.registrationDeadline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-foreground font-medium mb-2 transition-colors duration-300">About this event</h4>
                    <p className="text-muted-foreground leading-relaxed transition-colors duration-300">{event.description}</p>
                  </div>

                  {/* Speakers */}
                  <div>
                    <div className="flex items-center text-foreground font-medium mb-3 transition-colors duration-300">
                      <Mic className="h-4 w-4 mr-2 text-primary transition-colors duration-300" />
                      Featured Speakers
                    </div>
                    <div className="space-y-2">
                      {event.speakers.map((speaker, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 transition-colors duration-300"></div>
                          <p className="text-foreground text-sm transition-colors duration-300">{speaker}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Register Button */}
                  <div className="pt-6 border-t border-border transition-colors duration-300">
                    <Button 
                      onClick={() => handleRegister(event.name)}
                      disabled={event.status === 'Closed'}
                      className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                        event.status === 'Open' 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40' 
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      {event.status === 'Open' ? 'Register Now' : 'Registration Closed'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-blue-accent-bg border border-blue-accent-border rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <Search className="h-12 w-12 text-blue-accent-text transition-colors duration-300" />
            </div>
            <p className="text-foreground text-xl mb-2 transition-colors duration-300">No events found</p>
            <p className="text-muted-foreground transition-colors duration-300">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;