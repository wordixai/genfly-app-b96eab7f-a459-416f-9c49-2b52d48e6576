const CTASection = () => {
  return (
    <section className="u-theme-color-light py-16 u-alignment-center">
      <div className="u-container">
        <div className="u-vflex-center-center u-gap-row-8">
          <h2 className="u-display-l u-max-width-20ch text-center">
            Want to help us build the future of safe AI?
          </h2>
          
          <div className="u-btn-group">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              See open roles
            </button>
            <button className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary/5 transition-colors">
              Speak with sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;