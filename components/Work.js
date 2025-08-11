'use client';

export const dynamic = 'force-static';

export default function Work() {
  const projects = [
    {
      title: 'Alpha Commerce',
      description: 'E-commerce platform redesign that increased conversion rates by 40%',
      category: 'E-commerce',
      image: '/placeholder-project.jpg'
    },
    {
      title: 'Nimbus Health',
      description: 'Healthcare app design focused on patient experience and accessibility',
      category: 'Healthcare',
      image: '/placeholder-project.jpg'
    },
    {
      title: 'Stone & Co.',
      description: 'Brand identity and website for luxury architectural firm',
      category: 'Branding',
      image: '/placeholder-project.jpg'
    },
    {
      title: 'Orbit SaaS',
      description: 'Complete product design and development for B2B analytics platform',
      category: 'SaaS',
      image: '/placeholder-project.jpg'
    }
  ];

  const handleViewCase = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const top = element.offsetTop - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            A showcase of recent projects that demonstrate our commitment to 
            excellence and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors group"
            >
              <div className="aspect-video bg-neutral-900 border-b border-white/10 flex items-center justify-center">
                <div className="text-neutral-500 text-center">
                  <div className="text-4xl mb-2">🖼️</div>
                  <div className="text-sm">Project Image Placeholder</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-neutral-400 bg-neutral-800/50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-neutral-200 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <button
                  onClick={handleViewCase}
                  className="border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:border-white/40 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto"
                >
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-300 mb-8">
            Interested in seeing more of our work or discussing your project?
          </p>
          <button
            onClick={handleViewCase}
            className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
          >
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </section>
  );
}
