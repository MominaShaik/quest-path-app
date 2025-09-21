import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, ExternalLink, MapPin, Clock, Building } from "lucide-react";

const Opportunities = () => {
  const jobs = [
    {
      title: "Software Developer",
      company: "TCS - Tata Consultancy Services",
      location: "Bangalore, Mumbai, Pune",
      type: "MNC",
      deadline: "Sept 30, 2024",
      experience: "Fresher to 3 years",
      url: "https://careers.tcs.com",
      skills: ["Java", "Python", "React"]
    },
    {
      title: "Banking Associate",
      company: "State Bank of India",
      location: "Pan India",
      type: "Government",
      deadline: "Oct 15, 2024",
      experience: "Fresher",
      url: "https://sbi.co.in/careers",
      skills: ["Banking", "Customer Service", "Finance"]
    },
    {
      title: "Mechanical Engineer",
      company: "Indian Railways",
      location: "Various Locations",
      type: "Government",
      deadline: "Sept 25, 2024",
      experience: "Diploma/Graduate",
      url: "https://indianrailways.gov.in",
      skills: ["Mechanical Engineering", "Maintenance", "Safety"]
    },
    {
      title: "Data Analyst",
      company: "Infosys",
      location: "Hyderabad, Chennai",
      type: "MNC",
      deadline: "Oct 5, 2024",
      experience: "0-2 years",
      url: "https://infosys.com/careers",
      skills: ["SQL", "Python", "Excel", "Analytics"]
    },
    {
      title: "Healthcare Assistant",
      company: "AIIMS Delhi",
      location: "New Delhi",
      type: "Government",
      deadline: "Sept 28, 2024",
      experience: "12th Pass",
      url: "https://aiims.edu/careers",
      skills: ["Patient Care", "Medical Knowledge", "Communication"]
    },
    {
      title: "Hotel Management Trainee",
      company: "Taj Hotels",
      location: "Mumbai, Delhi, Goa",
      type: "MNC",
      deadline: "Oct 10, 2024",
      experience: "Diploma/Graduate",
      url: "https://tajhotels.com/careers",
      skills: ["Hospitality", "Customer Service", "Management"]
    }
  ];

  const certifications = [
    {
      title: "Google Digital Marketing Fundamentals",
      provider: "Google",
      duration: "40 hours",
      level: "Beginner",
      cost: "Free",
      url: "https://skillshop.withgoogle.com",
      skills: ["Digital Marketing", "SEO", "Analytics"]
    },
    {
      title: "Microsoft Azure Fundamentals",
      provider: "Microsoft",
      duration: "6-8 hours",
      level: "Beginner",
      cost: "₹3,500",
      url: "https://learn.microsoft.com",
      skills: ["Cloud Computing", "Azure", "DevOps"]
    },
    {
      title: "Financial Market Operations",
      provider: "NISM (SEBI)",
      duration: "30 hours",
      level: "Intermediate",
      cost: "₹2,000",
      url: "https://nism.ac.in",
      skills: ["Finance", "Trading", "Compliance"]
    },
    {
      title: "Certified Nursing Assistant",
      provider: "NSDC",
      duration: "6 months",
      level: "Professional",
      cost: "₹15,000",
      url: "https://skillindia.gov.in",
      skills: ["Healthcare", "Patient Care", "Medical Procedures"]
    },
    {
      title: "AutoCAD Professional",
      provider: "Autodesk",
      duration: "25 hours",
      level: "Intermediate",
      cost: "₹12,000",
      url: "https://autodesk.com/certification",
      skills: ["CAD", "Design", "Engineering Drawing"]
    },
    {
      title: "Food & Beverage Service",
      provider: "Tourism & Hospitality Skill Council",
      duration: "3 months",
      level: "Professional",
      cost: "₹8,000",
      url: "https://thsc.co.in",
      skills: ["Hospitality", "Service", "Food Safety"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Career Opportunities
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest job openings and professional certifications to advance your career
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Latest Jobs Section */}
          <section className="slide-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-jobs/10 rounded-lg">
                <Briefcase className="h-6 w-6 text-jobs" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Latest Jobs</h2>
            </div>
            
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <Card key={index} className="shadow-card hover-lift">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{job.title}</CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{job.company}</span>
                          <Badge 
                            variant={job.type === "Government" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {job.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Apply by {job.deadline}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription>
                      Experience: {job.experience}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-jobs hover:bg-jobs/90">
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Apply Now
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Available Certifications Section */}
          <section className="slide-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-education/10 rounded-lg">
                <GraduationCap className="h-6 w-6 text-education" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Available Certifications</h2>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-card hover-lift">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-medium">{cert.provider}</span>
                      <Badge variant="outline" className="text-xs">
                        {cert.level}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Duration: {cert.duration}</span>
                      <span className={cert.cost === "Free" ? "text-jobs font-medium" : ""}>
                        {cert.cost}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full bg-education hover:bg-education/90">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Enroll Now
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center fade-in">
          <Card className="shadow-card bg-gradient-hero">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Don't See What You're Looking For?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Create a personalized roadmap to discover opportunities tailored to your interests and qualifications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="bg-white text-primary hover:bg-white/90"
                >
                  <a href="/input">Create My Roadmap</a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Contact Career Counselor
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Opportunities;