import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { WaitingListForm } from '@/components/WaitingListForm'
import { Truck, Users, Shield, Clock, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { easeOut, motion, useAnimation, type Variants } from 'framer-motion'
const LandingPage = () => {
  // Animation controls for different sections
  const heroControls = useAnimation()
  const featuresControls = useAnimation()
  const comingSoonControls = useAnimation()

  // References for sections to detect when they are in view
  // const heroRef = useRef<HTMLDivElement>(null)
  // const featuresRef = useRef<HTMLDivElement>(null)
  // const comingSoonRef = useRef<HTMLDivElement>(null)

  // InView hooks for each section
  const { ref: heroRef, inView: isHeroInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  const { ref: featuresRef, inView: isFeaturesInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const { ref: comingSoonRef, inView: isComingSoonInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut, // ✅ works with TS
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const slideLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: easeOut,
      },
    },
  }

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: easeOut, // ✅ works with TS
      },
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse' as const,
    },
  }

  // Trigger animations when sections are in view
  useEffect(() => {
    if (isHeroInView) {
      heroControls.start('visible')
    }
    if (isFeaturesInView) {
      featuresControls.start('visible')
    }
    if (isComingSoonInView) {
      comingSoonControls.start('visible')
    }
  }, [
    isHeroInView,
    isFeaturesInView,
    isComingSoonInView,
    heroControls,
    featuresControls,
    comingSoonControls,
  ])

  return (
    <div
      className='min-h-screen text-gray-900'
      style={{
        background: 'linear-gradient(135deg, #F0F4FF 0%, #FFF3E6 100%)',
        minHeight: '100vh',
      }}
    >
      {/* Header */}
      <motion.header
        className='container mx-auto px-4 py-6'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className='flex justify-between items-center'>
          <motion.div
            className='flex items-center space-x-2 cursor-pointer'
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              whileHover={{ rotate: 12 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Truck className='h-8 w-8' style={{ color: '#007BFF' }} />
            </motion.div>
            <motion.h1
              className='text-2xl font-bold'
              whileHover={{ color: '#007BFF' }}
              transition={{ duration: 0.2 }}
            >
              Hauler
            </motion.h1>
          </motion.div>
          {/* <Link to='/auth'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant='outline'
                className='transition-colors hover:bg-[#007BFF] hover:text-white'
              >
                Admin Login
              </Button>
            </motion.div>
          </Link> */}
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className='container mx-auto px-4 py-16 text-center'
        initial='hidden'
        animate={heroControls}
        variants={fadeIn}
      >
        <div className='max-w-4xl mx-auto'>
          <motion.h2 className='text-5xl font-bold mb-6' variants={fadeIn}>
            On-Demand Hauling
            <br />
            <motion.span style={{ color: '#007BFF' }} animate={pulseAnimation}>
              Made Simple
            </motion.span>
          </motion.h2>
          <motion.p
            className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'
            variants={fadeIn}
          >
            Connect with reliable drivers for all your hauling needs. Whether
            you need to move furniture, construction materials, or anything
            else, Hauler makes it easy.
          </motion.p>
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className='group px-6 py-6 text-lg'
              style={{
                backgroundColor: '#FF6B00',
                color: 'white',
                boxShadow: '0 4px 14px rgba(255, 107, 0, 0.35)',
              }}
            >
              <span>Get Started</span>
              <motion.div
                className='ml-2 inline-block'
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              >
                <ArrowRight className='h-5 w-5' />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className='container mx-auto px-4 py-16'
        initial='hidden'
        animate={featuresControls}
        variants={staggerContainer}
      >
        <motion.h3
          className='text-3xl font-bold text-center mb-12'
          style={{ color: '#007BFF' }}
          variants={fadeIn}
        >
          How Hauler Works
        </motion.h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          {[
            {
              icon: Users,
              title: 'For Customers',
              description:
                'Request hauling services on-demand. Get matched with nearby drivers with the right vehicle for your needs.',
            },
            {
              icon: Truck,
              title: 'For Drivers',
              description:
                'Earn money with your truck or trailer. Set your own schedule and accept jobs that work for you.',
            },
            {
              icon: Shield,
              title: 'Safe & Secure',
              description:
                'All drivers are verified. Track your items in real-time with built-in insurance protection.',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className='text-center p-6 rounded-lg'
              variants={fadeIn}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <motion.div
                className='rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'
                style={{ backgroundColor: 'rgba(0, 123, 255, 0.1)' }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 5px 15px rgba(0, 123, 255, 0.2)',
                }}
              >
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                  <feature.icon
                    className='h-8 w-8'
                    style={{ color: '#007BFF' }}
                  />
                </motion.div>
              </motion.div>
              <motion.h4
                className='text-xl font-semibold mb-2'
                whileHover={{ color: '#007BFF' }}
              >
                {feature.title}
              </motion.h4>
              <motion.p className='text-muted-foreground'>
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Coming Soon Section */}
      <motion.section
        ref={comingSoonRef}
        className='py-16 overflow-hidden'
        style={{ backgroundColor: 'rgba(240, 242, 245, 0.8)' }}
        initial='hidden'
        animate={comingSoonControls}
        variants={fadeIn}
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div variants={slideLeft}>
              <div className='flex items-center space-x-2 mb-4'>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <Clock className='h-6 w-6' style={{ color: '#FF6B00' }} />
                </motion.div>
                <motion.span
                  className='font-semibold'
                  style={{ color: '#FF6B00' }}
                >
                  Coming Soon
                </motion.span>
              </div>
              <motion.h3 className='text-3xl font-bold mb-4' variants={fadeIn}>
                Hauler is launching soon in your area!
              </motion.h3>
              <motion.p
                className='text-muted-foreground mb-6'
                variants={fadeIn}
              >
                Join our waiting list to be among the first to experience
                hassle-free hauling. Whether you're a customer looking for
                reliable transport or a driver ready to earn, we'll notify you
                as soon as we launch.
              </motion.p>
              <motion.ul
                className='space-y-3 text-muted-foreground'
                variants={staggerContainer}
                initial='hidden'
                animate={isComingSoonInView ? 'visible' : 'hidden'}
              >
                {[
                  'Get early access to the platform',
                  'Special launch pricing for early users',
                  'Priority customer support',
                  'Exclusive updates and features',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className='flex items-center cursor-pointer'
                    variants={slideLeft}
                    whileHover={{
                      x: 10,
                      transition: { type: 'spring', stiffness: 400 },
                    }}
                  >
                    <span className='mr-2 text-lg' style={{ color: '#FF6B00' }}>
                      •
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              className='rounded-xl overflow-hidden'
              variants={slideRight}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
              }}
              style={{
                border: '1px solid rgba(0, 123, 255, 0.1)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
              }}
            >
              <WaitingListForm />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className='container mx-auto px-4 py-8 text-center text-muted-foreground border-t'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.p
          whileHover={{
            color: '#007BFF',
            scale: 1.02,
          }}
          className='cursor-pointer'
        >
          &copy; 2025 Hauler. All rights reserved.
        </motion.p>
      </motion.footer>
    </div>
  )
}

export default LandingPage
