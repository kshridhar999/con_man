import getUser from '@/app/api/get_user';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const { user = {} } = (await getUser()) || {};

  if (!user.id) {
    redirect('/');
  }

  return <div className='flex-auto'>Dashboard</div>;
}
