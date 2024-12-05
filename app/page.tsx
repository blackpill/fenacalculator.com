import { FenaCalculator } from "@/components/FenaCalculator"
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">FENa Calculator: Tool for Kidney Function Assessment</h1>
          <p className="text-lg text-muted-foreground">
            The FENa Calculator is a reliable medical tool for calculating the Fractional Excretion of Sodium (FENa). This calculator helps healthcare professionals differentiate pre-renal from intrinsic renal acute kidney injury with precision and accuracy.
          </p>
        </div>

        <FenaCalculator />

        <div className="space-y-8 text-muted-foreground">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">What is FENa Calculator?</h2>
            <p>
              The FENa Calculator is an advanced medical calculation tool designed to determine the percentage of filtered sodium excreted in urine. As a specialized medical calculator, it processes both urine and serum measurements of sodium and creatinine to provide crucial insights into kidney function. Healthcare professionals worldwide trust the FENa Calculator to assist in their clinical decision-making process when evaluating acute kidney injury (AKI).
            </p>
            <p>
              Our FENa Calculator stands out for its accuracy and ease of use, making it an indispensable tool in both emergency and routine clinical settings. Whether you're a nephrologist, emergency physician, or general practitioner, this FENa Calculator provides quick and reliable results to support your diagnostic process.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Benefits of Using Our FENa Calculator</h2>
            <p>
              The FENa Calculator offers numerous advantages in clinical practice:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Instant and accurate calculations that eliminate manual computation errors</li>
              <li>User-friendly interface designed for quick data entry during busy clinical shifts</li>
              <li>Clear result interpretation guidelines to support clinical decision-making</li>
              <li>Mobile-optimized design allowing access to the FENa Calculator anywhere, anytime</li>
              <li>Regular updates to ensure alignment with current medical guidelines</li>
            </ul>
            <p>
              Healthcare professionals choose our FENa Calculator for its reliability and clinical relevance in kidney function assessment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Clinical Applications of FENa Calculator</h2>
            <p>
              The FENa Calculator serves multiple clinical purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Emergency Department: Quick assessment of acute kidney injury etiology</li>
              <li>Nephrology Consultations: Detailed evaluation of kidney function</li>
              <li>Critical Care: Monitoring kidney function in critically ill patients</li>
              <li>Internal Medicine: Differential diagnosis of decreased kidney function</li>
              <li>Research: Standardized assessment of kidney function in clinical studies</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Tips for Accurate FENa Calculation</h2>
            <p>
              To ensure the most accurate results from your FENa Calculator:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Collect all samples (urine and blood) within the same timeframe</li>
              <li>Ensure proper specimen handling and laboratory processing</li>
              <li>Document any medications that might affect results, especially diuretics</li>
              <li>Consider the patient's volume status and recent fluid administration</li>
              <li>Review results in context with other clinical and laboratory findings</li>
            </ul>
            <p>
              Remember that the FENa Calculator is most reliable when used as part of a comprehensive clinical assessment.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">How to calculate FENa?</h2>
            <p>
              The Fractional Excretion of Sodium (FENa) is calculated using the following formula:
            </p>
            <div className="my-6 flex justify-center">
              <Image
                src="/images/fena-equation.png"
                alt="FENa Formula: FENa(%) = (Urine Sodium × Serum Creatinine) / (Serum Sodium × Urine Creatinine) × 100"
                width={600}
                height={150}
                className="dark:invert"
              />
            </div>
            <p>
              Where:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Urine Sodium (U<sub>Na</sub>) and Serum Sodium (S<sub>Na</sub>) are measured in mEq/L</li>
              <li>Urine Creatinine (U<sub>Cr</sub>) and Serum Creatinine (S<sub>Cr</sub>) are measured in mg/dL</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Why use FENa Calculator?</h2>
            <p>
              FENa calculation is valuable because it helps differentiate between two major types of acute kidney injury:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-renal AKI (caused by decreased blood flow to the kidneys)</li>
              <li>Intrinsic renal AKI (caused by damage to the kidney tissue itself)</li>
            </ul>
            <p>
              This distinction is crucial as it guides treatment decisions and helps determine the appropriate therapeutic approach.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">When to use FENa Calculator?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>When a patient presents with acute kidney injury</li>
              <li>During the initial evaluation of worsening kidney function</li>
              <li>To help determine if fluid resuscitation might be beneficial</li>
              <li>When distinguishing between pre-renal and intrinsic renal causes of AKI is clinically important</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Important Considerations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All measurements should be taken at the same time or as close as possible</li>
              <li>Results may be unreliable in patients taking diuretics</li>
              <li>Values should be entered in the correct units (mEq/L for sodium, mg/dL for creatinine)</li>
              <li>FENa should be interpreted alongside other clinical findings and not in isolation</li>
              <li>Certain conditions like sepsis can affect the reliability of FENa calculations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">Interpreting FENa Results</h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold">FENa {'<'} 1%</h3>
                <p>Suggests pre-renal AKI:</p>
                <ul className="list-disc pl-6">
                  <li>Indicates normal tubular function</li>
                  <li>Common in volume depletion or decreased renal perfusion</li>
                  <li>Often reversible with fluid resuscitation</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold">FENa {'>'} 1%</h3>
                <p>Suggests intrinsic renal AKI:</p>
                <ul className="list-disc pl-6">
                  <li>Indicates tubular dysfunction</li>
                  <li>Common in acute tubular necrosis</li>
                  <li>May require more intensive management</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="text-sm text-muted-foreground text-center">
          <p>This calculator is for informational purposes only. Always consult with a healthcare provider for medical advice.</p>
          
          <section className="mt-8 text-left">
            <h2 className="text-2xl font-semibold text-primary mb-4">References</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                Steiner RW. Interpreting the fractional excretion of sodium. Am J Med. 1984;77(4):699-702. 
                doi:10.1016/0002-9343(84)90368-6
              </li>
              <li>
                Espinel CH. The FENa test: use in the differential diagnosis of acute renal failure. JAMA. 1976;236(6):579-581. 
                doi:10.1001/jama.1976.03270060029022
              </li>
              <li>
                Perazella MA, Coca SG. Traditional urinary biomarkers in the assessment of hospital-acquired AKI. Clin J Am Soc Nephrol. 2012;7(1):167-174. 
                doi:10.2215/CJN.09490911
              </li>
              <li>
                Bagshaw SM, Langenberg C, Bellomo R. Urinary biochemistry and microscopy in septic acute renal failure: a systematic review. Am J Kidney Dis. 2006;48(5):695-705. 
                doi:10.1053/j.ajkd.2006.07.017
              </li>
              <li>
                Carvounis CP, Nisar S, Guro-Razuman S. Significance of the fractional excretion of urea in the differential diagnosis of acute renal failure. Kidney Int. 2002;62(6):2223-2229. 
                doi:10.1046/j.1523-1755.2002.00683.x
              </li>
              <li>
                Miller TR, Anderson RJ, Linas SL, et al. Urinary diagnostic indices in acute renal failure: a prospective study. Ann Intern Med. 1978;89(1):47-50. 
                doi:10.7326/0003-4819-89-1-47
              </li>
              <li>
                Zarich S, Fang LS, Diamond JR. Fractional excretion of sodium: exceptions to its diagnostic value. Arch Intern Med. 1985;145(1):108-112. 
                doi:10.1001/archinte.1985.00360010128020
              </li>
            </ol>
          </section>
        </div>
      </div>
    </main>
  )
}