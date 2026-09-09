const calculators = [
  {
    icon: "💵",
    title: "Paycheck Calculator",
    description: "Estimate your take-home pay after federal and payroll taxes.",
    tag: "Popular",
    href: "/paycheck-calculator",
  },
  {
    icon: "💼",
    title: "Salary Calculator",
    description: "Convert annual salary into hourly, weekly, monthly and daily pay.",
    tag: "Popular",
    href: "#",
  },
  {
    icon: "⏱️",
    title: "Overtime Calculator",
    description: "Calculate overtime earnings from your hourly pay rate.",
    tag: "Work",
    href: "#",
  },
  {
    icon: "💰",
    title: "Tip Calculator",
    description: "Calculate tips and split your restaurant bill with ease.",
    tag: "Everyday",
    href: "#",
  },
  {
    icon: "🏷️",
    title: "Discount Calculator",
    description: "Calculate sale prices and see exactly how much you save.",
    tag: "Shopping",
    href: "#",
  },
  {
    icon: "🧾",
    title: "Sales Tax Calculator",
    description: "Calculate sales tax and the final purchase price.",
    tag: "Money",
    href: "#",
  },
  {
    icon: "🏦",
    title: "Loan Calculator",
    description: "Estimate monthly payments and total loan interest.",
    tag: "Finance",
    href: "#",
  },
  {
    icon: "🏠",
    title: "Mortgage Calculator",
    description: "Estimate monthly mortgage payments and total cost.",
    tag: "Home",
    href: "#",
  },
  {
    icon: "📈",
    title: "Compound Interest",
    description: "See how your money can grow through compound interest.",
    tag: "Finance",
    href: "#",
  },
  {
    icon: "🚗",
    title: "Auto Loan Calculator",
    description: "Estimate monthly car loan payments and interest.",
    tag: "Auto",
    href: "#",
  },
  {
    icon: "🎓",
    title: "Student Loan Calculator",
    description: "Estimate student loan payments and total interest.",
    tag: "Education",
    href: "#",
  },
  {
    icon: "💳",
    title: "Debt Payoff Calculator",
    description: "Estimate how long it may take to pay off your debt.",
    tag: "Finance",
    href: "#",
  },
];

const categories = [
  { icon: "💵", name: "Money", count: "6 tools" },
  { icon: "💼", name: "Salary & Work", count: "3 tools" },
  { icon: "🏠", name: "Home", count: "2 tools" },
  { icon: "🚗", name: "Auto", count: "1 tool" },
  { icon: "🎓", name: "Education", count: "1 tool" },
  { icon: "🔢", name: "Everyday", count: "5+ tools" },
];

const guides = [
  "How Much Is $30 an Hour a Year?",
  "How Does Overtime Pay Work?",
  "How Is Take-Home Pay Calculated?",
];

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
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
              letterSpacing: "-0.5px",
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
                fontSize: 17,
              }}
            >
              $
            </span>

            USCalc<span style={{ color: "#7fa9ff" }}>Hub</span>
          </a>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              color: "#aeb6c4",
              fontSize: 14,
            }}
          >
            <a href="#calculators">Calculators</a>
            <a href="#categories">Categories</a>
            <a href="#guides">Guides</a>
          </div>

          <a
            href="#calculators"
            style={{
              padding: "10px 16px",
              borderRadius: 11,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Explore Tools
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        className="hero-glow"
        style={{
          padding: "90px 0 70px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "7px 12px",
              borderRadius: 999,
              background: "rgba(79,140,255,0.1)",
              border: "1px solid rgba(79,140,255,0.2)",
              color: "#9bbcff",
              fontSize: 12,
              fontWeight: 700,
              marginBottom: 22,
            }}
          >
            🇺🇸 Built for everyday life in the USA
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 78px)",
              lineHeight: 1.02,
              letterSpacing: "-4px",
              margin: "0 auto",
              maxWidth: 900,
              fontWeight: 900,
            }}
          >
            Smart Calculators.
            <br />
            <span className="gradient-text">Simple Answers.</span>
          </h1>

          <p
            style={{
              maxWidth: 650,
              margin: "24px auto 0",
              color: "#9ca6b5",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.7,
            }}
          >
            Free, fast and easy-to-use calculators for money, salary,
            mortgages, loans, taxes and everyday decisions.
          </p>

          {/* SEARCH */}
          <div
            style={{
              maxWidth: 650,
              margin: "34px auto 0",
              position: "relative",
            }}
          >
            <input
              type="search"
              placeholder="Search a calculator..."
              aria-label="Search calculators"
              style={{
                width: "100%",
                height: 58,
                padding: "0 22px 0 52px",
                borderRadius: 16,
                outline: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(13,17,24,0.9)",
                color: "#fff",
                fontSize: 15,
              }}
            />

            <span
              style={{
                position: "absolute",
                left: 19,
                top: 18,
                fontSize: 19,
                color: "#8993a3",
              }}
            >
              ⌕
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 20,
              color: "#747f90",
              fontSize: 12,
            }}
          >
            <span>Popular:</span>

            <a href="/paycheck-calculator" style={{ color: "#aeb9ca" }}>
              Paycheck
            </a>

            <a href="#calculators" style={{ color: "#aeb9ca" }}>
              Mortgage
            </a>

            <a href="#calculators" style={{ color: "#aeb9ca" }}>
              Loan
            </a>

            <a href="#calculators" style={{ color: "#aeb9ca" }}>
              Tip
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
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 28,
            color: "#9ca6b5",
            fontSize: 13,
          }}
        >
          <span>✓ Free to use</span>
          <span>✓ No registration required</span>
          <span>✓ Mobile friendly</span>
          <span>✓ Fast calculations</span>
        </div>
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        className="container"
        style={{ padding: "85px 0 20px" }}
      >
        <div style={{ marginBottom: 28 }}>
          <p
            style={{
              color: "#709cff",
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 8,
            }}
          >
            Browse by category
          </p>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              margin: 0,
              letterSpacing: "-1.5px",
            }}
          >
            Find the right tool
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
          }}
        >
          {categories.map((category) => (
            <a
              key={category.name}
              href="#calculators"
              className="glass card"
              style={{
                padding: 20,
                display: "block",
              }}
            >
              <div style={{ fontSize: 27, marginBottom: 14 }}>
                {category.icon}
              </div>

              <div style={{ fontWeight: 750, marginBottom: 5 }}>
                {category.name}
              </div>

              <div style={{ color: "#7f8998", fontSize: 12 }}>
                {category.count}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CALCULATORS */}
      <section
        id="calculators"
        className="container"
        style={{ padding: "75px 0" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: 20,
            marginBottom: 28,
          }}
        >
          <div>
            <p
              style={{
                color: "#709cff",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 8,
              }}
            >
              Popular calculators
            </p>

            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                margin: 0,
                letterSpacing: "-1.5px",
              }}
            >
              Calculate anything
            </h2>
          </div>

          <span
            style={{
              color: "#7f8998",
              fontSize: 13,
            }}
          >
            12 tools
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {calculators.map((calculator) => (
            <a
              key={calculator.title}
              href={calculator.href}
              className="glass card"
              style={{
                padding: 24,
                minHeight: 220,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(79,140,255,0.1)",
                    fontSize: 24,
                  }}
                >
                  {calculator.icon}
                </div>

                <span
                  style={{
                    fontSize: 10,
                    padding: "5px 8px",
                    borderRadius: 999,
                    color: "#9ebdff",
                    background: "rgba(79,140,255,0.08)",
                    border: "1px solid rgba(79,140,255,0.12)",
                  }}
                >
                  {calculator.tag}
                </span>
              </div>

              <h3
                style={{
                  margin: "20px 0 8px",
                  fontSize: 18,
                  letterSpacing: "-0.3px",
                }}
              >
                {calculator.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#858f9f",
                  fontSize: 13,
                  lineHeight: 1.6,
                }}
              >
                {calculator.description}
              </p>

              <div style={{ marginTop: "auto", paddingTop: 20 }}>
                <span
                  style={{
                    color: "#83aaff",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Open calculator →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* GUIDES */}
      <section
        id="guides"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <div className="container" style={{ padding: "75px 0" }}>
          <p
            style={{
              color: "#709cff",
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 8,
            }}
          >
            Helpful guides
          </p>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              margin: "0 0 28px",
              letterSpacing: "-1.5px",
            }}
          >
            Understand the numbers
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 16,
            }}
          >
            {guides.map((guide) => (
              <article
                key={guide}
                className="glass card"
                style={{ padding: 24 }}
              >
                <div
                  style={{
                    color: "#7f8da3",
                    fontSize: 12,
                  }}
                >
                  MONEY GUIDE
                </div>

                <h3
                  style={{
                    fontSize: 17,
                    lineHeight: 1.4,
                    margin: "12px 0 18px",
                  }}
                >
                  {guide}
                </h3>

                <span
                  style={{
                    color: "#83aaff",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  Read guide →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container" style={{ padding: "50px 0 35px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 30,
            paddingBottom: 35,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ maxWidth: 350 }}>
            <div
              style={{
                fontSize: 19,
                fontWeight: 850,
                marginBottom: 10,
              }}
            >
              USCalc<span style={{ color: "#7fa9ff" }}>Hub</span>
            </div>

            <p
              style={{
                color: "#737d8c",
                fontSize: 13,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Simple, useful and easy-to-understand calculators for everyday
              life in the United States.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 22,
              color: "#858f9f",
              fontSize: 13,
            }}
          >
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>

        <p
          style={{
            color: "#555e6c",
            fontSize: 11,
            marginTop: 25,
            textAlign: "center",
          }}
        >
          © 2026 USCalcHub. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
