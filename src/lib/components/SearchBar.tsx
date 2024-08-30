import React from 'react'

const SearchBar = (props:{searchQueryValue:string, changeSearchQuery:(value:string)=>void}) => {
  const handleInputChange = (e:{target:{value:string}}) => {
    // console.log(e.target.value);
    props.changeSearchQuery(e.target.value);
  }

  return (
    <div 
    className='text-center'>
      <div className='font-semibold font-serif'>
        Filter Questions
      </div>
      <div >
        <input value={props.searchQueryValue} onChange={handleInputChange}
        className='border-2 border-stone-500 font-semibold text-sm h-fit w-fit text-black text-center' />
      </div>
    </div>
  )
}

export default SearchBar
