import { MdPeople, MdQueryStats, MdReport, MdSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Button from "../reUse/Button";
import { FaBarsProgress } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

const Sider = () => {
  const dispatch = useDispatch();
  const toggleText = useSelector((state: any) => state.toggleText);

  return (
    <div className="w-full border-r bg-white text-blue-900 flex flex-col ">
      <div className="w-full flex justify-center">
        <div className="mt-5 w-20 h-20 object-cover flex border rounded-full items-center justify-center ">
          Logo
        </div>
      </div>

      {/* top box */}
      <div className="mt-10 px-2 text-center flex flex-col border mx-2 rounded-md py-2">
        <div className="mb-0 text-[14px] font-medium">
          Your Annual subscription for you and your Family is:
          <br />
          <strong></strong>
        </div>
      </div>

      {/* top box */}
      <div className="mt-5 px-2 text-center flex flex-col border mx-2 rounded-md py-4">
        <div className="mb-4 text-[18px] font-medium">
          You are currently on an{" "}
        </div>
        <div className="flex w-full justify-center">
          {/* <NavLink to="upgrade"> */}

          <Button
            name="You can't Add Member Now"
            className="bg-black text-white border-none font-medium  leading-tight"
            onClick={() => {
              // onHandleClick();
            }}
          />

          {/* </NavLink> */}
        </div>
      </div>

      {/* Nav Links */}
      <div className="w-full flex justify-center">
        <div className="transition-all duration-300 text-center text-[12px] font-medium mt-3 w-[90%] ">
          {toggleText ? (
            <div>A new member has been added to your family list</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {/* Settings */}
      <div className="mt-16 px-2 flex flex-col h-[90%]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          Stats
          <MdQueryStats />
        </NavLink>
        <NavLink
          to="/view-family"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          View Families
          <MdPeople />
        </NavLink>
        <NavLink
          to="/appointments"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          Book Appointment
          <FaBarsProgress />
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-2 flex items-center justify-between "
          }
        >
          View Medical History
          <MdReport />
        </NavLink>

        <div className="flex-1" />

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-2 flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-2"
          }
        >
          Settings
          <MdSettings />
        </NavLink>
      </div>
    </div>
  );
};

export default Sider;
