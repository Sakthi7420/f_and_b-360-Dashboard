import React from "react";
import dashboard from '../components/dashboard.css'
import gwc from "../assets/images/gwc.png"; 
import Competitor from "../assets/images/Competitor.png";
import people from "../assets/images/people.png";
import productivity from "../assets/images/productivity.png"; 
import report from "../assets/images/report.png";
import customer from "../assets/images/customer.png";
import badge from "../assets/images/badge.png";
import inventory from '../assets/images/inventory.png';
import marketing from "../assets/images/marketing.png";
import sales from "../assets/images/sales.png";
import shop from "../assets/images/shop.png";


const Dashboard = () => {
  return (
    <div className="container ">
      <div className="flex items-center justify-center p-10">
        <img
          src={gwc}
          alt="gwc"
          className="w-96 mr-4 transition-transform transform animate-slide-in"
        />
        <h1 className="text-3xl ml-20 font-poppins font-extralight text-purple-900 animate-slide-intext">
          F&B 360 - Domo Dashboard
        </h1>
      </div>

      <div className="w-full h-64 ml-16 md:ml-12">
        <div className="grid grid-cols-5 gap-3 mx-4 my-14">
          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/1705016256/pages/687103398"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={Competitor} alt="Competitor" className="w-32 h-32 animate-left" />
              <h4 className="text-center font-extralight mt-2 animate-left">
                F&B 360 Competitor
              </h4>
            </a>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/68734431/pages/338908792"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={customer} alt="customer" className="w-32 h-32 animate-left" />
              <h4 className="text-center font-extralight opacity-80 mt-2 animate-left">
                F&B 360 Customer
              </h4>
            </a>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/245228482/pages/157596161"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img
                src={productivity}
                alt="productivity"
                className="w-32 h-32 animate-left"
              />
              <h4 className="text-center font-extralight opacity-80 mt-2 animate-left">
                F&B 360 Employee Performance
              </h4>
            </a>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/97086592/pages/1661126832"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={report} alt="report" className="w-32 h-32 animate-left" />
              <h4 className="text-center font-extralight opacity-80 mt-2 animate-left">
                F&B 360 Finance
              </h4>
            </a>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/1850334888/pages/501736475"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={people} alt="people" className="w-32 h-32 animate-left" />
              <h4 className="text-center font-extralight opacity-80 mt-2 animate-left">
                F&B 360 Footfall & Density
              </h4>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-64 ml-16 my-12 md:ml-12">
        <div className="grid grid-cols-5 gap-4 mx-4 my-14">
          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/1361818643/pages/1406952762"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={inventory} alt="inventory" className="w-32 h-32 animate-left" />
              <h4 className="text-center font-extralight opacity-80 mt-2 animate-left">
                F&B 360 Inventory
              </h4>
            </a>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/1843056518/pages/117435591"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={marketing} alt="marketing" className="w-32 h-32 animate-left" />
              <h4 className="text-center font-extralight opacity-80 mt-2 animate-left">
                F&B 360 Marketing
              </h4>
            </a>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/684239757/pages/361450883"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={badge} alt="badge" className="w-32 h-32 animate-left"/>
              <h4 className="text-center font-extralight opacity-80 mt-2 animate-left">
                F&B 360 Quality
              </h4>
            </a>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/310148290/pages/1764091270"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={sales} alt="sales" className="w-32 h-32 animate-left" />
              <h4 className="text-center font-extralight opacity-80 mt-2 animate-left">
                F&B 360 Sales
              </h4>
            </a>
          </div>

          <div className="flex flex-col items-center transition-transform transform hover:scale-110 ease-in-out">
            <a
              href="https://gwcteq-partner.domo.com/app-studio/1963720252/pages/1407521636"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <img src={shop} alt="shop" className="w-32 h-32 animate-left" />
              <h4 className="text-center font-extralight opacity-80 mt-2 animate-left">
                F&B 360 Francise
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
