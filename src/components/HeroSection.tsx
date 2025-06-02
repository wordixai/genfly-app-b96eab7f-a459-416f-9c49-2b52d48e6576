import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="u-container">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <p className="u-display-xxl mb-4 font-light">Introducing the</p>
          <h1 className="u-display-xl mb-8 font-light">Claude 4 model family</h1>
        </div>

        {/* Explore Section */}
        <div className="flex items-center justify-center mb-12">
          <div className="launch-hero-explore">
            <p className="u-detail-m">Explore the latest updates</p>
            <div className="launch-hero-explore-icon">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 overflow-x-auto">
          <a href="#" className="block">
            <div className="launch-hero-card u-bg-clay">
              <p className="u-font-display-serif u-display-m u-alignment-center mb-6">Claude 4</p>
              <div className="launch-hero-card-info">
                <div className="mb-4">
                  <img 
                    src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/682f42763b573855adea47ef_Claude-4-hero.svg" 
                    alt="Claude 4"
                    className="w-full h-32 object-contain"
                  />
                </div>
                <div>
                  <p className="u-paragraph-m text-black mb-4">Introducing the next generation of Claude models: Opus 4 and Sonnet 4</p>
                  <p className="launch-hero-read-more">Read the announcement</p>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="block">
            <div className="launch-hero-card u-bg-oat">
              <p className="u-font-display-serif u-display-m u-alignment-center mb-6">API capabilities</p>
              <div className="launch-hero-card-info">
                <div className="mb-4">
                  <img 
                    src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/682e9ec60f57e3bb319199f4_Property%201%3DVariant2.svg" 
                    alt="API capabilities"
                    className="w-full h-32 object-contain"
                  />
                </div>
                <div>
                  <p className="u-paragraph-m text-black mb-4">Four new capabilities to help developers build AI agents</p>
                  <p className="launch-hero-read-more">Read the announcement</p>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="block">
            <div className="launch-hero-card u-bg-coral">
              <p className="u-font-display-serif u-display-m u-alignment-center mb-6">Claude<br/>Code</p>
              <div className="launch-hero-card-info">
                <div className="mb-4">
                  <img 
                    src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd7ed0a04645bd3c2fd_Hands-Type.svg" 
                    alt="Claude Code"
                    className="w-full h-32 object-contain"
                  />
                </div>
                <div>
                  <p className="u-paragraph-m text-black mb-4">Two powerful AI products — Claude Code and Claude apps, included in the Max plan</p>
                  <p className="launch-hero-read-more">Learn more</p>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="block">
            <div className="launch-hero-card u-bg-clay">
              <p className="u-font-display-serif u-display-m u-alignment-center mb-6">Research</p>
              <div className="launch-hero-card-info">
                <div className="mb-4">
                  <img 
                    src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67d2158c590b5c5fb0248eb5_Hands-Tree.svg" 
                    alt="Research"
                    className="w-full h-32 object-contain"
                  />
                </div>
                <div>
                  <p className="u-paragraph-m text-black mb-4">Gather comprehensive insights from hundreds of sources, in minutes</p>
                  <p className="launch-hero-read-more">Read the announcement</p>
                </div>
              </div>
            </div>
          </a>
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