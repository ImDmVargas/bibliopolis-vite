import "./../../index.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";

function SidebarUsers() {
  return (
    <Fragment>
      <div className="flex">
        <div className="fixed top-0 left-0 h-screen w-48 flex flex-col bg-bbPrimary text-bbWhite">
          <div class="flex items-center justify-center m-8">
            <img
              src="../../public/isologo.png"
              alt="Isologo de Bibliopolis"
              height={90}
              width={88}
            />
          </div>
          <ul className="mb-2">
            <Link
              to={"/usuarios"}
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-bbWhite hover:text-bbPrimaryTwo"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-bbWhite">
                <i class="material-symbols-outlined">home</i>
              </span>
              <span class=" text-xl font-medium font">Inicio</span>
            </Link>
          </ul>

          <ul className="mt-2 mb-2">
            <Link
              to={"/misprestamos"}
              class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-bbWhite hover:text-gray-800"
            >
              <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-bbWhite">
                <i class="material-symbols-outlined">receipt</i>
              </span>
              <span class=" text-xl font-medium font">Préstamos</span>
            </Link>
          </ul>

         
        </div>
      </div>
    </Fragment>
  );
}

export default SidebarUsers;
