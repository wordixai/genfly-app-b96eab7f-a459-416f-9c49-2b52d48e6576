import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-16">
      <div className="u-container u-radius-medium">
        <div className="u-grid-desktop">
          <div className="u-column-8">
            <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop"
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group">
                <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play size={24} className="text-black ml-1" />
                </div>
              </button>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-white text-2xl font-semibold">Societal Impacts of AI</h2>
              </div>
            </div>
          </div>
          <div className="u-column-4 u-align-self-center">
            <div className="u-vflex-stretch-top">
              <p className="quote-mark">"</p>
              <p className="u-paragraph-l u-mb-gutter">
                If knowledge is power and we're building machines that have more knowledge than us, what will happen between us and the machines?
              </p>
              <p className="u-detail-m u-color-faded">
                Deep Ganguli<br />
                Research Lead, Societal Impacts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;