import React from 'react'

const Input = (props: any) => {
  return (
    <div>
      <label htmlFor={props.name} className='block text-sm font-medium leading-6 text-gray-900'>{props.text}</label>
      <div className="mt-2">
        <input type={props.type} id={props.name} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.handleOnChange} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
      </div>
    </div>
  )
}

export default Input