// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
// const Contact = () => {

//   const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('http://localhost:5000/send-email', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();
//     alert(data.message);
//   }

//   // Delay helper
//   const baseDelay = 0.25;
//   let count = 0;

//   const getDelay = () => baseDelay * ++count;

//   return (
//     <div className='relative w-full flex flex-col md:flex-row gap-6 text-white py-10 px-4 sm:px-6 max-h-[84vh] overflow-y-scroll '>
      
//       <div className='w-[30vw] h-screen border-r border-[#ffffff32] flex flex-col gap-2'>

//         {/* <motion.div
//           className='w-[60%] h-[2vh] bg-red-500'
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//         />

//         <div className='flex gap-2'>
//           <motion.div
//             className='w-[20%] h-[2vh] bg-green-300'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[60%] h-[2vh] bg-cyan-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>

//         <div className='flex gap-2'>
//           <motion.div
//             className='w-[60%] h-[2vh] bg-yellow-300'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[30%] h-[2vh] bg-cyan-300'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>

//         <div className='flex gap-2'>
//           <motion.div
//             className='w-[25%] h-[2vh] bg-white'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[30%] h-[2vh] bg-cyan-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>

//         <div className='flex gap-2'>
//           <motion.div
//             className='w-[15%] h-[2vh] bg-green-400'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[40%] h-[2vh] bg-yellow-400'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[15%] h-[2vh] bg-red-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>


//          <div className='flex gap-2'>
//           <motion.div
//             className='w-[40%] h-[2vh] bg-gray-600'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[20%] h-[2vh] bg-cyan-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[25%] h-[2vh] bg-purple-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>

//          <div className='flex gap-2'>
//           <motion.div
//             className='w-[40%] h-[2vh] bg-yellow-300'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[30%] h-[2vh] bg-white'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />


//            <div className='flex gap-2'>
//           <motion.div
//             className='w-[20%] h-[2vh] bg-amber-600'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[40%] h-[2vh] bg-cyan-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[15%] h-[2vh] bg-red-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>
        
//         </div>
//          <div className='flex gap-2'>
//           <motion.div
//             className='w-[20%] h-[2vh] bg-green-400'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[40%] h-[2vh] bg-yellow-400'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[15%] h-[2vh] bg-red-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>



//            <div className='flex gap-2'>
//           <motion.div
//             className='w-[15%] h-[2vh] bg-green-400'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[40%] h-[2vh] bg-yellow-400'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[10%] h-[2vh] bg-white'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>


//            <div className='flex gap-2'>
//           <motion.div
//             className='w-[20%] h-[2vh] bg-cyan-600'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[40%] h-[2vh] bg-yellow-400'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[15%] h-[2vh] bg-red-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>

//          <div className='flex gap-2'>
//           <motion.div
//             className='w-[20%] h-[2vh] bg-green-400'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[40%] h-[2vh] bg-cyan-400'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//           <motion.div
//             className='w-[15%] h-[2vh] bg-red-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />
//         </div>

//           <motion.div
//             className='w-[45%] h-[2vh] bg-cyan-300'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />

          
//           <motion.div
//             className='w-[35%] h-[2vh] bg-white'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />

          
//           <motion.div
//             className='w-[65%] h-[2vh] bg-purple-500'
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
//           />

//       </div> */}
//       </div>



//       <div className='w-full h-full '>

//         <div className='text-white flex items-center justify-center mb-2'>
//           <span className='text-white font-mono text-2xl'>CONTACT ME</span>
//         </div>

//           <div>
//                 <form onSubmit={handleSubmit}>
//                   <div className='w-full flex justify-center items-center flex-col gap-5'>
//                    <input className="focus:outline-none border bg-[#ffffff07] w-[50vw] px-2 py-2 rounded-xs" type="text" name="name" placeholder="Name" onChange={handleChange} required />
//                    <input className="focus:outline-none border bg-[#ffffff07] w-[50vw] px-2 py-2 rounded-xs" type="email" name="email" placeholder="Email" onChange={handleChange} required />
//                    <textarea className="focus:outline-none border bg-[#ffffff07] w-[50vw] h-[20vh] px-2 py-2 resize-none rounded" name="message" placeholder="Your message" onChange={handleChange} required />
//                    <button className="focus:outline-none bg-blue-600 w-[50vw] px-2 py-2 hover:bg-blue-500 hover:transition rounded" type="submit">Send</button>

//                    <div className='flex gap-50 text-4xl'>
//                     <div><a href="https://github.com/SauravDutta002 " target='_blank'><FaGithub/></a></div>
//                     <div><a href="https://www.linkedin.com/in/saurav-dutta-450355315/" target='_blank' ><FaLinkedin/></a></div>
//                     <div><a href="mailto:sauravdutta0219@gmail.com" aria-label="Send Email" target='_blank' ><IoMdMail/></a></div>
//                    </div>
//                   </div>
//                 </form>
//           </div>
          
//       </div>









//     </div>
//   );
// };

// export default Contact;





import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const baseDelay = 0.25;
  let count = 0;

  const getDelay = () => baseDelay * ++count;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    // <div className="w-full  flex flex-col-reverse md:gap-0 gap-5 md:flex-row text-white py-10 px-4 sm:px-6  h-[100vh] overflow-y-scroll ">
   <div className='relative w-full flex flex-col md:flex-row gap-6 text-white md:py-10 px-4 py-6 sm:px-6 max-h-[84vh] overflow-y-scroll md:right-0  right-2.5'>

      {/* Sidebar (Optional Animation Area - Hidden on smaller screens) */}
      <div className=" md:flex w-full md:w-[30%] h-auto md:h-screen border-r border-[#ffffff32] flex-col space-y-3 md:space-y-0 md:gap-2 pr-4">
        {/* Add motion.div animations here if needed */}

          <motion.div
          className='w-[60%] ml-4 md:ml-0 h-[2vh]  bg-red-500'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
        />

        <div className='ml-4 flex gap-2'>
          <motion.div
            className='w-[20%] h-[2vh] bg-green-300'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[60%] h-[2vh] bg-cyan-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>

        <div className='ml-10 flex gap-2'>
          <motion.div
            className=' w-[40%] h-[2vh] bg-yellow-300'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[30%] h-[2vh] bg-cyan-300'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>

        <div className='hidden md:ml-4 md:flex md:gap-2'>
          <motion.div
            className='w-[25%] h-[2vh] bg-white'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[30%] h-[2vh] bg-cyan-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>

        <div className='ml-8 flex gap-2'>
          <motion.div
            className='w-[15%] h-[2vh] bg-green-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[40%] h-[2vh] bg-yellow-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[15%] h-[2vh] bg-red-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>


         <div className='ml-5 flex gap-2'>
          <motion.div
            className='w-[40%] h-[2vh] bg-gray-600'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[20%] h-[2vh] bg-cyan-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[25%] h-[2vh] bg-purple-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>

         <div className=' ml-2 flex gap-2'>
          <motion.div
            className='w-[20%] h-[2vh] bg-blue-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[20%] h-[2vh] bg-white'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />


           <div className='flex gap-2'>
          <motion.div
            className='w-[20%] h-[2vh] bg-amber-600'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[40%] h-[2vh] bg-cyan-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[15%] h-[2vh] bg-red-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>
        
        </div>
         <div className=' ml-5 flex gap-2'>
          <motion.div
            className='w-[20%] h-[2vh] bg-green-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[40%] h-[2vh] bg-yellow-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[15%] h-[2vh] bg-red-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>



           <div className='ml-10 flex gap-2'>
          <motion.div
            className='w-[15%] h-[2vh] bg-blue-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[40%] h-[2vh] bg-yellow-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[10%] h-[2vh] bg-white'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>


           <div className='hidden md:ml-12 md:flex md:gap-2'>
          <motion.div
            className='w-[20%] h-[2vh] bg-cyan-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[40%] h-[2vh] bg-yellow-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[15%] h-[2vh] bg-red-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>

         <div className='ml-8 flex gap-2'>
          <motion.div
            className='w-[20%] h-[2vh] bg-green-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[40%] h-[2vh] bg-cyan-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[15%] h-[2vh] bg-red-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>

           <div className='hidden md:ml-6 md:flex md:gap-2'>
          <motion.div
            className='w-[10%] h-[2vh] bg-blue-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[55%] h-[2vh] bg-cyan-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[15%] h-[2vh] bg-blue-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>

          
    <div className='hidden md:ml-2 md:flex md:gap-2'>
          <motion.div
            className='w-[20%] h-[2vh] bg-indigo-500'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[40%] h-[2vh] bg-white'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
          <motion.div
            className='w-[15%] h-[2vh] bg-purple-400'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />
        </div>

          
          <motion.div
            className='w-[25%] h-[2vh] bg-red-500 ml-4 md:ml-0'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, ease: 'easeIn', delay: getDelay() }}
          />

      </div> 

      {/* Form Section */}
      <div className="w-full md:w-[70%] flex flex-col justify-start items-center">

        <h2 className="text-3xl font-bold mb-6 text-center">CONTACT ME</h2>

        <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col gap-5 px-4">
          <input 
            className="w-full px-4 py-2 bg-[#ffffff07] border border-white/20 rounded focus:outline-none"
            type="text" name="name" placeholder="Name" onChange={handleChange} required 
          />
          <input 
            className="w-full px-4 py-2 bg-[#ffffff07] border border-white/20 rounded focus:outline-none"
            type="email" name="email" placeholder="Email" onChange={handleChange} required 
          />
          <textarea 
            className="w-full h-20 px-4 py-2 bg-[#ffffff07] border border-white/20 rounded resize-none focus:outline-none"
            name="message" placeholder="Your message" onChange={handleChange} required 
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded text-white"
          >
            Send
          </button>

          <div className="flex justify-center items-center gap-8 text-3xl mt-4">
            <a href="https://github.com/SauravDutta002" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/saurav-dutta-450355315/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:sauravdutta0219@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><IoMdMail /></a>
          </div>
        </form>

      </div>
      </div>
    
      

    
  );
};

export default Contact;
