/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'
import type { UserType } from '@/types/waiting-list'

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
    <Card className='w-full max-w-md mx-auto'>
      <CardHeader>
        <CardTitle>Join the Waiting List</CardTitle>
        <CardDescription>
          Be the first to know when Hauler launches in your area
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <Label>I am a:</Label>
            <RadioGroup
              value={formData.user_type}
              onValueChange={(value: UserType) =>
                setFormData({ ...formData, user_type: value })
              }
            >
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='customer' id='customer' />
                <Label htmlFor='customer'>Customer</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='driver' id='driver' />
                <Label htmlFor='driver'>Driver</Label>
              </div>
            </RadioGroup>
          </div>

          <div className='space-y-2'>
            <Label htmlFor='name'>Full Name</Label>
            <Input
              id='name'
              type='text'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              id='email'
              type='email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='mobile'>Mobile Number</Label>
            <Input
              id='mobile'
              type='tel'
              value={formData.mobile_number}
              onChange={(e) =>
                setFormData({ ...formData, mobile_number: e.target.value })
              }
              required
            />
          </div>

          <Button type='submit' className='w-full' disabled={isSubmitting}>
            {isSubmitting ? 'Joining...' : 'Join Waiting List'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
