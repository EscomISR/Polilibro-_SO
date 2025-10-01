import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { UnitsSection } from "@/components/UnitsSection";
import { Modal } from "@/components/Modal";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleSectionChange = (section: string) => {
    if (section === "unidades") {
      setActiveSection("units");
    } else {
      setActiveSection(section);
    }
  };

  const handleCardClick = (type: string) => {
    if (type === "unidades") {
      setActiveSection("units");
    } else {
      setModalType(type);
      setModalOpen(true);
    }
  };

  const handleUnitClick = (unitId: number) => {
    // TODO: Implement unit detail view
    console.log(`Unit ${unitId} clicked`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "units":
        return <UnitsSection onUnitClick={handleUnitClick} />;
      case "encuadre":
      case "introduccion":
        return <HeroSection onCardClick={handleCardClick} />;
      default:
        return <HeroSection onCardClick={handleCardClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      {renderContent()}
      <Modal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </div>
  );
};

export default Index;
