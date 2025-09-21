import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { ArrowRight, BookOpen, Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Input = () => {
  const navigate = useNavigate();
  const [qualification, setQualification] = useState("");
  const [interest, setInterest] = useState("");

  const qualifications = [
    { value: "10th", label: "10th Grade" },
    { value: "12th", label: "12th Grade" },
    { value: "ITI", label: "ITI (Industrial Training Institute)" },
    { value: "Diploma", label: "Diploma" },
    { value: "Graduate", label: "Graduate" }
  ];

  const interests = [
    { value: "Technology", label: "Technology" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Finance", label: "Finance" },
    { value: "Mechanical", label: "Mechanical" },
    { value: "Hospitality", label: "Hospitality" }
  ];

  const handleSubmit = () => {
    if (!qualification || !interest) {
      toast({
        title: "Please complete the form",
        description: "Both qualification and interest area are required.",
        variant: "destructive"
      });
      return;
    }

    // Store selections in localStorage for roadmap page
    localStorage.setItem("userSelection", JSON.stringify({ qualification, interest }));
    
    toast({
      title: "Profile created!",
      description: "Generating your personalized career roadmap..."
    });

    // Navigate to roadmap
    setTimeout(() => {
      navigate("/roadmap");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 fade-in">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Tell Us About Yourself
          </h1>
          <p className="text-lg text-muted-foreground">
            Help us create a personalized career roadmap for you
          </p>
        </div>

        <Card className="shadow-card hover-lift slide-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Your Profile
            </CardTitle>
            <CardDescription>
              Share your current qualification and area of interest to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Qualification Selection */}
            <div className="space-y-2">
              <Label htmlFor="qualification" className="text-sm font-medium">
                Select Qualification
              </Label>
              <Select value={qualification} onValueChange={setQualification}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your highest qualification" />
                </SelectTrigger>
                <SelectContent>
                  {qualifications.map((qual) => (
                    <SelectItem key={qual.value} value={qual.value}>
                      {qual.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Interest Selection */}
            <div className="space-y-2">
              <Label htmlFor="interest" className="text-sm font-medium flex items-center gap-2">
                <Heart className="h-4 w-4 text-primary" />
                Select Interest Area
              </Label>
              <Select value={interest} onValueChange={setInterest}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your area of interest" />
                </SelectTrigger>
                <SelectContent>
                  {interests.map((int) => (
                    <SelectItem key={int.value} value={int.value}>
                      {int.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button 
                onClick={handleSubmit}
                className="w-full"
                size="lg"
              >
                Generate My Roadmap
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Preview Section */}
        {(qualification || interest) && (
          <Card className="mt-6 shadow-card fade-in">
            <CardHeader>
              <CardTitle className="text-lg">Your Selection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {qualification && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Qualification:</span> {qualifications.find(q => q.value === qualification)?.label}
                  </p>
                )}
                {interest && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Interest:</span> {interest}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Input;