import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertTriangle, Home } from 'lucide-react'

export default function ErrorPage() {
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1)
    }, 1000)

    const redirect = setTimeout(() => {
      navigate('/')
    }, 3000)

    return () => {
      clearInterval(timer)
      clearTimeout(redirect)
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
        <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          We're sorry, but it seems there was an error. Don't worry, we're redirecting you to the home page.
        </p>
        <div className="text-lg font-semibold text-primary mb-6">
          Redirecting in {countdown} seconds...
        </div>
        <button
          onClick={() => navigate('/')}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center mx-auto"
        >
          <Home className="mr-2" />
          Go to Home Page
        </button>
      </div>
    </div>
  )
}