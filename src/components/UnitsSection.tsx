import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Search, 
  Wrench, 
  Users, 
  DollarSign, 
  BarChart3,
  ArrowRight,
  Clock,
  BookOpen
} from "lucide-react";

interface UnitsSectionProps {
  onUnitClick: (unitId: number) => void;
}

export const UnitsSection = ({ onUnitClick }: UnitsSectionProps) => {
  const units = [
    {
      id: 1,
      title: "Unidad I",
      subtitle: "Elementos conceptuales y preparación de la administración y evaluación de proyectos",
      description: "Fundamentos teóricos y conceptos básicos para la gestión de proyectos",
      gradient: "bg-gradient-unit-1",
      icon: BookOpen,
      duration: "2 semanas",
      topics: ["Conceptos básicos", "Metodologías", "Preparación"]
    },
    {
      id: 2,
      title: "Unidad II", 
      subtitle: "Estudio de mercado",
      description: "Análisis del mercado objetivo y validación de oportunidades de negocio",
      gradient: "bg-gradient-unit-2", 
      icon: Search,
      duration: "3 semanas",
      topics: ["Investigación", "Análisis", "Segmentación"]
    },
    {
      id: 3,
      title: "Unidad III",
      subtitle: "Estudio técnico", 
      description: "Análisis de la viabilidad técnica y operacional del proyecto",
      gradient: "bg-gradient-unit-3",
      icon: Wrench,
      duration: "3 semanas", 
      topics: ["Viabilidad técnica", "Procesos", "Recursos"]
    },
    {
      id: 4,
      title: "Unidad IV",
      subtitle: "Estudio administrativo y de organización del proyecto",
      description: "Estructura organizacional y aspectos administrativos del proyecto",
      gradient: "bg-gradient-unit-4",
      icon: Users,
      duration: "2 semanas",
      topics: ["Organización", "Gestión", "Recursos humanos"]
    },
    {
      id: 5,
      title: "Unidad V",
      subtitle: "Estudio financiero",
      description: "Análisis económico-financiero y evaluación de la inversión",
      gradient: "bg-gradient-unit-5", 
      icon: DollarSign,
      duration: "3 semanas",
      topics: ["Inversión", "Costos", "Rentabilidad"]
    },
    {
      id: 6,
      title: "Unidad VI",
      subtitle: "Evaluación financiera e impacto social y ecológico del proyecto",
      description: "Evaluación integral del proyecto considerando aspectos sociales y ambientales",
      gradient: "bg-gradient-unit-6",
      icon: BarChart3,
      duration: "3 semanas",
      topics: ["Evaluación", "Impacto social", "Sostenibilidad"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Unidades de Aprendizaje
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seis unidades temáticas diseñadas para desarrollar competencias integrales 
            en la administración y evaluación de proyectos de inversión
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {units.map((unit) => {
            const IconComponent = unit.icon;
            return (
              <Card 
                key={unit.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 shadow-card hover:shadow-card-hover bg-white border-0 overflow-hidden"
                onClick={() => onUnitClick(unit.id)}
              >
                {/* Card Header with Gradient */}
                <div className={`${unit.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <IconComponent className="h-8 w-8" />
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        {unit.duration}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{unit.title}</h3>
                    <h4 className="text-lg font-medium opacity-90 leading-tight">
                      {unit.subtitle}
                    </h4>
                  </div>
                </div>

                {/* Card Content */}
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {unit.description}
                  </p>
                  
                  {/* Topics */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Temas principales:</p>
                    <div className="flex flex-wrap gap-2">
                      {unit.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {unit.duration}
                    </div>
                    <div className="flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                      Explorar
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Progreso orientado a proyectos reales</span>
          </div>
        </div>
      </div>
    </div>
  );
};