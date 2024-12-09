import React from 'react'
import LoginLeftPart from './LoginLeftPart'
import LoginForm from './LoginIds'

function Login() {
  return (
    <div className="flex h-[100vh]  ">
      <LoginLeftPart />
      <LoginForm />
    </div>
  );
}

export default Login