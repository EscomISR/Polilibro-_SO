import { BookOpen, GraduationCap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const navigationItems = [
    { id: "encuadre", label: "Encuadre", icon: BookOpen },
    { id: "introduccion", label: "Introducción", icon: GraduationCap },
    { id: "unidades", label: "Unidades", icon: Menu }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-primary">Recurso Didáctico</h1>
            <p className="text-xs text-muted-foreground">ESCOM - Administración de Proyectos</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto items-center space-x-1">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                onClick={() => onSectionChange?.(item.id)}
                className="flex items-center space-x-2 transition-all duration-300"
              >
                <IconComponent className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            );
          })}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 pt-6">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
                    <GraduationCap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-sm">Recurso Didáctico</h2>
                    <p className="text-xs text-muted-foreground">ESCOM</p>
                  </div>
                </div>
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeSection === item.id ? "default" : "ghost"}
                      onClick={() => onSectionChange?.(item.id)}
                      className="flex items-center justify-start space-x-3 w-full"
                    >
                      <IconComponent className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};