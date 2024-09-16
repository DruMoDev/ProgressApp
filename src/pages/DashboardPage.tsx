import useUserProfile from "../hooks/useUserProfile"
import { Activity, Calendar, Clipboard, TrendingUp, User, Weight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DashboardPage() {
  const { profile } = useUserProfile()

  console.log("DashboardPage");
  

  // Placeholder data (replace with actual data from your app)
  const recentWorkouts = [
    { date: '2023-06-01', name: 'Full Body Workout' },
    { date: '2023-05-29', name: 'Cardio Session' },
    { date: '2023-05-27', name: 'Leg Day' },
  ]

  return (
    <div className="flex-grow bg-gray-100 pt-32 pb-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {profile?.name || profile?.email || 'Fitness Enthusiast'}!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Weight className="text-primary mr-2" />
                <span>Current Weight: {profile?.weight || 'Not set'} kg</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="text-success mr-2" />
                <span>Goal Weight: {profile?.target_weight || 'Not set'} kg</span>
              </div>
              <div className="flex items-center">
                <Activity className="text-warning mr-2" />
                <span>Workouts This Week: 3</span>
              </div>
            </div>
          </div>

          {/* Recent Workouts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Workouts</h2>
            <ul className="space-y-2">
              {recentWorkouts.map((workout, index) => (
                <li key={index} className="flex items-center">
                  <Calendar className="text-primary mr-2" />
                  <span>{workout.date}: {workout.name}</span>
                </li>
              ))}
            </ul>
            <Link to="/sessions" className="text-primary hover:underline mt-4 inline-block">
              View all workouts
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="space-y-4">
              <Link 
                to="/routines" 
                className="flex items-center justify-between bg-primary text-white p-3 rounded-md hover:bg-primary-dark transition duration-300"
              >
                <span>Start a Workout</span>
                <Clipboard size={20} />
              </Link>
              <Link 
                to="/profile" 
                className="flex items-center justify-between bg-secondary text-white p-3 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                <span>Update Profile</span>
                <User size={20} />
              </Link>
              <Link 
                to="/sessions/new" 
                className="flex items-center justify-between bg-success text-white p-3 rounded-md hover:bg-opacity-90 transition duration-300"
              >
                <span>Log a Workout</span>
                <Activity size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}