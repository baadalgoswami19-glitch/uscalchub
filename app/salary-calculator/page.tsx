const calculators = [
  {
    title: "Paycheck Calculator",
    description:
      "Estimate your take-home pay after federal taxes, Social Security and Medicare.",
    category: "Money",
    href: "/paycheck-calculator",
    popular: true,
  },
  {
    title: "Salary Calculator",
    description:
      "Convert hourly, weekly, biweekly, monthly and annual pay into equivalent salary amounts.",
    category: "Money",
    href: "/salary-calculator",
    popular: true,
  },
  {
    title: "Overtime Calculator",
    description:
      "Calculate overtime pay, regular wages and total earnings.",
    category: "Work",
    href: "#",
    popular: false,
  },
  {
    title: "Tip Calculator",
    description:
      "Calculate tips quickly and split restaurant bills between multiple people.",
    category: "Everyday",
    href: "#",
    popular: true,
  },
  {
    title: "Discount Calculator",
    description:
      "Find sale prices, savings and final costs after discounts.",
    category: "Money",
    href: "#",
    popular: false,
  },
  {
    title: "Sales Tax Calculator",
    description:
      "Calculate sales tax and the final purchase price.",
    category: "Money",
    href: "#",
    popular: false,
  },
  {
    title: "Loan Calculator",
    description:
      "Estimate monthly payments, total interest and total loan cost.",
    category: "Loans",
    href: "#",
    popular: true,
  },
  {
    title: "Mortgage Calculator",
    description:
      "Estimate mortgage payments, interest and total home financing costs.",
    category: "Home",
    href: "#",
    popular: true,
  },
  {
    title: "Compound Interest Calculator",
    description:
      "See how your money can grow with compound interest over time.",
    category: "Investing",
    href: "#",
    popular: false,
  },
  {
    title: "Auto Loan Calculator",
    description:
      "Estimate car payments, interest and total financing costs.",
    category: "Loans",
    href: "#",
    popular: false,
  },
  {
    title: "Student Loan Calculator",
    description:
      "Estimate student loan payments and total repayment costs.",
    category: "Education",
    href: "#",
    popular: false,
  },
  {
    title: "Debt Payoff Calculator",
    description:
      "Create a simple plan to estimate how long it may take to pay off debt.",
    category: "Money",
    href: "#",
    popular: false,
  },
];

const categories = [
  {
    name: "Money",
    description: "Salary, paycheck, taxes and everyday money tools.",
    icon: "$",
  },
  {
    name: "Loans",
    description: "Loan payments, interest and repayment calculators.",
    icon: "↗",
  },
  {
    name: "Home",
    description: "Mortgage and home affordability calculations.",
    icon: "⌂",
  },
  {
    name: "Work",
    description: "Salary, overtime and employment calculators.",
    icon: "▣",
  },
  {
    name: "Investing",
    description: "Interest, savings and long-term growth tools.",
    icon: "◈",
  },
  {
    name: "Everyday",
    description: "Tips, discounts and useful daily calculations.",
    icon: "✓",
  },
];

const guides = [
  {
    title: "How much is $30 an hour per year?",
    description:
      "Learn how hourly pay translates into weekly, monthly and annual income.",
  },
  {
    title: "How does a US paycheck work?",
    description:
      "Understand gross pay, federal taxes, Social Security and Medicare deductions.",
  },
  {
    title: "How much house can I afford?",
    description:
      "Understand the basic factors that influence mortgage affordability.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header
        className="container"
        style={{
          paddingTop: 20,
        }}
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
                background:
                  "linear-gradient(135deg, #4f8cff, #7c5cff)",
                boxShadow:
                  "0 8px 25px rgba(79,140,255,0.25)",
              }}
            >
              $
            </span>

            USCalc
            <span style={{ color: "#7fa9ff" }}>Hub</span>
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              fontSize: 13,
              color: "#9ca6b5",
            }}
          >
            <a href="#calculators">Calculators</a>
            <a href="#guides">Guides</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="hero-glow"
        style={{
          padding: "95px 0 70px",
        }}
      >
        <div
          className="container"
          style={{
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 13px",
              borderRadius: 999,
              border:
                "1px solid rgba(79,140,255,0.18)",
              background:
                "rgba(79,140,255,0.06)",
              color: "#7fa9ff",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: "uppercase",
            }}
          >
            Free tools for everyday life
          </div>

          <h1
            style={{
              maxWidth: 900,
              margin: "24px auto 0",
              fontSize: "clamp(44px, 8vw, 82px)",
              lineHeight: 0.98,
              letterSpacing: "-5px",
              fontWeight: 900,
            }}
          >
            Smart calculators for{" "}
            <span className="gradient-text">
              life in the USA
            </span>
          </h1>

          <p
            style={{
              maxWidth: 680,
              margin: "24px auto 0",
              color: "#929baa",
              fontSize: 17,
              lineHeight: 1.75,
            }}
          >
            Free, fast and easy-to-use calculators for
            salary, paycheck, loans, mortgages, taxes,
            tips and everyday decisions.
          </p>

          {/* SEARCH */}
          <div
            style={{
              maxWidth: 650,
              margin: "35px auto 0",
              position: "relative",
            }}
          >
            <input
              type="search"
              placeholder="Search calculators..."
              aria-label="Search calculators"
              style={{
                width: "100%",
                padding: "18px 20px",
                borderRadius: 16,
                background:
                  "rgba(13,17,24,0.85)",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                outline: "none",
                fontSize: 14,
                boxShadow:
                  "0 15px 50px rgba(0,0,0,0.25)",
              }}
            />
          </div>

          {/* QUICK LINKS */}
          <div
            style={{
              marginTop: 18,
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 9,
            }}
          >
            <a
              href="/paycheck-calculator"
              style={{
                padding: "9px 13px",
                borderRadius: 999,
                background:
                  "rgba(255,255,255,0.04)",
                border:
                  "1px solid rgba(255,255,255,0.07)",
                color: "#aab3c1",
                fontSize: 11,
              }}
            >
              Paycheck Calculator
            </a>

            <a
              href="/salary-calculator"
              style={{
                padding: "9px 13px",
                borderRadius: 999,
                background:
                  "rgba(255,255,255,0.04)",
                border:
                  "1px solid rgba(255,255,255,0.07)",
                color: "#aab3c1",
                fontSize: 11,
              }}
            >
              Salary Calculator
            </a>

            <a
              href="#calculators"
              style={{
                padding: "9px 13px",
                borderRadius: 999,
                background:
                  "rgba(255,255,255,0.04)",
                border:
                  "1px solid rgba(255,255,255,0.07)",
                color: "#aab3c1",
                fontSize: 11,
              }}
            >
              View all tools
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="container">
        <div
          className="glass"
          style={{
            borderRadius: 18,
            padding: "18px 22px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 15,
            textAlign: "center",
          }}
        >
          <div>
            <strong style={{ fontSize: 17 }}>
              100% Free
            </strong>
            <div
              style={{
                color: "#717b8a",
                fontSize: 11,
                marginTop: 4,
              }}
            >
              No signup required
            </div>
          </div>

          <div>
            <strong style={{ fontSize: 17 }}>
              Fast Results
            </strong>
            <div
              style={{
                color: "#717b8a",
                fontSize: 11,
                marginTop: 4,
              }}
            >
              Instant calculations
            </div>
          </div>

          <div>
            <strong style={{ fontSize: 17 }}>
              USA Focused
            </strong>
            <div
              style={{
                color: "#717b8a",
                fontSize: 11,
                marginTop: 4,
              }}
            >
              Built for US users
            </div>
          </div>

          <div>
            <strong style={{ fontSize: 17 }}>
              Mobile Friendly
            </strong>
            <div
              style={{
                color: "#717b8a",
                fontSize: 11,
                marginTop: 4,
              }}
            >
              Works on every screen
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        className="container"
        style={{
          padding: "85px 0 30px",
        }}
      >
        <div
          style={{
            marginBottom: 30,
          }}
        >
          <div
            style={{
              color: "#709cff",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1.4,
              textTransform: "uppercase",
            }}
          >
            Browse by category
          </div>

          <h2
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(30px, 5vw, 45px)",
              letterSpacing: "-2px",
            }}
          >
            Find the right tool
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(170px, 1fr))",
            gap: 13,
          }}
        >
          {categories.map((category) => (
            <a
              href="#calculators"
              key={category.name}
              className="glass card"
              style={{
                padding: 20,
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 11,
                  background:
                    "rgba(79,140,255,0.09)",
                  border:
                    "1px solid rgba(79,140,255,0.12)",
                  color: "#7fa9ff",
                  fontWeight: 800,
                  marginBottom: 14,
                }}
              >
                {category.icon}
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: 15,
                }}
              >
                {category.name}
              </h3>

              <p
                style={{
                  color: "#737d8c",
                  fontSize: 11,
                  lineHeight: 1.6,
                  marginBottom: 0,
                }}
              >
                {category.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* CALCULATORS */}
      <section
        id="calculators"
        className="container"
        style={{
          padding: "70px 0 40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            gap: 20,
            marginBottom: 30,
          }}
        >
          <div>
            <div
              style={{
                color: "#709cff",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1.4,
                textTransform: "uppercase",
              }}
            >
              All calculators
            </div>

            <h2
              style={{
                margin: "10px 0 0",
                fontSize: "clamp(30px, 5vw, 45px)",
                letterSpacing: "-2px",
              }}
            >
              Popular tools
            </h2>
          </div>

          <span
            style={{
              color: "#606b7a",
              fontSize: 11,
            }}
          >
            More tools coming soon
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 15,
          }}
        >
          {calculators.map((calculator) => (
            <a
              href={calculator.href}
              key={calculator.title}
              className="glass card"
              style={{
                padding: 22,
                position: "relative",
              }}
            >
              {calculator.popular && (
                <span
                  style={{
                    position: "absolute",
                    top: 17,
                    right: 17,
                    padding: "5px 8px",
                    borderRadius: 999,
                    background:
                      "rgba(124,92,255,0.1)",
                    color: "#a58fff",
                    fontSize: 9,
                    fontWeight: 800,
                    letterSpacing: 0.5,
                  }}
                >
                  POPULAR
                </span>
              )}

              <div
                style={{
                  width: 42,
                  height: 42,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 13,
                  background:
                    "linear-gradient(135deg, rgba(79,140,255,0.12), rgba(124,92,255,0.1))",
                  border:
                    "1px solid rgba(79,140,255,0.13)",
                  color: "#8eb1ff",
                  fontWeight: 800,
                  marginBottom: 18,
                }}
              >
                {calculator.title
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div
                style={{
                  color: "#71809a",
                  fontSize: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  fontWeight: 800,
                }}
              >
                {calculator.category}
              </div>

              <h3
                style={{
                  margin: "7px 0 8px",
                  fontSize: 17,
                }}
              >
                {calculator.title}
              </h3>

              <p
                style={{
                  color: "#737d8c",
                  fontSize: 12,
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {calculator.description}
              </p>

              <div
                style={{
                  marginTop: 18,
                  color: "#7fa9ff",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                Open calculator →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* GUIDES */}
      <section
        id="guides"
        className="container"
        style={{
          padding: "80px 0",
        }}
      >
        <div
          style={{
            marginBottom: 30,
          }}
        >
          <div
            style={{
              color: "#709cff",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1.4,
              textTransform: "uppercase",
            }}
          >
            Guides & learning
          </div>

          <h2
            style={{
              margin: "10px 0 0",
              fontSize: "clamp(30px, 5vw, 45px)",
              letterSpacing: "-2px",
            }}
          >
            Understand your numbers
          </h2>

          <p
            style={{
              color: "#737d8c",
              maxWidth: 650,
              lineHeight: 1.7,
              fontSize: 13,
            }}
          >
            Simple explanations to help you understand
            salaries, taxes, loans and everyday financial
            calculations.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 15,
          }}
        >
          {guides.map((guide) => (
            <article
              className="glass card"
              key={guide.title}
              style={{
                padding: 23,
              }}
            >
              <div
                style={{
                  color: "#7fa9ff",
                  fontSize: 11,
                  fontWeight: 800,
                }}
              >
                USCalcHub Guide
              </div>

              <h3
                style={{
                  margin: "12px 0 9px",
                  fontSize: 17,
                  lineHeight: 1.35,
                }}
              >
                {guide.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#737d8c",
                  fontSize: 12,
                  lineHeight: 1.7,
                }}
              >
                {guide.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="container"
        style={{
          paddingBottom: 80,
        }}
      >
        <div
          className="glass"
          style={{
            borderRadius: 25,
            padding: "50px 25px",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(79,140,255,0.08), rgba(124,92,255,0.06))",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px, 5vw, 44px)",
              letterSpacing: "-2px",
            }}
          >
            Calculate smarter.
          </h2>

          <p
            style={{
              maxWidth: 550,
              margin: "15px auto 25px",
              color: "#7f8998",
              lineHeight: 1.7,
              fontSize: 13,
            }}
          >
            Use USCalcHub to quickly estimate the numbers
            that matter in your everyday life.
          </p>

          <a
            href="#calculators"
            style={{
              display: "inline-block",
              padding: "13px 20px",
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #4f8cff, #7c5cff)",
              color: "#fff",
              fontSize: 12,
              fontWeight: 800,
              boxShadow:
                "0 12px 30px rgba(79,140,255,0.2)",
            }}
          >
            Explore calculators
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop:
            "1px solid rgba(255,255,255,0.06)",
          background: "rgba(0,0,0,0.15)",
        }}
      >
        <div
          className="container"
          style={{
            padding: "45px 0 25px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 35,
            }}
          >
            {/* BRAND */}
            <div>
              <a
                href="/"
                style={{
                  fontWeight: 800,
                  fontSize: 19,
                }}
              >
                USCalc
                <span style={{ color: "#7fa9ff" }}>
                  Hub
                </span>
              </a>

              <p
                style={{
                  color: "#646e7d",
                  fontSize: 11,
                  lineHeight: 1.7,
                  maxWidth: 280,
                  marginTop: 12,
                }}
              >
                Free, simple and useful calculators
                designed for everyday life in the USA.
              </p>
            </div>

            {/* TOOLS */}
            <div>
              <strong
                style={{
                  fontSize: 12,
                }}
              >
                Calculators
              </strong>

              <div
                style={{
                  display: "grid",
                  gap: 9,
                  marginTop: 14,
                  color: "#687282",
                  fontSize: 11,
                }}
              >
                <a href="/paycheck-calculator">
                  Paycheck Calculator
                </a>

                <a href="/salary-calculator">
                  Salary Calculator
                </a>

                <a href="#calculators">
                  All Calculators
                </a>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <strong
                style={{
                  fontSize: 12,
                }}
              >
                USCalcHub
              </strong>

              <div
                style={{
                  display: "grid",
                  gap: 9,
                  marginTop: 14,
                  color: "#687282",
                  fontSize: 11,
                }}
              >
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
            </div>

            {/* LEGAL */}
            <div>
              <strong
                style={{
                  fontSize: 12,
                }}
              >
                Legal
              </strong>

              <div
                style={{
                  display: "grid",
                  gap: 9,
                  marginTop: 14,
                  color: "#687282",
                  fontSize: 11,
                }}
              >
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
                <a href="#">Disclaimer</a>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop:
                "1px solid rgba(255,255,255,0.05)",
              marginTop: 35,
              paddingTop: 20,
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 10,
              color: "#505a68",
              fontSize: 10,
            }}
          >
            <span>© 2026 USCalcHub</span>

            <span>
              Built for everyday calculations in the USA
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
