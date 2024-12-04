import React from 'react';
import { Helmet } from 'react-helmet-async';
import FAQSection from '../components/FAQ/FAQSection';

export default function FAQs() {
  return (
    <>
      <Helmet>
        <title>FAQs - UST Soccer Academy</title>
        <meta name="description" content="Find answers to frequently asked questions about UST Soccer Academy programs, registration, and more." />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <FAQSection />
      </div>
    </>
  );
}