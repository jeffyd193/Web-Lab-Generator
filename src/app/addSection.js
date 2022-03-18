import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { GlobalContext } from './GlobalState';

import NoPreview from './images/noimage.jpg';

import FeaturedCard from '../components/sections/featured_card/featuredCard';
import FeaturedCardPreview from './images/feature-card.jpg';

import QuickLinks from '../components/sections/quick_links/quickLinks';
import QuickLinksPreview from './images/quick-link.jpg';

import SectionFlorida from '../components/sections/section_florida/sectionFlorida';
import SectionFloriaPreview from './images/section-florida.jpg';

import SectionGeorgia from '../components/sections/section_georgia/SectionGeorgia';
import SectionGeorgiaPreview from './images/section-ga.jpg';

import SectionHawaii from '../components/sections/section_hawaii/SectionHawaii';


export const AddSection = () => {
    let history = useHistory();
    
    const { addSection, sections } = useContext(GlobalContext);
    const [section, setSection] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newSection = {
            id: sections.length + 1,
            
            section,
        };
        addSection(newSection);
        history.push("/")
    };
//**********Notes****** */
//Make scrollable Section

    return (
        <React.Fragment>
          <div className="w-full max-w-xlg container mt-20 mx-auto">
            <form onSubmit={onSubmit}>
              
               
          {/* ----------------------------Test Section------------------------ */}


        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="flex-grow text-left px-4 py-2 m-2">
                <h5 className="text-gray-900 font-bold text-xl">Section Listing</h5>
            </div>
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SN</th>
                              <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Add</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">

{/* ----------------------------Item List Start COPY------------------------ */}          
<tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-40 w-50 shadow">
                                    <img className="h-30 w-full " src={SectionGeorgiaPreview} alt="" />
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
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S04-P1</td>
                              {/* Pricing Levels as Structure
                                    S = Labels that it is sections
                                    01 = is the Template Id for Developers
                                    P = Premuim Price
                                    1 = Premium Price level
                              */}
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button href="#" className="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                                value={sections}
                                onClick={() => setSection(SectionGeorgia)}
                                type="submit"
                                >Add Section</button>
                              </td>
                            </tr>
                             {/* ----------------------------Item List END COPY------------------------ */}
                             {/* ----------------------------Item List Start COPY------------------------ */}          
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-40 w-50 shadow">
                                    <img className="h-40 w-full rounded-full" src={NoPreview} alt="" />
                                  </div>
                                  
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Section Hawaii</div>
                                <div className="text-sm text-gray-500">Tiles with Description List</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
                                {/* Component Development Status
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800"> Beta </span>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black-800"> Testing </span>

                                */}

                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S00-P0</td>
                              {/* Pricing Levels as Structure
                                    S = Labels that it is sections
                                    01 = is the Template Id for Developers
                                    P = Premuim Price
                                    1 = Premium Price level
                              */}
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button href="#" className="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                                value={sections}
                                onClick={() => setSection(SectionHawaii)}
                                type="submit"
                                >Add Section</button>
                              </td>
                            </tr>
                             {/* ----------------------------Item List END COPY------------------------ */}
                            {/* ----------------------------Item List Start COPY------------------------ */}          
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-40 w-50 shadow">
                                    <img className="h-40 w-full rounded-full" src={SectionFloriaPreview} alt="" />
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
                                    01 = is the Template Id for Developers
                                    P = Premuim Price
                                    1 = Premium Price level
                              */}
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button href="#" className="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                                value={sections}
                                onClick={() => setSection(SectionFlorida)}
                                type="submit"
                                >Add Section</button>
                              </td>
                            </tr>
                             {/* ----------------------------Item List END COPY------------------------ */}
                             {/* ----------------------------Item List Start COPY------------------------ */}          
                             <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-40 w-50 shadow">
                                    <img className="h-40 w-full rounded-full" src={FeaturedCardPreview} alt="" />
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
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
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
                              <button href="#" className="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                                value={sections}
                                onClick={() => setSection(FeaturedCard)}
                                type="submit"
                                >Add Section</button>
                              </td>
                            </tr>
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
                              <button href="#" className="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                                value={sections}
                                onClick={() => setSection(QuickLinks)}
                                type="submit"
                                >Add Section</button>
                              </td>
                            </tr>
                            {/* ----------------------------Item List END COPY------------------------ */}       
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
                                   
         {/* ----------------------------Test Section------------------------ */}
            <div className="flex justify-center m-10">
            <button className="bg-red-500 hover:bg-red-700 hover:text-slate-400 font-bold py-2 px-4 rounded">
                <Link className="hover:text-slate-400 text-white" to="/">Cancel</Link>
            </button>
            </div>
              
        
            
                  {/* Test Section */}  
            </form>
          </div>

       
        </React.Fragment>
      );
};