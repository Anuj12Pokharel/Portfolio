import { AiFillDribbbleCircle } from "react-icons/ai";  // Importing Dribbble circle icon for all skills

import { DiHtml5 } from "react-icons/di";  // HTML icon
import { SiGit, SiCss3, SiMysql, SiAmazonaws } from "react-icons/si";  // Git, CSS, MySQL, AWS icons

export const Skills = [
  {
    slug: "python",
    Component: AiFillDribbbleCircle,  // Using Dribbble icon for Python
    title: "Python",
    Description: () => <>Python</>,
  },
  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },
  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "AWS Lambda",
    Description: () => <>Lambda functions for creating APIs</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },

  // Using Dribbble icon for React
  {
    slug: "react",
    Component: AiFillDribbbleCircle,  // Using Dribbble icon for React
    title: "React",
    Description: () => <>Frontend library for building user interfaces</>,
  },

  // Using Dribbble icon for Node.js
  {
    slug: "nodejs",
    Component: AiFillDribbbleCircle,  // Using Dribbble icon for Node.js
    title: "Node.js",
    Description: () => <>JavaScript runtime for building backend applications</>,
  },

  // Using Dribbble icon for Machine Learning
  {
    slug: "machine-learning",
    Component: AiFillDribbbleCircle,  // Using Dribbble icon for Machine Learning
    title: "Machine Learning",
    Description: () => <>Building AI models for tasks like classification and regression</>,
  },
];
