import React from 'react'
import PropTypes from 'prop-types'

function Header(props:{text:string}) {
  return (
    <div className='w-fit mx-auto'>
        <div className='text-slate-200 text-4xl font-sans font-semibold my-4 px-4 py-2 border-4 border-stone-400 bg-stone-800 bg-opacity-75 rounded-full'>
            {props.text}
        </div>
    </div>
  )
}

Header.propTypes = {

}

export default Header

