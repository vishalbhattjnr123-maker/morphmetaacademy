"use client";

import { Helmet } from "react-helmet";

export default function Disclaimer() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Disclaimer - Morph Academy</title>
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Disclaimer - Morph Academy" />
        <meta property="og:description" content="Disclaimer for Morph Academy: All the information on this website is published in good faith for general information purposes only. Morph Academy is not responsible for the accuracy or completeness of the information." />
        <meta property="og:url" content="https://www.morphacademy.com/disclaimer/" />
        <meta property="og:site_name" content="Morph Academy" />
      </Helmet>

      <section className="bg-black text-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
            Disclaimer for Morph Academy
          </h1>

          {/* Disclaimer Content */}
          <div className="space-y-8 text-gray-200 text-lg leading-relaxed">
            <p>
              All the information on this website (<a href="https://www.morphacademy.com/" className="underline text-accent-yellow">https://www.morphacademy.com/</a>) is published in good faith and for general information purposes only. Morph Academy does not make any warranties about the completeness, reliability, or accuracy of this information. Any action you take upon the information you find on this website (Morph Academy) is strictly at your own risk. Morph Academy will not be liable for any losses and/or damages in connection with the use of our website. Our Disclaimer was generated with the help of the Disclaimer Generator.
            </p>

            <p>
              From our website, you can visit other websites by following hyperlinks to external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice, and we may not have the opportunity to remove a link that has gone “bad.”
            </p>

            <p>
              Please be aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Be sure to check the Privacy Policies and “Terms of Service” of these sites before engaging in any business or uploading any information.
            </p>

            <h2 className="text-2xl font-bold mt-6">Consent</h2>
            <p>
              By using our website, you hereby consent to our disclaimer and agree to its terms.
            </p>

            <h2 className="text-2xl font-bold mt-6">Update</h2>
            <p>
              Should we update, amend, or make any changes to this document, those changes will be prominently posted here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
