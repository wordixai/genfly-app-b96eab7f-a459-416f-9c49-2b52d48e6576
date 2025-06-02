import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  const cards = [
    {
      title: "Claude 4",
      bgColor: "u-bg-clay",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      summary: "Introducing the next generation of Claude models: Opus 4 and Sonnet 4",
      link: "#"
    },
    {
      title: "API capabilities",
      bgColor: "u-bg-oat",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=300&fit=crop",
      summary: "Four new capabilities to help developers build AI agents",
      link: "#"
    },
    {
      title: "Claude Code",
      bgColor: "u-bg-coral",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      summary: "Two powerful AI products — Claude Code and Claude apps, included in the Max plan",
      link: "#"
    },
    {
      title: "Research",
      bgColor: "u-bg-clay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      summary: "Gather comprehensive insights from hundreds of sources, in minutes",
      link: "#"
    },
    {
      title: "Integrations",
      bgColor: "u-bg-oat",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      summary: "Integrate Claude with external tools and apps for expert assistance",
      link: "#"
    },
    {
      title: "Google Workspace",
      bgColor: "u-bg-coral",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
      summary: "Connect your Gmail, Calendar, and Docs for deeper insights",
      link: "#"
    },
    {
      title: "Web search",
      bgColor: "u-bg-clay",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      summary: "Search the internet for more up-to-date and relevant responses",
      link: "#"
    }
  ];

  return (
    <section className="py-16">
      <div className="u-container">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <p className="u-display-xxl mb-4 font-light">Introducing the</p>
          <h1 className="u-display-xl mb-8 font-light">Claude 4 model family</h1>
        </div>

        {/* Explore Section */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4 text-center">
            <p className="u-detail-m">Explore the latest updates</p>
            <ArrowRight size={24} />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {cards.map((card, index) => (
            <a key={index} href={card.link} className="group block">
              <div className={`${card.bgColor} rounded-lg p-6 h-80 flex flex-col transition-transform group-hover:scale-105`}>
                <h3 className="u-font-display-serif u-display-m u-alignment-center mb-6 text-black">
                  {card.title}
                </h3>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="mb-4">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-32 object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <p className="u-paragraph-m text-black mb-4">{card.summary}</p>
                    <p className="u-detail-m text-black">Read the announcement</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="u-grid-desktop">
          <div className="u-column-8">
            <div className="u-vflex-left-top">
              <p className="u-display-xxl mb-6 font-light">Claude 4 model family</p>
              <p className="u-paragraph-s u-rich-text mb-8">
                Meet <a href="#">Claude Opus 4</a> and <a href="#">Claude Sonnet 4</a>, our most powerful models for coding, researching, and writing
              </p>
              <div className="u-btn-group">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                  Try Claude
                </button>
                <button className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/5 transition-colors">
                  Build with Claude
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;