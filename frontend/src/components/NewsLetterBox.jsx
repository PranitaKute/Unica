import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now and get 20% off
        </p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem corrupti minima eius reiciendis ducimus quisquam ea cupiditate cum quo. Eos provident nobis alias optio saepe dolorum beatae amet nostrum debitis.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex-items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox


{/* Instead of newsletter, we can have Why Shop from... Or something else */}
