// TODO:
// - Modify implementation to take in "type" from section data and display list or paragraph

import React from "react";

function ListContainer({ title, sections }) {
  return (
    <div className="bg-white rounded shadow-lg relative">
      <div className="bg-red-500 text-white font-bold p-2 rounded-t-lg absolute top-0 left-0 w-full">
        {title}
      </div>
      <div className="text-black p-2 pt-10">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.title && (
              <strong className="block text-lg mb-2 mt-2">
                {section.title}
              </strong>
            )}
            <ul className="divide-y divide-gray-300">
              {section.listItems.map((item, index) => (
                <li key={index} className="py-2">
                  <a
                    href={item.link}
                    target={item.internal ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="text-black hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                  {item.description && (
                    <p className="text-gray-600 ml-4">{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
