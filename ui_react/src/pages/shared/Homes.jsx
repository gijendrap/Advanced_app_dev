import { useState } from 'react';
import PropTypes from 'prop-types';

const JobCard = ({ imageSrc, category, title, description }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={imageSrc} alt="blog" />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{category}</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
          <p className="leading-relaxed mb-3">{description}</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-gray-600 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Joblist = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter jobs based on search query
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="flex flex-wrap -m-4">
          {filteredJobs.map(job => (
            <JobCard
              key={job.id}
              imageSrc={job.imageSrc}
              category={job.category}
              title={job.title}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Joblist.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

// Sample jobs data
const jobs = [
  {
    id: "1",
    imageSrc: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    category: "CATEGORY",
    title: "The Catalyzer",
    description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
  },
  {
    id: "1",
    imageSrc: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    category: "CATEGORY",
    title: "The Catalyzer",
    description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
  },
  {
    id: "1",
    imageSrc: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    category: "CATEGORdY",
    title: "qhe Catalyzer",
    description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
  },
  {
    id: "1",
    imageSrc: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    category: "CATEGORY",
    title: "The Catalyzer",
    description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
  },
  // Add more job objects here
];

export default Joblist;
