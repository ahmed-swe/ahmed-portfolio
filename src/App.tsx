import { Hero } from './components/Hero';
import { AuthorityFilter } from './components/AuthorityFilter';
import { ServicesAsSolutions } from './components/ServicesAsSolutions';
import { ProofSection } from './components/ProofSection';
import { ProcessPipeline } from './components/ProcessPipeline';
import { TechStack } from './components/TechStack';
import { PersonalSection } from './components/PersonalSection';
import { FinalCTA } from './components/FinalCTA';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';

export default function App() {
  return (
    <div className="bg-[#0F172A] min-h-screen text-white">
      <CustomCursor />
      <Header />
      <Hero />
      <AuthorityFilter />
      <ServicesAsSolutions />
      <ProofSection />
      <ProcessPipeline />
      <TechStack />
      <PersonalSection />
      <FinalCTA />
    </div>
  );
}