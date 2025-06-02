import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const cards = [
    {
      title: "Core Views on AI Safety",
      bgColor: "u-bg-oat",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Anthropic's Responsible Scaling Policy",
      bgColor: "u-bg-cactus",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Anthropic Academy: Learn to build with Claude",
      bgColor: "u-bg-heather",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
      link: "#"
    }
  ];

  return (
    <section className="py-16">
      <div className="u-container">
        <div className="u-vflex-stretch-top u-gap-xl">
          <div className="w-full h-px bg-border"></div>
          
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
            {cards.map((card, index) => (
              <a key={index} href={card.link} className="group block">
                <div className={`${card.bgColor} rounded-lg p-6 h-80 flex flex-col transition-transform group-hover:scale-105`}>
                  <div className="u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center mb-6">
                    <img 
                      src={card.image} 
                      alt={card.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="u-display-s text-black">{card.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;