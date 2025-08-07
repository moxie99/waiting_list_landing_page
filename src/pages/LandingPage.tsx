import { Button } from '@/components/ui/button'
import { WaitingListForm } from '@/components/WaitingListForm'
import { motion } from 'framer-motion'
import {
  Truck,
  Users,
  Shield,
  Clock,
  Star,
  MapPin,
  DollarSign,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import { logo, mockup } from '@/assets'
const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className='min-h-screen relative overflow-hidden'>
      {/* Animated Background */}
      <div
        className='fixed inset-0 z-0'
        style={{
          background: `
            radial-gradient(circle at 20% 80%, hsla(194, 70%, 25%, 0.15) 0%, transparent 70%),
            radial-gradient(circle at 80% 20%, hsla(48, 96%, 50%, 0.15) 0%, transparent 70%),
            radial-gradient(circle at 40% 40%, hsla(194, 70%, 25%, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, hsl(194, 87%, 17%) 0%, hsl(194, 70%, 25%) 50%, hsl(48, 96%, 50%) 100%)
          `,
        }}
      />

      {/* Floating Particles */}
      <div className='fixed inset-0 z-0'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 rounded-full'
            style={{
              background:
                i % 2 === 0 ? 'hsl(48, 96%, 50%)' : 'hsl(194, 70%, 25%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='relative z-10 container mx-auto px-4 py-6'
      >
        <nav className='flex justify-between items-center'>
          <motion.div
            className='flex items-center space-x-2'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              className='relative'
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div
                className='absolute inset-0 rounded-full blur-lg'
                style={{
                  background: `radial-gradient(circle, hsla(48, 96%, 50%, 0.4) 0%, transparent 70%)`,
                }}
              />

              <img
                src={logo}
                className='h-10 w-30 text-white relative z-10'
                style={{
                  filter: 'drop-shadow(0 0 8px hsla(48, 96%, 50%, 0.6))',
                }}
              />
            </motion.div>
          </motion.div>
          {/* <Link to='/auth'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant='secondary'
                className='font-semibold relative overflow-hidden'
                style={{
                  background: 'hsla(48, 96%, 50%, 0.9)',
                  color: 'hsl(194, 70%, 25%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid hsla(48, 96%, 50%, 0.3)',
                  boxShadow: '0 8px 32px hsla(48, 96%, 50%, 0.3)',
                }}
              >
                Admin Login
              </Button>
            </motion.div>
          </Link> */}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className='relative z-10 container mx-auto px-4 py-20 text-center'>
        <motion.div
          className='max-w-5xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div
            variants={itemVariants}
            className='mb-8 flex justify-center'
          >
            <motion.div
              className='flex items-center space-x-2 px-6 py-3 rounded-full'
              style={{
                background: 'hsla(255, 255%, 255%, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid hsla(255, 255%, 255%, 0.2)',
                boxShadow: '0 8px 32px hsla(0, 0%, 0%, 0.1)',
              }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles
                className='h-5 w-5'
                style={{ color: 'hsl(48, 96%, 50%)' }}
              />
              <span className='text-white font-medium'>
                Revolutionary Hauling Platform
              </span>
              <Sparkles
                className='h-5 w-5'
                style={{ color: 'hsl(48, 96%, 50%)' }}
              />
            </motion.div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className='text-6xl md:text-7xl font-bold mb-8 leading-tight'
            style={{
              background:
                'linear-gradient(135deg, #ffffff 0%, hsla(48, 96%, 50%, 0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px hsla(48, 96%, 50%, 0.3)',
            }}
          >
            On-Demand Hauling
            <br />
            <motion.span
              className='relative inline-block z-10'
              animate={{
                textShadow: [
                  '0 0 20px hsla(48, 96%, 50%, 0.5)',
                  '0 0 40px hsla(48, 96%, 50%, 0.8)',
                  '0 0 20px hsla(48, 96%, 50%, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                color: 'hsl(48, 96%, 50%)',
                WebkitTextFillColor: 'hsl(48, 96%, 50%)', // Override parent's transparent
                background: 'none', // Remove any background inheritance
              }}
            >
              Made Simple
              <motion.div
                className='absolute -inset-2 rounded-lg opacity-30 pointer-events-none -z-10'
                style={{
                  background:
                    'linear-gradient(45deg, hsla(48, 96%, 50%, 0.1), hsla(194, 70%, 25%, 0.1))',
                  filter: 'blur(20px)',
                }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className='text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed'
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Connect with reliable drivers for all your hauling needs. Whether
            you need to move furniture, construction materials, or anything
            else, Hauler makes it effortless and affordable.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size='lg'
                className='text-lg px-8 py-4 font-semibold relative overflow-hidden group'
                style={{
                  background:
                    'linear-gradient(135deg, hsl(48, 96%, 50%) 0%, hsl(48, 96%, 45%) 100%)',
                  color: 'hsl(194, 70%, 25%)',
                  border: 'none',
                  boxShadow:
                    '0 10px 30px hsla(48, 96%, 50%, 0.4), 0 0 0 1px hsla(48, 96%, 50%, 0.2)',
                }}
              >
                <motion.div
                  className='absolute inset-0 opacity-0 group-hover:opacity-100'
                  style={{
                    background:
                      'linear-gradient(135deg, hsl(48, 96%, 55%) 0%, hsl(48, 96%, 50%) 100%)',
                  }}
                  transition={{ duration: 0.3 }}
                />
                <span className='relative z-10 flex items-center'>
                  Get Started <ArrowRight className='ml-2 h-5 w-5' />
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size='lg'
                variant='outline'
                className='text-lg px-8 py-4 font-semibold relative overflow-hidden'
                style={{
                  background: 'hsla(255, 255%, 255%, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid hsla(255, 255%, 255%, 0.3)',
                  color: 'white',
                  boxShadow: '0 8px 32px hsla(0, 0%, 0%, 0.1)',
                }}
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Floating Elements */}
        <motion.div
          className='absolute top-20 left-10 opacity-20'
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div
            className='relative'
            style={{
              filter: 'drop-shadow(0 0 20px hsla(48, 96%, 50%, 0.6))',
            }}
          >
            <Truck
              className='h-16 w-16'
              style={{ color: 'hsl(48, 96%, 50%)' }}
            />
          </div>
        </motion.div>
        <motion.div
          className='absolute bottom-20 right-10 opacity-20'
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <div
            className='relative'
            style={{
              filter: 'drop-shadow(0 0 20px hsla(194, 70%, 25%, 0.6))',
            }}
          >
            <Shield
              className='h-12 w-12'
              style={{ color: 'hsl(194, 70%, 25%)' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section
        className='relative z-10 py-20'
        style={{
          background:
            'linear-gradient(180deg, hsla(255, 255%, 255%, 0.05) 0%, hsla(255, 255%, 255%, 0.1) 100%)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h3
              className='text-4xl font-bold mb-4'
              style={{
                background:
                  'linear-gradient(135deg, white 0%, hsla(48, 96%, 50%, 0.9) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              How Hauler Works
            </h3>
            <p className='text-xl text-white/80 max-w-2xl mx-auto'>
              Simple, fast, and reliable. Get your items moved in three easy
              steps.
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className='text-center group relative'
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div
                className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                style={{
                  background:
                    'linear-gradient(135deg, hsla(194, 70%, 25%, 0.1) 0%, hsla(48, 96%, 50%, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                }}
              />
              <div className='relative z-10 p-6'>
                <motion.div
                  className='rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 relative overflow-hidden'
                  style={{
                    background:
                      'linear-gradient(135deg, hsl(194, 70%, 25%) 0%, hsl(194, 70%, 30%) 100%)',
                    boxShadow: '0 10px 30px hsla(194, 70%, 25%, 0.3)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div
                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'
                    style={{
                      background:
                        'linear-gradient(135deg, hsl(194, 70%, 30%) 0%, hsl(194, 70%, 35%) 100%)',
                    }}
                  />
                  <Users className='h-10 w-10 text-white relative z-10' />
                </motion.div>
                <h4 className='text-2xl font-semibold mb-4 text-white'>
                  For Customers
                </h4>
                <p className='text-white/70 leading-relaxed'>
                  Request hauling services on-demand. Get matched with nearby
                  drivers with the right vehicle for your needs. Track your
                  delivery in real-time.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='text-center group relative'
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div
                className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                style={{
                  background:
                    'linear-gradient(135deg, hsla(48, 96%, 50%, 0.1) 0%, hsla(194, 70%, 25%, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                }}
              />
              <div className='relative z-10 p-6'>
                <motion.div
                  className='rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 relative overflow-hidden'
                  style={{
                    background:
                      'linear-gradient(135deg, hsl(48, 96%, 50%) 0%, hsl(48, 96%, 45%) 100%)',
                    boxShadow: '0 10px 30px hsla(48, 96%, 50%, 0.3)',
                  }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <div
                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'
                    style={{
                      background:
                        'linear-gradient(135deg, hsl(48, 96%, 55%) 0%, hsl(48, 96%, 50%) 100%)',
                    }}
                  />
                  <Truck
                    className='h-10 w-10'
                    style={{ color: 'hsl(194, 70%, 25%)' }}
                  />
                </motion.div>
                <h4 className='text-2xl font-semibold mb-4 text-white'>
                  For Drivers
                </h4>
                <p className='text-white/70 leading-relaxed'>
                  Earn money with your truck or trailer. Set your own schedule
                  and accept jobs that work for you. Flexible income on your
                  terms.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='text-center group relative'
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div
                className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                style={{
                  background:
                    'linear-gradient(135deg, hsla(194, 70%, 25%, 0.1) 0%, hsla(48, 96%, 50%, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                }}
              />
              <div className='relative z-10 p-6'>
                <motion.div
                  className='rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 relative overflow-hidden'
                  style={{
                    background:
                      'linear-gradient(135deg, hsl(194, 70%, 25%) 0%, hsl(194, 70%, 30%) 100%)',
                    boxShadow: '0 10px 30px hsla(194, 70%, 25%, 0.3)',
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div
                    className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'
                    style={{
                      background:
                        'linear-gradient(135deg, hsl(194, 70%, 30%) 0%, hsl(194, 70%, 35%) 100%)',
                    }}
                  />
                  <Shield className='h-10 w-10 text-white relative z-10' />
                </motion.div>
                <h4 className='text-2xl font-semibold mb-4 text-white'>
                  Safe & Secure
                </h4>
                <p className='text-white/70 leading-relaxed'>
                  All drivers are verified. Track your items in real-time with
                  built-in insurance protection. Your peace of mind is
                  guaranteed.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        className='relative z-10 py-20'
        style={{
          background:
            'linear-gradient(180deg, hsla(255, 255%, 255%, 0.1) 0%, hsla(255, 255%, 255%, 0.05) 100%)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h3
              className='text-4xl font-bold mb-4'
              style={{
                background:
                  'linear-gradient(135deg, white 0%, hsla(48, 96%, 50%, 0.9) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Why Choose Hauler?
            </h3>
            <p className='text-xl text-white/80 max-w-2xl mx-auto'>
              Experience the difference with our comprehensive hauling solution.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
            {[
              {
                icon: DollarSign,
                title: 'Fair Pricing',
                desc: 'Transparent rates with no hidden fees',
              },
              {
                icon: MapPin,
                title: 'Local Network',
                desc: 'Drivers in your area ready to help',
              },
              {
                icon: Smartphone,
                title: 'Easy Booking',
                desc: 'Book in seconds through our app',
              },
              {
                icon: Star,
                title: '5-Star Service',
                desc: 'Top-rated drivers and support',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center group relative'
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div
                  className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  style={{
                    background: 'hsla(255, 255%, 255%, 0.05)',
                    backdropFilter: 'blur(10px)',
                  }}
                />
                <div className='relative z-10 p-6'>
                  <motion.div
                    className='rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 relative'
                    style={{
                      background: `linear-gradient(135deg, hsla(48, 96%, 50%, 0.2) 0%, hsla(48, 96%, 50%, 0.1) 100%)`,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid hsla(48, 96%, 50%, 0.2)',
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <benefit.icon
                      className='h-8 w-8'
                      style={{ color: 'hsl(48, 96%, 50%)' }}
                    />
                  </motion.div>
                  <h4 className='text-xl font-semibold mb-2 text-white'>
                    {benefit.title}
                  </h4>
                  <p className='text-white/70'>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='relative z-10 py-20 bg-gradient-primary'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center'>
            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative flex justify-center lg:justify-start'
            >
              <div className='relative group'>
                {/* Glow effect */}
                <div className='absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-400/20 blur-xl rounded-3xl scale-110 group-hover:scale-125 transition-transform duration-500' />

                {/* Phone frame */}
                <div className='relative bg-gray-900 rounded-3xl p-2 shadow-2xl'>
                  <div className='bg-black rounded-2xl overflow-hidden'>
                    <img
                      src={mockup}
                      alt='HaulEx Mobile App Interface'
                      className='w-full h-auto object-cover rounded-2xl'
                      style={{ maxWidth: '300px', height: '300px' }}
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className='absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg shadow-lg'
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  🚛
                </motion.div>

                <motion.div
                  className='absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg'
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                >
                  📍
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className='text-white space-y-6'
            >
              <div>
                <motion.h2
                  className='text-4xl lg:text-5xl font-bold mb-4'
                  style={{ textShadow: 'var(--text-glow)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Your Moving Solution
                  <br />
                  <span className='text-yellow-400'>In Your Pocket</span>
                </motion.h2>

                <p className='text-xl opacity-90 leading-relaxed'>
                  Experience the future of haulage and moving services. Our app
                  connects you with verified drivers instantly, making your
                  moving experience seamless and stress-free.
                </p>
              </div>

              <div className='space-y-4'>
                {[
                  {
                    icon: '🚚',
                    title: 'Instant Booking',
                    description:
                      'Book a driver in seconds with our smart matching algorithm',
                  },
                  {
                    icon: '💰',
                    title: 'Transparent Pricing',
                    description:
                      'See upfront costs with no hidden fees or surprises',
                  },
                  {
                    icon: '📱',
                    title: 'Real-time Tracking',
                    description:
                      'Monitor your delivery from pickup to drop-off',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className='flex items-start space-x-4 p-4 rounded-xl bg-glass-overlay backdrop-blur-glass hover:bg-white/20 transition-all duration-300'
                  >
                    <div className='text-2xl'>{feature.icon}</div>
                    <div>
                      <h4 className='font-semibold text-lg mb-1'>
                        {feature.title}
                      </h4>
                      <p className='opacity-80'>{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
                className='pt-4'
              >
                <p className='text-lg font-medium text-yellow-400'>
                  Join the number of customers who trust us with their moves! as
                  we launch
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Coming Soon Section */}
      <section
        className='relative z-10 py-20'
        style={{
          background:
            'linear-gradient(180deg, hsla(255, 255%, 255%, 0.05) 0%, hsla(255, 255%, 255%, 0.1) 100%)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className='flex items-center space-x-2 mb-6'
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Clock
                  className='h-8 w-8'
                  style={{ color: 'hsl(48, 96%, 50%)' }}
                />
                <span
                  className='font-bold text-lg'
                  style={{ color: 'hsl(48, 96%, 50%)' }}
                >
                  Coming Soon
                </span>
              </motion.div>
              <h3
                className='text-4xl font-bold mb-6'
                style={{
                  background:
                    'linear-gradient(135deg, white 0%, hsla(48, 96%, 50%, 0.9) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hauler is launching soon in your area!
              </h3>
              <p className='text-xl text-white/80 mb-8 leading-relaxed'>
                Join our waiting list to be among the first to experience
                hassle-free hauling. Whether you're a customer looking for
                reliable transport or a driver ready to earn, we'll notify you
                as soon as we launch.
              </p>
              <motion.ul
                className='space-y-4'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
              >
                {[
                  'Get early access to the platform',
                  'Special launch pricing for early users',
                  'Priority customer support',
                  'Exclusive updates and features',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className='flex items-center space-x-3 text-white/80'
                  >
                    <CheckCircle
                      className='h-5 w-5 flex-shrink-0'
                      style={{ color: 'hsl(48, 96%, 50%)' }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='relative'
            >
              <div
                className='rounded-2xl p-8 relative overflow-hidden'
                style={{
                  background: 'hsla(255, 255%, 255%, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid hsla(255, 255%, 255%, 0.2)',
                  boxShadow: '0 20px 60px hsla(0, 0%, 0%, 0.1)',
                }}
              >
                <div
                  className='absolute inset-0'
                  style={{
                    background:
                      'linear-gradient(135deg, hsla(194, 70%, 25%, 0.05) 0%, hsla(48, 96%, 50%, 0.05) 100%)',
                  }}
                />
                <div className='relative z-10'>
                  <WaitingListForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className='relative z-10 py-20'
        style={{
          background:
            'linear-gradient(180deg, hsla(255, 255%, 255%, 0.1) 0%, hsla(255, 255%, 255%, 0.05) 100%)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h3
              className='text-4xl font-bold mb-4'
              style={{
                background:
                  'linear-gradient(135deg, white 0%, hsla(48, 96%, 50%, 0.9) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Get in Touch
            </h3>
            <p className='text-xl text-white/80 max-w-2xl mx-auto'>
              Have questions? We're here to help you get started.
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                desc: '+23481-612-48486',
                action: 'tel:23481-612-48486',
              },
              {
                icon: Mail,
                title: 'Email Us',
                desc: 'haulerng2025@gmail.com',
                action: 'mailto:haulerng2025@gmail.com',
              },
              {
                icon: MessageCircle,
                title: 'Live Chat',
                desc: 'Available 24/7',
                action: '#',
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.action}
                variants={itemVariants}
                className='text-center group block p-6 rounded-xl relative transition-all duration-300'
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  background: 'hsla(255, 255%, 255%, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid hsla(255, 255%, 255%, 0.1)',
                }}
              >
                <div
                  className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  style={{
                    background:
                      'linear-gradient(135deg, hsla(194, 70%, 25%, 0.1) 0%, hsla(48, 96%, 50%, 0.1) 100%)',
                  }}
                />
                <div className='relative z-10'>
                  <motion.div
                    className='rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 relative'
                    style={{
                      background:
                        'linear-gradient(135deg, hsla(194, 70%, 25%, 0.2) 0%, hsla(194, 70%, 25%, 0.1) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid hsla(194, 70%, 25%, 0.2)',
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <contact.icon
                      className='h-8 w-8'
                      style={{ color: 'hsl(194, 70%, 25%)' }}
                    />
                  </motion.div>
                  <h4 className='text-xl font-semibold mb-2 text-white'>
                    {contact.title}
                  </h4>
                  <p className='text-white/70'>{contact.desc}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className='relative z-10 py-12'
        style={{
          background:
            'linear-gradient(135deg, hsl(194, 70%, 25%) 0%, hsl(194, 70%, 20%) 100%)',
        }}
      >
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <div className='flex items-center justify-center space-x-2 mb-4'>
              <img
                src={logo}
                className='h-10 w-30 text-white relative z-10'
                style={{
                  filter: 'drop-shadow(0 0 8px hsla(48, 96%, 50%, 0.6))',
                }}
              />
              {/* <h2
                className='text-2xl font-bold text-white'
                style={{
                  textShadow: '0 0 20px hsla(48, 96%, 50%, 0.3)',
                }}
              >
                Hauler
              </h2> */}
            </div>
            {/* <p className='text-white/80 mb-6'>Your loads on demand.</p> */}
            <p className='text-white/60'>
              &copy; 2025 Hauler. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
