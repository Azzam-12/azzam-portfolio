'use client';


import { motion } from 'framer-motion';

export default function Home() {

  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white text-[#001f5b] py-6 px-6 shadow-md">
  <motion.div
    className="flex items-center gap-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <img
      src="/azzam-logo-1.png"
      alt="azzam logo"
      className="h-30 w-auto rounded-md  "
    />
    <div>
      <h1 className="text-3xl font-bold">Azzam Designs</h1>
      <p className="text-base mt-1">Designing Identities That Drive Brands Forward</p>
    </div>
  </motion.div>
</header>


      {/* About Section */}
      <section className="bg-[#ffc200] py-14 px-6 max-w-8xl mx-auto ">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-4xl font-semibold text-[#001f5b] mb-4">About Me</h2>
          <p className="mb-3 text-center text-2xl ">
            I’m <strong>Mr. Mhmd Azzam</strong>, <br />An 18-year-old graphic designer and print specialist with over 2 years of experience in visual communication and branding.
            <br />I specialize in <strong>logo design</strong>, <strong>poster creation</strong>, and <strong>print-ready graphics</strong>.
            <br /> I’ve worked with <strong>Azzam Ads</strong>, gaining hands-on experience in printing, vinyl cutting,
            and signage production.
          </p>
          <p className="mb-3 text-center text-2xl ">
            Currently studying <strong>Management Information Systems</strong> at the <strong>Lebanese University</strong>,<br /> I blend creative design with technical problem-solving,
            ensuring every detail looks perfect from screen to print.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Gallery */}
      <section className="bg-[#001f5b] py-14 px-6">
  <h2 className="text-2xl font-semibold text-center text-[white] mb-8">My Work</h2>

  {/* Replace with your real project data */}
  {[
    {
      title: <b> azzam designs Logo </b>,
      images: ['azzam-logo-1.png'],
    },
    {
      title: <b>Ghosh Contracting Company</b>,
      images: ['Ghosh-1.png', 'Ghosh-2.png', 'Ghosh-3.jpg'],
    },
    {
      title: <b>L + R + K</b>,
      images: ['LAYAL-1.png', '/LAYAL-2.png', '/LAYAL-3.jpg'],
    },
    // Add more projects as needed
  ].map((project, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-xl font-semibold text-center text-[white] mb-4">{project.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {project.images.map((img, i) => (
          <div key={i} className="bg-white rounded-md shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <img src={img} alt={`${project.title} image ${i + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </motion.div>
  ))}
</section>


      {/* Tools Section */}
      <section className="py-14 px-6 max-w-4xl mx-auto">
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
    <h2 className="text-2xl font-semibold text-[#001f5b] mb-6">Tools & Software</h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
      {/* Graphic Tools */}
      {[
        { name: 'Photoshop', src: '/photoshop.png' },
        { name: 'Illustrator', src: '/illustrator.png' },
        { name: 'CorelDRAW', src: '/coreldraw.png' },
        { name: 'Vinyl Cut', src: '/vinyl.png' },
        { name: 'Excel', src: '/excel.png' },
        { name: 'PowerPoint', src: '/powerpoint.png' },
        { name: 'Word', src: '/word.png' },
        { name: 'printing services', src: '/vinylprint.png' },
      ].map((tool, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={tool.src} alt={tool.name} className="w-16 h-16 object-contain mb-2  mx-auto shadow-md rounded-md" />
          <span className="text-sm font-medium">{tool.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
</section>

      {/* Contact Section */}
      <section className="bg-[#001f5b] text-white py-14 px-6">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Me</h2>
          <div className="max-w-xl mx-auto space-y-4 text-center">
            <p><strong>Phone/WhatsApp:</strong> 76/77 09 72</p>
            <p><strong>Email:</strong> <a href="mailto:iazzammohamed@gmail.com" className="underline">iazzammohamed@gmail.com</a></p>
            <p><strong>Instagram:</strong> <a href="https://www.instagram.com/mhmd_azzam11" target="_blank" className="underline">@mhmd_azzam11</a></p>
          </div>
          
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001f5b] text-white text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} azzam designs. All rights reserved.
      </footer>
    </main>
  );
}
