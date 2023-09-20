import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as StarWarsLogo} from '../../assets/starWars.svg';
import {ReactComponent as DashboardLogo} from '../../assets/dashboard.svg';
import {ReactComponent as BuildingLogo} from '../../assets/building.svg';


const Sidebar = ({ setHeaderText }) => {
  return (
    <div className="w-1/6 bg-white px-4 pl-4 border-r-3 text-sm  border-white-smoke">
      <StarWarsLogo className='my-4'/>
      <nav className="mt-8">
        <ul className="space-y-6">
          <li className='svg flex items-center  text-inactive hover:text-black'>
            <DashboardLogo className="svg"/>
            <Link to="/dashboard" className='pl-3' onClick={() => setHeaderText('DashBoard')}>Dashboard</Link>
          </li>
          <li className='svg flex items-center  text-inactive hover:text-black'>
            <BuildingLogo className="svg"/>
            <Link to="/dashboard/starships" className='pl-3' onClick={() => setHeaderText('Starships')}>Starships</Link>
          </li>
          <li className='svg flex items-center  text-inactive  hover:text-black'>
            <DashboardLogo className="svg"/>  
            <Link to="/dashboard/people" className='pl-3' onClick={() => setHeaderText('People')}>People</Link>
          </li>
          <li className='svg flex items-center  text-inactive hover:text-black'>
            <DashboardLogo className="svg"/>
            <Link to="/dashboard/vehicles" className='pl-3' onClick={() => setHeaderText('Vehicles')}>Vehicles</Link>
          </li>
          <li className='svg flex items-center  text-inactive hover:text-black'>
            <DashboardLogo className="svg"/>
            <Link to="/dashboard/species" className='pl-3'>Species</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar