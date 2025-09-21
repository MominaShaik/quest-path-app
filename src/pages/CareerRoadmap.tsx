import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, Briefcase, TrendingUp, ExternalLink, ArrowLeft } from "lucide-react";

interface UserSelection {
  qualification: string;
  interest: string;
}

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  type: 'education' | 'certification' | 'jobs' | 'growth';
  icon: any;
  links?: { title: string; url: string }[];
}

const CareerRoadmap = () => {
  const [userSelection, setUserSelection] = useState<UserSelection | null>(null);
  const [roadmap, setRoadmap] = useState<RoadmapStep[]>([]);

  useEffect(() => {
    // Get user selection from localStorage
    const stored = localStorage.getItem("userSelection");
    if (stored) {
      const selection = JSON.parse(stored);
      setUserSelection(selection);
      generateRoadmap(selection);
    }
  }, []);

  const generateRoadmap = (selection: UserSelection) => {
    const { qualification, interest } = selection;
    
    // Generate personalized roadmap based on qualification and interest
    const roadmapData: RoadmapStep[] = [
      {
        id: 1,
        title: getSuggestedCourse(qualification, interest),
        description: "Build foundational skills and knowledge in your chosen field",
        type: 'education',
        icon: BookOpen,
        links: [
          { title: "Coursera Courses", url: "https://coursera.org" },
          { title: "edX Programs", url: "https://edx.org" }
        ]
      },
      {
        id: 2,
        title: getNSQFCertification(interest),
        description: "Obtain industry-recognized certification to validate your skills",
        type: 'certification',
        icon: Award,
        links: [
          { title: "Skill India Portal", url: "https://skillindia.gov.in" },
          { title: "NSDC Certification", url: "https://nsdcindia.org" }
        ]
      },
      {
        id: 3,
        title: getJobRoles(qualification, interest),
        description: "Explore entry-level positions matching your profile",
        type: 'jobs',
        icon: Briefcase,
        links: [
          { title: "Naukri.com", url: "https://naukri.com" },
          { title: "LinkedIn Jobs", url: "https://linkedin.com/jobs" },
          { title: "Government Jobs", url: "https://sarkariresult.com" }
        ]
      },
      {
        id: 4,
        title: getGrowthPath(interest),
        description: "Long-term career advancement opportunities and leadership roles",
        type: 'growth',
        icon: TrendingUp,
        links: [
          { title: "Professional Development", url: "#" },
          { title: "Leadership Programs", url: "#" }
        ]
      }
    ];

    setRoadmap(roadmapData);
  };

  const getSuggestedCourse = (qualification: string, interest: string) => {
    const courses: { [key: string]: { [key: string]: string } } = {
      "Technology": {
        "10th": "Basic Computer Skills & Programming Fundamentals",
        "12th": "Web Development & Mobile App Development",
        "ITI": "Advanced Programming & Software Development",
        "Diploma": "Full Stack Development & Cloud Computing",
        "Graduate": "Advanced Software Engineering & Data Science"
      },
      "Healthcare": {
        "10th": "Healthcare Assistant Training & First Aid",
        "12th": "Medical Laboratory Technician Course",
        "ITI": "Medical Equipment Maintenance",
        "Diploma": "Nursing & Healthcare Management",
        "Graduate": "Advanced Healthcare Specialization"
      },
      "Finance": {
        "10th": "Basic Accounting & Financial Literacy",
        "12th": "Banking & Insurance Fundamentals",
        "ITI": "Accounting Software & Taxation",
        "Diploma": "Financial Analysis & Investment Planning",
        "Graduate": "Advanced Finance & Risk Management"
      },
      "Mechanical": {
        "10th": "Basic Mechanical Skills & Safety Training",
        "12th": "Mechanical Drawing & CAD Software",
        "ITI": "Advanced Machine Operation & Maintenance",
        "Diploma": "Mechanical Engineering & Project Management",
        "Graduate": "Advanced Mechanical Design & Research"
      },
      "Hospitality": {
        "10th": "Customer Service & Food Safety Training",
        "12th": "Hotel Management Fundamentals",
        "ITI": "Culinary Arts & Restaurant Operations",
        "Diploma": "Hotel & Event Management",
        "Graduate": "Hospitality Business Management"
      }
    };

    return courses[interest]?.[qualification] || "Skill Development Course";
  };

  const getNSQFCertification = (interest: string) => {
    const certifications: { [key: string]: string } = {
      "Technology": "NSQF Level 4-6: IT Software Development",
      "Healthcare": "NSQF Level 3-5: Healthcare Services",
      "Finance": "NSQF Level 4-6: Banking & Financial Services",
      "Mechanical": "NSQF Level 3-5: Mechanical Engineering",
      "Hospitality": "NSQF Level 3-5: Tourism & Hospitality"
    };

    return certifications[interest] || "NSQF Certification";
  };

  const getJobRoles = (qualification: string, interest: string) => {
    const roles: { [key: string]: { [key: string]: string } } = {
      "Technology": {
        "10th": "Data Entry Operator, Computer Operator",
        "12th": "Web Developer, Software Tester",
        "ITI": "System Administrator, Technical Support",
        "Diploma": "Software Developer, Network Engineer",
        "Graduate": "Software Engineer, Data Analyst, Project Manager"
      },
      "Healthcare": {
        "10th": "Healthcare Assistant, Ward Attendant",
        "12th": "Medical Laboratory Assistant, Pharmacy Assistant",
        "ITI": "Medical Equipment Technician, Dialysis Technician",
        "Diploma": "Staff Nurse, Healthcare Coordinator",
        "Graduate": "Medical Officer, Healthcare Manager, Specialist Nurse"
      },
      "Finance": {
        "10th": "Bank Clerk, Cashier",
        "12th": "Banking Associate, Insurance Agent",
        "ITI": "Accounting Assistant, Tax Assistant",
        "Diploma": "Financial Analyst, Loan Officer",
        "Graduate": "Investment Advisor, Financial Manager, Bank Manager"
      },
      "Mechanical": {
        "10th": "Machine Operator, Maintenance Helper",
        "12th": "Mechanical Technician, Quality Inspector",
        "ITI": "Machinist, Mechanical Fitter, Welder",
        "Diploma": "Mechanical Engineer, Production Supervisor",
        "Graduate": "Design Engineer, Project Manager, R&D Engineer"
      },
      "Hospitality": {
        "10th": "Hotel Attendant, Kitchen Helper",
        "12th": "Front Desk Associate, Restaurant Server",
        "ITI": "Chef Assistant, Housekeeping Supervisor",
        "Diploma": "Hotel Manager, Event Coordinator",
        "Graduate": "General Manager, Operations Director, Business Owner"
      }
    };

    return roles[interest]?.[qualification] || "Entry Level Positions";
  };

  const getGrowthPath = (interest: string) => {
    const growth: { [key: string]: string } = {
      "Technology": "Senior Developer → Tech Lead → Engineering Manager → CTO",
      "Healthcare": "Senior Practitioner → Department Head → Medical Director → Chief Medical Officer",
      "Finance": "Senior Analyst → Finance Manager → Director → CFO",
      "Mechanical": "Senior Engineer → Project Manager → Engineering Director → VP Engineering",
      "Hospitality": "Department Manager → General Manager → Regional Director → CEO"
    };

    return growth[interest] || "Career Advancement Path";
  };

  const getStepColor = (type: string) => {
    switch (type) {
      case 'education': return 'education';
      case 'certification': return 'education';
      case 'jobs': return 'jobs';
      case 'growth': return 'growth';
      default: return 'primary';
    }
  };

  const getGradientClass = (type: string) => {
    switch (type) {
      case 'education': return 'bg-gradient-education';
      case 'certification': return 'bg-gradient-education';
      case 'jobs': return 'bg-gradient-jobs';
      case 'growth': return 'bg-gradient-growth';
      default: return 'bg-primary';
    }
  };

  if (!userSelection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            No profile found. Please complete the input form first.
          </p>
          <Link to="/input">
            <Button>Go to Input Form</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 fade-in">
          <Link to="/input">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Input
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Your Personalized Career Roadmap
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <Badge variant="outline">{userSelection.qualification}</Badge>
            <span>•</span>
            <Badge variant="outline">{userSelection.interest}</Badge>
          </div>
        </div>

        {/* Roadmap Steps */}
        <div className="space-y-8">
          {roadmap.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.id} 
                className="relative slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connector Line */}
                {index < roadmap.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-border hidden sm:block"></div>
                )}

                <Card className="shadow-card hover-lift">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${getGradientClass(step.type)} flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-muted-foreground">
                            Step {step.id}
                          </span>
                          <Badge variant="secondary" className={`text-${getStepColor(step.type)}`}>
                            {step.type.charAt(0).toUpperCase() + step.type.slice(1)}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  {step.links && (
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {step.links.map((link, linkIndex) => (
                          <Button
                            key={linkIndex}
                            variant="outline"
                            size="sm"
                            asChild
                          >
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              {link.title}
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </div>
            );
          })}
        </div>

        {/* Action Section */}
        <div className="mt-12 text-center fade-in">
          <Card className="shadow-card">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Ready to Start?</h3>
              <p className="text-muted-foreground mb-4">
                Explore opportunities and certifications to kickstart your journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/opportunities">
                  <Button>View Opportunities</Button>
                </Link>
                <Link to="/input">
                  <Button variant="outline">Create New Roadmap</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CareerRoadmap;