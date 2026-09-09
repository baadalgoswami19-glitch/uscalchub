"use client";

import { useState } from "react";

const frequencyOptions = [
  { name: "Hourly", divisor: 2080 },
  { name: "Weekly", divisor: 52 },
  { name: "Biweekly", divisor: 26 },
  { name: "Semi-monthly", divisor: 24 },
  { name: "Monthly", divisor: 12 },
  { name: "Annual", divisor: 1 },
];

function money(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

export default function SalaryCalculator() {
  const [amount, setAmount] = useState("30");
  const [frequency, setFrequency] = useState("Hourly");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");

  const inputAmount = Math.max(0, Number(amount) || 0);
  const hours = Math.max(1, Number(hoursPerWeek) || 40);

  let annualSalary = 0;

  if (frequency === "Hourly") {
    annualSalary = inputAmount * hours * 52;
  } else if (frequency === "Weekly") {
    annualSalary = inputAmount * 52;
  } else if (frequency === "Biweekly") {
    annualSalary = inputAmount * 26;
  } else if (frequency === "Semi-monthly") {
    annualSalary = inputAmount * 24;
  } else if (frequency === "Monthly") {
    annualSalary = inputAmount * 12;
  } else {
    annualSalary = inputAmount;
  }

  const hourly = annualSalary / (hours * 52);
  const weekly = annualSalary / 52;
  const biweekly = annualSalary / 26;
  const semiMonthly = annualSalary / 24;
  const monthly = annualSalary / 12;

  return (
    <main>
      {/* HEADER */}
      <header className="container" style={{ paddingTop: 20 }}>
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
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 11,
                display: "grid",
                placeItems: "center",
                background: "linear-gradient(135deg, #4f8cff, #7c5cff)",
              }}
            >
              $
            </span>

            USCalc<span style={{ color: "#7fa9ff" }}>Hub</span>
          </a>

          <a
            href="/"
            style={{
              color: "#9ca6b5",
              fontSize: 13,
            }}
          >
            ← All calculators
          </a>
        </nav>
      </header>

      {/* MAIN */}
      <section
        className="container"
        style={{
          maxWidth: 1000,
          padding: "65px 0 80px",
        }}
      >
        {/* TITLE */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 42,
          }}
        >
          <div
            style={{
              color: "#709cff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.5,
              marginBottom: 12,
            }}
          >
            US SALARY CALCULATOR
          </div>

          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-3px",
              margin: 0,
            }}
          >
            Turn your pay into an{" "}
            <span className="gradient-text">
              annual salary
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
            Convert hourly, weekly, biweekly, monthly or annual
            pay into an easy-to-understand salary breakdown.
          </p>
        </div>

        {/* CALCULATOR */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
          }}
        >
          {/* INPUT */}
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
              Enter your pay
            </h2>

            <label
              style={{
                display: "block",
                marginTop: 24,
                color: "#aeb7c5",
                fontSize: 13,
              }}
            >
              Pay amount

              <div
                style={{
                  display: "flex",
                  marginTop: 8,
                }}
              >
                <span
                  style={{
                    padding: "14px 13px",
                    background: "#151b25",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    borderRight: 0,
                    borderRadius: "12px 0 0 12px",
                    color: "#8993a3",
                  }}
                >
                  $
                </span>

                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) =>
                    setAmount(e.target.value)
                  }
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "#0b0f15",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
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
                value={frequency}
                onChange={(e) =>
                  setFrequency(e.target.value)
                }
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: "14px",
                  borderRadius: 12,
                  background: "#0b0f15",
                  border:
                    "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  outline: "none",
                }}
              >
                {frequencyOptions.map((option) => (
                  <option
                    key={option.name}
                    value={option.name}
                  >
                    {option.name}
                  </option>
                ))}
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
              Hours per week

              <input
                type="number"
                min="1"
                max="168"
                value={hoursPerWeek}
                onChange={(e) =>
                  setHoursPerWeek(e.target.value)
                }
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: "14px",
                  borderRadius: 12,
                  background: "#0b0f15",
                  border:
                    "1px solid rgba(255,255,255,0.1)",
                  color: "#fff",
                  outline: "none",
                }}
              />
            </label>

            <div
              style={{
                marginTop: 24,
                padding: 15,
                borderRadius: 12,
                background: "rgba(79,140,255,0.07)",
                border:
                  "1px solid rgba(79,140,255,0.12)",
                color: "#8f9bad",
                fontSize: 11,
                lineHeight: 1.6,
              }}
            >
              The calculator assumes 52 working weeks per
              year. Change your weekly hours if you normally
              work a different schedule.
            </div>
          </section>

          {/* RESULT */}
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
              Estimated annual salary
            </div>

            <div
              style={{
                fontSize: "clamp(40px, 6vw, 58px)",
                fontWeight: 900,
                letterSpacing: "-3px",
                marginTop: 10,
              }}
            >
              {money(annualSalary)}
            </div>

            <div
              style={{
                color: "#7e8999",
                fontSize: 13,
                marginTop: 6,
              }}
            >
              estimated gross income per year
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
                ["Hourly", money(hourly)],
                ["Weekly", money(weekly)],
                ["Biweekly", money(biweekly)],
                ["Semi-monthly", money(semiMonthly)],
                ["Monthly", money(monthly)],
                ["Annual", money(annualSalary)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "14px 12px",
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
            How the salary calculator works
          </h2>

          <p>
            The USCalcHub salary calculator converts your pay
            rate into equivalent hourly, weekly, biweekly,
            semi-monthly, monthly and annual amounts.
          </p>

          <h2
            style={{
              color: "#fff",
              marginTop: 38,
            }}
          >
            How much is $30 an hour per year?
          </h2>

          <p>
            Assuming 40 hours per week and 52 weeks per year,
            $30 per hour equals approximately $62,400 in gross
            annual income before taxes and other deductions.
          </p>

          <h2
            style={{
              color: "#fff",
              marginTop: 38,
            }}
          >
            How much is $25 an hour per year?
          </h2>

          <p>
            At 40 hours per week for 52 weeks, $25 per hour
            equals approximately $52,000 in gross annual
            income.
          </p>

          <h2
            style={{
              color: "#fff",
              marginTop: 38,
            }}
          >
            Does this calculator include taxes?
          </h2>

          <p>
            No. This tool calculates gross income. Taxes,
            benefits, retirement contributions and other
            payroll deductions can reduce your actual
            take-home pay.
          </p>
        </article>

        {/* DISCLAIMER */}
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
          Results are estimates for informational purposes
          only. Actual earnings may differ based on your work
          schedule, unpaid time off, overtime and other
          circumstances.
        </div>
      </section>

      {/* FOOTER */}
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
