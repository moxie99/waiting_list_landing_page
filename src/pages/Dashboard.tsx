import { useEffect, useState } from 'react'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'
import type { WaitingListEntry } from '@/types/waiting-list'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EmailCampaignManager } from '@/components/EmailCampaignManager'
import { LogOut, Users, Truck } from 'lucide-react'

export default function Dashboard() {
  const [waitingList, setWaitingList] = useState<WaitingListEntry[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchWaitingList()
  }, [])

  const fetchWaitingList = async () => {
    try {
      const { data, error } = await supabase
        .from('waiting_list')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        throw error
      }

      setWaitingList(data || [])
    } catch (error: any) {
      toast({
        title: 'Error',
        description: 'Failed to fetch waiting list data',
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/auth'
  }

  const customers = waitingList.filter(
    (entry) => entry.user_type === 'customer'
  )
  const drivers = waitingList.filter((entry) => entry.user_type === 'driver')

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto'></div>
          <p className='mt-4 text-muted-foreground'>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-background'>
      <header className='border-b'>
        <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Hauler Dashboard</h1>
          <Button onClick={handleLogout} variant='outline'>
            <LogOut className='w-4 h-4 mr-2' />
            Logout
          </Button>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Customers
              </CardTitle>
              <Users className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{customers.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Drivers
              </CardTitle>
              <Truck className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{drivers.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Total Signups
              </CardTitle>
              <Users className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>{waitingList.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue='customers' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='customers'>
              Customers ({customers.length})
            </TabsTrigger>
            <TabsTrigger value='drivers'>
              Drivers ({drivers.length})
            </TabsTrigger>
            <TabsTrigger value='emails'>Email Campaigns</TabsTrigger>
          </TabsList>

          <TabsContent value='customers' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Customer Waiting List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Mobile</TableHead>
                      <TableHead>Joined</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell className='font-medium'>
                          {customer.name}
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.mobile_number}</TableCell>
                        <TableCell>
                          {new Date(customer.created_at).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='drivers' className='space-y-4'>
            <Card>
              <CardHeader>
                <CardTitle>Driver Waiting List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Mobile</TableHead>
                      <TableHead>Joined</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {drivers.map((driver) => (
                      <TableRow key={driver.id}>
                        <TableCell className='font-medium'>
                          {driver.name}
                        </TableCell>
                        <TableCell>{driver.email}</TableCell>
                        <TableCell>{driver.mobile_number}</TableCell>
                        <TableCell>
                          {new Date(driver.created_at).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='emails' className='space-y-4'>
            <EmailCampaignManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
