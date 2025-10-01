import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Users, 
  Target, 
  FileText, 
  TrendingUp,
  Lightbulb,
  CheckCircle,
  BarChart3 
} from "lucide-react";

interface HeroSectionProps {
  onCardClick: (type: string) => void;
}

export const HeroSection = ({ onCardClick }: HeroSectionProps) => {
  const quickAccessCards = [
    {
      id: "bienvenida",
      title: "Bienvenida",
      description: "Introducción al recurso didáctico digital",
      icon: Users,
      gradient: "bg-gradient-unit-1",
      color: "text-blue-600"
    },
    {
      id: "metodologia",
      title: "Metodología", 
      description: "Estrategia de aprendizaje orientada a proyectos",
      icon: Target,
      gradient: "bg-gradient-unit-3",
      color: "text-green-600"
    },
    {
      id: "fuentes",
      title: "Fuentes de Consulta",
      description: "Referencias bibliográficas y recursos",
      icon: BookOpen,
      gradient: "bg-gradient-unit-2",
      color: "text-orange-600"
    },
    {
      id: "programa",
      title: "Programa de la Unidad",
      description: "Programa sintético de aprendizaje",
      icon: FileText,
      gradient: "bg-gradient-unit-4",
      color: "text-purple-600"
    }
  ];

  const stats = [
    { number: "6", label: "Unidades Temáticas", icon: BookOpen },
    { number: "15+", label: "Actividades", icon: CheckCircle },
    { number: "40+", label: "Recursos", icon: Lightbulb },
    { number: "100%", label: "Digital", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full bg-white/5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Hero Content */}
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Recurso Didáctico
            </span>
            <br />
            <span className="text-2xl md:text-4xl font-medium">
              Digital (POLILIBRO)
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Unidad de Aprendizaje de <strong>Administración de Proyectos</strong>
          </p>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            Escuela Superior de Cómputo - Instituto Politécnico Nacional
          </p>
          
          {/* Authors */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span>Elaborado por:</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <span>Josefina Hernández Jaime</span>
              <span className="hidden md:inline">•</span>
              <span>Yasmín Ivette Jiménez Galán</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
                <CardContent className="p-4 text-center">
                  <IconComponent className="h-6 w-6 mx-auto mb-2 opacity-80" />
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-xs opacity-75">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccessCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Card 
                key={card.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 shadow-card hover:shadow-card-hover bg-white/95 backdrop-blur-sm border-0"
                onClick={() => onCardClick(card.id)}
              >
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 ${card.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription className="text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-3"
            onClick={() => onCardClick('unidades')}
          >
            <BarChart3 className="mr-2 h-5 w-5" />
            Explorar Unidades de Aprendizaje
          </Button>
        </div>
      </div>
    </div>
  );
};