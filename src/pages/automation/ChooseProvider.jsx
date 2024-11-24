import React from 'react'

const aws_ses_symbol = "https://media.licdn.com/dms/image/v2/C5612AQEf4wZaJ3qYIQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1633352441445?e=2147483647&v=beta&t=ZWcXAjHDjz4rj4YMzH_I4U-OrnfnCHnOSOCbY7-JaxU"
const spark_post_symbol = "https://saviynt.com/hubfs/Saviynt/root/Sparkpost.png"


function ChooseProvider({ input }) {
  return (
    <div className='mb-4 cursor-pointer'>
      <p className='mb-2 font-semibold'>{input.name}</p>
      <div className='flex gap-4'>
        <div className={`flex items-center bg-brand-background/10 rounded-xl px-4 w-40 ${input.value == 'aws_ses' ? 'border-[#febe10] bg-[#febe1020]' : ''} border`}
          onClick={() => input.onChange('aws_ses')}
        >
          <img src={aws_ses_symbol} />
        </div>

        <div className={`flex items-center bg-brand-background/30 rounded-xl px-4 w-40 ${input.value == 'spark_post' ? 'border-[#fa6423] bg-[#fa642320]' : ''} border`}
          onClick={() => input.onChange('spark_post')}

        >
          <img src={spark_post_symbol} />
        </div>
      </div>
      <p className='text-red-500 font-normal text-xs mt-1 '>{input.error?.message}</p>
    </div>
  )
}

export default ChooseProvider