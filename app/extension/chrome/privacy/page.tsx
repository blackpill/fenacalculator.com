export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy for FENn Calculator</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
          <p>
            This Privacy Policy describes how FENn Calculator (&quot;we&quot;, &quot;our&quot;, or &quot;the extension&quot;) 
            handles information when you use our Chrome Extension.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Collection</h2>
          <p>
            FENn Calculator does not collect, store, or transmit any personal information 
            or user data. The extension operates entirely locally within your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Data Usage</h2>
          <p>
            All calculations and operations performed by FENn Calculator are processed 
            locally in your browser. No data is sent to external servers or third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
          <p>
            The extension does not integrate with any third-party services or analytics 
            platforms. It functions as a standalone calculator tool within your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Changes to This Policy</h2>
          <p>
            If we make any changes to this privacy policy, we will update the policy 
            and notify users through the Chrome Web Store listing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, you can reach out 
            through the support section on our Chrome Web Store listing.
          </p>
        </section>

        <footer className="text-sm text-gray-600 mt-8">
          Last updated: {new Date().toLocaleDateString()}
        </footer>
      </div>
    </div>
  );
}