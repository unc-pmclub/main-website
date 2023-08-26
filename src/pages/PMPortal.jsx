import React from "react";
import PortalHeader from "../partials/PortalHeader";
import ListContainer from "../partials/PortalListContainer";

function PMPortal() {
  // This is a placeholder for the user's name, to be replaced with user'sn name
  const userName = "John Doe";

  const aboutSection = [
    {
      listItems: [
        {
          name: "This is a page for members to quickly access PM and PM Club related materials.",
        },
      ],
    },
  ];

  // Structure for containers with multiple sections, no item description
  const quickLinksSection = [
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
        { name: "Miro", link: "https://www.miro.com/", internal: false },
        { name: "Figma", link: "https://www.figma.com", internal: false },
      ],
    },
  ];

  // Structure for containers with one section with item descriptions
  const jobPostingsSection = [
    {
      listItems: [
        {
          name: "Job Posting 1",
          link: "#",
          internal: false,
          description: "Product Management",
        },
        {
          name: "Job Posting 2",
          link: "#",
          internal: false,
          description: "Software Engineering",
        },
        {
          name: "Job Posting 3",
          link: "#",
          internal: false,
          description: "Product Management",
        },
      ],
    },
  ];

  const pmLabSection = [
    {
      listItems: [
        {
          name: "Working with Figma",
          link: "#",
          internal: false,
          description: "A brief video on the basic functionality of Figma",
        },
        {
          name: "Being a successful Project Manager",
          link: "#",
          internal: false,
          description:
            "A video overviewing how to be a good Project Manager in Lab",
        },
      ],
    },
  ];

  const pmRecruitingSection = [
    {
      listItems: [
        {
          name: "Atlassian APM Guide",
          link: "#",
          internal: false,
          description: "I will think of a description later",
        },
        {
          name: "Google APM Interview Guide",
          link: "#",
          internal: false,
          description: "I will think of this description later-er",
        },
        {
          name: "MongoDB 2023 Summer Intern Guide",
          link: "#",
          internal: false,
          description: "I will think of this description later-er-er",
        },
      ],
    },
  ];

  // Structure for containers with multiple sections and descriptions
  const additionalLearningSection = [
    {
      title: "Podcasts",
      listItems: [
        {
          name: "Spotify: A Product Story",
          link: "#",
          internal: false,
          description: "blah blah blah",
        },
        {
          name: "The Product Podcast",
          link: "#",
          internal: false,
          description: "blah blah blah",
        },
        {
          name: "Product Talk",
          link: "#",
          internal: false,
          description: "blah blah blah",
        },
        {
          name: "NN/g UX Podcast",
          link: "#",
          internal: false,
          description: "blah blah blah",
        },
      ],
    },
    {
      title: "Articles & Guides",
      listItems: [
        {
          name: "Asana",
          link: "#",
          internal: false,
          description: "blah blah blah",
        },
        {
          name: "Atlassian",
          link: "#",
          internal: false,
          description: "blah blah blah",
        },
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
        {/* Quick Links */}
        <div className="md:row-span-3">
          <ListContainer title="Quick Links" sections={quickLinksSection} />
        </div>
        {/* Job Postings */}
        <div className="md:row-span-3 md:col-start-1 md:row-start-4">
          <ListContainer title="Job Postings" sections={jobPostingsSection} />
        </div>
        {/* About */}
        <div className="md:row-span-2 md:col-start-5 md:row-start-1">
          <ListContainer title="About this Page" sections={aboutSection} />
        </div>
        {/* Additional Learning */}
        <div className="md:row-span-4 md:col-start-5 md:row-start-3">
          <ListContainer
            title="Additional Learning"
            sections={additionalLearningSection}
          />
        </div>
        {/* PM Lab Resources */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-2 md:row-start-1">
          <ListContainer title="PM Lab Resources" sections={pmLabSection} />
        </div>
        {/* PM Recruiting & Interviewing */}
        <div className="md:col-span-3 md:row-span-3 md:col-start-2 md:row-start-3">
          <ListContainer
            title="PM Recruiting & Interviewing Resources"
            sections={pmRecruitingSection}
          />
        </div>
      </div>
    </div>
  );
}

export default PMPortal;
