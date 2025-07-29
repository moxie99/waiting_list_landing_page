import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { WaitingListForm } from '@/components/WaitingListForm'
import { Truck, Users, Shield, Clock } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='container mx-auto px-4 py-6'>
        <nav className='flex justify-between items-center'>
          <div className='flex items-center space-x-2'>
            <Truck className='h-8 w-8 text-primary' />
            <h1 className='text-2xl font-bold'>Hauler</h1>
          </div>
          <Link to='/auth'>
            <Button variant='outline'>Admin Login</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='container mx-auto px-4 py-16 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-5xl font-bold mb-6'>
            On-Demand Hauling
            <br />
            <span className='text-primary'>Made Simple</span>
          </h2>
          <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
            Connect with reliable drivers for all your hauling needs. Whether
            you need to move furniture, construction materials, or anything
            else, Hauler makes it easy.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className='container mx-auto px-4 py-16'>
        <h3 className='text-3xl font-bold text-center mb-12'>
          How Hauler Works
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          <div className='text-center'>
            <div className='bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Users className='h-8 w-8 text-primary' />
            </div>
            <h4 className='text-xl font-semibold mb-2'>For Customers</h4>
            <p className='text-muted-foreground'>
              Request hauling services on-demand. Get matched with nearby
              drivers with the right vehicle for your needs.
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Truck className='h-8 w-8 text-primary' />
            </div>
            <h4 className='text-xl font-semibold mb-2'>For Drivers</h4>
            <p className='text-muted-foreground'>
              Earn money with your truck or trailer. Set your own schedule and
              accept jobs that work for you.
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Shield className='h-8 w-8 text-primary' />
            </div>
            <h4 className='text-xl font-semibold mb-2'>Safe & Secure</h4>
            <p className='text-muted-foreground'>
              All drivers are verified. Track your items in real-time with
              built-in insurance protection.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className='bg-muted/30 py-16'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='flex items-center space-x-2 mb-4'>
                <Clock className='h-6 w-6 text-primary' />
                <span className='text-primary font-semibold'>Coming Soon</span>
              </div>
              <h3 className='text-3xl font-bold mb-4'>
                Hauler is launching soon in your area!
              </h3>
              <p className='text-muted-foreground mb-6'>
                Join our waiting list to be among the first to experience
                hassle-free hauling. Whether you're a customer looking for
                reliable transport or a driver ready to earn, we'll notify you
                as soon as we launch.
              </p>
              <ul className='space-y-2 text-muted-foreground'>
                <li>• Get early access to the platform</li>
                <li>• Special launch pricing for early users</li>
                <li>• Priority customer support</li>
                <li>• Exclusive updates and features</li>
              </ul>
            </div>
            <div>
              <WaitingListForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='container mx-auto px-4 py-8 text-center text-muted-foreground border-t'>
        <p>&copy; 2025 Hauler. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage
