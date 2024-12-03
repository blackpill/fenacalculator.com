import { BASE_URL } from "@/app/config";
export const metadata = {
  title: "Privacy Policy | FENa Calculator",
  description:
    "Privacy Policy for FENa (Fractional Excretion of Sodium) calculator for quick assessment of acute kidney injury. Medical tool for healthcare professionals to differentiate prerenal from intrinsic renal failure.",
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
};
export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-primary">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-foreground">
            Welcome to FENa Calculator. We respect your privacy and are committed to protecting any data that might be collected 
            during your use of our website. This privacy policy will inform you about how we handle your data when you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-foreground mb-4">
            Our website is designed to be simple and privacy-focused. We do not collect or store any personal medical information 
            or calculation data. The only data processing that occurs is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>FENa calculations performed directly in your browser</li>
            <li>Temporary storage of your calculations (which are not sent to any server)</li>
            <li>No medical data or calculation results are stored or transmitted</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Medical Data Privacy</h2>
          <p className="text-foreground">
            We understand the sensitive nature of medical calculations. All calculations are performed locally in your browser,
            and no medical data or calculation results are ever transmitted to our servers or stored anywhere outside your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
          <p className="text-foreground">
            We do not use cookies or any tracking mechanisms. All calculations and operations are performed locally in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-foreground">
            Our website is hosted on Cloudflare Pages. While we do not collect any personal data, Cloudflare may collect some 
            technical information as part of their service. You can learn more about Cloudflare&apos;s privacy practices at{' '}
            <a href="https://www.cloudflare.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              their privacy policy
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-foreground">
            Since we do not collect or store any personal or medical data, there is no risk of your information being compromised. 
            All calculations are performed locally in your browser and are not stored or transmitted to any servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">HIPAA Compliance</h2>
          <p className="text-foreground">
            While our calculator is designed for medical professionals, we do not store or process any protected health information (PHI),
            and therefore no HIPAA-related data is at risk. All calculations are performed locally on your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p className="text-foreground">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-foreground">
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href="mailto:contact@fenacalculator.com" className="text-primary hover:underline">
              contact@fenacalculator.com
            </a>
          </p>
        </section>

        <footer className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </footer>
      </div>
    </div>
  )
}