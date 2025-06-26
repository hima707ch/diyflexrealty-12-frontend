import React from 'react';
import images from '../assets/images';

const TeamProfiles = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: images[1],
      bio: '15+ years of real estate experience'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Operations Officer',
      image: images[2],
      bio: 'Expert in real estate operations'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      image: images[3],
      bio: 'Leading our digital transformation'
    }
  ];

  return (
    <section className="mb-16" id="TeamProfiles_1">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12" id="TeamProfiles_2">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="TeamProfiles_3">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden" id={`TeamProfiles_${index + 4}`}>
            <div className="h-64 relative" id={`TeamProfiles_${index + 7}`}>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
                id={`TeamProfiles_${index + 10}`}
              />
            </div>
            <div className="p-6" id={`TeamProfiles_${index + 13}`}>
              <h3 className="text-xl font-semibold text-gray-800 mb-2" id={`TeamProfiles_${index + 16}`}>
                {member.name}
              </h3>
              <p className="text-gray-600 font-medium mb-2" id={`TeamProfiles_${index + 19}`}>
                {member.role}
              </p>
              <p className="text-gray-500" id={`TeamProfiles_${index + 22}`}>
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamProfiles;
