import React from 'react'
import LoginLeftPart from './LoginLeftPart'
import LoginForm from './LoginForm'

function Login() {
  return (
    <div className="flex h-[100vh]  ">
      <LoginLeftPart />
      <LoginForm />
    </div>
  );
}

export default Login