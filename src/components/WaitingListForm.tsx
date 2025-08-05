/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'
import { motion } from 'framer-motion'
import type { UserType } from '@/types/waiting-list'
import { Mail, Phone, Truck, User } from 'lucide-react'

export function WaitingListForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile_number: '',
    user_type: 'customer' as UserType,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase.from('waiting_list').insert([formData])

      if (error) {
        throw error
      }

      toast({
        title: 'Success!',
        description: `Thank you for joining our waiting list as a ${formData.user_type}. We'll contact you soon!`,
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        mobile_number: '',
        user_type: 'customer',
      })
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='w-full max-w-md mx-auto'
    >
      <div className='text-center mb-8'>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className='w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center'
          style={{
            background:
              'linear-gradient(135deg, hsl(48, 96%, 50%) 0%, hsl(48, 96%, 45%) 100%)',
            boxShadow: '0 10px 30px hsla(48, 96%, 50%, 0.3)',
          }}
        >
          <Mail className='h-8 w-8' style={{ color: 'hsl(194, 70%, 25%)' }} />
        </motion.div>
        <h3
          className='text-2xl font-bold mb-2'
          style={{
            background:
              'linear-gradient(135deg, white 0%, hsla(48, 96%, 50%, 0.9) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Join the Waiting List
        </h3>
        <p className='text-white/70'>
          Be the first to know when Hauler launches in your area
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className='space-y-2'
        >
          <Label className='text-white/90 flex items-center gap-2'>
            <Truck className='h-4 w-4' />I am a:
          </Label>
          <RadioGroup
            value={formData.user_type}
            onValueChange={(value: UserType) =>
              setFormData({ ...formData, user_type: value })
            }
            className='flex gap-6'
          >
            <motion.div
              className='flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 cursor-pointer group'
              style={{
                background:
                  formData.user_type === 'customer'
                    ? 'hsla(48, 96%, 50%, 0.2)'
                    : 'hsla(255, 255%, 255%, 0.05)',
                border: `1px solid ${
                  formData.user_type === 'customer'
                    ? 'hsla(48, 96%, 50%, 0.4)'
                    : 'hsla(255, 255%, 255%, 0.1)'
                }`,
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <RadioGroupItem
                value='customer'
                id='customer'
                className='border-white/30 text-white data-[state=checked]:bg-secondary data-[state=checked]:border-secondary'
              />
              <Label
                htmlFor='customer'
                className='text-white/90 cursor-pointer font-medium'
              >
                Customer
              </Label>
            </motion.div>
            <motion.div
              className='flex items-center space-x-2 p-3 rounded-lg transition-all duration-300 cursor-pointer group'
              style={{
                background:
                  formData.user_type === 'driver'
                    ? 'hsla(48, 96%, 50%, 0.2)'
                    : 'hsla(255, 255%, 255%, 0.05)',
                border: `1px solid ${
                  formData.user_type === 'driver'
                    ? 'hsla(48, 96%, 50%, 0.4)'
                    : 'hsla(255, 255%, 255%, 0.1)'
                }`,
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{ scale: 1.02 }}
            >
              <RadioGroupItem
                value='driver'
                id='driver'
                className='border-white/30 text-white data-[state=checked]:bg-secondary data-[state=checked]:border-secondary'
              />
              <Label
                htmlFor='driver'
                className='text-white/90 cursor-pointer font-medium'
              >
                Driver
              </Label>
            </motion.div>
          </RadioGroup>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='space-y-2'
        >
          <Label
            htmlFor='name'
            className='text-white/90 flex items-center gap-2'
          >
            <User className='h-4 w-4' />
            Full Name
          </Label>
          <Input
            id='name'
            type='text'
            placeholder='Enter your full name'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className='transition-all duration-300 placeholder:text-white/40'
            style={{
              background: 'hsla(255, 255%, 255%, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid hsla(255, 255%, 255%, 0.2)',
              color: 'white',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='space-y-2'
        >
          <Label
            htmlFor='email'
            className='text-white/90 flex items-center gap-2'
          >
            <Mail className='h-4 w-4' />
            Email Address
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='Enter your email address'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className='transition-all duration-300 placeholder:text-white/40'
            style={{
              background: 'hsla(255, 255%, 255%, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid hsla(255, 255%, 255%, 0.2)',
              color: 'white',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='space-y-2'
        >
          <Label
            htmlFor='mobile'
            className='text-white/90 flex items-center gap-2'
          >
            <Phone className='h-4 w-4' />
            Mobile Number
          </Label>
          <Input
            id='mobile'
            type='tel'
            placeholder='Enter your mobile number'
            value={formData.mobile_number}
            onChange={(e) =>
              setFormData({ ...formData, mobile_number: e.target.value })
            }
            required
            className='transition-all duration-300 placeholder:text-white/40'
            style={{
              background: 'hsla(255, 255%, 255%, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid hsla(255, 255%, 255%, 0.2)',
              color: 'white',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full text-lg py-6 font-semibold relative overflow-hidden group'
            style={{
              background: isSubmitting
                ? 'linear-gradient(135deg, hsl(48, 96%, 40%) 0%, hsl(48, 96%, 35%) 100%)'
                : 'linear-gradient(135deg, hsl(48, 96%, 50%) 0%, hsl(48, 96%, 45%) 100%)',
              color: 'hsl(194, 70%, 25%)',
              border: 'none',
              boxShadow: '0 10px 30px hsla(48, 96%, 50%, 0.4)',
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
            <span className='relative z-10'>
              {isSubmitting ? (
                <motion.div
                  className='flex items-center justify-center gap-2'
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <motion.div
                    className='w-4 h-4 rounded-full'
                    style={{ background: 'hsl(194, 70%, 25%)' }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  Joining...
                </motion.div>
              ) : (
                'Join Waiting List'
              )}
            </span>
          </Button>
        </motion.div>
      </form>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className='text-center text-white/60 text-sm mt-6'
      >
        We respect your privacy. No spam, unsubscribe anytime.
      </motion.p>
    </motion.div>
  )
}
