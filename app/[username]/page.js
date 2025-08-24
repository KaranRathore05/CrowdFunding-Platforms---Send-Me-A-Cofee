import React from 'react'

const Username = ({ params }) => {
  return (<>
    <div className=" relative">


      {/* Cover image */}
      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/18.gif?token-hash=Mh-B5X0fAjX72C_3Ggf-nQMUUe4b4Os4Y0qll01wqq4%3D&token-time=1756944000"
          alt="cover"
        />
      </div>

      {/* Avatar centered */}
      <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 border-white border-1 rounded-full">
        <img
          className="rounded-full"
          width={100}
          height={100}
          src="https://tse1.explicit.bing.net/th/id/OIP.8fpHVhZ6JkDx5YVC3yYALAAAAA?r=0&cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="avatar"
        />
      </div>
    </div>
    <div className="info flex justify-centre items-center my-21 flex-col gap-2">
      <div className='font-bold text-lg'>
        @{params.username}
      </div>

      <div className="text-slate-400">

        Creating animated profile page for VIT's

        <div className="text-slate-400">
          9719 members . 88 posts  .$15,121/realse
        </div>
      </div>
      <div className="payment flex gap-3 w-[80%] mt-11">
        <div className="supporters bg-slate-900 rounded-b-lg text-white w-1/2 p-10">
          <h2 className='text-2xl  font-bold my-5'>Supporters</h2>
          <ul className='mx-4'>
            <li className='my-2'>karan donated $23 with message of "keep growing"</li>
            <li className='my-2'>karan donated $23 with message of "keep growing"</li>
            <li className='my-2'>karan donated $23 with message of "keep growing"</li>
            <li className='my-2'>karan donated $23 with message of "keep growing"</li>
          </ul>

        </div>
        <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
          <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
          <div className="flex gap-2">
            {/* Input for name and message */}
            <input type="text" className="w-full p-3 rounded-lg bg-slate-800 placeholder:Enter Name" placeholder="Enter Name" />
            <input type="text" className="w-full p-3 rounded-lg bg-slate-800 placeholder:Enter Message" placeholder="Enter Message" />
          
          <input type="text" className="w-full p-3 rounded-lg bg-slate-800 placeholder:Enter Amount" placeholder="Enter Amount" />
          <button className="bg-slate-800 p-3 rounded-lg">Pay</button>
        </div>
      </div></div>

    </div>
  </>
  )
}

export default Username
