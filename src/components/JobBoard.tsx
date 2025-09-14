import React, { useState, useMemo } from 'react';
import { Search, MapPin, DollarSign, Clock, Users, Plus, BarChart3, Briefcase, TrendingUp, Filter, Trash2 } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { mockJobs, Job } from './mockData';
import CreateJobForm from './CreateJobForm';
import Footer from './Footer';

const JobBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Job' | 'Internship'>('All');
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [isCreateJobOpen, setIsCreateJobOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, categoryFilter, jobs]);

  const handleCreateJob = (jobData: Omit<Job, 'id' | 'postedDate' | 'applicants'>) => {
    const newJob: Job = {
      ...jobData,
      id: Math.max(...jobs.map(j => j.id)) + 1,
      postedDate: 'Just now',
      applicants: 0,
      isUserCreated: true
    };
    
    // Add the new job to the top of the list
    setJobs(prevJobs => [newJob, ...prevJobs]);
  };

  const handleDeleteJob = (jobId: number) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
  };

  const handleApply = (jobTitle: string, company: string) => {
    alert(`Application submitted for ${jobTitle} at ${company}!`);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header Section */}
      <div className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-accent to-blue-accent-text transition-colors duration-300">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <Briefcase className="h-4 w-4 text-white/80" />
            <span className="text-white/80 text-sm">Career Opportunities</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Discover Your Next Role
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Access exclusive job postings, mentorship opportunities, and professional networking 
            that will accelerate your career growth and advancement.
          </p>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="sticky top-12 z-40 bg-background/80 backdrop-blur-md border-b border-border py-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 transition-colors duration-300" />
              <Input
                placeholder="Search jobs by title, company, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-blue-accent focus:ring-2 focus:ring-blue-accent/20 transition-all duration-300"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button 
                onClick={() => setIsCreateJobOpen(true)}
                className="bg-blue-accent hover:bg-blue-accent/90 text-white border-0 rounded-lg px-6 flex items-center gap-2 transition-all duration-300"
              >
                <Plus className="h-4 w-4" />
                Post Job
              </Button>
              <Button variant="outline" className="rounded-lg px-6 flex items-center gap-2 transition-all duration-300">
                <BarChart3 className="h-4 w-4" />
                AI Insights
              </Button>
            </div>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <Button
              variant={categoryFilter === 'All' ? 'default' : 'outline'}
              onClick={() => setCategoryFilter('All')}
              className={`rounded-lg px-6 py-2 flex items-center gap-2 transition-all duration-300 ${
                categoryFilter === 'All' 
                  ? 'bg-blue-accent hover:bg-blue-accent/90 text-white border-0' 
                  : 'bg-background border border-border text-foreground hover:bg-accent'
              }`}
            >
              <Filter className="h-4 w-4" />
              All ({jobs.length})
            </Button>
            <Button
              variant={categoryFilter === 'Job' ? 'default' : 'outline'}
              onClick={() => setCategoryFilter('Job')}
              className={`rounded-lg px-6 py-2 flex items-center gap-2 transition-all duration-300 ${
                categoryFilter === 'Job' 
                  ? 'bg-blue-accent hover:bg-blue-accent/90 text-white border-0' 
                  : 'bg-background border border-border text-foreground hover:bg-accent'
              }`}
            >
              <Briefcase className="h-4 w-4" />
              Jobs ({jobs.filter(job => job.category === 'Job').length})
            </Button>
            <Button
              variant={categoryFilter === 'Internship' ? 'default' : 'outline'}
              onClick={() => setCategoryFilter('Internship')}
              className={`rounded-lg px-6 py-2 flex items-center gap-2 transition-all duration-300 ${
                categoryFilter === 'Internship' 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground border-0' 
                  : 'bg-background border border-border text-foreground hover:bg-accent'
              }`}
            >
              <Users className="h-4 w-4" />
              Internships ({jobs.filter(job => job.category === 'Internship').length})
            </Button>
          </div>
          
          <div className="mt-4 text-center">
            <div className="inline-block bg-blue-accent-bg border border-blue-accent-border rounded-full px-3 py-1 transition-colors duration-300">
              <span className="text-blue-accent-text text-sm font-medium">
                {filteredJobs.length} {categoryFilter.toLowerCase()} opportunities available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="group bg-card border border-border hover:border-blue-accent/30 hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300">
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground transition-colors duration-300">{job.title}</h3>
                      <Badge className={`rounded-lg transition-colors duration-300 ${
                        job.category === 'Internship' 
                          ? 'bg-secondary text-secondary-foreground border border-border' 
                          : 'bg-accent text-accent-foreground border border-border'
                      }`}>
                        {job.category === 'Internship' ? (
                          <>
                            <Users className="h-3 w-3 mr-1" />
                            Internship
                          </>
                        ) : (
                          <>
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Hot
                          </>
                        )}
                      </Badge>
                    </div>
                    <p className="text-xl text-muted-foreground font-medium transition-colors duration-300">{job.company}</p>
                  </div>
                  <div className="flex gap-3 mt-4 lg:mt-0">
                    {job.isUserCreated && (
                      <Button 
                        onClick={() => handleDeleteJob(job.id)}
                        className="bg-destructive/10 border border-destructive/30 text-destructive hover:bg-destructive/20 rounded-lg px-4 py-2 text-sm flex items-center gap-2 transition-all duration-300"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    )}
                    <Button variant="outline" className="rounded-lg px-4 py-2 text-sm transition-all duration-300">
                      Save
                    </Button>
                    <Button variant="outline" className="rounded-lg px-4 py-2 text-sm transition-all duration-300">
                      Share
                    </Button>
                  </div>
                </div>

                {/* Job Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-muted rounded-lg p-4 border border-border transition-colors duration-300">
                    <div className="flex items-center text-primary mb-1 transition-colors duration-300">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-xs font-medium">Location</span>
                    </div>
                    <p className="text-foreground text-sm transition-colors duration-300">{job.location}</p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4 border border-border transition-colors duration-300">
                    <div className="flex items-center text-primary mb-1 transition-colors duration-300">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span className="text-xs font-medium">Salary</span>
                    </div>
                    <p className="text-foreground text-sm transition-colors duration-300">{job.salary}</p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4 border border-border transition-colors duration-300">
                    <div className="flex items-center text-primary mb-1 transition-colors duration-300">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-xs font-medium">Type</span>
                    </div>
                    <p className="text-foreground text-sm transition-colors duration-300">{job.type}</p>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4 border border-border transition-colors duration-300">
                    <div className="flex items-center text-primary mb-1 transition-colors duration-300">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-xs font-medium">Applicants</span>
                    </div>
                    <p className="text-foreground text-sm transition-colors duration-300">{job.applicants} applied</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-foreground font-medium mb-2 transition-colors duration-300">About this role</h4>
                  <p className="text-muted-foreground leading-relaxed transition-colors duration-300">{job.description}</p>
                </div>

                {/* Skills Required */}
                <div className="mb-6">
                  <h4 className="text-foreground font-medium mb-3 transition-colors duration-300">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((skill) => (
                      <Badge key={skill} className="bg-secondary text-secondary-foreground border border-border rounded-lg px-3 py-1 transition-colors duration-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-border gap-4 transition-colors duration-300">
                  <p className="text-muted-foreground text-sm transition-colors duration-300">Posted {job.postedDate}</p>
                  <Button 
                    onClick={() => handleApply(job.title, job.company)}
                    className="bg-blue-accent hover:bg-blue-accent/90 text-white border-0 rounded-lg px-8 py-3 font-medium transition-all duration-300"
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-blue-accent-bg border border-blue-accent-border rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <Search className="h-12 w-12 text-blue-accent-text transition-colors duration-300" />
            </div>
            <p className="text-foreground text-xl mb-2 transition-colors duration-300">No jobs found</p>
            <p className="text-muted-foreground transition-colors duration-300">Try adjusting your search terms</p>
          </div>
        )}
      </div>

      {/* Create Job Form */}
      <CreateJobForm
        isOpen={isCreateJobOpen}
        onClose={() => setIsCreateJobOpen(false)}
        onSubmit={handleCreateJob}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default JobBoard;