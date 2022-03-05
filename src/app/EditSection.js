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

    const { sections, editSection } = useContext(GlobalContext);

    const [selectedUser, setSelectedUser] = useState({
        id: null,
        name: "",
        designation: "",
        location: "",
        sections: null,
    });

    const currentUserId = route.match.params.id;

    useEffect(() => {
        const sectionId = currentUserId;
        const selectedUser = sections.find(
            (currentSectionTraversal) => currentSectionTraversal.id === parseInt(sectionId)
        );
        setSelectedUser(selectedUser);
    }, [currentUserId, sections]);

    const onSubmit = (e) => {
        e.preventDefault();
        editSection(selectedUser.id);
        history.push("/");
        setSelectedUser(prevState => {
          return { ...prevState, sections: prevState.sections}
        })
    };

    const handleOnChange = (userKey, newValue) => setSelectedUser({ ...selectedUser, [userKey]: newValue});
    
    if(!selectedUser || !selectedUser.id) {
        return <div>Invalid Section ID.</div>;
    }

    return (
        <React.Fragment>
          <div className="w-full container mt-20 mx-auto">
            <form onSubmit={onSubmit}>
              <div className="w-full mb-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name of Section
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                  value={selectedUser.name}
                  onChange={(e) => handleOnChange("name", e.target.value)}
                  type="text"
                  placeholder="Enter name"
                />
              </div>
              <div className="w-full  mb-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                  value={selectedUser.location}
                  onChange={(e) => handleOnChange("location", e.target.value)}
                  type="text"
                  placeholder="Enter location"
                />
              </div>
              <div className="w-full  mb-5">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="designation"
                >
                  Designation
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                  value={selectedUser.designation}
                  onChange={(e) => handleOnChange("designation", e.target.value)}
                  type="text"
                  placeholder="Enter designation"
                />
              </div>
              <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="flex-grow text-left px-4 py-2 m-2">
                <h5 className="text-gray-900 font-bold text-xl">Section Listing</h5>
            </div>
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                            <tr>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SN</th>
                              <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Add</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">

{/* ----------------------------Item List Start COPY------------------------ */}          
<tr>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 h-40 w-50 shadow">
                                    <img class="h-30 w-full " src={SectionGeorgiaPreview} alt="" />
                                  </div>
                                  
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Section Georgia</div>
                                <div class="text-sm text-gray-500">Grid Description List</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800"> Beta </span>
                                {/* Component Development Status
                                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black-800"> Testing </span>

                                */}

                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S04-P1</td>
                              {/* Pricing Levels as Structure
                                    S = Labels that it is sections
                                    01 = is the Template Id for Developers
                                    P = Premuim Price
                                    1 = Premium Price level
                              */}
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button href="#" class="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                                value={sections}
                                //onClick={(e) => handleOnChange(SectionGeorgia, e.target.value)}
                                type="submit"
                                >Add Section</button>
                              </td>
                            </tr>
                             {/* ----------------------------Item List END COPY------------------------ */}
                            {/* ----------------------------Item List Start COPY------------------------ */}          
                            <tr>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 h-40 w-50 shadow">
                                    <img class="h-40 w-full rounded-full" src={SectionFloriaPreview} alt="" />
                                  </div>
                                  
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Section Florida</div>
                                <div class="text-sm text-gray-500">Grid Description List</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800"> Beta </span>
                                {/* Component Development Status
                                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black-800"> Testing </span>

                                */}

                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S01-P1</td>
                              {/* Pricing Levels as Structure
                                    S = Labels that it is sections
                                    01 = is the Template Id for Developers
                                    P = Premuim Price
                                    1 = Premium Price level
                              */}
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button href="#" class="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                                value={sections}
                                //onClick={() => setSection(SectionFlComponent)}
                                type="submit"
                                >Add Section</button>
                              </td>
                            </tr>
                             {/* ----------------------------Item List END COPY------------------------ */}
                             {/* ----------------------------Item List Start COPY------------------------ */}          
                             <tr>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 h-40 w-50 shadow">
                                    <img class="h-40 w-full rounded-full" src={FeaturedCardPreview} alt="" />
                                  </div>
                                  
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Feature Card</div>
                                <div class="text-sm text-gray-500">Section Card Highlighting<br></br> Key Information or Product</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800"> Beta </span>
                                {/* Component Development Status
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black-800"> Testing </span>

                                */}

                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S02-S3</td>
                              {/* Pricing Levels as Structure
                                    S = Labels that it is sections
                                    02 = is the Template Id for Developers
                                    S = Standard Price
                                    3 = Price level
                              */}
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button href="#" class="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                                value={sections}
                                //onClick={() => setSection(featuredCardCompent)}
                                type="submit"
                                >Add Section</button>
                              </td>
                            </tr>
                            {/* ----------------------------Item List END COPY------------------------ */}
                            {/* ----------------------------Item List Start COPY------------------------ */}          
                            <tr>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                  <div class="flex-shrink-0 h-40 w-50 shadow">
                                    <img class="h-40 w-full " src={QuickLinksPreview} alt="" />
                                  </div>
                                  
                                </div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">Quick Links</div>
                                <div class="text-sm text-gray-500">Multi Card Quick Links<br></br>for Description and links</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap">
                                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-white-800"> Beta </span>
                                {/* Component Development Status
                                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-black-800"> Constrution </span>
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-black-800"> Testing </span>

                                */}

                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">S03-S5</td>
                              {/* Pricing Levels as Structure
                                    S = Labels that it is sections
                                    02 = is the Template Id for Developers
                                    S = Standard Price
                                    3 = Price level
                              */}
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button href="#" class="bg-green-400 w-mt hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"                
                                value={selectedUser.sections}
                                onClick={() => handleOnChange("sections", QuickLinks)}
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
              <div className="flex items-center justify-between">
                <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                  Edit Employee
                </button>
              </div>
              <div className="text-center mt-4 text-gray-500">
                <Link to="/">Cancel</Link>
              </div>
            </form>
          </div>
        </React.Fragment>
      );
};