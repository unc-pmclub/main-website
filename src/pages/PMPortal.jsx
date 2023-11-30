import React from "react";
import PortalHeader from "../partials/PortalHeader";
import ListContainer from "../partials/PortalListContainer";
import useAuth from "../auth/use-auth";
import Footer from "../partials/Footer";
import backgroundImage from "../images/layered-waves-haikei.png";

function PMPortal() {
  const { user, loading } = useAuth();
  // Remove once Profile section is complete
  // const [ modalInfo, setModalInfo ] = useState({ open: false, header: '', message: ''});

  if (loading) {
      return <div>Loading...</div>;
  }
  const userName = user ? user.displayName : "User";

  const aboutSection = [
    {
      listItems: [
        {
          name: "Welcome to PM Portal 1.0! This page is meant to serve as a living hub of PM Club and PM-related resources. Some of these resources have been specially curated for PM Club members, so please do not share anything on this page with non-PM Club members (or speak to an exec member before a doing so).",
        },
        {
          name: "As a living hub, we welcome any feedback or suggestions. If you have feedback/suggestions relating to the website, use the 'Submit Feedback' form. If you would like to share a resource, please use the 'Submit a Resource' form. Both links can be found in the 'Quick Links' section. "
        }
      ],
    },
  ];

  // Structure for containers with multiple sections, no item description
  const quickLinksSection = [
    {
      title: "General",
      listItems: [
        { name: "Profile", link: "#", internal: true, description: "(Coming Soon)"},
        { name: "Submit Feedback", link: "https://forms.gle/hi5PUh4Y4uBjVSVq7", internal: false },
        { name: "Submit a Resource", link: "https://forms.gle/fjawweAYYGVjCay56", internal: false },
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
          name: "APM List",
          link: "https://apmlist.com/",
          internal: false,
          description: "List of PM roles/internships",
        },
        {
          name: "Software Engineering Intern - WillowTree",
          link: "https://boards.greenhouse.io/willowtree/jobs/6905972002",
          internal: false,
          description: "Summer 2024",
        },
        {
          name: "Product Analyst (PM) Intern - WillowTree ",
          link: "https://boards.greenhouse.io/willowtree/jobs/6905966002",
          internal: false,
          description: "Summer 2024",
        },
      ],
    },
  ];

  const pmLabSection = [
    {
      listItems: [
        {
          name: "Working with Figma",
          link: import.meta.env.VITE_PMCLUB_WORKING_WITH_FIGMA,
          internal: false,
          description: "A brief video on the basic functionality of Figma.",
        },
        {
          name: "What is a Project Manager",
          link: import.meta.env.VITE_PMCLUB_BEING_PROJECT_MANAGER,
          internal: false,
          description:
            "A video overviewing how to be a good Project Manager in Lab.",
        },
        {
          name: "Atlassian JIRA & Confluence Overview",
          link: import.meta.env.VITE_PMCLUB_JIRA_CONFLUENCE_TUTORIAL,
          internal: false,
          description: "A video introducing common features and functionality of JIRA & Confluence, two widely-used tools in the field of Product Management/Software Development."
        }
      ],
    },
  ];

  const pmRecruitingSection = [
    {
      listItems: [
        {
          name: "Atlassian APM Guide",
          link: import.meta.env.VITE_ATLASSIAN_APM_GUIDE,
          internal: false,
          description: "Link to Atlassian's Campus Associate Product Manager Interview Guide.",
        },
        {
          name: "Google Interview Guide for Product Management",
          link: import.meta.env.VITE_GOOGLE_PM_INTERVIEW_GUIDE,
          internal: false,
          description: "Google's interview guide for Product Manager roles.",
        },
        {
          name: "MongoDB 2023 Summer Intern Guide",
          link: import.meta.env.VITE_MONGO_DB_SUMMER23_INTERN_GUIDE,
          internal: false,
          description: "Presentation going over the application process for technical internships at MongoDB.",
        },
        {
          name: "Gummadi's PM Recruiting Guide",
          link: import.meta.env.VITE_GUMMADI_PM_RECRUITING_GUIDE,
          internal: false,
          description: "Detailed learnings and advice from a UMich Alumni turned Google PM."
        },
        {
          name: "11/16 PM Club x WillowTree Panel Recording",
          link: import.meta.env.VITE_WILLOW_TREE_PANEL,
          internal: false,
          description: "Recording of the 11/16 Panel with WillowTree. (Password = $t3?.3pD)"
        }
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
          name: "Product Talk: (EP 252) MongoDB PM on Data-Driven Product Management",
          link: "https://open.spotify.com/episode/3HCHtdrNztFgEcN94IU8le?si=GKeADvgvQuKA4wIkYz68xA",
          internal: false,
          description: "Episode of the Product Talk podcast featuring a MongoDB PM talking about their approach to data-driven product management.",
        },
        {
          name: "NN/g UX Podcast",
          link: "https://open.spotify.com/show/3GFTfWpfv6m8nhKsPOlT8m?si=95fdf4b5156d497a",
          internal: false,
          description: 'Podcast from Nielsen Normal group covering UX "research, design, strategy, and professions."',
        },
      ],
    },
    {
      title: "Articles & Guides",
      listItems: [
        {
          name: "Asana Resources Blog",
          link: "https://asana.com/resources",
          internal: false,
          description: "Collection of articles and guides from Asana covering concepts pertaining to agile project management, goals, and industry insights."
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
      className="flex flex-col min-h-screen items-center justify-start overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom'
      }}
    >
      <PortalHeader />
      <div className="text-center mt-20 pt-20 relative">
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
      <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-5 gap-6 max-w-6xl mx-auto mt-12 overflow-auto">
        {/* Quick Links */}
        <div className="md:row-span-2">
          <ListContainer title="Quick Links" sections={quickLinksSection} />
        </div>
        {/* Job Postings */}
        <div className="md:row-span-3 md:col-start-1 md:row-start-3">
          <ListContainer title="Job Postings" sections={jobPostingsSection} />
        </div>
        {/* About */}
        <div className="md:row-span-2 md:col-start-5 md:col-span-6 md:row-start-1">
          <ListContainer title="About this Page" sections={aboutSection} />
        </div>
        {/* PM Recruiting & Interview Resources */}
        <div className="md:row-span-2 md:col-start-5 md:col-span-6 md:row-start-3">
          <ListContainer
            title="PM Recruiting Resources"
            sections={pmRecruitingSection}
          />
        </div>
        {/* PM Lab Resources */}
        <div className="md:col-span-3 md:row-span-3 md:col-start-2 md:row-start-1">
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
      <Footer invertTextColor={true}/>
    </div>
  );
}

export default PMPortal;
