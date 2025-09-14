import React, { useState, useMemo } from "react";
import {
  Search,
  Users,
  Target,
  Calendar,
  Heart,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { mockCampaigns } from "./mockData";
import Footer from './Footer';

const Campaigns: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = useMemo(() => {
    return mockCampaigns.filter((campaign) => {
      const matchesSearch =
        searchTerm === "" ||
        campaign.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        campaign.description
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        campaign.category
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesSearch;
    });
  }, [searchTerm]);

  const handleDonate = (campaignName: string) => {
    alert(
      `Thank you for your interest in donating to ${campaignName}!`,
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header Section */}
      <div className="relative overflow-hidden py-24 bg-gradient-to-br from-blue-accent to-blue-accent-text transition-colors duration-300">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
            <Heart className="h-4 w-4 text-white/80" />
            <span className="text-white/80 text-sm">
              Make an Impact
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Support Our Campaigns
          </h1>
          <p className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed">
            The Donation Portal enables both alumni and the
            institution to contribute to and manage financial
            donations through meaningful campaigns that create
            lasting impact.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="sticky top-12 z-40 bg-background/80 backdrop-blur-md border-b border-border py-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 transition-colors duration-300" />
            <Input
              placeholder="Search campaigns by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            />
          </div>
          <div className="mt-3 text-center">
            <div className="inline-block bg-blue-accent-bg border border-blue-accent-border rounded-full px-3 py-1 transition-colors duration-300">
              <span className="text-blue-accent-text text-sm font-medium">
                {filteredCampaigns.length} active campaigns
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {filteredCampaigns.map((campaign) => (
            <Card
              key={campaign.id}
              className="group bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg rounded-xl overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Campaign Header */}
                <div className="relative p-6 bg-gradient-to-br from-accent/50 to-card transition-colors duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 transition-colors duration-300">
                        {campaign.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed transition-colors duration-300">
                        {campaign.description}
                      </p>
                    </div>
                    <Badge className="bg-secondary text-secondary-foreground border border-border rounded-full px-3 py-1 transition-colors duration-300">
                      {campaign.category}
                    </Badge>
                  </div>
                </div>

                {/* Campaign Body */}
                <div className="p-6 space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-4 border border-border transition-colors duration-300">
                      <div className="flex items-center text-blue-accent-text mb-1 transition-colors duration-300">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-xs font-medium">
                          Supporters
                        </span>
                      </div>
                      <p className="text-foreground text-lg font-semibold transition-colors duration-300">
                        {campaign.supporters}
                      </p>
                    </div>

                    <div className="bg-muted rounded-lg p-4 border border-border transition-colors duration-300">
                      <div className="flex items-center text-blue-accent-text mb-1 transition-colors duration-300">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-xs font-medium">
                          Ends
                        </span>
                      </div>
                      <p className="text-foreground text-sm font-medium transition-colors duration-300">
                        {campaign.endDate}
                      </p>
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-foreground font-medium transition-colors duration-300">
                        <TrendingUp className="h-4 w-4 mr-2 text-primary transition-colors duration-300" />
                        Progress: {campaign.progress}%
                      </div>
                      <Target className="h-4 w-4 text-primary transition-colors duration-300" />
                    </div>

                    <div className="relative">
                      <Progress
                        value={campaign.progress}
                        className="h-3 bg-muted rounded-full"
                      />
                      <div
                        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-primary to-accent-foreground rounded-full transition-all duration-300"
                        style={{
                          width: `${campaign.progress}%`,
                        }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <div className="text-muted-foreground transition-colors duration-300">
                        Raised:{" "}
                        <span className="text-foreground font-semibold transition-colors duration-300">
                          {formatCurrency(campaign.raised)}
                        </span>
                      </div>
                      <div className="text-muted-foreground transition-colors duration-300">
                        Goal:{" "}
                        <span className="text-foreground font-semibold transition-colors duration-300">
                          {formatCurrency(campaign.goal)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Amount Needed */}
                  <div className="bg-accent rounded-lg p-4 border border-border transition-colors duration-300">
                    <div className="flex items-center text-primary mb-1 transition-colors duration-300">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">
                        Still needed to reach goal
                      </span>
                    </div>
                    <p className="text-foreground text-2xl font-bold transition-colors duration-300">
                      {formatCurrency(
                        campaign.goal - campaign.raised,
                      )}
                    </p>
                  </div>

                  {/* Donate Button */}
                  <Button
                    onClick={() => handleDonate(campaign.name)}
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground border-0 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-semibold"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Donate Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-blue-accent-bg border border-blue-accent-border rounded-xl flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
              <Search className="h-12 w-12 text-blue-accent-text transition-colors duration-300" />
            </div>
            <p className="text-foreground text-xl mb-2 transition-colors duration-300">
              No campaigns found
            </p>
            <p className="text-muted-foreground transition-colors duration-300">
              Try adjusting your search terms
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Campaigns;