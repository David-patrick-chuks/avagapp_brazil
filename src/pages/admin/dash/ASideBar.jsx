import { AiFillSetting } from "react-icons/ai";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { IoCloseCircle, IoGameController, IoLogOut } from "react-icons/io5";
import { LiaClipboardListSolid } from "react-icons/lia";
import { MdHome } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import { useMobile } from "../../../hook/MobileNav";

export default function ASideBar() {

  const location = useLocation()

  const pathSegments = location.pathname.split('/');
  // const check = location.pathname.includes("/teacher/dashboard/game")
  // console.log(check);

  const sideLinks = [
    {
      label: "Home",
      inActive: <MdHome />,
      path: "/admin/dashboard",
    },
    {
      label: "Teacher Management",
      inActive: <FaUserAlt />,
      path: "/admin/dashboard/register-teacher",
    },
    {
      label: "User Management",
      inActive: <FaUserAlt />,
      path: "/admin/dashboard/teacher-management",
    },
    {
      label: "Knowledge Trail",
      inActive: <FaBook />,
      path: "/admin/dashboard/knowledge",
    },
    {
      label: "Leaderboard",
      inActive: <LiaClipboardListSolid />,
      path: "/admin/dashboard/ranking",
    },
    {
      label: "Games",
      inActive: <IoGameController />,
      path: "/admin/dashboard/game",
    },
  ];

  const config = [
    {
      label: "Setting",
      inActive: <AiFillSetting />,
      path: "/admin/dashboard/setting",
    },
    {
      label: "Logout",
      inActive: <IoLogOut />,
      path: "/admin",
    },
  ];
  
  const { toggleMobile, mobile } = useMobile()

  return (

    <>
    {
        mobile && (<><div onClick={toggleMobile} className="w-screen lg:hidden block h-screen bg-opacity-5 z-20 absolute bg-black/50">
            
        </div>
        <IoCloseCircle onClick={() => toggleMobile()} className="size-10 absolute block top-3 right-3 z-50 text-white" />
    </>)
    }
  
  {
                mobile && ( <div 
                  className={`  lg:relative absolute z-50 h-screen lg:h-full flex flex-col lg:w-[22%] bg-bg items-center`}>
                  <div>
                    <img src="/teacher/avag.png" className="size-[110px] " alt="" />
                  </div>
                  <div className="h-full flex flex-col justify-between pb-2 p-2">
                    <div className="flex flex-col gap-1">
                      {sideLinks.map((link, id) => {
            
                        const hrefSegments = link?.path?.split('/');
            
                        return (
                          <NavLink
                            key={id}
                            to={link.path}
                            onClick={toggleMobile}
                            // className={({isActive}) => isActive ? "my-auto flex  p-[10px] rounded-lg  bg-main-dark text-white" : "my-auto flex  p-[10px] rounded-lg  bg-transparent text-black"}
                            className={` ${  pathSegments[3] === hrefSegments[3] && "bg-main-dark text-sm text-white"
                              } my-auto flex  p-[10px] text-sm rounded-lg items-center text-black `}
                          >
                            <span >{link.inActive}</span>
                            <span className="inline  ml-2 ">{link.label}</span>
                          </NavLink>
                        )
                      })}
                    </div>
                    <div className="flex flex-col gap-1">
                      {config.map((link, id) => (
                        <NavLink
                        key={id}
                        onClick={toggleMobile}
                          to={link.path}
                          className={` ${location.pathname === link.path && "bg-main-dark text-sm text-white"
                            } my-auto flex  p-[10px] text-sm rounded-lg items-center text-black `}
                        >
                          <span >{link.inActive}</span>
                          <span className="inline  ml-2 ">{link.label}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>)
  }
    
    <div className="hidden lg:flex flex-col w-[22%] bg-bg items-center">
      <div>
        <img src="/teacher/avag.png" className="size-[110px] " alt="" />
      </div>
      <div className="h-full flex flex-col justify-between pb-2 p-2">
        <div className="flex flex-col gap-1">
          {sideLinks.map((link, id) => {

            const hrefSegments = link?.path?.split('/');

            return (
              <NavLink
                key={id}
                to={link.path}
                // className={({isActive}) => isActive ? "my-auto flex  p-[10px] rounded-lg  bg-main-dark text-white" : "my-auto flex  p-[10px] rounded-lg  bg-transparent text-black"}
                className={` ${  pathSegments[3] === hrefSegments[3] && "bg-main-dark text-sm text-white"
                  } my-auto flex  p-[10px] text-sm rounded-lg items-center text-black `}
              >
                <span >{link.inActive}</span>
                <span className="inline  ml-2 ">{link.label}</span>
              </NavLink>
            )
          })}
        </div>
        <div className="flex flex-col gap-1">
          {config.map((link, id) => (
            <NavLink
              key={id}
              to={link.path}
              className={` ${location.pathname === link.path && "bg-main-dark text-sm text-white"
                } my-auto flex  p-[10px] text-sm rounded-lg items-center text-black `}
            >
              <span >{link.inActive}</span>
              <span className="inline  ml-2 ">{link.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
