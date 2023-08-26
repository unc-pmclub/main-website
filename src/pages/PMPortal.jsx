import React from "react";
import PortalHeader from "../partials/PortalHeader";
import ListContainer from "../partials/PortalListContainer";

function PMPortal() {
  // This is a placeholder for the user's name, replace with actual name once you implement auth flow
  const userName = "John Doe";
  const quickLinksSections = [
    {
      title: "General",
      listItems: [
        { name: "Profile", link: "#", internal: true },
        { name: "Submit Feedback", link: "#", internal: true },
        { name: "Submit a Resource", link: "#", internal: true },
      ],
    },
    {
      title: "Tools",
      listItems: [
        {
          name: "Confluence",
          link: "https://www.atlassian.com/software/confluence",
          internal: false,
        },
        {
          name: "Jira",
          link: "https://www.atlassian.com/software/jira",
          internal: false,
        },
        { name: "Miro", link: "https://www.miro.com/", internal: true },
        { name: "Figma", link: "https://www.figma.com", internal: true },
      ],
    },
  ];

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-start bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url(dist/assets/layered-waves-haikei.png)",
      }}
    >
      <PortalHeader />
      <div className="text-center mt-20 relative">
        <h1
          className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Welcome Back,
        </h1>
        <h2
          className="text-4xl md:text-5xl font-extrabold leading-tighter tracking-tighter"
          data-aos="zoom-y-out"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">
            {userName}
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-6 gap-8 max-w-6xl mx-auto mt-12 overflow-auto">
        <div className="md:row-span-3">
          <ListContainer title="Quick Links" sections={quickLinksSections} />
        </div>
        <div className="md:row-span-3 md:col-start-1 md:row-start-4">
          <div className="bg-white rounded shadow-lg p-4">
            <div className="bg-red-500 text-white font-bold p-2 rounded-t-lg">
              Job Postings
            </div>
            <div className="text-black p-2">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:row-span-2 md:col-start-5 md:row-start-1">
          <div className="bg-white rounded shadow-lg p-4">
            <div className="bg-red-500 text-white font-bold p-2 rounded-t-lg">
              About this Page
            </div>
            <div className="text-black p-2">
              <p>
                This is a page for members to quickly access PM (Club) related
                materials.
              </p>
            </div>
          </div>
        </div>
        <div className="md:row-span-4 md:col-start-5 md:row-start-3">
          <div className="bg-white rounded shadow-lg p-4">
            <div className="bg-red-500 text-white font-bold p-2 rounded-t-lg">
              Additional Learning
            </div>
            <div className="text-black p-2">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 md:row-span-2 md:col-start-2 md:row-start-1">
          <div className="bg-white rounded shadow-lg p-4">
            <div className="bg-red-500 text-white font-bold p-2 rounded-t-lg">
              PM Lab Resources
            </div>
            <div className="text-black p-2">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 md:row-span-3 md:col-start-2 md:row-start-3">
          <div className="bg-white rounded shadow-lg p-4">
            <div className="bg-red-500 text-white font-bold p-2 rounded-t-lg">
              PM Recruiting & Interviewing Resources
            </div>
            <div className="text-black p-2">
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PMPortal;
