// TODO: 
//  - Modify About section (and possibly PortalListContainer component) to allow for messages with no links (see website)
//  - Adjust vertical spacing between sections (see website)

import React from "react";
import PortalHeader from "../partials/PortalHeader";
import ListContainer from "../partials/PortalListContainer";
import useAuth from "../auth/use-auth";

function PMPortal() {
  // This is a placeholder for the user's name, to be replaced with user'sn name
  const { user, loading } = useAuth();

  if (loading) {
      return <div>Loading...</div>;
  }
  const userName = user ? user.displayName : "User";

  const aboutSection = [
    {
      listItems: [
        {
          name: "Welcome to PM Portal 1.0! This page is meant to serve as a living hub of PM Club and PM-related resources. Some of these resources have been specially curated for PM Club members, so please do not share anything on this page with non-PM Club members (or speak to an exec member before a resource).",
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
          name: "What is a Project Manager",
          link: "https://drive.google.com/file/d/10eZfv2dFZR_nAGYVziWJkUqCKNw0gd52/view?usp=sharing",
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
          link: "https://drive.google.com/file/d/1TW0St_yVXyl1yUkLKEJzX0ozpA3fqOAW/view?usp=sharing",
          internal: false,
          description: "Link to Atlassian's Campus Associate Product Manager Interview Guide.",
        },
        {
          name: "Google Interview Guide for Product Management",
          link: "https://drive.google.com/file/d/1TW0St_yVXyl1yUkLKEJzX0ozpA3fqOAW/view?usp=sharing",
          internal: false,
          description: "Google's interview guide for Product Manager roles",
        },
        {
          name: "MongoDB 2023 Summer Intern Guide",
          link: "https://docs.google.com/presentation/d/1otnYAqUSIeOf1X3e7maHMjvJuLL9Gyw6JqF3HFHZa9Q/edit?usp=sharing",
          internal: false,
          description: "Presentation overviewing the application process for technical internships at MongoDB.",
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
          link: "https://open.spotify.com/show/3L9tzrt0CthF6hNkxYIeSB?si=ee96eb8a01e74bf4",
          internal: false,
          description: "Multi-part podcast series from Spotify covering the product decisions that created the revered streaming app.",
        },
        {
          name: "The Product Podcast",
          link: "https://open.spotify.com/show/1XBrhVLsQOIAv3KFBqnzrX?si=c9b0673a80ed492a",
          internal: false,
          description: "A podcast covering all things PM (product insights, career tips, and more).",
        },
        {
          name: "Product Talk: MongoDB PM on Data-Driven Product Management",
          link: "#",
          internal: false,
          description: "Episode of the Product Talk podcast featuring a MongoDB PM talking about their approach to data-driven product management.",
        },
        {
          name: "NN/g UX Podcast",
          link: "https://open.spotify.com/show/3GFTfWpfv6m8nhKsPOlT8m?si=95fdf4b5156d497a",
          internal: false,
          description: "Podcast from Nielsen Normal group covering UX 'research, design, strategy, and professions.'",
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
          name: "Atlassian Agile Product Management Guide",
          link: "https://www.atlassian.com/agile/product-management",
          internal: false,
          description: "Mini-wiki from Atlassian with tips for new Product Managers and articles on more advanced topics.",
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
        <div className="md:row-span-2 md:col-start-5 md:col-span-6 md:row-start-1">
          <ListContainer title="About this Page" sections={aboutSection} />
        </div>
        {/* PM Recruiting & Interview Resources */}
        <div className="md:row-span-4 md:col-start-5 md:col-span-6 md:row-start-3">
          <ListContainer
            title="PM Recruiting & Interviewing Resources"
            sections={pmRecruitingSection}
          />
        </div>
        {/* PM Lab Resources */}
        <div className="md:col-span-3 md:row-span-2 md:col-start-2 md:row-start-1">
          <ListContainer title="PM Lab Resources" sections={pmLabSection} />
        </div>
        {/* Additional Learning */}
        <div className="md:col-span-3 md:row-span-3 md:col-start-2 md:row-start-3">
          <ListContainer
            title="Additional Learning"
            sections={additionalLearningSection}
          />
        </div>
      </div>
    </div>
  );
}

export default PMPortal;
