import Image from 'next/image';
import { FaGamepad, FaGithub, FaDiscord } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BiSolidJoystickAlt } from 'react-icons/bi';
import { BsArrowRightShort, BsStars } from 'react-icons/bs';
import { SiUnrealengine, SiUnity } from 'react-icons/si';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/95" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="relative inline-block">
              <FaGamepad className="mx-auto text-5xl sm:text-7xl mb-6 sm:mb-8 text-purple-500 animate-float" />
              <div className="absolute -inset-1 blur-3xl bg-purple-500/30 -z-10" />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 animate-gradient">
                HATS Software
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Where innovation meets play in the heart of Czechia
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a href="#games"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full 
                          hover:opacity-90 transition-all duration-300 flex items-center justify-center">
                Explore Our Games
                <BsArrowRightShort className="ml-2 text-xl sm:text-2xl group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about"
                className="px-6 sm:px-8 py-3 sm:py-4 border border-purple-500/30 rounded-full 
                          hover:bg-purple-500/10 transition-all duration-300">
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-12 sm:gap-16 items-center">
            <div className="group relative">
              <SiUnrealengine className="text-4xl sm:text-5xl text-gray-400 group-hover:text-white transition-colors duration-300" />
              <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="group relative">
              <SiUnity className="text-4xl sm:text-5xl text-gray-400 group-hover:text-white transition-colors duration-300" />
              <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4 block">The People</span>
            <div className="flex items-center gap-3 justify-center mb-6">
              <BsStars className="text-purple-400 text-2xl sm:text-3xl" />
              <h2 className="text-4xl sm:text-5xl font-bold">Meet the Team</h2>
              <BsStars className="text-purple-400 text-2xl sm:text-3xl" />
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { name: 'jsemharry', role: 'UI Designer & Developer', image: 'https://github.com/jsemharry7.png' },
              { name: 'adyze', role: '3D Artist', image: 'https://github.com/adyze.png' },
              { name: 'toncek.r', role: 'Game Developer', image: 'https://github.com/toncekr.png' },
              { name: 'steveruu', role: 'Game Developer', image: 'https://github.com/steveruu.png' },
            ].map((member) => (
              <div key={member.name}
                className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 
                          backdrop-blur-xl rounded-2xl p-8 text-center
                          border border-gray-800 transition-all duration-500
                          hover:border-purple-500/20 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.1)]">
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-xl 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="relative w-30 h-30 mx-auto rounded-full object-cover 
                              ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 
                              transition-all duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4 block">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Crafting Digital Experiences</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>

            <div className="space-y-6 sm:space-y-8 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                HATS Software is an indie game development studio driven by a singular mission:
                creating memorable gaming experiences that resonate with players worldwide. Founded in 2024
                in the historic city of Liberec, Czech Republic, we combine technical innovation with
                creative storytelling to craft games that stand out in today&apos;s dynamic gaming landscape.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl 
                              rounded-2xl p-8 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300">
                    We envision a gaming world where innovation meets accessibility,
                    where every player can find experiences that challenge, inspire, and entertain.
                    Our commitment to quality and creativity drives everything we do.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl 
                              rounded-2xl p-8 border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">Our Approach</h3>
                  <p className="text-gray-300">
                    We believe in creating games that are not just played, but experienced.
                    By combining cutting-edge technology with thoughtful design, we craft
                    gaming experiences that leave a lasting impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="py-24 sm:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-4 block">Our Work</span>
            <div className="flex items-center gap-3 justify-center mb-6">
              <BiSolidJoystickAlt className="text-purple-400 text-2xl sm:text-3xl" />
              <h2 className="text-4xl sm:text-5xl font-bold">Our Projects</h2>
              <BiSolidJoystickAlt className="text-purple-400 text-2xl sm:text-3xl" />
            </div>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                          backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden
                          border border-gray-800 transition-all duration-500
                          hover:border-purple-500/20 hover:shadow-[0_0_50px_-12px_rgba(147,51,234,0.15)]">
              <div className="aspect-video relative">
                <Image
                  src="/polypong.jpg"
                  alt="PolyPong"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>

              <div className="p-6 sm:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">PolyPong</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                  Experience the evolution of a classic in PolyPong - an exhilarating arcade-style game
                  that combines nostalgic gameplay with modern mechanics. Master the art of precision
                  as you navigate through dynamic arenas, collect powerful upgrades, and compete for
                  global leadership positions.
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <span className="px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 
                                rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                  <span className="px-4 sm:px-6 py-2 bg-gray-800/80 rounded-full text-sm">Nostalgia</span>
                  <span className="px-4 sm:px-6 py-2 bg-gray-800/80 rounded-full text-sm">Arcade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800/50">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="text-gray-400 text-sm sm:text-base text-center md:text-left">
              © 2024 HATS Software. All rights reserved.
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-2 text-gray-400">
                <MdLocationOn className="text-xl sm:text-2xl text-purple-400" />
                <span>Liberec, Czech Republic</span>
              </div>

              <div className="flex gap-6">
                <a href="mailto:contact@hatssoftware.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <MdEmail className="text-2xl" />
                </a>
                <a href="https://github.com/hatssoftware"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <FaGithub className="text-2xl" />
                </a>
                <a href="https://discord.gg/hatssoftware"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <FaDiscord className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
