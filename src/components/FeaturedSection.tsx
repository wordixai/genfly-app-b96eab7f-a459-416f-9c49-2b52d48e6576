const FeaturedSection = () => {
  const articles = [
    {
      title: "Tracing the thoughts of a large language model",
      category: "Interpretability",
      date: "Mar 27, 2025",
      link: "#"
    },
    {
      title: "Anthropic Economic Index",
      category: "Societal impacts",
      date: "Mar 27, 2025",
      link: "#"
    },
    {
      title: "Claude's extended thinking",
      category: "Product",
      date: "Feb 24, 2025",
      link: "#"
    },
    {
      title: "Alignment faking in large language models",
      category: "Alignment science",
      date: "Dec 18, 2024",
      link: "#"
    },
    {
      title: "Introducing the Model Context Protocol",
      category: "Product",
      date: "Nov 25, 2024",
      link: "#"
    }
  ];

  return (
    <section className="py-16">
      <div className="u-container">
        <div className="u-grid-desktop">
          <div className="u-column-4">
            <h2 className="u-display-s">Featured</h2>
          </div>
          
          <div className="u-column-8">
            <ul className="space-y-6">
              {articles.map((article, index) => (
                <li key={index} role="region">
                  <a href={article.link} className="block group">
                    <div className="u-detail-m border-b border-border pb-4">
                      <div className="u-width-full mb-2">
                        <h3 className="u-weight-medium text-lg group-hover:text-primary/80 transition-colors">
                          {article.title}
                        </h3>
                      </div>
                      <div className="u-hflex-between-center u-width-full u-max-width-30ch">
                        <div className="u-color-faded">{article.category}</div>
                        <div className="u-color-faded">{article.date}</div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;