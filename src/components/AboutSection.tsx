const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="u-container">
        <div className="u-vflex-stretch-top u-gap-xl">
          <div className="divider-inner"></div>
          
          <div className="u-grid-desktop">
            <div className="u-column-4">
              <h2 className="u-display-m u-max-width-20ch">
                At Anthropic, we build AI to serve humanity's long-term well-being.
              </h2>
            </div>
            
            <div className="u-column-7">
              <div className="u-rich-text u-mb-8">
                <p className="mb-6">
                  While no one can foresee every outcome AI will have on society, we do know that designing powerful technologies requires both bold steps forward and intentional pauses to consider the effects.
                </p>
                <p>
                  That's why we focus on building tools with human benefit at their foundation, like Claude. Through our daily research, policy work, and product design, we aim to show what responsible AI development looks like in practice.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#" className="block">
              <div className="launch-hero-card u-bg-oat">
                <div className="u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center mb-6">
                  <img 
                    src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd686b6d20bb1cd568c_Hands-Build.svg" 
                    alt="Core Views on AI Safety"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="u-display-s text-black">Core Views on AI Safety</h3>
                </div>
              </div>
            </a>

            <a href="#" className="block">
              <div className="launch-hero-card u-bg-cactus">
                <div className="u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center mb-6">
                  <img 
                    src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd72914c76f710d86fc_Hands-Stack.svg" 
                    alt="Anthropic's Responsible Scaling Policy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="u-display-s text-black">Anthropic's Responsible Scaling Policy</h3>
                </div>
              </div>
            </a>

            <a href="#" className="block">
              <div className="launch-hero-card u-bg-heather">
                <div className="u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center mb-6">
                  <img 
                    src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7b8d86b6d20bb1cd1292_Objects-Puzzle.svg" 
                    alt="Anthropic Academy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <h3 className="u-display-s text-black">Anthropic Academy:<br/>Learn to build with Claude</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;