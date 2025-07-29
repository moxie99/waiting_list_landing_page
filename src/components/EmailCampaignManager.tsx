/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'
import type { UserType } from '@/types/waiting-list'
import { Mail, Plus, Send } from 'lucide-react'

interface EmailCampaign {
  id: string
  title: string
  content: string
  target_audience: UserType
  is_active: boolean
  created_at: string
}

export function EmailCampaignManager() {
  const [campaigns, setCampaigns] = useState<EmailCampaign[]>([])
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    target_audience: 'customer' as UserType,
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchCampaigns()
  }, [])

  const fetchCampaigns = async () => {
    try {
      const { data, error } = await supabase
        .from('email_campaigns')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      setCampaigns(data || [])
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to fetch email campaigns',
        variant: 'destructive',
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        throw new Error('User not authenticated')
      }

      const { error } = await supabase.from('email_campaigns').insert([
        {
          ...formData,
          created_by: user.id,
        },
      ])

      if (error) {
        throw error
      }

      toast({
        title: 'Success!',
        description: 'Email campaign created successfully',
      })

      setFormData({
        title: '',
        content: '',
        target_audience: 'customer',
      })
      setShowForm(false)
      fetchCampaigns()
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const toggleCampaignStatus = async (
    campaignId: string,
    isActive: boolean
  ) => {
    try {
      const { error } = await supabase
        .from('email_campaigns')
        .update({ is_active: !isActive })
        .eq('id', campaignId)

      if (error) {
        throw error
      }

      toast({
        title: 'Success!',
        description: `Campaign ${
          !isActive ? 'activated' : 'deactivated'
        } successfully`,
      })

      fetchCampaigns()
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    }
  }

  const triggerScheduledEmails = async () => {
    try {
      setLoading(true)

      const response = await fetch(
        'https://iwrrcthakebxscrslqmt.supabase.co/functions/v1/send-scheduled-emails',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3cnJjdGhha2VieHNjcnNscW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3ODMwMjYsImV4cCI6MjA2OTM1OTAyNn0.T5sbyQKKBSqlTRamXhSb4Z5a3qGrJlo-6Rhy82U96QQ`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!response.ok) {
        throw new Error('Failed to trigger scheduled emails')
      }

      const result = await response.json()

      toast({
        title: 'Success!',
        description: `Emails sent successfully! ${result.totalEmailsSent} emails were sent.`,
      })
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to send emails',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-2xl font-bold'>Email Campaigns</h2>
          <p className='text-muted-foreground'>
            Manage automated emails for customers and drivers
          </p>
        </div>
        <div className='flex space-x-2'>
          <Button
            onClick={triggerScheduledEmails}
            disabled={loading}
            variant='outline'
          >
            <Send className='w-4 h-4 mr-2' />
            Send Now
          </Button>
          <Button onClick={() => setShowForm(!showForm)}>
            <Plus className='w-4 h-4 mr-2' />
            New Campaign
          </Button>
        </div>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create Email Campaign</CardTitle>
            <CardDescription>
              Create a new email campaign that will be sent every Tuesday and
              Thursday
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='title'>Email Subject</Label>
                <Input
                  id='title'
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder='Enter email subject line'
                  required
                />
              </div>

              <div className='space-y-2'>
                <Label>Target Audience</Label>
                <RadioGroup
                  value={formData.target_audience}
                  onValueChange={(value: UserType) =>
                    setFormData({ ...formData, target_audience: value })
                  }
                >
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='customer' id='target-customer' />
                    <Label htmlFor='target-customer'>Customers</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='driver' id='target-driver' />
                    <Label htmlFor='target-driver'>Drivers</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='content'>Email Content</Label>
                <Textarea
                  id='content'
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder='Enter the email content...'
                  rows={6}
                  required
                />
              </div>

              <div className='flex space-x-2'>
                <Button type='submit' disabled={loading}>
                  {loading ? 'Creating...' : 'Create Campaign'}
                </Button>
                <Button
                  type='button'
                  variant='outline'
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className='flex items-center space-x-2'>
            <Mail className='w-5 h-5' />
            <span>Active Campaigns</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Audience</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell className='font-medium'>
                    {campaign.title}
                  </TableCell>
                  <TableCell className='capitalize'>
                    {campaign.target_audience}s
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={campaign.is_active ? 'default' : 'secondary'}
                    >
                      {campaign.is_active ? 'Active' : 'Inactive'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(campaign.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      size='sm'
                      variant='outline'
                      onClick={() =>
                        toggleCampaignStatus(campaign.id, campaign.is_active)
                      }
                    >
                      {campaign.is_active ? 'Deactivate' : 'Activate'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
