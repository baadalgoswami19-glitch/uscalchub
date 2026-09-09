"use client";

import { useState } from "react";

const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Florida",
  "Georgia",
  "Illinois",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Missouri",
  "Nevada",
  "New Jersey",
  "New York",
  "North Carolina",
  "Ohio",
  "Oregon",
  "Pennsylvania",
  "South Carolina",
  "Tennessee",
  "Texas",
  "Virginia",
  "Washington",
  "Wisconsin",
];

const standardDeduction: Record<string, number> = {
  Single: 16100,
  "Married Filing Jointly": 32200,
  "Head of Household": 24150,
};

const brackets: Record<string, number[][]> = {
  Single: [
    [12400, 0.1],
    [50400, 0.12],
    [105700, 0.22],
    [201775, 0.24],
    [256225, 0.32],
    [640600, 0.35],
    [Infinity, 0.37],
  ],
  "Married Filing Jointly": [
    [24800, 0.1],
    [100800, 0.12],
    [211400, 0.22],
    [403550, 0.24],
    [512450, 0.32],
    [768700, 0.35],
    [Infinity, 0.37],
  ],
  "Head of Household": [
    [17700, 0.1],
    [67450, 0.12],
    [105700, 0.22],
    [201750, 0.24],
    [256200, 0.32],
    [640600, 0.35],
    [Infinity, 0.37],
  ],
};

function calculateFederalTax(
  taxableIncome: number,
  filingStatus: string
) {
  const rates = brackets[filingStatus];

  let tax = 0;
  let previousLimit = 0;

  for (const [limit, rate] of rates) {
    if (taxableIncome <= previousLimit) break;

    const taxableAtThisRate =
      Math.min(taxableIncome, limit) - previousLimit;

    tax += taxableAtThisRate * rate;
    previousLimit = limit;
  }

  return Math.max(0, tax);
}

function money(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function PaycheckCalculator() {
  const [annualSalary, setAnnualSalary] = useState("60000");
  const [payFrequency, setPayFrequency] = useState("Biweekly");
  const [filingStatus, setFilingStatus] = useState("Single");
  const [state, setState] = useState("Texas");

  const salary = Math.max(0, Number(annualSalary) || 0);

  const taxableIncome = Math.max(
    0,
    salary - standardDeduction[filingStatus]
  );

  const federalTax = calculateFederalTax(
    taxableIncome,
    filingStatus
  );

  const socialSecurity = Math.min(salary, 184500) * 0.062;

  const additionalMedicare =
    Math.max(0, salary - 200000) * 0.009;

  const medicare = salary * 0.0145 + additionalMedicare;

  const estimatedTakeHome = Math.max(
    0,
    salary - federalTax - socialSecurity - medicare
  );

  const frequencyDivisor: Record<string, number> = {
    Weekly: 52,
    Biweekly: 26,
    "Semi-monthly": 24,
    Monthly: 12,
  };

  const divisor = frequencyDivisor[payFrequency];

  const grossPerPaycheck = salary / divisor;
  const takeHomePerPaycheck = estimatedTakeHome / divisor;

  return (
    <main>
      <header
        className="container"
        style={{ paddingTop: 20 }}
      >
        <nav
          className="glass"
          style={{
            borderRadius: 18,
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <a
            href="/"
            style={{
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            USCalc<span style={{ color: "#7fa9ff" }}>Hub</span>
          </a>

          <a
            href="/"
            style={{
              color: "#9ca6b5",
              fontSize: 13,
            }}
          >
            ← Back to calculators
          </a>
        </nav>
      </header>

      <section
        className="container"
        style={{
          padding: "65px 0 80px",
          maxWidth: 1000,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 42 }}>
          <div
            style={{
              color: "#709cff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            US PAYCHECK CALCULATOR
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              margin: 0,
            }}
          >
            Estimate your{" "}
            <span className="gradient-text">
              take-home pay
            </span>
          </h1>

          <p
            style={{
              color: "#929baa",
              maxWidth: 650,
              margin: "18px auto 0",
              lineHeight: 1.7,
            }}
          >
            Estimate your paycheck after federal income tax,
            Social Security and Medicare deductions.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          {/* INPUT CARD */}

          <section
            className="glass card"
            style={{ padding: 26 }}
          >
            <h2
              style={{
                marginTop: 0,
                fontSize: 20,
              }}
            >
              Your information
            </h2>

            <label
              style={{
                display: "block",
                marginTop: 22,
                color: "#aeb7c5",
                fontSize: 13,
              }}
            >
              Annual salary

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <span
                  style={{
                    padding: "14px 13px",
                    background: "#151b25",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRight: 0,
                    borderRadius: "12px 0 0 12px",
                    color: "#8993a3",
                  }}
                >
                  $
                </span>

                <input
                  type="number"
                  value={annualSalary}
                  onChange={(e) =>
                    setAnnualSalary(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "#0b0f15",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    borderRadius: "0 12px 12px 0",
                    outline: "none",
                  }}
                />
              </div>
            </label>

            <label
              style={{
                display: "block",
                marginTop: 20,
                color: "#aeb7c5",
                fontSize: 13,
              }}
            >
              Pay frequency

              <select
                value={payFrequency}
                onChange={(e) =>
                  setPayFrequency(e.target.value)
                }
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: "14px",
                  borderRadius: 12,
                  background: "#0b0f15",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  outline: "none",
                }}
              >
                <option>Weekly</option>
                <option>Biweekly</option>
                <option>Semi-monthly</option>
                <option>Monthly</option>
              </select>
            </label>

            <label
              style={{
                display: "block",
                marginTop: 20,
                color: "#aeb7c5",
                fontSize: 13,
              }}
            >
              Filing status

              <select
                value={filingStatus}
                onChange={(e) =>
                  setFilingStatus(e.target.value)
                }
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: "14px",
                  borderRadius: 12,
                  background: "#0b0f15",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  outline: "none",
                }}
              >
                <option>Single</option>
                <option>Married Filing Jointly</option>
                <option>Head of Household</option>
              </select>
            </label>

            <label
              style={{
                display: "block",
                marginTop: 20,
                color: "#aeb7c5",
                fontSize: 13,
              }}
            >
              State

              <select
                value={state}
                onChange={(e) =>
                  setState(e.target.value)
                }
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: "14px",
                  borderRadius: 12,
                  background: "#0b0f15",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  outline: "none",
                }}
              >
                {states.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <div
              style={{
                marginTop: 24,
                padding: 14,
                borderRadius: 12,
                background: "rgba(79,140,255,0.07)",
                border:
                  "1px solid rgba(79,140,255,0.12)",
                color: "#8f9bad",
                fontSize: 11,
                lineHeight: 1.6,
              }}
            >
              State selection is included for future
              state-specific tax calculations. This version
              estimates federal taxes and FICA.
            </div>
          </section>

          {/* RESULT CARD */}

          <section
            className="glass card"
            style={{ padding: 26 }}
          >
            <div
              style={{
                color: "#7f8da3",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 1.2,
              }}
            >
              Estimated take-home
            </div>

            <div
              style={{
                fontSize: "clamp(40px, 6vw, 58px)",
                fontWeight: 900,
                letterSpacing: "-3px",
                marginTop: 10,
              }}
            >
              {money(takeHomePerPaycheck)}
            </div>

            <div
              style={{
                color: "#7e8999",
                fontSize: 13,
                marginTop: 6,
              }}
            >
              per {payFrequency.toLowerCase()} paycheck
            </div>

            <div
              style={{
                marginTop: 30,
                display: "grid",
                gap: 1,
                background: "rgba(255,255,255,0.07)",
              }}
            >
              {[
                ["Gross pay", money(grossPerPaycheck)],
                ["Federal income tax", money(federalTax / divisor)],
                ["Social Security", money(socialSecurity / divisor)],
                ["Medicare", money(medicare / divisor)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 15,
                    padding: "15px 12px",
                    background: "#0d1118",
                    fontSize: 13,
                  }}
                >
                  <span style={{ color: "#8d97a7" }}>
                    {label}
                  </span>

                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 20,
                padding: 18,
                borderRadius: 14,
                background:
                  "linear-gradient(135deg, rgba(79,140,255,0.12), rgba(124,92,255,0.08))",
                border:
                  "1px solid rgba(79,140,255,0.16)",
              }}
            >
              <div
                style={{
                  color: "#8994a5",
                  fontSize: 12,
                }}
              >
                Estimated annual take-home
              </div>

              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  marginTop: 5,
                }}
              >
                {money(estimatedTakeHome)}
              </div>
            </div>
          </section>
        </div>

        {/* SEO CONTENT */}

        <article
          style={{
            marginTop: 65,
            color: "#9aa4b2",
            lineHeight: 1.8,
          }}
        >
          <h2 style={{ color: "#fff" }}>
            How the US paycheck calculator works
          </h2>

          <p>
            This calculator provides an estimate of your
            paycheck by starting with your annual salary and
            subtracting estimated federal income tax, Social
            Security and Medicare taxes.
          </p>

          <h2 style={{ color: "#fff", marginTop: 38 }}>
            Is this an exact paycheck calculation?
          </h2>

          <p>
            No. Your actual paycheck can vary depending on
            withholding elections, benefits, retirement
            contributions, deductions, credits and
            state-specific taxes. Use this calculator as an
            estimate rather than tax or financial advice.
          </p>

          <h2 style={{ color: "#fff", marginTop: 38 }}>
            2026 federal tax information
          </h2>

          <p>
            USCalcHub uses 2026 federal tax brackets and
            standard deduction amounts for its basic estimate.
            Social Security and Medicare calculations also use
            2026 federal payroll tax parameters.
          </p>
        </article>

        <div
          style={{
            marginTop: 40,
            padding: 18,
            borderRadius: 14,
            background: "rgba(255,255,255,0.035)",
            color: "#717b8a",
            fontSize: 11,
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#9ca6b5" }}>
            Disclaimer:
          </strong>{" "}
          USCalcHub provides estimates for informational
          purposes only. Tax calculations can differ from
          actual payroll withholding and tax liability.
        </div>
      </section>

      <footer
        className="container"
        style={{
          padding: "30px 0 45px",
          textAlign: "center",
          color: "#596372",
          fontSize: 11,
        }}
      >
        © 2026 USCalcHub
      </footer>
    </main>
  );
}
