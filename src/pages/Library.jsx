import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function Library() {
  return (
    <div>
      <Header />
      <div className="px-6 md:px-16 py-12">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-12">បណ្ណាល័យ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/photos" className="p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">រូបភាព</h2>
            <p className="text-gray-600">មើលរូបភាពអនុស្សាវរីយ៍ទាំងអស់</p>
          </Link>
          <Link to="/videos" className="p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">វីដេអូ</h2>
            <p className="text-gray-600">មើលវីដេអូទាំងអស់</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Library