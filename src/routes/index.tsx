import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { Profile } from "@/components/site/Profile";
import { Compliance } from "@/components/site/Compliance";
import { Footer } from "@/components/site/Footer";

const title = "JAM-Fortune Financial Services Ltd | Micro-Finance Nigeria";
const description =
  "Federally incorporated Nigerian micro-finance institution since 2008. Salary loans, business and artisan finance, appliance schemes and wealth management.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Products />
        <Profile />
        <Compliance />
      </main>
      <Footer />
    </div>
  );
}
