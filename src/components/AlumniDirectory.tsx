import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase, GraduationCap, Linkedin, Twitter, Github, Star, Users } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { mockAlumni } from './mockData';
import Footer from './Footer';

const AlumniDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredAlumni = useMemo(() => {
    return mockAlumni.filter(alumni => {
      const matchesSearch = searchTerm === '' || 
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
    });
  }, [searchTerm]);

  const handleConnect = (e: React.MouseEvent, alumniName: string) => {
    e.stopPropagation();
    alert(`Connection request sent to ${alumniName}!`);
  };

  const handleProfileClick = (alumniId: number) => {
    navigate(`/alumni/${alumniId}`);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <div className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-accent to-blue-accent-text transition-colors duration-300">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <Users className="h-4 w-4 text-white/80" />
            <span className="text-white/80 text-sm">Alumni Network</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Discover Amazing Alumni
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Connect with fellow alumni, expand your professional network, and discover 
            exciting opportunities within our vibrant community.
          </p>
        </div>
      </div>

      <div className="sticky top-12 z-40 bg-background/80 backdrop-blur-md border-b border-border py-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 transition-colors duration-300" />
            <Input
              placeholder="Search alumni by name, company, or position..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 transition-all duration-300"
            />
          </div>
          <div className="mt-3 text-center">
            <div className="inline-block bg-blue-accent-bg border border-blue-accent-border rounded-full px-3 py-1 transition-colors duration-300">
              <span className="text-blue-accent-text text-sm font-medium">
                {filteredAlumni.length} alumni in our network
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredAlumni.map((alumni) => (
            <Card 
              key={alumni.id} 
              className="group bg-card border border-border hover:border-blue-accent/30 hover:shadow-lg rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
              onClick={() => handleProfileClick(alumni.id)}
            >
              <CardContent className="p-0">
                <div className="relative p-6 bg-gradient-to-br from-accent/50 to-card transition-colors duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={alumni.profileImage}
                          alt={alumni.name}
                          className="w-16 h-16 rounded-xl object-cover border-2 border-border transition-colors duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-background flex items-center justify-center transition-colors duration-300">
                          <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-lg transition-colors duration-300">{alumni.name}</h3>
                        <p className="text-muted-foreground text-sm transition-colors duration-300">{alumni.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 bg-blue-accent-bg border border-blue-accent-border rounded-lg px-3 py-1 transition-colors duration-300">
                      <Star className="h-3 w-3 text-blue-accent-text fill-current transition-colors duration-300" />
                      <span className="text-blue-accent-text text-xs font-medium transition-colors duration-300">{alumni.match}%</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-muted-foreground text-sm transition-colors duration-300">
                      <Briefcase className="h-4 w-4 mr-3 text-blue-accent-text transition-colors duration-300" />
                      {alumni.company}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm transition-colors duration-300">
                      <MapPin className="h-4 w-4 mr-3 text-blue-accent-text transition-colors duration-300" />
                      {alumni.location}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm transition-colors duration-300">
                      <GraduationCap className="h-4 w-4 mr-3 text-blue-accent-text transition-colors duration-300" />
                      Class of {alumni.graduationYear}
                    </div>
                  </div>

                  <div>
                    <Badge className="bg-secondary text-secondary-foreground border border-border rounded-lg px-3 py-1 transition-colors duration-300">
                      {alumni.department}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-foreground font-medium text-sm mb-2 transition-colors duration-300">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {alumni.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} className="bg-muted text-muted-foreground border border-border rounded-lg text-xs px-2 py-1 transition-colors duration-300">
                          {skill}
                        </Badge>
                      ))}
                      {alumni.skills.length > 3 && (
                        <Badge className="bg-muted text-muted-foreground border border-border rounded-lg text-xs px-2 py-1 transition-colors duration-300">
                          +{alumni.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-foreground font-medium text-sm mb-1 transition-colors duration-300">Latest Achievement</p>
                    <p className="text-muted-foreground text-xs leading-relaxed transition-colors duration-300">{alumni.achievements}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border transition-colors duration-300">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center border border-border transition-all duration-300 hover:bg-accent/80">
                        <Linkedin className="h-4 w-4 text-blue-accent-text transition-colors duration-300" />
                      </div>
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center border border-border transition-all duration-300 hover:bg-muted/80">
                        <Github className="h-4 w-4 text-muted-foreground transition-colors duration-300" />
                      </div>
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center border border-border transition-all duration-300 hover:bg-accent/80">
                        <Twitter className="h-4 w-4 text-blue-accent-text transition-colors duration-300" />
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={(e) => handleConnect(e, alumni.name)}
                      className="bg-blue-accent hover:bg-blue-accent/90 text-white border-0 rounded-lg px-6 transition-all duration-300"
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-blue-accent-bg border border-blue-accent-border rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <Search className="h-12 w-12 text-blue-accent-text transition-colors duration-300" />
            </div>
            <p className="text-foreground text-xl mb-2 transition-colors duration-300">No alumni found</p>
            <p className="text-muted-foreground transition-colors duration-300">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AlumniDirectory;