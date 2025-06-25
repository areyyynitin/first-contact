import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight, FaSearch } from 'react-icons/fa';

const faqs = [
  {
    question: 'Where does my money go ?',
    answer: `Honestly? Even I’m trying to find out.It comes, it waves, and then it vanishes like a magician.Mostly on food, random subscriptions I forgot to cancel, and stuff I definitely didn’t need from online shopping.Pretty sure my wallet has a secret escape tunnel.`
  },
  {
    question: 'Is my money safe?',
    answer: 'Yes, your money is securely handled through encrypted payment systems.'
  },
  {
    question: 'Can I cancel my monthly donation ?',
    answer: 'Absolutely. You can cancel anytime from your account settings.'
  },
  {
    question: 'Do I get a tax Receipt ?',
    answer: 'Yes, we send tax receipts via email after each donation.'
  },
  {
    question: 'Can I donate anonymously ?',
    answer: 'Yes, just select "Donate Anonymously" at checkout.'
  }
];

const Qna = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState('');

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='min-h-screen px-6 sm:px-20 py-10 bg-[#f5f3ff] text-gray-800'>
      <h1 className='text-4xl sm:text-5xl font-bold text-center mb-8 text-[#5e5199]'>
        Frequently Asked Questions (FAQ)
      </h1>

      {/* Search */}
      <div className='flex justify-center mb-8'>
        <div className='relative w-full max-w-md'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='search'
            className='w-full py-3 pl-5 pr-10 rounded-full shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400'
          />
          <FaSearch className='absolute top-3.5 right-4 text-gray-500' />
        </div>
      </div>

      {/* FAQs */}
      <div className='space-y-4'>
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden shadow-md transition-all ${
              index === activeIndex ? 'bg-gradient-to-r from-purple-400 to-orange-300' : 'bg-purple-300'
            }`}
          >
            <div
              className='flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-lg'
              onClick={() => toggle(index)}
            >
              <span>{faq.question}</span>
              {index === activeIndex ? (
                <FaChevronDown className='text-gray-800' />
              ) : (
                <FaChevronRight className='text-gray-800' />
              )}
            </div>
            {index === activeIndex && (
              <div className='bg-[#e2dbff] px-6 py-4 text-base text-gray-700'>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='flex justify-center mt-10 space-x-3 text-purple-500'>
        <button className='text-xl'>{'<'}</button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded-full ${
              page === 1 ? 'bg-purple-500 text-white' : 'hover:bg-purple-200'
            }`}
          >
            {page}
          </button>
        ))}
        <button className='text-xl'>{'>'}</button>
      </div>
    </div>
  );
};

export default Qna;
