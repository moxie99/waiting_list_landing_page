import { Link } from 'react-router-dom'
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
} from 'lucide-react'
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
    <div
      className='min-h-screen'
      style={{
        backgroundImage:
          'linear-gradient(135deg, hsl(194 87% 17%) 0%, hsl(194 70% 25%) 50%, hsl(48 96% 50%) 100%)',
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='container mx-auto px-4 py-6 relative z-10'
      >
        <nav className='flex justify-between items-center'>
          <motion.div
            className='flex items-center space-x-2'
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Truck className='h-8 w-8 text-secondary' />
            </motion.div>
            <h1 className='text-2xl font-bold text-white'>Hauler</h1>
          </motion.div>
          <Link to='/auth'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant='secondary' className='font-semibold'>
                Admin Login
              </Button>
            </motion.div>
          </Link>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 text-center relative'>
        <motion.div
          className='max-w-5xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.h2
            variants={itemVariants}
            className='text-6xl md:text-7xl font-bold mb-8 text-white leading-tight'
          >
            On-Demand Hauling
            <br />
            <motion.span
              className='text-secondary'
              animate={{
                textShadow: [
                  '0 0 5px rgba(251, 204, 4, 0.5)',
                  '0 0 20px rgba(251, 204, 4, 0.8)',
                  '0 0 5px rgba(251, 204, 4, 0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Made Simple
            </motion.span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className='text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed'
          >
            Connect with reliable drivers for all your hauling needs. Whether
            you need to move furniture, construction materials, or anything
            else, Hauler makes it effortless and affordable.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size='lg'
                variant='secondary'
                className='text-lg px-8 py-4 font-semibold'
              >
                Get Started <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size='lg'
                variant='outline'
                className='text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20'
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className='absolute top-20 left-10 opacity-20'
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Truck className='h-16 w-16 text-secondary' />
        </motion.div>
        <motion.div
          className='absolute bottom-20 right-10 opacity-20'
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <Shield className='h-12 w-12 text-secondary' />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className='bg-gradient-section py-20'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h3 className='text-4xl font-bold text-foreground mb-4'>
              How Hauler Works
            </h3>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
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
              className='text-center group'
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className='bg-primary rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-primary transition-all duration-300'
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Users className='h-10 w-10 text-primary-foreground' />
              </motion.div>
              <h4 className='text-2xl font-semibold mb-4 text-foreground'>
                For Customers
              </h4>
              <p className='text-muted-foreground leading-relaxed'>
                Request hauling services on-demand. Get matched with nearby
                drivers with the right vehicle for your needs. Track your
                delivery in real-time.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='text-center group'
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className='bg-secondary rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-secondary transition-all duration-300'
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Truck className='h-10 w-10 text-secondary-foreground' />
              </motion.div>
              <h4 className='text-2xl font-semibold mb-4 text-foreground'>
                For Drivers
              </h4>
              <p className='text-muted-foreground leading-relaxed'>
                Earn money with your truck or trailer. Set your own schedule and
                accept jobs that work for you. Flexible income on your terms.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='text-center group'
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className='bg-primary rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-primary transition-all duration-300'
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Shield className='h-10 w-10 text-primary-foreground' />
              </motion.div>
              <h4 className='text-2xl font-semibold mb-4 text-foreground'>
                Safe & Secure
              </h4>
              <p className='text-muted-foreground leading-relaxed'>
                All drivers are verified. Track your items in real-time with
                built-in insurance protection. Your peace of mind is guaranteed.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h3 className='text-4xl font-bold text-foreground mb-4'>
              Why Choose Hauler?
            </h3>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
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
                className='text-center group'
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className='bg-secondary/10 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors'
                  whileHover={{ scale: 1.1 }}
                >
                  <benefit.icon className='h-8 w-8 text-secondary' />
                </motion.div>
                <h4 className='text-xl font-semibold mb-2 text-foreground'>
                  {benefit.title}
                </h4>
                <p className='text-muted-foreground'>{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-20 bg-gradient-primary'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center'
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '5K+', label: 'Verified Drivers' },
              { number: '50K+', label: 'Successful Deliveries' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='text-primary-foreground'
              >
                <motion.h4
                  className='text-5xl font-bold mb-2'
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h4>
                <p className='text-xl opacity-90'>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className='bg-gradient-section py-20'>
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
                <Clock className='h-8 w-8 text-secondary' />
                <span className='text-secondary font-bold text-lg'>
                  Coming Soon
                </span>
              </motion.div>
              <h3 className='text-4xl font-bold mb-6 text-foreground'>
                Hauler is launching soon in your area!
              </h3>
              <p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
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
                    className='flex items-center space-x-3 text-muted-foreground'
                  >
                    <CheckCircle className='h-5 w-5 text-secondary flex-shrink-0' />
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
              className='bg-card rounded-2xl p-8 shadow-2xl'
            >
              <WaitingListForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-20 bg-background'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h3 className='text-4xl font-bold text-foreground mb-4'>
              Get in Touch
            </h3>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
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
                desc: '1-800-HAULER',
                action: 'tel:1-800-428-5371',
              },
              {
                icon: Mail,
                title: 'Email Us',
                desc: 'hello@hauler.com',
                action: 'mailto:hello@hauler.com',
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
                className='text-center group block p-6 rounded-xl hover:bg-muted/50 transition-colors'
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className='bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors'
                  whileHover={{ scale: 1.1 }}
                >
                  <contact.icon className='h-8 w-8 text-primary' />
                </motion.div>
                <h4 className='text-xl font-semibold mb-2 text-foreground'>
                  {contact.title}
                </h4>
                <p className='text-muted-foreground'>{contact.desc}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-primary py-12'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <div className='flex items-center justify-center space-x-2 mb-4'>
              <Truck className='h-8 w-8 text-secondary' />
              <h2 className='text-2xl font-bold text-primary-foreground'>
                Hauler
              </h2>
            </div>
            <p className='text-primary-foreground/80 mb-6'>
              Making hauling simple, one delivery at a time.
            </p>
            <p className='text-primary-foreground/60'>
              &copy; 2025 Hauler. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
