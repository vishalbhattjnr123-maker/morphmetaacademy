import React from 'react';

const useCases = [
    { title: '70,000+ learners trained worldwide'},
    { title: 'AI-driven Adaptive Learning Paths'},
    { title: 'Agentic AI Tutors (launching 2025)'},
    { title: 'Interactive eLearning with Live Mentors'}
];

const UseCases: React.FC = () => (
    <section className="bg-white text-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
            <div className="text-left mb-12">
                <h2 className="text-5xl md:text-5xl font-black tracking-tighter mb-6">
                    <span className="block text-stroke">MorphEdTech.com </span>
                    <span className="block">AI-Driven Online Learning</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl">MorphEdTech is MetaSol’s <a target='_blank' href='https://elevenlabs.io/conversational-ai?utm_source=google&utm_medium=cpc&utm_campaign=india_conquest_enterprise_english&utm_id=22801531592&utm_term=five%20nine%20ai&utm_content=enterprise_competitor_-_five9&gad_source=1&gad_campaignid=22801531592&gbraid=0AAAAA_PU6FYheUqnkq78ztkJH0rEm9qf6&gclid=Cj0KCQiA5uDIBhDAARIsAOxj0CHOzNUMIqncLcFjc0yw60RFhwV2f60aaGhfCd5Zxzc2umfrRVqocdsaAgbgEALw_wcB'> AI-powered online platform</a> offering LMS-based learning in IT, Business, and Creative domains.</p>
            </div>
       <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
  {useCases.map((useCase, index) => (
    <div
      key={index}
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
    >
      {/* Gradient Overlay (soft background accent) */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-transparent opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 p-6 text-center">
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text ">
          {useCase.title}
        </h3>
      
      </div>

      {/* Decorative Bottom Border (always visible) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-pink-400"></div>
    </div>
  ))}
</div>


        </div>
    </section>
);

export default UseCases;
