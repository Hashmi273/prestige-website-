import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../data/projects';
import Modal from '../components/Modal';
import EnquiryForm from '../components/EnquiryForm';
import { Filter } from 'lucide-react';

export default function ProjectsListing() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [typeFilter, setTypeFilter] = useState(searchParams.get('type') || 'All');
  const [statusFilter, setStatusFilter] = useState(searchParams.get('status') || 'All');
  
  const [selectedProjectForEnquiry, setSelectedProjectForEnquiry] = useState(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Sync state if URL query params change
  useEffect(() => {
    const typeFromUrl = searchParams.get('type');
    const statusFromUrl = searchParams.get('status');

    if (typeFromUrl) setTypeFilter(typeFromUrl);
    if (statusFromUrl) setStatusFilter(statusFromUrl);
  }, [searchParams]);

  const handleTypeChange = (type) => {
    setTypeFilter(type);
    const newParams = new URLSearchParams(searchParams);
    if (type === 'All') newParams.delete('type');
    else newParams.set('type', type);
    setSearchParams(newParams);
  };

  const handleStatusChange = (status) => {
    setStatusFilter(status);
    const newParams = new URLSearchParams(searchParams);
    if (status === 'All') newParams.delete('status');
    else newParams.set('status', status);
    setSearchParams(newParams);
  };

  // Filter projects logic
  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesType = typeFilter === 'All' || proj.category === typeFilter;
    const matchesStatus = statusFilter === 'All' || proj.status === statusFilter;
    return matchesType && matchesStatus;
  });

  const handleQuickEnquire = (project) => {
    setSelectedProjectForEnquiry(project);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="space-y-12 py-8">
      
      {/* Page Header Banner */}
      <section className="bg-primary-navy text-white py-14 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-signature-gold/20 text-signature-gold text-xs font-semibold uppercase tracking-widest border border-signature-gold/30">
            Portfolio & Listings
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Our Landmark Projects
          </h1>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Discover engineered residential sky apartments, luxury estates, and commercial office suites built across prime locations.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-navy pb-2 border-b border-slate-100">
            <Filter className="w-4 h-4 text-signature-gold" />
            <span>Filter Properties</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Type Filter */}
            <div>
              <label className="block text-xs font-semibold text-warm-grey mb-1.5 uppercase">Property Type</label>
              <div className="flex flex-wrap gap-2">
                {['All', 'Residential', 'Commercial'].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleTypeChange(type)}
                    className={`text-xs font-medium px-4 py-2 rounded transition-all duration-200 ${
                      typeFilter === type
                        ? 'bg-signature-gold text-white font-semibold shadow'
                        : 'bg-off-white text-primary-navy hover:bg-slate-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-xs font-semibold text-warm-grey mb-1.5 uppercase">Development Status</label>
              <div className="flex flex-wrap gap-2">
                {['All', 'Ready to Move', 'Under Construction', 'Upcoming'].map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusChange(status)}
                    className={`text-xs font-medium px-4 py-2 rounded transition-all duration-200 ${
                      statusFilter === status
                        ? 'bg-primary-navy text-white font-semibold shadow'
                        : 'bg-off-white text-primary-navy hover:bg-slate-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-slate-200">
            <h3 className="font-serif text-xl font-bold text-primary-navy">No Projects Match Selected Filters</h3>
            <p className="text-xs text-warm-grey mt-2">Try clearing your filters to explore all available properties.</p>
            <button
              onClick={() => {
                handleTypeChange('All');
                handleStatusChange('All');
              }}
              className="mt-4 bg-signature-gold text-white text-xs font-semibold px-5 py-2.5 rounded"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onQuickEnquire={handleQuickEnquire}
              />
            ))}
          </div>
        )}
      </section>

      {/* Quick Enquiry Modal */}
      <Modal 
        isOpen={enquiryModalOpen} 
        onClose={() => setEnquiryModalOpen(false)} 
        title={selectedProjectForEnquiry ? `Enquire about ${selectedProjectForEnquiry.name}` : "Property Enquiry"}
      >
        <EnquiryForm 
          defaultProjectSlug={selectedProjectForEnquiry ? selectedProjectForEnquiry.slug : ''} 
          onSuccess={() => setEnquiryModalOpen(false)} 
        />
      </Modal>

    </div>
  );
}
