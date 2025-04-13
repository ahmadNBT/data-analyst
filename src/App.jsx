"use client";

import { useState, useEffect, useRef } from "react";
import {
  LineChart,
  BarChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  GitlabIcon as GitHub,
  Twitter,
  Menu,
  X,
  Calendar,
  Award,
  CheckCircle,
  FileText,
  Clock,
  Users,
  ArrowRight,
  Star,
  AlertTriangle,
  TrendingUp,
  BarChart2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useMobile } from "@/hooks/use-mobile";
import project1Image from "@/assets/1.png";
import project2Image from "@/assets/2.png";
import project3Image from "@/assets/3.png";
import project4Image from "@/assets/4.png";
import project5Image from "@/assets/5.png";
import project6Image from "@/assets/6.png";

// Enhanced mock data for charts
const lineChartData = [
  { name: "Jan", value: 400, average: 300 },
  { name: "Feb", value: 300, average: 320 },
  { name: "Mar", value: 600, average: 340 },
  { name: "Apr", value: 800, average: 360 },
  { name: "May", value: 500, average: 380 },
  { name: "Jun", value: 900, average: 400 },
];

const barChartData = [
  { name: "Product A", value: 400, target: 450 },
  { name: "Product B", value: 300, target: 350 },
  { name: "Product C", value: 600, target: 500 },
  { name: "Product D", value: 800, target: 750 },
  { name: "Product E", value: 500, target: 600 },
];

const areaChartData = [
  { name: "Q1 2023", current: 4000, previous: 2400 },
  { name: "Q2 2023", current: 3000, previous: 1398 },
  { name: "Q3 2023", current: 2000, previous: 9800 },
  { name: "Q4 2023", current: 2780, previous: 3908 },
  { name: "Q1 2024", current: 5890, previous: 4800 },
  { name: "Q2 2024", current: 6390, previous: 3800 },
];

const radarChartData = [
  { subject: "Visualization", A: 120, B: 110, fullMark: 150 },
  { subject: "Statistics", A: 98, B: 130, fullMark: 150 },
  { subject: "Python", A: 86, B: 130, fullMark: 150 },
  { subject: "SQL", A: 99, B: 100, fullMark: 150 },
  { subject: "Machine Learning", A: 85, B: 90, fullMark: 150 },
  { subject: "Business Acumen", A: 65, B: 85, fullMark: 150 },
];

// Expanded skill data with more details
const skills = [
  {
    name: "Tableau",
    icon: "📊",
    level: "Expert",
    years: 2,
    description:
      "Advanced dashboard creation, custom visualizations, and performance optimization",
  },
  {
    name: "Excel",
    icon: "📈",
    level: "Expert",
    years: 4,
    description:
      "Complex formulas, pivot tables, VBA macros, and data modeling",
  },
  {
    name: "Python",
    icon: "🐍",
    level: "Advanced",
    years: 2,
    description:
      "Data analysis with pandas, numpy, matplotlib, and scikit-learn",
  },
  {
    name: "R",
    icon: "R",
    level: "Intermediate",
    years: 1,
    description: "Statistical analysis, ggplot2, and R Markdown for reports",
  },
  {
    name: "Power BI",
    icon: "⚡",
    level: "Advanced",
    years: 3,
    description: "DAX expressions, dataflow modeling, and report development",
  },
  {
    name: "Google Analytics",
    icon: "📉",
    level: "Advanced",
    years: 3,
    description: "Web analytics, custom reports, and conversion tracking",
  },
  {
    name: "MySQL",
    icon: "🗄️",
    level: "Advanced",
    years: 4,
    description:
      "Complex queries, stored procedures, and database optimization",
  },
  {
    name: "MS 365",
    icon: "☁️",
    level: "Intermediate",
    years: 3,
    description: "Data management, collaboration tools, and cloud services",
  },
  {
    name: "SQL",
    icon: "💾",
    level: "Expert",
    years: 4,
    description: "Performance optimization, query writing, and database design",
  },
  {
    name: "Quickbooks",
    icon: "💰",
    level: "Intermediate",
    years: 1,
    description: "Financial reporting, reconciliation, and custom exports",
  },
  {
    name: "Automation Tools",
    icon: "⚙️",
    level: "Advanced",
    years: 2,
    description: "Workflow automation with Zapier, Power Automate, and Python",
  },
  {
    name: "Data Mining",
    icon: "⛏️",
    level: "Advanced",
    years: 2,
    description: "Pattern discovery, cluster analysis, and anomaly detection",
  },

  {
    name: "Data Visualization",
    icon: "📊",
    level: "Expert",
    years: 4,
    description:
      "Principles of visual perception, effective charting, storytelling with data",
  },
  {
    name: "Google Sheets",
    icon: "📈",
    level: "Intermediate",
    years: 2,
    description: "Data wrangling, statistical analysis, and deriving insights using tools like Excel, SQL, and Python"
  },

];

// Enhanced project data with more details
const projects = [
  {
    id: 1,
    title: "Retail Sales Analytics Dashboard",
    summary: "This Retail Sales Analytics Dashboard provides real-time insights into a $155 million retail business",
    description:
      "This Retail Sales Analytics Dashboard provides real-time insights into a $155 million retail business, tracking revenue, sales quantity, customer performance, and product trends across various markets. Built using MySQL for backend data storage and management, the dashboard empowers stakeholders with data-driven strategies for maximizing revenue and optimizing product offerings.",
    tools: [ "SQL", "MySQL", "PowerBI", "ETL", "Data Visualization"],
    results: [
      "Enabled 15% increase in monthly sales through insights-driven campaigns",
      " Identify top 5 cities and customers contributing 80% of revenue",
      "Reduced manual reporting time by 12 hours/week via live dashboarding",
    ],
    client: "National Retail Chain",
    duration: "3 months",
    image: project1Image,
    featured: true,
  },
  {
    id: 2,
    title: "Financial Performance Dashboard",
    summary: "This Financial Performance Dashboard provides a comprehensive analysis of revenue, profit margins, and market",
    description:
      "This Financial Performance Dashboard provides a comprehensive analysis of revenue, profit margins, and market contributions for a multi-market retail business. Built using MySQL for data storage and processing, the dashboard enables stakeholders to track financial health, identify trends, and make data-driven decisions. The dashboard includes features such as revenue forecasting, profit margin analysis, and market performance tracking.",
    tools: ["MySQL", "ETL", "SQL Scripts", "PowerBI", "Data Visualization"],
    results: [
      "Decision-making speed improved by 30% (reduced manual reporting)",
      "Forecasting accuracy improved by 25%",
      " Identified 3+ underperforming markets for corrective actions",
      "Increased revenue in top markets by 5% QoQ",
    ],
    client: "E-commerce Platform",
    duration: "2 months",
    image: project2Image,
    featured: true,
  },
  {
    id: 3,
    title: "Cricket Player Performance Dashboard",
    summary: "This Cricket Player Analysis Dashboard provides a deep dive into Power Hitters / Openers participating in a cricket tournament",
    description:
      "This Cricket Player Analysis Dashboard provides a deep dive into Power Hitters / Openers participating in a cricket tournament. It visually compares player performances using advanced metrics such as strike rate, batting average, boundary percentage, and total runs scored. Built using Excel/CSV data sources and visualized in Power BI, this dashboard enables selectors, coaches, and analysts to identify top performers and strategize batting lineups.",
    tools: ["Power BI", "SQL", "Python", "Excel", "Data Visualization", "ETL", "CSV", "DAX", "Power Query"],
    results: [
      "Identified top 3 power hitters based on combined metrics",
      "Improved team selection process with data-driven insights",
      "Reduced analysis time by 50% with automated data processing",
      "Highlighted players with 60%+ boundary rates Differentiated high strike rate but low average vs balanced performers"
    ],
    client: "Financial Services Firm",
    duration: "4 months",
    image: project3Image,
    featured: true,
  },
  {
    id: 4,
    title: "HR Analytics Dashboard: Portfolio Management",
    summary: "his HR Analytics Dashboard provides insights into employee attendance, performance, and attrition rates",
    description:
      "This HR Analytics Dashboard provides insights into employee attendance, work-from-home (WFH) trends, and sick leave (SL) patterns. Built using Excel as the data source, the dashboard helps HR teams monitor workforce productivity, identify absenteeism trends, and optimize workplace policies.",
    tools: ["Excel", "VBA", "SQL", "Data Visualization", "ETL", "CSV"],
    results: [
      "Attendance rate sustained at 94% or higher",
      "Reduced sick leave by 20% through targeted wellness programs",
      "Identified top 5 departments with highest absenteeism for intervention",
      "Increased employee satisfaction by 15% through improved policies",
    ],
    client: "Manufacturing Company",
    duration: "5 months",
    image: project4Image,
    featured: true,
  },
  {
    id: 5,
    title: "Hotel Revenue Performance Dashboard",
    summary: "This Hotel Revenue Analytics Dashboard provides comprehensive insights into a $1.69 billion hospitality business",
    description:
      "This Hotel Revenue Analytics Dashboard provides comprehensive insights into a $1.69 billion hospitality business, tracking key metrics like occupancy rates, RevPAR, ADR, and revenue realization across different booking platforms. Built using MySQL for robust data management, this dashboard enables data-driven decision making for hotel revenue optimization.",
    tools: ["Google Analytics", "Sales Force", "Power Query", "ETL", "Data Visualization"],
    results: [
      "RevPAR growth maintained above 0.2% weekly, Realization rate improved to 72%+ within 6 months",
      "Reduced customer acquisition cost by 25%",
      "Improved campaign targeting accuracy by 40%",
    ],
    client: "Digital Marketing Agency",
    duration: "3 months",
    image: project5Image,
    featured: true,
  },
  {
    id: 6,
    title: "Indus Hospitality Performance Dashboard",
    summary: "This Indus Hospitality Analytics Dashboard delivers actionable insights into a multi-city hospitality chain's performance.",
    description:
      "This Indus Hospitality Analytics Dashboard delivers actionable insights into a multi-city hospitality chain's performance. It tracks key KPIs such as RevPAR, ADR, occupancy rates, and realization percentage, segmented by property, room category, and booking platform. Built on MySQL for scalable data operations, it empowers operations, revenue, and sales teams to make informed decisions.",
    tools: ["R", "MS FABRIC", "Tableau", "Lakehouse"],
    results: [
      " Realization % improved beyond 72% in 6 months",
      "No-show bookings reduced by 5% across properties",
      "Occupancy rate improved to 85%+ across properties",
      "Top 2 platforms contributing 65%+ of total revenue"
    ],
    client: "Healthcare Provider",
    duration: "6 months",
    image: project6Image,
    featured: true,
  },
];

// Enhanced team data with more details
const team = [
  {
    name: "Farhan Ali",
    role: "Lead Data Analyst",
    bio: "Specialized in data visualization and business intelligence with 4+ years of experience. I have worked with clients across various industries to deliver actionable insights and data-driven strategies.",
    expertise: [
      "PowerBI",
      "Python",
      "SQL",
      "Statistical Analysis",
      "Financial Modeling",
      "Data Visualization",
      "Business Intelligence",
      "ETL",
    ],
    education: "Software Engineering, Faculty of Computing and Information Technology, University of Punjab, Pakistan",
    image: "https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg",
    linkedin: "https://www.linkedin.com/in/farhanali10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
  },

  {
    name: "Hafiz Muhammad Ali Saleh",
    role: "Data Engineer",
    bio: "Experienced in building data pipelines and ETL processes. Hafiz has a strong background in SQL and cloud technologies, ensuring data availability and reliability for analytics.",
    expertise: ["ETL", "SQL", "Cloud Technologies", "Data Warehousing", "Python"],
    education: "Bachelor in Data Science, FAST University , Pakistan",
    image: "https://t3.ftcdn.net/jpg/07/24/59/76/360_F_724597608_pmo5BsVumFcFyHJKlASG2Y2KpkkfiYUU.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
  },




];

// Testimonials data
const testimonials = [
  {
    id: 1,
    text: "The DataViz team transformed our messy data into clear insights that drove our business strategy. Their dashboards have become essential tools for our executive team.",
    author: "Jennifer Martinez",
    position: "CMO, Global Retail Inc.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    text: "Working with DataViz Analytics was a game-changer for our marketing department. Their customer segmentation project increased our conversion rates beyond what we thought possible.",
    author: "Michael Chen",
    position: "Marketing Director, TechStart",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    text: "The supply chain optimization project delivered exactly what we needed and more. The team's attention to detail and deep understanding of our industry was impressive.",
    author: "Sarah Williams",
    position: "VP Operations, Manufacturing Solutions",
    rating: 4,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    text: "We've worked with several data analytics firms before, but none have delivered the level of insight and practical solutions that DataViz provided. Highly recommended!",
    author: "David Thompson",
    position: "CEO, E-commerce Platform",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
];

// Case studies data
const caseStudies = [
  {
    id: 1,
    title: "Retail Sales Analytics Dashboard for National Retailer",
    summary:
      "This Retail Sales Analytics Dashboard provides real-time insights into a $155 million retail business, tracking revenue, sales quantity, customer performance, and product trends across various markets. ",
    content: [
      {
        heading: "Challenge",
        text: "Managing and analyzing large volumes of retail sales data for a $155 million business across multiple geographies and product categories. ",
      },
      {
        heading: "Solution",
        text: "Built a real-time Retail Sales Analytics Dashboard using MySQL for backend data management.Implemented optimized JOIN queries to handle 500K+ sales records with sub-500ms response time.",
      },
      {
        heading: "Results",
        text: "Enabled a 15% increase in monthly sales through insights-driven campaigns targeting high-performing markets and customers.",
      },
    ],
    image: project1Image,
  },
  {
    id: 2,
    title: "Financial Services Firm Detects Fraud in Real-Time",
    summary:
      "Implementing machine learning algorithms to protect customers and reduce losses",
    content: [
      {
        heading: "Challenge",
        text: "A mid-sized financial services company was experiencing increasing fraud losses and customer complaints about unauthorized transactions.",
      },
      {
        heading: "Solution",
        text: "We built a real-time fraud detection system using supervised and unsupervised machine learning models that analyze transaction patterns and flag suspicious activity for immediate review.",
      },
      {
        heading: "Results",
        text: "The system achieved 94% accuracy in fraud detection, resulting in a 76% reduction in fraud losses and significantly improved customer satisfaction scores.",
      },
    ],
    image: project2Image,
  },
];

// Services data
const services = [
  {
    id: 1,
    title: "Data Visualization & Dashboards",
    description:
      "Transform complex data into clear, interactive visualizations that drive insights and decision-making. Our custom dashboards bring your most important metrics to life.",
    icon: <BarChart2 className="h-10 w-10 text-cyan-600" />,
    offerings: [
      "Interactive business dashboards",
      "Executive reporting systems",
      "Real-time performance trackers",
      "Custom visualization development",
    ],
  },
  {
    id: 2,
    title: "Predictive Analytics",
    description:
      "Utilize historical data and advanced modeling techniques with tools like Google Sheets, Power BI, Tableau, Excel, Python, DAX, SQL, and integrated data sources to forecast trends, predict sales and demand, assess risks, and analyze customer behavior for better decision-making.",
    icon: <TrendingUp className="h-10 w-10 text-cyan-600" />,
    offerings: [
      "Sales forecasting",
      "Demand prediction",
      "Risk assessment models",
      "Customer behavior forecasting",
    ],
  },
  {
    id: 3,
    title: "Business Intelligence Solutions",
    description:
      "Integrate data from multiple sources into cohesive intelligence systems that provide actionable insights and support strategic decision-making.",
    icon: <FileText className="h-10 w-10 text-cyan-600" />,
    offerings: [
      "Data warehouse development",
      "KPI tracking systems",
      "Competitive intelligence",
      "Market analysis frameworks",
    ],
  },
  {
    id: 4,
    title: "Data Strategy Consulting",
    description:
      "Develop comprehensive data strategies that align with your business objectives and create roadmaps for effective data utilization and governance.",
    icon: <AlertTriangle className="h-10 w-10 text-cyan-600" />,
    offerings: [
      "Data maturity assessment",
      "Data governance frameworks",
      "Analytics implementation planning",
      "Team capability development",
    ],
  },
];

export default function DataAnalystPortfolio() {
  const { toast } = useToast();
  const isMobile = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("featured");
  const [activeCaseStudy, setActiveCaseStudy] = useState(1);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [isVisible, setIsVisible] = useState({
    skills: false,
    projects: false,
    services: false,
    caseStudies: false,
    testimonials: false,
    about: false,
    contact: false,
  });
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const sectionRefs = {
    skills: useRef(null),
    projects: useRef(null),
    services: useRef(null),
    caseStudies: useRef(null),
    testimonials: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsNavSticky(window.scrollY > 50);

      // Check if sections are visible
      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isInView =
            rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
          setIsVisible((prev) => ({ ...prev, [key]: isInView }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 3 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Testimonial carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Filter projects based on active tab
  const filteredProjects =
    activeTab === "featured"
      ? projects.filter((project) => project.featured)
      : projects;

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    e.target.reset();
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header
        className={cn(
          "w-full py-4 transition-all duration-300 z-50",
          isNavSticky ? "fixed top-0 bg-white shadow-md" : "relative"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart2 className="h-8 w-8 text-cyan-600" />
              <span className="text-xl font-bold">DataViz Analytics</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium hover:text-cyan-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium hover:text-cyan-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="text-sm font-medium hover:text-cyan-600 transition-colors"
              >
                Case Studies
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-sm font-medium hover:text-cyan-600 transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-sm font-medium hover:text-cyan-600 transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700 transition-colors"
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-16 mobile-menu">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-6">
            <button
              onClick={() => scrollToSection("services")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium py-2 border-b border-gray-100"
            >
              Contact
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-50 to-cyan-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Transforming Data into{" "}
                <span className="text-cyan-600">Strategic Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                We help businesses unlock the power of their data through
                advanced analytics, visualization, and predictive modeling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  Get Started
                </Button>
                <Button
                  onClick={() => scrollToSection("case-studies")}
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                >
                  View Case Studies
                </Button>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: activeSlide === 0 ? 1 : 0 }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={areaChartData}>
                    <defs>
                      <linearGradient
                        id="colorCurrent"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#0891b2"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#0891b2"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorPrevious"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#64748b"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#64748b"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="current"
                      stroke="#0891b2"
                      fillOpacity={1}
                      fill="url(#colorCurrent)"
                    />
                    <Area
                      type="monotone"
                      dataKey="previous"
                      stroke="#64748b"
                      fillOpacity={1}
                      fill="url(#colorPrevious)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: activeSlide === 1 ? 1 : 0 }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#0891b2" />
                    <Bar dataKey="target" fill="#64748b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: activeSlide === 2 ? 1 : 0 }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#0891b2"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="average"
                      stroke="#64748b"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ opacity: activeSlide === 3 ? 1 : 0 }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={90} data={radarChartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                      name="Current Skills"
                      dataKey="A"
                      stroke="#0891b2"
                      fill="#0891b2"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="Target Skills"
                      dataKey="B"
                      stroke="#64748b"
                      fill="#64748b"
                      fillOpacity={0.6}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      activeSlide === index ? "bg-cyan-600" : "bg-gray-300"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={sectionRefs.services}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive data solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className={cn(
                  "transition-all duration-300 h-full",
                  isVisible.services
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.offerings.map((offering, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={sectionRefs.skills}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized skills and technologies we leverage to deliver
              exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className={cn(
                  "transition-all duration-300 transform",
                  isVisible.skills
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                  `transition-delay-${(index % 8) * 100}`
                )}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h3 className="font-bold">{skill.name}</h3>
                    </div>
                    <span
                      className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        skill.level === "Expert"
                          ? "bg-green-100 text-green-800"
                          : skill.level === "Advanced"
                          ? "bg-cyan-100 text-cyan-800"
                          : skill.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      )}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {skill.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>
                      {skill.years} {skill.years === 1 ? "year" : "years"}{" "}
                      experience
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={sectionRefs.projects}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful data analytics projects
            </p>

            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant={activeTab === "featured" ? "default" : "outline"}
                onClick={() => setActiveTab("featured")}
                className={activeTab === "featured" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
              >
                Featured Projects
              </Button>
              <Button
                variant={activeTab === "all" ? "default" : "outline"}
                onClick={() => setActiveTab("all")}
                className={activeTab === "all" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
              >
                All Projects
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className={cn(
                  "overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg",
                  isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                      backgroundPosition: "center"
                  }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm">{project.summary}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tools.slice(0, 3).map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{project.client}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
              <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
                  <h3 className="text-xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="aspect-video relative overflow-hidden rounded-lg mb-6">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${selectedProject.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize:"contain",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold mb-2">
                        Project Overview
                      </h4>
                      <p className="text-gray-700 mb-6">
                        {selectedProject.description}
                      </p>

                      <h4 className="text-lg font-semibold mb-2">Results</h4>
                      <ul className="space-y-2 mb-6">
                        {selectedProject.results.map((result, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-1">
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-semibold mb-4">
                            Project Details
                          </h4>

                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-gray-500">Client</p>
                              <p className="font-medium">
                                {selectedProject.client}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500">Duration</p>
                              <p className="font-medium">
                                {selectedProject.duration}
                              </p>
                            </div>

                            <div>
                              <p className="text-sm text-gray-500">
                                Technologies Used
                              </p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {selectedProject.tools.map((tool, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      { /* Case Studies Section */ }
        <section
          id="case-studies"
          ref={sectionRefs.caseStudies}
          className="py-16 md:py-24 bg-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In-depth looks at how our data solutions solved real business
            challenges
          </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            className={cn(
              "transition-all duration-500",
              isVisible.caseStudies
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
            )}
          >
            <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
              <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${
                caseStudies[activeCaseStudy - 1].image
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              
            }}
              />
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-500",
              isVisible.caseStudies
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10"
            )}
          >
            <div className="flex space-x-4 mb-6">
              {caseStudies.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveCaseStudy(study.id)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                activeCaseStudy === study.id
              ? "bg-cyan-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
              )}
            >
              Case Study {study.id}
            </button>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-2">
              {caseStudies[activeCaseStudy - 1].title}
            </h3>
            <p className="text-gray-600 mb-6">
              {caseStudies[activeCaseStudy - 1].summary}
            </p>

            <div className="space-y-6">
              {caseStudies[activeCaseStudy - 1].content.map(
            (section, index) => (
              <div key={index}>
                <h4 className="text-lg font-semibold mb-2">
              {section.heading}
                </h4>
                <p className="text-gray-700">{section.text}</p>
              </div>
            )
              )}
            </div>

            {/* <Button className="mt-8 bg-cyan-600 hover:bg-cyan-700">
              Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
      <section id="team" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the data experts behind our successful projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-cyan-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {member.bio}
                  </p>

                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">Expertise</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 px-2 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.expertise.length > 3 && (
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                          +{member.expertise.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    <Award className="h-3 w-3 inline mr-1" />
                    {member.education}
                  </div>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 hover:text-cyan-700 text-sm flex items-center"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn Profile
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        ref={sectionRefs.testimonials}
        className="py-16 md:py-24 bg-gradient-to-r from-cyan-50 to-cyan-100"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                <div
                  className="transition-transform duration-500 ease-in-out flex"
                  style={{
                    transform: `translateX(-${testimonialIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <Card
                        className={cn(
                          "bg-white p-8 shadow-lg transition-all duration-300",
                          isVisible.testimonials
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95"
                        )}
                      >
                        <div className="flex items-center mb-6">
                          <div className="mr-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                              <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                  backgroundImage: `url(${testimonial.image})`,
                                }}
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">
                              {testimonial.author}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {testimonial.position}
                            </p>
                            <div className="flex mt-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "h-4 w-4",
                                    i < testimonial.rating
                                      ? "text-yellow-400 fill-yellow-400"
                                      : "text-gray-300"
                                  )}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 italic">
                          "{testimonial.text}"
                        </p>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() =>
                  setTestimonialIndex((prev) => Math.max(0, prev - 1))
                }
                disabled={testimonialIndex === 0}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() =>
                  setTestimonialIndex((prev) =>
                    Math.min(testimonials.length - 1, prev + 1)
                  )
                }
                disabled={testimonialIndex === testimonials.length - 1}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    testimonialIndex === index ? "bg-cyan-600" : "bg-gray-300"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={sectionRefs.contact}
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className={cn(
                "transition-all duration-500",
                isVisible.contact
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to transform your data into actionable insights? Contact
                us today to discuss your project.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email Us</h3>
                    <p className="text-gray-600">farhanali02100@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cyan-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Call Us</h3>
                    <p className="text-gray-600">+92-301-6337706</p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Data Street, Analytics City, AC 12345
                    </p>
                  </div>
                </div> */}

                <div className="flex space-x-4 mt-8">
                  <a
                    href="https://www.linkedin.com/in/farhanali10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-gray-700" />
                  </a>
                  {/* <a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Twitter className="h-5 w-5 text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <GitHub className="h-5 w-5 text-gray-700" />
                  </a> */}
                </div>
              </div>
            </div>

            <div
              className={cn(
                "transition-all duration-500",
                isVisible.contact
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyan-600 hover:bg-cyan-700"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BarChart2 className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold">DataViz Analytics</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transforming complex data into clear, actionable insights for
                businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/farhanali10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                {/* <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <GitHub className="h-5 w-5" />
                </a> */}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Data Visualization
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Predictive Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Business Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Data Strategy Consulting
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("case-studies")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("team")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                  <span className="text-gray-400">
                    farhanali02100@gmail.com
                  </span>
                </li>
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                  <span className="text-gray-400">+92-301-6337706</span>
                </li>
                {/* <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                  <span className="text-gray-400">
                    123 Data Street, Analytics City, AC 12345
                  </span>
                </li> */}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DataViz Analytics. All rights
              reserved.
            </p>
            {/* <div className="flex space-x-6"> */}
              {/* <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a> */}
            {/* </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
