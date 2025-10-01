import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Users, 
  Target, 
  BookOpen, 
  FileText,
  GraduationCap,
  CheckCircle,
  Lightbulb,
  ArrowRight
} from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

export const Modal = ({ isOpen, onClose, type }: ModalProps) => {
  const getModalContent = () => {
    switch (type) {
      case "bienvenida":
        return {
          title: "Bienvenida",
          icon: Users,
          gradient: "bg-gradient-unit-1",
          content: (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-unit-1 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Estimado y estimada estudiante:
                </h3>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  Recibe la más cordial bienvenida a este <strong>recurso didáctico digital (RDD)</strong> de la 
                  Unidad de Aprendizaje (UA) de <strong>Administración de Proyectos</strong> que se imparte en la 
                  Escuela Superior de Cómputo del Instituto Politécnico Nacional.
                </p>
                
                <p>
                  Este RDD fue construido con el propósito de promover el aprendizaje autónomo, así como de 
                  facilitar, enriquecer y fortalecer los procesos de enseñanza-aprendizaje de la UA 
                  en cuestión en la modalidad escolarizada.
                </p>
                
                <p>
                  Esperamos que las próximas semanas sean enriquecedoras de experiencias de 
                  aprendizaje, para lo cual es indispensable tener en cuenta algunos elementos 
                  clave tales como: el compromiso e interacción de los actores (participantes y 
                  facilitadores del aprendizaje), la conformación de un gran equipo de trabajo 
                  colaborativo y la realización de las actividades de aprendizaje de acuerdo con las 
                  especificaciones proporcionadas y en los tiempos establecidos.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <p className="text-blue-800 font-medium">
                    Nuestra intención es que disfrutes esta experiencia educativa. 
                    ¡Te deseamos el mayor de los éxitos!
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    Para cualquier duda o comentario, en relación a este material, puedes contactarnos en:
                  </p>
                  <div className="mt-2 space-y-1 text-sm">
                    <div>• johernandezja@ipn.mx</div>
                    <div>• yjimenezg@ipn.mx</div>
                  </div>
                </div>
              </div>
            </div>
          )
        };

      case "metodologia":
        return {
          title: "Metodología",
          icon: Target,
          gradient: "bg-gradient-unit-3",
          content: (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-unit-3 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  El propósito de la Unidad de Aprendizaje (UA) <strong>Administración de Proyectos</strong> es: 
                  formula el estudio mercadológico, técnico y financiero de un proyecto de 
                  inversión, con base en la metodología de generación y evaluación de proyectos.
                </p>
                
                <p>
                  Para lograr el propósito planteado, la presente UA se abordará a partir de la 
                  estrategia de aprendizaje orientada a proyectos así como del método heurístico.
                </p>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">
                    Las unidades temáticas que conforman esta UA son:
                  </h4>
                  
                  <div className="space-y-3">
                    {[
                      "I. Elementos conceptuales y preparación de la administración y evaluación de proyectos",
                      "II. Estudio de mercado", 
                      "III. Estudio técnico",
                      "IV. Estudio administrativo y de organización del proyecto",
                      "V. Estudio financiero",
                      "VI. Evaluación financiera e impacto social y ecológico del proyecto"
                    ].map((unit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-green-700">{unit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p>
                  Con el fin de obtener mejores resultados en cuanto a tu autoaprendizaje, te 
                  recomendamos estudiar cada una de las unidades temáticas en la secuencia en 
                  que aparecen en este RDD.
                </p>
              </div>
            </div>
          )
        };

      case "fuentes":
        return {
          title: "Fuentes de Consulta",
          icon: BookOpen,
          gradient: "bg-gradient-unit-2",
          content: (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-unit-2 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">Referencias Bibliográficas</h4>
                
                <div className="space-y-4 text-sm">
                  {[
                    {
                      author: "ABM en la red",
                      year: "(23 de abril de 2013)",
                      title: "Plan de negocio",
                      source: "Recuperado de https://www.youtube.com/watch?v=xwBfAEMLpV4"
                    },
                    {
                      author: "Angulo, L.",
                      year: "(2016)",
                      title: "Proyectos Formulación y evaluación",
                      source: "México: Alfaomega."
                    },
                    {
                      author: "Araujo, D.",
                      year: "(2012)",
                      title: "Proyectos de inversión, análisis, formulación y evaluación práctica",
                      source: "México: Trillas."
                    },
                    {
                      author: "Baca, G.",
                      year: "(2006)",
                      title: "Evaluación de proyectos",
                      source: "México: Mc Graw Hill, 5ta. Edición."
                    },
                    {
                      author: "Banco Central de Paraguay",
                      year: "(20 de marzo de 2015)",
                      title: "Qué es un presupuesto y cómo se elabora",
                      source: "Recuperado de https://www.youtube.com/watch?v=urfwMXPDJVo"
                    }
                  ].map((ref, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                      <div className="space-y-1">
                        <div className="font-medium text-gray-800">
                          {ref.author} {ref.year}. <em>{ref.title}</em>
                        </div>
                        <div className="text-gray-600">{ref.source}</div>
                      </div>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div className="text-orange-800">
                      <p className="font-medium">Recursos adicionales</p>
                      <p className="text-sm">
                        Además de estas referencias, encontrarás materiales complementarios 
                        y recursos digitales en cada unidad de aprendizaje.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        };

      case "programa":
        return {
          title: "Programa de la Unidad de Aprendizaje",
          icon: FileText,
          gradient: "bg-gradient-unit-4",
          content: (
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-unit-4 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-6 bg-purple-50 border-purple-200">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-purple-600">IPN</Badge>
                      <span className="font-semibold text-purple-800">Instituto Politécnico Nacional</span>
                    </div>
                    <div className="text-purple-700">
                      <p><strong>Secretaría Académica</strong></p>
                      <p><strong>Dirección de Educación Superior</strong></p>
                      <p className="mt-2 text-lg font-semibold">PROGRAMA SINTÉTICO</p>
                    </div>
                  </div>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <Card className="p-4">
                    <div className="space-y-2">
                      <div><strong>Unidad Académica:</strong> Escuela Superior de Cómputo</div>
                      <div><strong>Programa Académico:</strong> Ingeniería en Sistemas Computacionales</div>
                      <div><strong>Unidad de Aprendizaje:</strong> Administración de Proyectos</div>
                      <div><strong>Nivel:</strong> III</div>
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <div className="space-y-2">
                      <div><strong>Modalidad:</strong> Escolarizada</div>
                      <div><strong>Tipo:</strong> Teórico-Práctica</div>
                      <div><strong>Vigencia:</strong> 2020</div>
                      <div><strong>Créditos:</strong> 6.75</div>
                    </div>
                  </Card>
                </div>
                
                <Card className="p-6 border-purple-200">
                  <h4 className="text-lg font-semibold text-purple-800 mb-3">
                    Propósito de la Unidad de Aprendizaje
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Formula el estudio mercadológico, técnico y financiero de un proyecto de 
                    inversión, con base en la metodología de generación y evaluación de proyectos.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Orientación Didáctica
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La presente unidad se abordará a partir de la estrategia de aprendizaje orientada a proyectos, 
                    el profesor aplicará el método heurístico, con los cuales se llevarán a cabo las actividades de aprendizaje.
                  </p>
                  
                  <div className="flex items-center space-x-2 text-purple-600">
                    <ArrowRight className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      Ver programa completo en el documento oficial
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          )
        };

      default:
        return {
          title: "Contenido",
          icon: FileText,
          gradient: "bg-gradient-unit-1",
          content: <div>Contenido no encontrado</div>
        };
    }
  };

  const modalContent = getModalContent();
  const IconComponent = modalContent.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-3 text-2xl">
            <div className={`w-10 h-10 ${modalContent.gradient} rounded-lg flex items-center justify-center`}>
              <IconComponent className="h-6 w-6 text-white" />
            </div>
            <span>{modalContent.title}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-6">
          {modalContent.content}
        </div>
        
        <div className="flex justify-end mt-8 pt-4 border-t">
          <Button onClick={onClose} variant="outline">
            <X className="h-4 w-4 mr-2" />
            Cerrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};