import { isAuthenticated } from '@/lib/actions/auth.actions';
import { redirect } from 'next/navigation';

import React from 'react'

export default async function Authlayout({children}: {children: React.ReactNode}) {
  const isUserAuthenticated=await isAuthenticated();
    if(isUserAuthenticated) redirect('/')
  return (
    <div>{children}</div>
  )
}
