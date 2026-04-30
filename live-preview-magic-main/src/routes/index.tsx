import { createFileRoute } from "@tanstack/react-router";
import { ProposalCover } from "@/components/site/ProposalCover";
import { ScrollScenesIntro } from "@/components/site/ScrollScenesIntro";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Concept } from "@/components/site/Concept";
import { Access } from "@/components/site/Benefits";
import { Programming } from "@/components/site/Programming";
import { Quote } from "@/components/site/Quote";
import { Inquire } from "@/components/site/Register";
import { FAQ } from "@/components/site/FAQ";
import { FinalInvitation } from "@/components/site/FinalInvitation";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-charcoal antialiased overflow-x-hidden">
      <ProposalCover />
      <ScrollScenesIntro />
      <div id="site-start" />
      <Nav />
      <Hero />
      <Concept />
      <Access />
      <Programming />
      <Quote />
      <Inquire />
      <FAQ />
      <FinalInvitation />
      <Footer />
    </main>
  );
}
