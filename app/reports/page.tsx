export default function ReportsPage() {
  const reports = [
    {
      id: "RPT-1042",
      avenue: "Heavy Mind",
      subject: "Self-harm concern",
      status: "Under review",
      summary:
        "A user flagged a post for language suggesting emotional crisis and possible risk.",
      submittedBy: "Anonymous member",
      submittedAt: "Today • 8:14 PM",
    },
    {
      id: "RPT-1037",
      avenue: "Behind the Closed Door",
      subject: "Boundary violation",
      status: "Open",
      summary:
        "A reply was reported for crossing adult-boundary discussion standards.",
      submittedBy: "Named member",
      submittedAt: "Today • 5:42 PM",
    },
    {
      id: "RPT-1021",
      avenue: "Open Floor",
      subject: "Spam / manipulation",
      status: "Closed",
      summary:
        "A post was reviewed and removed for low-quality promotional misuse.",
      submittedBy: "Moderator review",
      submittedAt: "Yesterday • 3:19 PM",
    },
  ];

  const statusStyles: Record<string, React.CSSProperties> = {
    Open: {
      background: "rgba(255,204,102,.12)",
      color: "#ffe2a4",
      border: "1px solid rgba(255,204,102,.18)",
    },
    "Under review": {
      background: "rgba(255,138,138,.12)",
      color: "#ffd0d0",
      border: "1px solid rgba(255,138,138,.18)",
    },
    Closed: {
      background: "rgba(88,207,136,.12)",
      color: "#bff0cf",
      border: "1px solid rgba(88,207,136,.18)",
    },
  };

  return (
    <main
      style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "32px 20px 80px",
      }}
    >
      <section
        style={{
          padding: "18px 0 28px",
          borderBottom: "1px solid rgba(255,255,255,.10)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 14px",
            borderRadius: 999,
            border: "1px solid rgba(223,176,106,.25)",
            background: "rgba(223,176,106,.08)",
            color: "#f0cf9c",
            fontSize: ".88rem",
            fontWeight: 800,
            marginBottom: 18,
          }}
        >
          Reporting and moderation visibility
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2.2rem, 4vw, 3.8rem)",
            lineHeight: 1,
            letterSpacing: "-.04em",
          }}
        >
          Reports Center
        </h1>

        <p
          style={{
            marginTop: 16,
            maxWidth: 860,
            color: "#c7b7a6",
            fontSize: "1.02rem",
          }}
        >
          This page is the reporting and moderation visibility lane for
          Konfession Bucket. In production, this route will connect to the real
          reports table, user-submitted flags, moderator actions, and review
          history.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          paddingTop: 28,
        }}
      >
        {[
          { label: "Open reports", value: "12" },
          { label: "Under review", value: "5" },
          { label: "Closed today", value: "7" },
          { label: "High sensitivity", value: "3" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              padding: 18,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,.10)",
              background: "rgba(255,255,255,.03)",
            }}
          >
            <div
              style={{
                color: "#9f8f7d",
                fontSize: ".8rem",
                letterSpacing: ".12em",
                textTransform: "uppercase",
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: "1.8rem",
                fontWeight: 900,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </section>

      <section style={{ paddingTop: 26 }}>
        <div
          style={{
            display: "grid",
            gap: 16,
          }}
        >
          {reports.map((report) => (
            <article
              key={report.id}
              style={{
                padding: 20,
                borderRadius: 22,
                border: "1px solid rgba(255,255,255,.10)",
                background: "rgba(255,255,255,.03)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      flexWrap: "wrap",
                      marginBottom: 10,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        padding: "6px 10px",
                        borderRadius: 999,
                        fontSize: ".74rem",
                        fontWeight: 900,
                        background: "rgba(223,176,106,.12)",
                        color: "#ffd29f",
                        border: "1px solid rgba(223,176,106,.18)",
                      }}
                    >
                      {report.id}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        padding: "6px 10px",
                        borderRadius: 999,
                        fontSize: ".74rem",
                        fontWeight: 900,
                        background: "rgba(255,255,255,.05)",
                        color: "#c7b7a6",
                        border: "1px solid rgba(255,255,255,.10)",
                      }}
                    >
                      {report.avenue}
                    </span>
                    <span
                      style={{
                        display: "inline-flex",
                        padding: "6px 10px",
                        borderRadius: 999,
                        fontSize: ".74rem",
                        fontWeight: 900,
                        ...statusStyles[report.status],
                      }}
                    >
                      {report.status}
                    </span>
                  </div>

                  <h2
                    style={{
                      margin: 0,
                      fontSize: "1.15rem",
                    }}
                  >
                    {report.subject}
                  </h2>

                  <p
                    style={{
                      marginTop: 10,
                      marginBottom: 0,
                      color: "#c7b7a6",
                    }}
                  >
                    {report.summary}
                  </p>
                </div>

                <div
                  style={{
                    minWidth: 180,
                    color: "#9f8f7d",
                    fontSize: ".92rem",
                  }}
                >
                  <div>
                    <strong style={{ color: "#f7efe6" }}>Submitted by:</strong>{" "}
                    {report.submittedBy}
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <strong style={{ color: "#f7efe6" }}>Time:</strong>{" "}
                    {report.submittedAt}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginTop: 16,
                }}
              >
                {["View Context", "Assign Review", "Hide Content", "Close Case"].map(
                  (action) => (
                    <button
                      key={action}
                      style={{
                        minHeight: 40,
                        padding: "0 14px",
                        borderRadius: 12,
                        border: "1px solid rgba(255,255,255,.10)",
                        background: "rgba(255,255,255,.04)",
                        color: "#f7efe6",
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      {action}
                    </button>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ paddingTop: 28 }}>
        <div
          style={{
            padding: 20,
            borderRadius: 22,
            border: "1px solid rgba(223,176,106,.16)",
            background: "rgba(223,176,106,.06)",
            color: "#ecd6b2",
          }}
        >
          <strong>Production note:</strong> this route is currently a structured
          front-end page. The next live step is connecting it to real report
          records, moderation actions, user roles, and protected admin access.
        </div>
      </section>
    </main>
  );
}
