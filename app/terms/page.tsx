import { BASE_URL } from "@/app/config";
export const metadata = {
  title: "Terms of Service | FENa Calculator",
  description:
    "Terms of Service for FENa (Fractional Excretion of Sodium) calculator for quick assessment of acute kidney injury. Medical tool for healthcare professionals to differentiate prerenal from intrinsic renal failure.",
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
};
export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="text-foreground">
            By accessing and using FENa Calculator (fenacalculator.com), you agree to be bound by these Terms of Service. 
            If you disagree with any part of these terms, you may not access the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p className="text-foreground mb-4">
            FENa Calculator is a web-based tool that helps calculate the Fractional Excretion of Sodium (FENa). 
            The service is provided &quot;as is&quot; and is intended for educational and reference purposes only.
          </p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>All calculations are performed client-side in your browser</li>
            <li>Results are provided for reference purposes only</li>
            <li>We do not guarantee the accuracy of calculations</li>
            <li>This calculator should not be used as a substitute for clinical judgment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Medical Disclaimer</h2>
          <p className="text-foreground mb-4">
            The FENa Calculator is intended for use by qualified healthcare professionals only. The information and calculations provided 
            should not be used for direct diagnostic or treatment purposes. Always consult a qualified healthcare provider for medical advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
          <p className="text-foreground mb-4">Users of FENa Calculator agree to:</p>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li>Use the service for lawful purposes only</li>
            <li>Not attempt to disrupt or overwhelm the service</li>
            <li>Verify results independently for clinical applications</li>
            <li>Not use the service for any commercial purpose without permission</li>
            <li>Understand that this tool is for reference only and should not replace clinical judgment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="text-foreground">
            The content, features, and functionality of FENa Calculator, including but not limited to text, graphics, 
            logos, and software, are owned by or licensed to us and are protected by copyright, trademark, and other 
            intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
          <p className="text-foreground">
            FENa Calculator is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, expressed or implied, 
            regarding the accuracy, reliability, or availability of the service. Users should independently verify all results 
            and consult appropriate medical professionals for clinical decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="text-foreground">
            In no event shall FENa Calculator, its operators, or affiliates be liable for any indirect, incidental, 
            special, consequential, or punitive damages arising out of or relating to your use of the service. This includes
            any liability for medical decisions or actions taken based on the calculator&apos;s results.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="text-foreground">
            We reserve the right to modify these terms at any time. We will notify users of any changes by updating the 
            date at the bottom of this page. Continued use of the service after changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p className="text-foreground">
            If you have any questions about these Terms of Service, please contact us at{' '}
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