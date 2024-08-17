import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
const Sidebar = () => {

  const [extended, setExtended] = useState(false)
  const {onSent,prevPrompts,setRecentPrompt} = useContext(Context)
  const loadPrompt=async(prompt)=>{
    setRecentPrompt(prompt)
   await onSent(prompt)
  }
  return (

    <div className='sidebar'>

      <div className='top'>
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img  src={assets.plus_icon} alt="" />
          {extended ? <p>NEW Chat</p> : null}
        </div>  
        {extended ?
          <div className="recent">
            <p className='recent-title'>Recent</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div className="recent-entry"  >
              <img src={assets.message_icon} alt="" />
              <p>{item.slice(0,18)}  ...</p>
            </div>
              )
            })}
            
          </div>
          : null
          }

      </div>

      <div className='bottom'>
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
         {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended?<p>Settings</p>:null}
        </div>
      </div>

    </div>
  )
}

export default Sidebar





// import React, { useContext, useState } from 'react';
// import './Sidebar.css';
// import { assets } from '../../assets/assets';
// import { Context } from '../../context/Context';

// const Sidebar = () => {
//   const [extended, setExtended] = useState(false);
//   const { onSent, prevPromts, setRecentPrompt } = useContext(Context);

//   return (
//     <div className='sidebar'>
//       <div className='top'>
//         <img
//           onClick={() => setExtended(prev => !prev)}
//           className='menu'
//           src={assets.menu_icon}
//           alt="Menu Icon"
//         />
//         <div className="new-chat">
//           <img src={assets.plus_icon} alt="Plus Icon" />
//           {extended ? <p>NEW Chat</p> : null}
//         </div>
//         {extended && (
//           <div className="recent">
//             <p className='recent-title'>Recent</p>
//             {Array.isArray(prevPromts) && prevPromts.length > 0 ? (
//               prevPromts.map((item, index) => (
//                 <div className="recent-entry" key={index}>
//                   <img src={assets.message_icon} alt="Message Icon" />
//                   <p>{item}...</p>
//                 </div>
//               ))
//             ) : (
//               <p>No recent prompts</p>
//             )}
//           </div>
//         )}
//       </div>

//       <div className='bottom'>
//         <div className="bottom-item recent-entry">
//           <img src={assets.question_icon} alt="Help Icon" />
//           {extended ? <p>Help</p> : null}
//         </div>
//         <div className="bottom-item recent-entry">
//           <img src={assets.history_icon} alt="History Icon" />
//           {extended ? <p>Activity</p> : null}
//         </div>
//         <div className="bottom-item recent-entry">
//           <img src={assets.setting_icon} alt="Settings Icon" />
//           {extended ? <p>Settings</p> : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




// import React, { useContext, useState } from 'react';
// import './Sidebar.css';
// import { assets } from '../../assets/assets';
// import { Context } from '../../context/Context';

// const Sidebar = () => {
//   const [extended, setExtended] = useState(false);
//   const { onSent, prevPromts, setRecentPrompt } = useContext(Context);

//   // Debugging logs
//   console.log('extended:', extended);
//   console.log('prevPromts:', prevPromts);

//   return (
//     <div className='sidebar'>
//       <div className='top'>
//         <img
//           onClick={() => setExtended(prev => !prev)}
//           className='menu'
//           src={assets.menu_icon}
//           alt="Menu Icon"
//         />
//         <div className="new-chat">
//           <img src={assets.plus_icon} alt="Plus Icon" />
//           {extended ? <p>NEW Chat</p> : null}
//         </div>
//         {extended && (
//           <div className="recent">
//             <p className='recent-title'>Recent</p>
//             {Array.isArray(prevPromts) && prevPromts.length > 0 ? (
//               prevPromts.map((item, index) => (
//                 <div className="recent-entry" key={index}>
//                   <img src={assets.message_icon} alt="Message Icon" />
//                   <p>{item}...</p>
//                 </div>
//               ))
//             ) : (
//               <p>No recent prompts</p>
//             )}
//           </div>
//         )}
//       </div>

//       <div className='bottom'>
//         <div className="bottom-item recent-entry">
//           <img src={assets.question_icon} alt="Help Icon" />
//           {extended ? <p>Help</p> : null}
//         </div>
//         <div className="bottom-item recent-entry">
//           <img src={assets.history_icon} alt="History Icon" />
//           {extended ? <p>Activity</p> : null}
//         </div>
//         <div className="bottom-item recent-entry">
//           <img src={assets.setting_icon} alt="Settings Icon" />
//           {extended ? <p>Settings</p> : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
