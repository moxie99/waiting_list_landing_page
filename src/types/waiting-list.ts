export type UserType = 'customer' | 'driver'

export interface WaitingListEntry {
  id: string
  name: string
  email: string
  mobile_number: string
  user_type: UserType
  created_at: string
  updated_at: string
}
