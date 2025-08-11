'use client';

export const dynamic = 'force-static';

export default function Services() {
  const services = [
    {
      title: 'Product Strategy',
      description: 'Strategic planning and roadmapping to align your product vision with business goals and market opportunities.',
      icon: '🎯'
    },
    {
      title: 'Brand & Visual',
      description: 'Complete brand identity and visual design systems that create memorable and cohesive experiences.',
      icon: '🎨'
    },
    {
      title: 'UX/UI Design',
      description: 'User-centered design that prioritizes usability, accessibility, and delightful interactions.',
      icon: '✨'
    },
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with the latest technologies and best practices.',
      icon: '⚡'
    },
    {
      title: 'Performance & SEO',
      description: 'Technical optimization to ensure your site loads fast and ranks well in search results.',
      icon: '🚀'
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, and enhancements to keep your digital presence thriving.',
      icon: '🛠️'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            We offer comprehensive digital services to help your business succeed 
            in today's competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-neutral-200 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-300 mb-8">
            Ready to discuss your project? Let's create something amazing together.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const top = element.offsetTop - offset;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="bg-white text-black px-8 py-4 rounded-lg font-medium hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
