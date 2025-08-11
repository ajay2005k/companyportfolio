'use client';

export const dynamic = 'force-static';

export default function About() {
  const capabilities = [
    'Strategy',
    'Design', 
    'Engineering'
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Us
            </h2>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              We are a multidisciplinary team of strategists, designers, and engineers 
              who believe that great products start with deep understanding. Our approach 
              combines strategic thinking with beautiful design and robust engineering 
              to create digital experiences that truly matter.
            </p>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Whether you're a startup looking to establish your digital presence or an 
              enterprise seeking to innovate, we bring the expertise and passion needed 
              to turn your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4">
              {capabilities.map((capability, index) => (
                <span
                  key={index}
                  className="text-white font-medium px-4 py-2 rounded-full border border-white/20 hover:border-white/40 transition-colors"
                >
                  {capability}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-neutral-300">Projects Delivered</div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-neutral-300">Years Experience</div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-neutral-300">Client Satisfaction</div>
            </div>
            <div className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-neutral-300">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
