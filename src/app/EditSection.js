import React, { useState, useContext, useEffect} from "react";
import { useHistory, Link } from "react-router-dom";

import { GlobalContext } from "./GlobalState";

import FeaturedCard from '../components/sections/featured_card/featuredCard';
import FeaturedCardPreview from './images/feature-card.jpg';

import QuickLinks from '../components/sections/quick_links/quickLinks';
import QuickLinksPreview from './images/quick-link.jpg';

import SectionFlorida from '../components/sections/section_florida/sectionFlorida';
import SectionFloriaPreview from './images/section-florida.jpg';

import SectionGeorgia from '../components/sections/section_georgia/SectionGeorgia';
import SectionGeorgiaPreview from './images/section-ga.jpg';


export const EditSection = (route) => {
  let history = useHistory();

  const quickLinks = <QuickLinks />
  const featuredCard = <FeaturedCard />
  const sectionFlorida = <SectionFlorida />
  const sectionGeorgia = {
    section: <SectionGeorgia />,
    price: 20,
  }
  // 
  const { sections, editSection } = useContext(GlobalContext);

  const [selectedSection, setSelectedSection] = useState({
    id: null,
    section: null,
    price: null,
  });

  const currentSectionId = route.match.params.id;

  useEffect(() => {
    const sectionId = currentSectionId;
    const selectedSection = sections.find(
      (currentSectionTraversal) => currentSectionTraversal.id === parseInt(sectionId)
    );
    setSelectedSection(selectedSection);
  }, [currentSectionId, sections]);

  const onSubmit = (e) => {
    e.preventDefault();
    editSection(selectedSection);
    history.push("/");
    console.log("selectedSection id",selectedSection.section, selectedSection.id)
  };

  const handleOnClick = (userKey, newValue) => setSelectedSection({ ...selectedSection, [userKey]: newValue });

  if (!selectedSection || !selectedSection.id) {
    return <div>Invalid Employee ID.</div>;
  }
    
    return (
        <React.Fragment>
          
          <div className="w-full container mt-20 mx-auto">
            <form onSubmit={onSubmit}>

              <table>
                <tbody>
                {/* ----------------------------Item List Start COPY------------------------ */}          
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">

                      <div className="flex items-center">

                        <div className="flex-shrink-0 h-40 w-50 shadow">
                          <img className="h-40 w-full " src={SectionGeorgiaPreview} alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Section Georgia</div>
                      <div className="text-sm text-gray-500">Grid Description List</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800"> Beta </span>
                        {/* Component Development Status
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black-800"> Testing </span>
                        */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S03-S5</td>
                      {/* Pricing Levels as Structure
                            S = Labels that it is sections
                            02 = is the Template Id for Developers
                            S = Standard Price
                            3 = Price level
                      */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                      
                      onClick={() => handleOnClick("section", sectionGeorgia)}
                      
                      type="submit"
                      >Change Section</button>
                      
                    </td>
                  </tr>
                  {console.log("Selected section", selectedSection)}
                  {/* ----------------------------Item List END COPY------------------------ */}
                  {/* ----------------------------Item List Start COPY------------------------ */}          
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">

                      <div className="flex items-center">

                        <div className="flex-shrink-0 h-40 w-50 shadow">
                          <img className="h-40 w-full " src={SectionFloriaPreview} alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Section Florida</div>
                      <div className="text-sm text-gray-500">Grid Description List</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800"> Beta </span>
                        {/* Component Development Status
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black-800"> Testing </span>
                        */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S01-P1</td>
                      {/* Pricing Levels as Structure
                            S = Labels that it is sections
                            02 = is the Template Id for Developers
                            S = Standard Price
                            3 = Price level
                      */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                      
                      onClick={() => handleOnClick("section", sectionFlorida)}
                      
                      type="submit"
                      >Change Section</button>
                      
                    </td>
                  </tr>
                  {console.log("Selected section", selectedSection)}
                  {/* ----------------------------Item List END COPY------------------------ */}
                  {/* ----------------------------Item List Start COPY------------------------ */}          
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">

                      <div className="flex items-center">

                        <div className="flex-shrink-0 h-40 w-50 shadow">
                          <img className="h-40 w-full " src={FeaturedCardPreview} alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Feature Card</div>
                      <div className="text-sm text-gray-500">Section Card Highlighting<br></br> Key Information or Product</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800"> Beta </span>
                        {/* Component Development Status
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black-800"> Testing </span>
                        */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S02-S3</td>
                      {/* Pricing Levels as Structure
                            S = Labels that it is sections
                            02 = is the Template Id for Developers
                            S = Standard Price
                            3 = Price level
                      */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                      
                      onClick={() => handleOnClick("section", featuredCard)}
                      
                      type="submit"
                      >Change Section</button>
                      
                    </td>
                  </tr>
                  {console.log("Selected section", selectedSection)}
                  {/* ----------------------------Item List END COPY------------------------ */}
                  {/* ----------------------------Item List Start COPY------------------------ */}          
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">

                      <div className="flex items-center">

                        <div className="flex-shrink-0 h-40 w-50 shadow">
                          <img className="h-40 w-full " src={QuickLinksPreview} alt="" />
                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">Quick Links</div>
                      <div className="text-sm text-gray-500">Multi Card Quick Links<br></br>for Description and links</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800"> Beta </span>
                        {/* Component Development Status
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black-800"> Testing </span>
                        */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S03-S5</td>
                      {/* Pricing Levels as Structure
                            S = Labels that it is sections
                            02 = is the Template Id for Developers
                            S = Standard Price
                            3 = Price level
                      */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                      
                      onClick={() => handleOnClick("section", quickLinks)}
                      
                      type="submit"
                      >Change Section</button>
                      
                    </td>
                  </tr>
                  {console.log("Selected section", selectedSection)}
                  {/* ----------------------------Item List END COPY------------------------ */}       
                </tbody>
              </table>

              <div className="flex justify-center m-10">
                <button className="bg-red-500 hover:bg-red-700 hover:text-slate-400 font-bold py-2 px-4 rounded">
                    <Link className="hover:text-slate-400 text-white" to="/">Cancel</Link>
                </button>
              </div>

            </form>
          </div>
        </React.Fragment>
      );
};